import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
      <p className="text-sm text-gray-500">
        Showing <span className="font-medium">1-5</span> of{" "}
        <span className="font-medium">12</span> timesheets
      </p>

      <div className="flex items-center gap-2">
        <button className="flex h-9 w-9 items-center justify-center rounded-md border hover:bg-gray-100">
          <ChevronLeft size={18} />
        </button>

        <button className="flex h-9 w-9 items-center justify-center rounded-md bg-[#2F66F6] text-white">
          1
        </button>

        <button className="flex h-9 w-9 items-center justify-center rounded-md border hover:bg-gray-100">
          2
        </button>

        <button className="flex h-9 w-9 items-center justify-center rounded-md border hover:bg-gray-100">
          3
        </button>

        <button className="flex h-9 w-9 items-center justify-center rounded-md border hover:bg-gray-100">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}