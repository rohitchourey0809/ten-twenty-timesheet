import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="h-16 border-b border-gray-200 bg-white">
      <div
        className="
          mx-auto
          flex
          h-full
          max-w-[1400px]
          items-center
          justify-between
          px-6
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              bg-black
              text-sm
              font-bold
              text-white
            "
          >
            T
          </div>

          <span
            className="
              text-lg
              font-semibold
              text-gray-900
            "
          >
            TickTock
          </span>
        </div>

        {/* Navigation */}
        <div
          className="
            hidden
            items-center
            gap-8
            md:flex
          "
        >
          <button
            className="
              text-sm
              font-medium
              text-gray-900
            "
          >
            Dashboard
          </button>

          <button
            className="
              text-sm
              text-gray-500
              hover:text-gray-900
            "
          >
            Timesheets
          </button>

          <button
            className="
              text-sm
              text-gray-500
              hover:text-gray-900
            "
          >
            Employees
          </button>

          <button
            className="
              text-sm
              text-gray-500
              hover:text-gray-900
            "
          >
            Reports
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          {/* Notification */}
          <button
            className="
              relative
              rounded-lg
              p-2
              text-gray-500
              hover:bg-gray-100
            "
          >
            <Bell size={20} />

            <span
              className="
                absolute
                right-2
                top-2
                h-2
                w-2
                rounded-full
                bg-red-500
              "
            />
          </button>

          {/* User */}
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p
                className="
                  text-sm
                  font-medium
                  text-gray-900
                "
              >
                Rohit Chourey
              </p>

              <p
                className="
                  text-xs
                  text-gray-500
                "
              >
                Admin
              </p>
            </div>

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-gray-100
                text-sm
                font-semibold
                text-gray-700
              "
            >
              R
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
