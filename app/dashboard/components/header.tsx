"use client";

import { Bell } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="flex h-[63px] items-center justify-end px-8">
        {/* Right Section */}
        <div className="flex items-center space-x-4">
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
