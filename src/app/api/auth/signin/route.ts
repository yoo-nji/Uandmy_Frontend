import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';
import { supabase } from '@/utils/supabaseClient';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Find user by email
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

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 },
      );
    }

    // Create a session using Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: password,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Create an authentication record
    await prisma.authentication.create({
      data: {
        userId: user.id,
        type: 'session',
        token: data.session?.access_token || '',
      },
    });

    // Prepare the response
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
