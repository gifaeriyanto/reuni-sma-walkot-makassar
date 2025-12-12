import { formatCurrency } from "@/lib/utils";

interface StatsCardsProps {
  totalRegistered: number;
  totalSchools: number;
  totalSaldo: number;
}

interface Stat {
  label: string;
  value: string;
}

export function StatsCards({
  totalRegistered,
  totalSchools,
  totalSaldo,
}: StatsCardsProps) {
  const stats: Stat[] = [
    {
      label: "Total Alumni Terdaftar",
      value: totalRegistered.toLocaleString("id-ID"),
    },
    {
      label: "Total SMA",
      value: totalSchools.toLocaleString("id-ID"),
    },
    {
      label: "Total Saldo",
      value: formatCurrency(totalSaldo),
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="overflow-hidden rounded-lg border border-gray-200 bg-white"
        >
          <div className="p-4">
            <p className="mb-1 text-xs font-medium text-gray-500">
              {stat.label}
            </p>
            <div className="flex items-baseline">
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
