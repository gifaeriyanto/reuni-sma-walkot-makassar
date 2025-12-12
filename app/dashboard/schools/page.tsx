"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Plus, School as SchoolIcon } from "lucide-react";

interface School {
  id: number;
  name: string;
  address: string;
  registeredCount: number;
  totalAlumni: number;
  contactPerson: string;
  contactPhone: string;
}

// Mock data - replace with actual API call
const mockSchools: School[] = [
  {
    id: 1,
    name: "SMA Negeri 1 Makassar",
    address: "Jl. Veteran Utara No.1, Makassar",
    registeredCount: 245,
    totalAlumni: 500,
    contactPerson: "Budi Santoso",
    contactPhone: "081234567890",
  },
  {
    id: 2,
    name: "SMA Negeri 5 Makassar",
    address: "Jl. Perintis Kemerdekaan, Makassar",
    registeredCount: 198,
    totalAlumni: 450,
    contactPerson: "Ani Wijaya",
    contactPhone: "082345678901",
  },
  {
    id: 3,
    name: "SMA Negeri 2 Makassar",
    address: "Jl. Bunga Ejaya, Makassar",
    registeredCount: 176,
    totalAlumni: 420,
    contactPerson: "Citra Dewi",
    contactPhone: "083456789012",
  },
  {
    id: 4,
    name: "SMA Negeri 8 Makassar",
    address: "Jl. AP. Pettarani, Makassar",
    registeredCount: 142,
    totalAlumni: 380,
    contactPerson: "Deni Kurniawan",
    contactPhone: "084567890123",
  },
  {
    id: 5,
    name: "SMA Negeri 3 Makassar",
    address: "Jl. Racing Centre, Makassar",
    registeredCount: 128,
    totalAlumni: 350,
    contactPerson: "Eka Putri",
    contactPhone: "085678901234",
  },
  {
    id: 6,
    name: "SMA Negeri 10 Makassar",
    address: "Jl. Baji Ateka, Makassar",
    registeredCount: 95,
    totalAlumni: 300,
    contactPerson: "Fajar Ramadhan",
    contactPhone: "086789012345",
  },
];

export default function SchoolsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [schools] = useState<School[]>(mockSchools);

  const filteredSchools = schools.filter(
    (school) =>
      school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      school.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalRegistered = schools.reduce(
    (sum, school) => sum + school.registeredCount,
    0
  );

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Daftar SMA</h1>
          <p className="mt-1 text-sm text-gray-600">
            Kelola data SMA yang terdaftar dalam acara reuni
          </p>
        </div>

        {/* Toolbar */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari nama atau alamat SMA..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={() => router.push("/dashboard/schools/add")}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Tambah SMA
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-sm text-gray-600">Total SMA</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              {schools.length}
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-sm text-gray-600">Total Alumni Terdaftar</p>
            <p className="mt-1 text-2xl font-bold text-blue-600">
              {totalRegistered}
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-sm text-gray-600">Rata-rata per SMA</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              {Math.round(totalRegistered / schools.length)}
            </p>
          </div>
        </div>

        {/* Schools Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredSchools.length > 0 ? (
            filteredSchools.map((school) => {
              const percentage = (
                (school.registeredCount / school.totalAlumni) *
                100
              ).toFixed(1);

              return (
                <div
                  key={school.id}
                  className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-md"
                >
                  <div className="border-b border-gray-200 bg-blue-50 p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                        <SchoolIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">
                          {school.name}
                        </h3>
                        <p className="mt-1 text-xs text-gray-600">
                          {school.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="space-y-3">
                      {/* Registration Progress */}
                      <div>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-gray-600">
                            Alumni Terdaftar
                          </span>
                          <span className="font-semibold text-gray-900">
                            {school.registeredCount} / {school.totalAlumni}
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                          <div
                            className="h-full rounded-full bg-blue-500"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                          {percentage}% terdaftar
                        </p>
                      </div>

                      {/* Contact Person */}
                      <div className="border-t border-gray-100 pt-3">
                        <p className="text-xs text-gray-500">
                          Contact Person
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          {school.contactPerson}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-600">
                          {school.contactPhone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full rounded-lg border border-gray-200 bg-white p-12 text-center">
              <SchoolIcon className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-4 text-sm text-gray-500">
                Tidak ada data SMA yang ditemukan
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
