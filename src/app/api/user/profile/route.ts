import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { onboarding: true },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const responseData = {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        isOnboarding: user.isOnboarding,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      onboarding: user.onboarding
        ? {
            id: user.onboarding.id,
            completed: user.onboarding.completed,
            character: user.onboarding.character,
            job: user.onboarding.job,
            purpose: user.onboarding.purpose,
            period: user.onboarding.period,
            createdAt: user.onboarding.createdAt,
            updatedAt: user.onboarding.updatedAt,
          }
        : null,
    };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching the user profile' },
      { status: 500 },
    );
  }
}
