"use client";

import { useState } from "react";
import { Search, Download, Filter } from "lucide-react";

interface Registration {
  id: number;
  name: string;
  email: string;
  phone: string;
  schoolName: string;
  registeredAt: string;
  status: "confirmed" | "pending";
}

// Mock data - replace with actual API call
const mockRegistrations: Registration[] = [
  {
    id: 1,
    name: "Ahmad Fauzi",
    email: "ahmad.fauzi@example.com",
    phone: "081234567890",
    schoolName: "SMA Negeri 1 Makassar",
    registeredAt: "2024-01-15",
    status: "confirmed",
  },
  {
    id: 2,
    name: "Siti Aminah",
    email: "siti.aminah@example.com",
    phone: "082345678901",
    schoolName: "SMA Negeri 1 Makassar",
    registeredAt: "2024-01-15",
    status: "confirmed",
  },
  {
    id: 3,
    name: "Budi Santoso",
    email: "budi.santoso@example.com",
    phone: "083456789012",
    schoolName: "SMA Negeri 5 Makassar",
    registeredAt: "2024-01-14",
    status: "pending",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    email: "dewi.lestari@example.com",
    phone: "084567890123",
    schoolName: "SMA Negeri 2 Makassar",
    registeredAt: "2024-01-14",
    status: "confirmed",
  },
  {
    id: 5,
    name: "Eko Prasetyo",
    email: "eko.prasetyo@example.com",
    phone: "085678901234",
    schoolName: "SMA Negeri 1 Makassar",
    registeredAt: "2024-01-13",
    status: "confirmed",
  },
];

export default function RegistrationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [registrations] = useState<Registration[]>(mockRegistrations);

  const filteredRegistrations = registrations.filter(
    (reg) =>
      reg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.phone.includes(searchQuery) ||
      reg.schoolName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Registrasi Alumni</h1>
          <p className="mt-1 text-sm text-gray-600">
            Daftar alumni yang telah mendaftar untuk acara reuni
          </p>
        </div>

        {/* Toolbar */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari nama, email, atau telepon..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
              <Filter className="h-4 w-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-sm text-gray-600">Total Registrasi</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              {registrations.length}
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-sm text-gray-600">Dikonfirmasi</p>
            <p className="mt-1 text-2xl font-bold text-green-600">
              {registrations.filter((r) => r.status === "confirmed").length}
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-sm text-gray-600">Menunggu</p>
            <p className="mt-1 text-2xl font-bold text-yellow-600">
              {registrations.filter((r) => r.status === "pending").length}
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6">
                    Nama
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6">
                    Telepon
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6">
                    SMA
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6">
                    Tanggal Daftar
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {filteredRegistrations.length > 0 ? (
                  filteredRegistrations.map((registration) => (
                    <tr
                      key={registration.id}
                      className="transition-colors hover:bg-gray-50"
                    >
                      <td className="whitespace-nowrap px-4 py-4 sm:px-6">
                        <div className="text-sm font-medium text-gray-900">
                          {registration.name}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 sm:px-6">
                        <div className="text-sm text-gray-600">
                          {registration.email}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 sm:px-6">
                        <div className="text-sm text-gray-600">
                          {registration.phone}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 sm:px-6">
                        <div className="text-sm text-gray-600">
                          {registration.schoolName}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 sm:px-6">
                        <div className="text-sm text-gray-600">
                          {new Date(registration.registeredAt).toLocaleDateString(
                            "id-ID",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 sm:px-6">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                            registration.status === "confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {registration.status === "confirmed"
                            ? "Dikonfirmasi"
                            : "Menunggu"}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-4 py-12 text-center text-sm text-gray-500 sm:px-6"
                    >
                      Tidak ada data registrasi yang ditemukan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
