import { NextResponse } from 'next/server';

import { supabase } from '@/utils/supabaseClient';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and Password are required' },
        { status: 400 },
      );
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Supabase login error:', error);
      return NextResponse.json({ error: error.message }, { status: 401 });
    }

    if (!data.user || !data.session) {
      return NextResponse.json(
        { error: 'Login successful but user data is missing' },
        { status: 500 },
      );
    }

    // 로그인 성공 응답
    // console.log(data);

    return NextResponse.redirect(new URL('/onboarding', req.url).toString());
  } catch (error) {
    console.error('Unexpected login error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred during login' },
      { status: 500 },
    );
  }
}
