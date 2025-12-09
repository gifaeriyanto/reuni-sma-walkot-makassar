import { formatCurrency } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardsProps {
  totalRegistered: number;
  totalSchools: number;
  totalRevenue: number;
}

interface Stat {
  label: string;
  value: string;
  change: string;
  changeValue: string;
  isPositive: boolean;
}

export function StatsCards({
  totalRegistered,
  totalSchools,
  totalRevenue,
}: StatsCardsProps) {
  const stats: Stat[] = [
    {
      label: "Total Alumni Terdaftar",
      value: totalRegistered.toLocaleString("id-ID"),
      change: "+12.5%",
      changeValue: "68.8",
      isPositive: true,
    },
    {
      label: "Total SMA",
      value: totalSchools.toLocaleString("id-ID"),
      change: "+2.3%",
      changeValue: "2m:35s",
      isPositive: true,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="overflow-hidden rounded-lg bg-white shadow-sm"
        >
          <div className="p-4">
            <p className="mb-1 text-xs font-medium text-gray-500">
              {stat.label}
            </p>
            <div className="mb-2 flex items-baseline">
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <div
              className={`flex items-center text-xs font-medium ${
                stat.isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              {stat.isPositive ? (
                <TrendingUp className="mr-1 h-3 w-3" />
              ) : (
                <TrendingDown className="mr-1 h-3 w-3" />
              )}
              <span>{stat.change}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
