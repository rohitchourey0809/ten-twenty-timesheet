import { NextResponse } from 'next/server';

const timesheets = [
  {
    id: 1,
    employee: {
      id: 101,
      name: 'John Smith',
      email: 'john.smith@gmail.com',
    },
    project: 'Website Redesign',
    date: '2025-07-12',
    hours: '08:00',
    status: 'Approved',
  },

  {
    id: 2,
    employee: {
      id: 102,
      name: 'Sarah Williams',
      email: 'sarah@gmail.com',
    },
    project: 'Mobile Application',
    date: '2025-07-12',
    hours: '07:30',
    status: 'Pending',
  },

  {
    id: 3,
    employee: {
      id: 103,
      name: 'Michael Brown',
      email: 'michael@gmail.com',
    },
    project: 'Admin Dashboard',
    date: '2025-07-11',
    hours: '06:45',
    status: 'Rejected',
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const search = searchParams.get('search') || '';

  const status = searchParams.get('status') || '';

  const date = searchParams.get('date') || '';

  let filtered = timesheets;

  // Search filter

  if (search) {
    filtered = filtered.filter((item) =>
      item.employee.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  // Status filter

  if (status) {
    filtered = filtered.filter((item) => item.status === status);
  }

  // Date filter

  if (date) {
    filtered = filtered.filter((item) => item.date === date);
  }

  return NextResponse.json({
    success: true,

    data: filtered,

    total: filtered.length,
  });
}
