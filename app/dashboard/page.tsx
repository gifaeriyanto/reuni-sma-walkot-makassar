import { StatsCards } from "./components/stats-cards";
import { SchoolLeaderboard } from "./components/school-leaderboard";
import { FinanceReport } from "./components/finance-report";

// Mock data - replace with actual API calls
async function getDashboardData() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    totalRegistered: 1247,
    totalSchools: 12,
    totalRevenue: 249400000,
    leaderboard: [
      { id: 1, schoolName: "SMA Negeri 1 Makassar", registeredCount: 245 },
      { id: 2, schoolName: "SMA Negeri 5 Makassar", registeredCount: 198 },
      { id: 3, schoolName: "SMA Negeri 2 Makassar", registeredCount: 176 },
      { id: 4, schoolName: "SMA Negeri 8 Makassar", registeredCount: 142 },
      { id: 5, schoolName: "SMA Negeri 3 Makassar", registeredCount: 128 },
      { id: 6, schoolName: "SMA Negeri 10 Makassar", registeredCount: 95 },
      { id: 7, schoolName: "SMA Negeri 4 Makassar", registeredCount: 87 },
      { id: 8, schoolName: "SMA Negeri 6 Makassar", registeredCount: 72 },
      { id: 9, schoolName: "SMA Negeri 12 Makassar", registeredCount: 54 },
      { id: 10, schoolName: "SMA Negeri 7 Makassar", registeredCount: 50 },
    ],
    expenses: [
      { category: "Venue", amount: 50000000 },
      { category: "Catering", amount: 80000000 },
      { category: "Entertainment", amount: 30000000 },
      { category: "Documentation", amount: 15000000 },
      { category: "Marketing", amount: 10000000 },
      { category: "Miscellaneous", amount: 8000000 },
    ],
  };
}

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <div className="space-y-6 p-6">
      {/* Stats Cards */}
      <StatsCards
        totalRegistered={data.totalRegistered}
        totalSchools={data.totalSchools}
        totalRevenue={data.totalRevenue}
      />

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Leaderboard */}
        <SchoolLeaderboard leaderboard={data.leaderboard} />

        {/* Finance Report */}
        <FinanceReport
          totalRevenue={data.totalRevenue}
          expenses={data.expenses}
        />
      </div>
    </div>
  );
}
