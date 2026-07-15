'use client';

import { Search, RotateCcw } from 'lucide-react';

type Filters = {
  search: string;
  status: string;
  date: string;
};

interface FilterBarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export default function FilterBar({ filters, setFilters }: FilterBarProps) {
  const handleChange = (key: keyof Filters, value: string) => {
    setFilters((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      status: '',
      date: '',
    });
  };

  return (
    <div
      className="
        rounded-xl
        border
        border-gray-200
        bg-white
        p-5
      "
    >
      <div
        className="
          grid
          grid-cols-1
          gap-4
          md:grid-cols-4
        "
      >
        {/* Search */}

        <div>
          <label
            className="
              mb-2
              block
              text-sm
              font-medium
              text-gray-700
            "
          >
            Search Employee
          </label>

          <div className="relative">
            <Search
              size={18}
              className="
                absolute
                left-3
                top-3
                text-gray-400
              "
            />

            <input
              value={filters.search}
              onChange={(event) => handleChange('search', event.target.value)}
              placeholder="Search employee..."
              className="
                h-11
                w-full
                rounded-lg
                border
                border-gray-200
                pl-10
                pr-4
                text-sm
                outline-none
                focus:border-gray-400
              "
            />
          </div>
        </div>

        {/* Date */}

        <div>
          <label
            className="
              mb-2
              block
              text-sm
              font-medium
              text-gray-700
            "
          >
            Date
          </label>

          <input
            type="date"
            value={filters.date}
            onChange={(event) => handleChange('date', event.target.value)}
            className="
              h-11
              w-full
              rounded-lg
              border
              border-gray-200
              px-4
              text-sm
              outline-none
              focus:border-gray-400
            "
          />
        </div>

        {/* Status */}

        <div>
          <label
            className="
              mb-2
              block
              text-sm
              font-medium
              text-gray-700
            "
          >
            Status
          </label>

          <select
            value={filters.status}
            onChange={(event) => handleChange('status', event.target.value)}
            className="
              h-11
              w-full
              rounded-lg
              border
              border-gray-200
              px-4
              text-sm
              outline-none
              focus:border-gray-400
            "
          >
            <option value="">All Status</option>

            <option value="Approved">Approved</option>

            <option value="Pending">Pending</option>

            <option value="Rejected">Rejected</option>
          </select>
        </div>

        {/* Reset */}

        <div className="flex items-end">
          <button
            onClick={clearFilters}
            className="
              flex
              h-11
              items-center
              gap-2
              rounded-lg
              border
              border-gray-200
              px-5
              text-sm
              font-medium
              text-gray-700
              hover:bg-gray-50
            "
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
