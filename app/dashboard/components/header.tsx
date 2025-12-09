"use client";

import { useState } from "react";
import { Search, Mail, Bell, Calendar } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  const [currentDate] = useState(() => {
    return new Date().toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  });

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-between px-8">
        {/* Title Section */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Good Morning, <span className="font-bold">Admin</span>
          </h1>
          {subtitle && <p className="mt-0.5 text-sm text-gray-500">{subtitle}</p>}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Category Selector */}
          <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>Select Category</option>
            <option>SMA Negeri 1</option>
            <option>SMA Negeri 2</option>
            <option>SMA Negeri 3</option>
          </select>

          {/* Date Picker */}
          <div className="flex items-center space-x-2 rounded-lg border border-gray-300 bg-white px-4 py-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <input
              type="text"
              readOnly
              value={currentDate}
              className="w-24 bg-transparent text-sm text-gray-700 focus:outline-none"
            />
          </div>

          {/* Icons */}
          <button className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100">
            <Search className="h-5 w-5" />
          </button>

          <button className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100">
            <Mail className="h-5 w-5" />
          </button>

          <button className="relative rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* User Avatar */}
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gray-300">
            <img
              src="https://ui-avatars.com/api/?name=Admin&background=3b82f6&color=fff"
              alt="Admin"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
