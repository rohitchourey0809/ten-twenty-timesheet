import { Download, Plus } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div
      className="
        flex
        flex-col
        gap-4
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      {/* Left Content */}
      <div>
        <h1
          className="
            text-2xl
            font-semibold
            tracking-tight
            text-gray-900
          "
        >
          Timesheet Management
        </h1>

        <p
          className="
            mt-2
            text-sm
            text-gray-500
          "
        >
          Track, review and manage employee timesheets efficiently.
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* Export Button */}
        <button
          className="
            flex
            h-11
            items-center
            gap-2
            rounded-lg
            border
            border-gray-200
            bg-white
            px-5
            text-sm
            font-medium
            text-gray-700
            transition
            hover:bg-gray-50
          "
        >
          <Download size={16} />
          Export
        </button>

        {/* Add Button */}
        <button
          className="
            flex
            h-11
            items-center
            gap-2
            rounded-lg
            bg-black
            px-5
            text-sm
            font-medium
            text-white
            transition
            hover:bg-gray-800
          "
        >
          <Plus size={16} />
          Add Timesheet
        </button>
      </div>
    </div>
  );
}
