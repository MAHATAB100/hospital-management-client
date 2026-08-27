import { useState } from "react";

import {
  FiCalendar,
  FiUsers,
  FiClock,
  FiCheckCircle,
  FiArrowRight,
  FiMapPin,
  FiPhone,
  FiUser,
} from "react-icons/fi";

import { Link } from "react-router-dom";

const initialAppointments = [
  {
    id: 1,
    patient: "Mahatab Hossan",
    age: 26,
    gender: "Male",
    time: "09:30 AM",
    type: "Follow-up",
    department: "Cardiology",
    status: "Confirmed",
    phone: "+880 1712-345678",
  },

  {
    id: 2,
    patient: "Nusrat Jahan",
    age: 31,
    gender: "Female",
    time: "10:30 AM",
    type: "New Patient",
    department: "Cardiology",
    status: "Pending",
    phone: "+880 1812-456789",
  },

  {
    id: 3,
    patient: "Rahim Ahmed",
    age: 45,
    gender: "Male",
    time: "11:30 AM",
    type: "Consultation",
    department: "Cardiology",
    status: "Confirmed",
    phone: "+880 1912-567890",
  },

  {
    id: 4,
    patient: "Sumaiya Akter",
    age: 28,
    gender: "Female",
    time: "01:00 PM",
    type: "Follow-up",
    department: "Cardiology",
    status: "Completed",
    phone: "+880 1612-678901",
  },
];

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState(
    initialAppointments
  );

  const handleStatusChange = (id, newStatus) => {
    setAppointments((previous) =>
      previous.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              status: newStatus,
            }
          : appointment
      )
    );
  };

  const todayAppointments = appointments.length;

  const pendingAppointments = appointments.filter(
    (appointment) =>
      appointment.status === "Pending"
  ).length;

  const completedAppointments = appointments.filter(
    (appointment) =>
      appointment.status === "Completed"
  ).length;

  const confirmedAppointments = appointments.filter(
    (appointment) =>
      appointment.status === "Confirmed"
  ).length;

  return (
    <div className="mx-auto max-w-7xl">

      {/* =================================
          Header
      ================================= */}

      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

        <div>

          <p className="text-sm font-semibold text-emerald-600">
            DOCTOR PORTAL
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Good Morning, Dr. Sarah 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Here's your medical activity for today.
          </p>

        </div>


        {/* Doctor Profile */}

        <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-100">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
            SA
          </div>

          <div>

            <p className="font-bold text-slate-800">
              Dr. Sarah Ahmed
            </p>

            <p className="text-xs text-slate-500">
              Cardiologist
            </p>

          </div>

        </div>

      </div>


      {/* =================================
          Stats
      ================================= */}

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

        <DoctorStat
          title="Today's Appointments"
          value={todayAppointments}
          text="Scheduled for today"
          icon={<FiCalendar />}
          bg="bg-blue-50"
          iconColor="text-blue-600"
        />

        <DoctorStat
          title="Confirmed"
          value={confirmedAppointments}
          text="Confirmed appointments"
          icon={<FiCheckCircle />}
          bg="bg-emerald-50"
          iconColor="text-emerald-600"
        />

        <DoctorStat
          title="Pending"
          value={pendingAppointments}
          text="Waiting for confirmation"
          icon={<FiClock />}
          bg="bg-orange-50"
          iconColor="text-orange-600"
        />

        <DoctorStat
          title="Completed"
          value={completedAppointments}
          text="Today's consultations"
          icon={<FiUsers />}
          bg="bg-purple-50"
          iconColor="text-purple-600"
        />

      </div>


      {/* =================================
          Main Content
      ================================= */}

      <div className="mt-10 grid gap-8 xl:grid-cols-3">

        {/* Appointments */}

        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 xl:col-span-2">

          <div className="flex flex-col gap-3 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h2 className="text-xl font-bold text-slate-800">
                Today's Appointments
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Manage your patient consultations.
              </p>

            </div>


            <Link
              to="/doctor/appointments"
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View All
              <FiArrowRight />
            </Link>

          </div>


          <div className="divide-y divide-slate-100">

            {appointments.map((appointment) => (

              <DoctorAppointment
                key={appointment.id}
                appointment={appointment}
                onStatusChange={handleStatusChange}
              />

            ))}

          </div>

        </div>


        {/* Schedule Card */}

        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-lg">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm font-semibold text-blue-100">
                TODAY'S SCHEDULE
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Your Availability
              </h2>

            </div>

            <FiCalendar className="text-2xl text-blue-100" />

          </div>


          <div className="mt-8 space-y-4">

            <ScheduleItem
              time="09:00 AM - 12:00 PM"
              label="Morning Session"
            />

            <ScheduleItem
              time="12:00 PM - 01:00 PM"
              label="Lunch Break"
              muted
            />

            <ScheduleItem
              time="01:00 PM - 04:00 PM"
              label="Afternoon Session"
            />

          </div>


          <Link
            to="/doctor/schedule"
            className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Manage Schedule
            <FiArrowRight />
          </Link>

        </div>

      </div>


      {/* =================================
          Quick Actions
      ================================= */}

      <div className="mt-10">

        <h2 className="text-xl font-bold text-slate-800">
          Quick Actions
        </h2>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <DoctorAction
            icon={<FiCalendar />}
            title="Appointments"
            text="Manage appointments"
            path="/doctor/appointments"
          />

          <DoctorAction
            icon={<FiUsers />}
            title="My Patients"
            text="View patient records"
            path="/doctor/patients"
          />

          <DoctorAction
            icon={<FiClock />}
            title="Schedule"
            text="Manage availability"
            path="/doctor/schedule"
          />

          <DoctorAction
            icon={<FiUser />}
            title="Profile"
            text="Manage your profile"
            path="/doctor/profile"
          />

        </div>

      </div>

    </div>
  );
};


/* =================================
   Doctor Stat
================================= */

const DoctorStat = ({
  title,
  value,
  text,
  icon,
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


/* =================================
   Appointment
================================= */

const DoctorAppointment = ({
  appointment,
  onStatusChange,
}) => {

  const {
    id,
    patient,
    age,
    gender,
    time,
    type,
    department,
    status,
    phone,
  } = appointment;


  const statusClass = {
    Confirmed:
      "bg-blue-50 text-blue-600",

    Pending:
      "bg-orange-50 text-orange-600",

    Completed:
      "bg-emerald-50 text-emerald-600",
  };


  return (
    <div className="p-5 transition hover:bg-slate-50/70 sm:p-6">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* Patient */}

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
            {patient
              .split(" ")
              .map((name) => name[0])
              .join("")
              .slice(0, 2)}
          </div>


          <div>

            <h3 className="font-bold text-slate-800">
              {patient}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {age} years • {gender}
            </p>

          </div>

        </div>


        {/* Appointment Info */}

        <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">

          <div>

            <p className="text-xs text-slate-400">
              Time
            </p>

            <p className="mt-1 font-semibold text-slate-700">
              {time}
            </p>

          </div>


          <div>

            <p className="text-xs text-slate-400">
              Type
            </p>

            <p className="mt-1 font-semibold text-slate-700">
              {type}
            </p>

          </div>


          <div>

            <p className="text-xs text-slate-400">
              Department
            </p>

            <p className="mt-1 font-semibold text-slate-700">
              {department}
            </p>

          </div>


          <div>

            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusClass[status]}`}
            >
              {status}
            </span>

          </div>

        </div>


        {/* Actions */}

        <div className="flex flex-wrap gap-2">

          {status === "Pending" && (
            <button
              onClick={() =>
                onStatusChange(id, "Confirmed")
              }
              className="rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700"
            >
              Confirm
            </button>
          )}


          {status === "Confirmed" && (
            <button
              onClick={() =>
                onStatusChange(id, "Completed")
              }
              className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
            >
              Complete
            </button>
          )}


          {status === "Completed" && (
            <span className="flex items-center gap-1 rounded-lg bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-600">
              <FiCheckCircle />
              Done
            </span>
          )}

        </div>

      </div>


      {/* Patient Contact */}

      <div className="mt-4 flex flex-wrap gap-5 border-t border-slate-100 pt-4 text-xs text-slate-500">

        <span className="flex items-center gap-1.5">
          <FiPhone />
          {phone}
        </span>

        <span className="flex items-center gap-1.5">
          <FiMapPin />
          Cardiology Department
        </span>

      </div>

    </div>
  );
};


/* =================================
   Schedule Item
================================= */

const ScheduleItem = ({
  time,
  label,
  muted = false,
}) => {
  return (
    <div
      className={`rounded-xl p-4 ${
        muted
          ? "bg-white/5 opacity-60"
          : "bg-white/10"
      }`}
    >

      <p className="text-sm font-semibold">
        {time}
      </p>

      <p className="mt-1 text-xs text-blue-100">
        {label}
      </p>

    </div>
  );
};


/* =================================
   Doctor Action
================================= */

const DoctorAction = ({
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

export default DoctorDashboard;