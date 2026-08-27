import { Outlet } from "react-router-dom";

import DoctorSidebar from "../components/DoctorSidebar";

const DoctorDashboardLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <div className="flex">

        <DoctorSidebar />

        <main className="min-h-screen flex-1 p-6 lg:p-10">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default DoctorDashboardLayout;