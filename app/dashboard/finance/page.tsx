"use client";

import { useState } from "react";
import { Search, Plus, TrendingUp, TrendingDown } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface Transaction {
  id: number;
  date: string;
  title: string;
  amount: number;
  type: "income" | "expense";
}

// Mock data - replace with actual API call
const mockTransactions: Transaction[] = [
  {
    id: 1,
    date: "2024-01-15",
    title: "Pembayaran Tiket - SMA Negeri 1",
    amount: 50000000,
    type: "income",
  },
  {
    id: 2,
    date: "2024-01-15",
    title: "Pembayaran Tiket - SMA Negeri 5",
    amount: 40000000,
    type: "income",
  },
  {
    id: 3,
    date: "2024-01-14",
    title: "Sewa Venue",
    amount: 50000000,
    type: "expense",
  },
  {
    id: 4,
    date: "2024-01-14",
    title: "Pembayaran Tiket - SMA Negeri 2",
    amount: 35000000,
    type: "income",
  },
  {
    id: 5,
    date: "2024-01-13",
    title: "Catering",
    amount: 80000000,
    type: "expense",
  },
  {
    id: 6,
    date: "2024-01-13",
    title: "Pembayaran Tiket - SMA Negeri 8",
    amount: 28000000,
    type: "income",
  },
  {
    id: 7,
    date: "2024-01-12",
    title: "Entertainment",
    amount: 30000000,
    type: "expense",
  },
  {
    id: 8,
    date: "2024-01-12",
    title: "Pembayaran Tiket - SMA Negeri 3",
    amount: 25000000,
    type: "income",
  },
  {
    id: 9,
    date: "2024-01-11",
    title: "Documentation",
    amount: 15000000,
    type: "expense",
  },
  {
    id: 10,
    date: "2024-01-11",
    title: "Marketing & Promosi",
    amount: 10000000,
    type: "expense",
  },
];

export default function FinancePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [transactions] = useState<Transaction[]>(mockTransactions);

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.date.includes(searchQuery)
  );

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Keuangan</h1>
          <p className="mt-1 text-sm text-gray-600">
            Kelola pemasukan dan pengeluaran acara reuni
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Pemasukan</p>
                <p className="mt-1 text-2xl font-bold text-green-600">
                  {formatCurrency(totalIncome)}
                </p>
              </div>
              <div className="rounded-full bg-green-100 p-3">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Pengeluaran</p>
                <p className="mt-1 text-2xl font-bold text-red-600">
                  {formatCurrency(totalExpense)}
                </p>
              </div>
              <div className="rounded-full bg-red-100 p-3">
                <TrendingDown className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Saldo</p>
                <p
                  className={`mt-1 text-2xl font-bold ${
                    balance >= 0 ? "text-blue-600" : "text-red-600"
                  }`}
                >
                  {formatCurrency(balance)}
                </p>
              </div>
              <div
                className={`rounded-full ${
                  balance >= 0 ? "bg-blue-100" : "bg-red-100"
                } p-3`}
              >
                {balance >= 0 ? (
                  <TrendingUp
                    className={`h-6 w-6 ${
                      balance >= 0 ? "text-blue-600" : "text-red-600"
                    }`}
                  />
                ) : (
                  <TrendingDown className="h-6 w-6 text-red-600" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari transaksi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
              <Plus className="h-4 w-4" />
              Tambah Transaksi
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6">
                    Tanggal
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6">
                    Keterangan
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6">
                    Jumlah
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((transaction) => (
                    <tr
                      key={transaction.id}
                      className="transition-colors hover:bg-gray-50"
                    >
                      <td className="whitespace-nowrap px-4 py-4 sm:px-6">
                        <div className="text-sm text-gray-900">
                          {new Date(transaction.date).toLocaleDateString(
                            "id-ID",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-4 sm:px-6">
                        <div className="text-sm font-medium text-gray-900">
                          {transaction.title}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-right sm:px-6">
                        <div
                          className={`text-sm font-semibold ${
                            transaction.type === "income"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {transaction.type === "income" ? "+" : "-"}
                          {formatCurrency(transaction.amount)}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-4 py-12 text-center text-sm text-gray-500 sm:px-6"
                    >
                      Tidak ada data transaksi yang ditemukan
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
