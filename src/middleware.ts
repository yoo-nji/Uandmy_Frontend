import { NextResponse } from 'next/server';

// https://nextjs.org/docs/pages/building-your-application/routing/middleware
export default function () {
  return NextResponse.next();
}
