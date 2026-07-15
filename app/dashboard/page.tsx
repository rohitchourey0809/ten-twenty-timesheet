"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import FilterBar from "@/components/dashboard/FilterBar";
import TimesheetTable from "@/components/dashboard/TimesheetTable";
import Footer from "@/components/dashboard/Footer";

export default function DashboardPage() {
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    date: "",
  });

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Navbar */}
      <Navbar />

      <main className="px-6 py-10">
        <div className="mx-auto w-full max-w-[1400px]">
          <section
            className="
              overflow-hidden
              rounded-2xl
              border
              border-gray-200
              bg-white
              shadow-sm
            "
          >
            <div className="p-8">
              {/* Header */}
              <DashboardHeader />

              {/* Filters */}
              <div className="mt-7">
                <FilterBar filters={filters} setFilters={setFilters} />
              </div>

              {/* Table */}
              <div className="mt-7">
                <TimesheetTable filters={filters} />
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </section>
        </div>
      </main>
    </div>
  );
}
