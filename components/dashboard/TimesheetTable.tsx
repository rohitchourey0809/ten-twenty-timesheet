'use client';

import { useState } from 'react';
import { ChevronDown, MoreHorizontal } from 'lucide-react';

type Filters = {
  search: string;
  status: string;
  date: string;
};

interface TimesheetTableProps {
  filters: Filters;
}

const timesheets = [
  {
    id: 1,
    employee: 'John Smith',
    email: 'john.smith@gmail.com',
    project: 'Website Redesign',
    date: '2025-07-12',
    hours: '08:00',
    status: 'Approved',
  },

  {
    id: 2,
    employee: 'Sarah Williams',
    email: 'sarah@gmail.com',
    project: 'Mobile Application',
    date: '2025-07-12',
    hours: '07:30',
    status: 'Pending',
  },

  {
    id: 3,
    employee: 'Michael Brown',
    email: 'michael@gmail.com',
    project: 'Admin Dashboard',
    date: '2025-07-11',
    hours: '06:45',
    status: 'Rejected',
  },

  {
    id: 4,
    employee: 'David Wilson',
    email: 'david@gmail.com',
    project: 'CRM System',
    date: '2025-07-10',
    hours: '08:30',
    status: 'Approved',
  },
];

export default function TimesheetTable({ filters }: TimesheetTableProps) {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const filteredTimesheets = timesheets.filter((item) => {
    const searchMatch = item.employee
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    const statusMatch = filters.status ? item.status === filters.status : true;

    const dateMatch = filters.date ? item.date === filters.date : true;

    return searchMatch && statusMatch && dateMatch;
  });

  return (
    <div
      className="
        overflow-hidden
        rounded-xl
        border
        border-gray-200
        bg-white
      "
    >
      {/* Header */}

      <div className="px-6 py-5">
        <h2
          className="
            text-lg
            font-semibold
            text-gray-900
          "
        >
          Timesheets
        </h2>

        <p
          className="
            mt-1
            text-sm
            text-gray-500
          "
        >
          Manage employee timesheets
        </p>
      </div>

      {filteredTimesheets.length === 0 ? (
        <div
          className="
              flex
              h-60
              items-center
              justify-center
              text-sm
              text-gray-500
            "
        >
          No timesheets found
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr
                className="
                    border-y
                    border-gray-200
                    bg-gray-50
                  "
              >
                <th className="px-6 py-4">
                  <input type="checkbox" />
                </th>

                {[
                  'Employee',
                  'Project',
                  'Date',
                  'Hours',
                  'Status',
                  'Action',
                ].map((title) => (
                  <th
                    key={title}
                    className="
                          px-6
                          py-4
                          text-left
                          text-xs
                          font-semibold
                          uppercase
                          text-gray-500
                        "
                  >
                    <div className="flex items-center gap-1">
                      {title}

                      {title !== 'Action' && <ChevronDown size={14} />}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredTimesheets.map((item) => (
                <tr
                  key={item.id}
                  className="
                        border-b
                        border-gray-100
                        hover:bg-gray-50
                      "
                >
                  <td className="px-6 py-5">
                    <input type="checkbox" />
                  </td>

                  <td className="px-6 py-5">
                    <div
                      className="
                            flex
                            items-center
                            gap-3
                          "
                    >
                      <div
                        className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-full
                              bg-gray-100
                              font-semibold
                            "
                      >
                        {item.employee.charAt(0)}
                      </div>

                      <div>
                        <p
                          className="
                                text-sm
                                font-medium
                                text-gray-900
                              "
                        >
                          {item.employee}
                        </p>

                        <p
                          className="
                                text-xs
                                text-gray-500
                              "
                        >
                          {item.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-700">
                    {item.project}
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-700">
                    {item.date}
                  </td>

                  <td className="px-6 py-5 text-sm font-medium">
                    {item.hours}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`
                            rounded-full
                            px-3
                            py-1
                            text-xs
                            font-medium

                            ${
                              item.status === 'Approved'
                                ? 'bg-green-100 text-green-700'
                                : item.status === 'Pending'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-red-100 text-red-700'
                            }
                          `}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="relative px-6 py-5">
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === item.id ? null : item.id)
                      }
                      className="
                            rounded-lg
                            p-2
                            hover:bg-gray-100
                          "
                    >
                      <MoreHorizontal size={18} />
                    </button>

                    {openMenu === item.id && (
                      <div
                        className="
                                absolute
                                right-6
                                top-12
                                z-20
                                w-36
                                rounded-lg
                                border
                                bg-white
                                py-2
                                shadow-lg
                              "
                      >
                        <button
                          className="
                                  block
                                  w-full
                                  px-4
                                  py-2
                                  text-left
                                  text-sm
                                  hover:bg-gray-50
                                "
                        >
                          View
                        </button>

                        <button
                          className="
                                  block
                                  w-full
                                  px-4
                                  py-2
                                  text-left
                                  text-sm
                                  hover:bg-gray-50
                                "
                        >
                          Edit
                        </button>

                        <button
                          className="
                                  block
                                  w-full
                                  px-4
                                  py-2
                                  text-left
                                  text-sm
                                  text-red-600
                                  hover:bg-red-50
                                "
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
