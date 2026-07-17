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

export default function FilterBar({
  filters,
  setFilters,
}: FilterBarProps) {
  const handleChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
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
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end">
      {/* Search */}
      <div className="flex-1">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Search Employee
        </label>

        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={filters.search}
            onChange={(e) => handleChange('search', e.target.value)}
            placeholder="Search employee..."
            className="h-11 w-full rounded-lg border border-gray-300 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Date */}
      <div className="w-full lg:w-64">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Date
        </label>

        <input
          type="date"
          value={filters.date}
          onChange={(e) => handleChange('date', e.target.value)}
          className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Status */}
      <div className="w-full lg:w-64">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Status
        </label>

        <select
          value={filters.status}
          onChange={(e) => handleChange('status', e.target.value)}
          className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="">All Status</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Reset */}
      <button
        type="button"
        onClick={clearFilters}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
      >
        <RotateCcw size={16} />
        Reset
      </button>
    </div>
  );
}