"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  School,
  Wallet,
  Settings,
  User,
  LucideIcon,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Registrasi", href: "/dashboard/registrations", icon: ClipboardList },
  { label: "Alumni", href: "/dashboard/alumni", icon: Users },
  { label: "SMA", href: "/dashboard/schools", icon: School },
  { label: "Keuangan", href: "/dashboard/finance", icon: Wallet },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-gray-200 bg-white">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-gray-200 px-6">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-900">Reuni</span>
          <span className="text-2xl font-bold text-blue-600">SMA</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Menu Utama
        </div>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}

        <div className="mb-2 mt-6 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Pengaturan
        </div>
        <Link
          href="/dashboard/settings"
          className="flex items-center space-x-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
        >
          <Settings className="h-5 w-5" />
          <span>Pengaturan</span>
        </Link>
      </nav>

      {/* User Info at Bottom */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <User className="h-5 w-5 text-blue-600" />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="truncate text-sm font-medium text-gray-900">Admin</p>
            <p className="truncate text-xs text-gray-500">admin@reuni.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
