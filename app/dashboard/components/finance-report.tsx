import { formatCurrency } from "@/lib/utils";
import { TrendingUp, TrendingDown, Wallet } from "lucide-react";

interface Expense {
  category: string;
  amount: number;
}

interface FinanceReportProps {
  totalRevenue: number;
  expenses: Expense[];
}

export function FinanceReport({ totalRevenue, expenses }: FinanceReportProps) {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const saldo = totalRevenue - totalExpenses;

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Laporan Keuangan
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Ringkasan keuangan acara
        </p>
      </div>

      <div className="p-6 space-y-4">
        {/* Pemasukan */}
        <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-green-50 p-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Pemasukan</p>
              <p className="mt-1 text-2xl font-bold text-green-600">
                {formatCurrency(totalRevenue)}
              </p>
            </div>
          </div>
        </div>

        {/* Pengeluaran */}
        <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-red-50 p-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <TrendingDown className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Pengeluaran</p>
              <p className="mt-1 text-2xl font-bold text-red-600">
                {formatCurrency(totalExpenses)}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300"></div>

        {/* Saldo */}
        <div className="flex items-center justify-between rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Wallet className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Saldo</p>
              <p className={`mt-1 text-2xl font-bold ${
                saldo >= 0 ? "text-blue-600" : "text-red-600"
              }`}>
                {formatCurrency(saldo)}
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
              saldo >= 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}>
              {saldo >= 0 ? "Surplus" : "Defisit"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
