import { TimesheetFilters } from '@/types/timesheet';

const API_URL = '/api/timesheets';

export async function getTimesheets(
  page: number = 1,
  filters?: TimesheetFilters,
) {
  const params = new URLSearchParams();

  params.append('page', page.toString());

  if (filters?.search) {
    params.append('search', filters.search);
  }

  if (filters?.status) {
    params.append('status', filters.status);
  }

  if (filters?.date) {
    params.append('date', filters.date);
  }

  const response = await fetch(`${API_URL}?${params.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch timesheets');
  }

  return response.json();
}
