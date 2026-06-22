import { FleetSidebar } from "@/components/layout/FleetSidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function FleetLayout({ children }) {
  return (
    <div className="dark flex h-screen bg-background overflow-hidden">
      <FleetSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader title="Bonjour, Sajib" />
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
