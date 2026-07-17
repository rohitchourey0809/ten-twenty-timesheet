import { Bell } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#111827] text-sm font-bold text-white">
            T
          </div>

          <span className="text-lg font-semibold tracking-tight text-gray-900">
            TickTock
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <button className="text-sm font-semibold text-gray-900">
            Dashboard
          </button>

          <button className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
            Timesheets
          </button>

          <button className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
            Employees
          </button>

          <button className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
            Reports
          </button>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="relative rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100"
          >
            <Bell size={18} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-gray-900">
                Rohit Chourey
              </p>

              <p className="text-xs text-gray-500">
                Admin
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700">
              R
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}