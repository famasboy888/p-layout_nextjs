import { Suspense } from "react";
import CoordinatorDashboardCard from "~/features/dashboard/coordinator/components/CoordinatorDashboardCard";
import { fetchEventOfUser } from "~/features/event/actions/eventAction";

export default async function page() {
  const events = fetchEventOfUser();
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-8 mt-4 text-2xl font-bold">Recent Events</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CoordinatorDashboardCard eventData={events} />
      </Suspense>
    </div>
  );
}
