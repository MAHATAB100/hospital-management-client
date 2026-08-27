import {
  FiCalendar,
  FiFileText,
  FiCreditCard,
  FiClock,
  FiArrowRight,
  FiPlus,
} from "react-icons/fi";

import { Link } from "react-router-dom";

const PatientDashboard = () => {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold text-emerald-600">
            PATIENT DASHBOARD
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Good Morning, Mahatab 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Here's what's happening with your health today.
          </p>
        </div>

        <Link
          to="/book-appointment"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-100 transition hover:bg-emerald-700"
        >
          <FiPlus />
          Book Appointment
        </Link>
      </div>

   
      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={<FiCalendar />}
          title="Appointments"
          value="3"
          text="Total appointments"
          bg="bg-blue-50"
          iconColor="text-blue-600"
        />

        <StatCard
          icon={<FiClock />}
          title="Upcoming"
          value="1"
          text="Next appointment"
          bg="bg-emerald-50"
          iconColor="text-emerald-600"
        />

        <StatCard
          icon={<FiFileText />}
          title="Prescriptions"
          value="5"
          text="Available prescriptions"
          bg="bg-purple-50"
          iconColor="text-purple-600"
        />

        <StatCard
          icon={<FiCreditCard />}
          title="Pending Bills"
          value="৳1,200"
          text="Payment required"
          bg="bg-orange-50"
          iconColor="text-orange-600"
        />
      </div>

    
      <div className="mt-10 grid gap-8 xl:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Upcoming Appointments
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your scheduled consultations
              </p>
            </div>

            <Link
              to="/dashboard/appointments"
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View All
              <FiArrowRight />
            </Link>
          </div>

          <div className="mt-6 space-y-4">
            <AppointmentItem
              doctor="Dr. Sarah Ahmed"
              specialization="Cardiologist"
              date="28 August, 2026"
              time="10:00 AM"
              status="Confirmed"
            />

            <AppointmentItem
              doctor="Dr. Rahim Khan"
              specialization="Neurologist"
              date="02 September, 2026"
              time="02:00 PM"
              status="Pending"
            />
          </div>
        </div>

    
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-lg">
          <p className="text-sm font-semibold text-blue-100">
            HEALTH SUMMARY
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Stay Healthy 💙
          </h2>

          <p className="mt-4 leading-7 text-blue-100">
            Keep track of your appointments, prescriptions and medical
            records in one place.
          </p>

          <div className="mt-8 rounded-xl bg-white/10 p-4 backdrop-blur">
            <p className="text-sm text-blue-100">
              Next Appointment
            </p>

            <p className="mt-2 font-bold">
              Dr. Sarah Ahmed
            </p>

            <p className="mt-1 text-sm text-blue-100">
              28 August • 10:00 AM
            </p>
          </div>

          <Link
            to="/dashboard/appointments"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            View Details
            <FiArrowRight />
          </Link>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold text-slate-800">
          Quick Actions
        </h2>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <QuickAction
            icon={<FiPlus />}
            title="Book Appointment"
            text="Schedule a consultation"
            path="/book-appointment"
          />

          <QuickAction
            icon={<FiCalendar />}
            title="My Appointments"
            text="View appointment history"
            path="/dashboard/appointments"
          />

          <QuickAction
            icon={<FiFileText />}
            title="Prescriptions"
            text="Check your prescriptions"
            path="/dashboard/prescriptions"
          />

          <QuickAction
            icon={<FiCreditCard />}
            title="Billing"
            text="View payment details"
            path="/dashboard/billing"
          />
        </div>
      </div>
    </div>
  );
};



const StatCard = ({
  icon,
  title,
  value,
  text,
  bg,
  iconColor,
}) => {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h3>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${bg} ${iconColor}`}
        >
          {icon}
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-400">
        {text}
      </p>
    </div>
  );
};

/* =========================
   Appointment Item
========================= */

const AppointmentItem = ({
  doctor,
  specialization,
  date,
  time,
  status,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
          Dr
        </div>

        <div>
          <h3 className="font-bold text-slate-800">
            {doctor}
          </h3>

          <p className="text-sm text-slate-500">
            {specialization}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5 text-sm text-slate-500">
        <div>
          <p className="font-semibold text-slate-700">
            {date}
          </p>

          <p>{time}</p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            status === "Confirmed"
              ? "bg-emerald-50 text-emerald-600"
              : "bg-orange-50 text-orange-600"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

/* =========================
   Quick Action
========================= */

const QuickAction = ({
  icon,
  title,
  text,
  path,
}) => {
  return (
    <Link
      to={path}
      className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-5 font-bold text-slate-800">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {text}
      </p>
    </Link>
  );
};

export default PatientDashboard;