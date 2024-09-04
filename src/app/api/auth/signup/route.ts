import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';
import { supabase } from '@/utils/supabaseClient';

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 },
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in Supabase
    const { data: supabaseUser, error: supabaseError } =
      await supabase.auth.signUp({
        email,
        password,
      });

    if (supabaseError) {
      return NextResponse.json(
        { error: supabaseError.message },
        { status: 400 },
      );
    }

    // Create user in Prisma
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        isOnboarding: true,
        onboarding: {
          create: {
            completed: false,
          },
        },
      },
      include: {
        onboarding: true,
      },
    });

    // Create an authentication record
    await prisma.authentication.create({
      data: {
        userId: user.id,
        type: 'signup',
        token: supabaseUser.session?.access_token || '',
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
      session: supabaseUser.session,
      onboarding: user.onboarding,
      message: 'Signup successful. Please complete the onboarding process.',
    };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'An error occurred during signup' },
      { status: 500 },
    );
  }
}
