export type TimesheetStatus = 'Approved' | 'Pending' | 'Rejected';

export interface Employee {
  id: number;

  name: string;

  email: string;
}

export interface Timesheet {
  id: number;

  employee: Employee;

  project: string;

  date: string;

  hours: string;

  status: TimesheetStatus;
}

export interface TimesheetFilters {
  search: string;

  status: string;

  date: string;
}
