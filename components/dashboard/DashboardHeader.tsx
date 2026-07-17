import { Download, Plus } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <header className="flex flex-col gap-6 border-b border-gray-200 pb-6 lg:flex-row lg:items-start lg:justify-between">
      {/* Left Content */}
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
          Timesheet Management
        </h1>

        <p className="mt-2 text-base leading-7 text-gray-600">
          Track, review and manage employee timesheets efficiently.
        </p>
      </div>

      {/* Actions */}
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <button
          type="button"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-5 text-sm font-medium text-gray-700 shadow-sm transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <Download size={18} />
          <span>Export</span>
        </button>

        <button
          type="button"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-black px-5 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
        >
          <Plus size={18} />
          <span>Add Timesheet</span>
        </button>
      </div>
    </header>
  );
}