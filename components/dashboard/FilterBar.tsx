import { Search, RotateCcw } from "lucide-react";

interface FilterProps {
  filters: {
    search: string;
    status: string;
    date: string;
  };

  setFilters: React.Dispatch<
    React.SetStateAction<{
      search: string;
      status: string;
      date: string;
    }>
  >;
}

export default function FilterBar({ filters, setFilters }: FilterProps) {
  const updateFilter = (key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      status: "",
      date: "",
    });
  };

  return (
    <div
      className="
        rounded-xl
        border
        border-gray-200
        bg-gray-50
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
                top-3.5
                text-gray-400
              "
            />

            <input
              value={filters.search}
              onChange={(e) => updateFilter("search", e.target.value)}
              placeholder="Search employee..."
              className="
                h-11
                w-full
                rounded-lg
                border
                border-gray-200
                bg-white
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
            Date Range
          </label>

          <input
            type="date"
            value={filters.date}
            onChange={(e) => updateFilter("date", e.target.value)}
            className="
              h-11
              w-full
              rounded-lg
              border
              border-gray-200
              bg-white
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
            onChange={(e) => updateFilter("status", e.target.value)}
            className="
              h-11
              w-full
              rounded-lg
              border
              border-gray-200
              bg-white
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

        {/* Actions */}

        <div
          className="
            flex
            items-end
            gap-3
          "
        >
          <button
            onClick={resetFilters}
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
              hover:bg-gray-50
            "
          >
            <RotateCcw size={15} />
            Reset
          </button>

          <button
            className="
              h-11
              rounded-lg
              bg-black
              px-5
              text-sm
              font-medium
              text-white
              hover:bg-gray-800
            "
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
