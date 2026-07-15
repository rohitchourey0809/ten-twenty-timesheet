import { NextResponse } from 'next/server';
import { users } from '@/mocks/users';

export async function POST(req: Request) {
  const body = await req.json();

  const user = users.find(
    (u) => u.email === body.email && u.password === body.password,
  );

  if (!user) {
    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 },
    );
  }

  return NextResponse.json({
    message: 'Login successful',
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
}
