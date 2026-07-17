'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination() {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-6 py-4">
      {/* Left */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Rows per page</span>

        <select className="h-9 rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none focus:border-blue-500">
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <span className="text-sm text-gray-500">
          1–5 of <span className="font-medium text-gray-900">12</span>
        </span>

        <div className="flex items-center gap-1">
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-500 transition hover:bg-gray-100">
            <ChevronLeft size={16} />
          </button>

          <button className="flex h-8 w-8 items-center justify-center rounded-md bg-[#2F66F6] text-sm font-medium text-white">
            1
          </button>

          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-sm text-gray-700 transition hover:bg-gray-100">
            2
          </button>

          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-sm text-gray-700 transition hover:bg-gray-100">
            3
          </button>

          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-500 transition hover:bg-gray-100">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}