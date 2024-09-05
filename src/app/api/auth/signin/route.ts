import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Find user by email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  // Compare passwords
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  // On successful login, you might want to create a session or JWT token here

  return NextResponse.json({ user });
}
