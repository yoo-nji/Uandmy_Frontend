import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';
import { supabase } from '@/utils/supabaseClient';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // 이메일로 유저 찾기
    const user = await prisma.user.findUnique({
      where: { email },
      include: { onboarding: true },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 },
      );
    }

    // 비밀번호 비교
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 },
      );
    }

    // subabase에 로그인
    const { data, error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: password,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    await prisma.authentication.create({
      data: {
        userId: user.id,
        type: 'session',
        token: data.session?.access_token || '',
      },
    });

    const responseData = {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        isOnboarding: user.isOnboarding,
      },
      session: data.session,
      onboarding: user.onboarding,
    };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'An error occurred during login' },
      { status: 500 },
    );
  }
}
