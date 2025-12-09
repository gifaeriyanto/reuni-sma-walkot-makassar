interface LeaderboardItem {
  id: number;
  schoolName: string;
  registeredCount: number;
}

interface SchoolLeaderboardProps {
  leaderboard: LeaderboardItem[];
}

export function SchoolLeaderboard({ leaderboard }: SchoolLeaderboardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Leaderboard SMA
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Ranking berdasarkan jumlah alumni terdaftar
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Rank
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Nama SMA
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Jumlah Alumni
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Persentase
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {leaderboard.map((item, index) => {
              const rank = index + 1;
              const totalRegistered = leaderboard.reduce(
                (sum, school) => sum + school.registeredCount,
                0
              );
              const percentage = (
                (item.registeredCount / totalRegistered) *
                100
              ).toFixed(1);

              const rankColor =
                rank === 1
                  ? "text-yellow-600"
                  : rank === 2
                    ? "text-gray-400"
                    : rank === 3
                      ? "text-orange-600"
                      : "text-gray-600";

              const medal =
                rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : "";

              return (
                <tr
                  key={item.id}
                  className="transition-colors hover:bg-gray-50"
                >
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <span className={`font-bold ${rankColor}`}>
                      {medal} #{rank}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {item.schoolName}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-900">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                      {item.registeredCount.toLocaleString("id-ID")}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-600">
                    <div className="flex items-center justify-end space-x-2">
                      <div className="h-2 w-20 overflow-hidden rounded-full bg-gray-200">
                        <div
                          className="h-full rounded-full bg-blue-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="font-medium">{percentage}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
