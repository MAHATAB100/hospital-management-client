import { useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiX,
  FiCheckCircle,
  
} from "react-icons/fi";

const MyAppointments = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: "Dr. Sarah Ahmed",
      specialization: "Cardiologist",
      date: "28 August, 2026",
      time: "10:00 AM",
      location: "Cardiology Department",
      status: "Confirmed",
      type: "upcoming",
    },
    {
      id: 2,
      doctor: "Dr. Rahim Khan",
      specialization: "Neurologist",
      date: "02 September, 2026",
      time: "02:00 PM",
      location: "Neurology Department",
      status: "Pending",
      type: "upcoming",
    },
    {
      id: 3,
      doctor: "Dr. Nusrat Jahan",
      specialization: "Dermatologist",
      date: "10 August, 2026",
      time: "11:00 AM",
      location: "Dermatology Department",
      status: "Completed",
      type: "completed",
    },
    {
      id: 4,
      doctor: "Dr. Kamal Hossain",
      specialization: "General Physician",
      date: "05 August, 2026",
      time: "04:00 PM",
      location: "General Medicine",
      status: "Completed",
      type: "completed",
    },
  ]);

  const filteredAppointments = appointments.filter(
    (appointment) => appointment.type === activeTab
  );

  const handleCancel = (id) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );

    if (!confirmCancel) {
      return;
    }

    setAppointments((previous) =>
      previous.filter(
        (appointment) => appointment.id !== id
      )
    );
  };

  return (
    <div className="mx-auto max-w-7xl">

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>
          <p className="text-sm font-semibold text-emerald-600">
            PATIENT PORTAL
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            My Appointments
          </h1>

          <p className="mt-2 text-slate-500">
            View and manage all your appointments.
          </p>
        </div>

        <div className="rounded-xl bg-blue-50 px-4 py-3">
          <p className="text-sm text-blue-600">
            Total Appointments
          </p>

          <p className="text-2xl font-bold text-blue-700">
            {appointments.length}
          </p>
        </div>

      </div>


      {/* Tabs */}
      <div className="mt-10 border-b border-slate-200">

        <div className="flex gap-8">

          <button
            onClick={() => setActiveTab("upcoming")}
            className={`border-b-2 px-2 pb-4 text-sm font-semibold transition ${
              activeTab === "upcoming"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            Upcoming

            <span className="ml-2 rounded-full bg-slate-100 px-2 py-1 text-xs">
              {
                appointments.filter(
                  (appointment) =>
                    appointment.type === "upcoming"
                ).length
              }
            </span>
          </button>


          <button
            onClick={() => setActiveTab("completed")}
            className={`border-b-2 px-2 pb-4 text-sm font-semibold transition ${
              activeTab === "completed"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            Completed

            <span className="ml-2 rounded-full bg-slate-100 px-2 py-1 text-xs">
              {
                appointments.filter(
                  (appointment) =>
                    appointment.type === "completed"
                ).length
              }
            </span>
          </button>

        </div>

      </div>


      <div className="mt-8 space-y-5">

        {filteredAppointments.length > 0 ? (

          filteredAppointments.map(
            (appointment) => (
              <AppointmentCard
                key={appointment.id}
                appointment={appointment}
                onCancel={handleCancel}
              />
            )
          )

        ) : (

          <div className="rounded-2xl bg-white py-20 text-center shadow-sm ring-1 ring-slate-100">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <FiCalendar size={28} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-700">
              No appointments found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              You don't have any appointments in this section.
            </p>

          </div>

        )}

      </div>

    </div>
  );
};


const AppointmentCard = ({
  appointment,
  onCancel,
}) => {

  const {
    id,
    doctor,
    specialization,
    date,
    time,
    location,
    status,
    type,
  } = appointment;


  const statusStyle = {
    Confirmed:
      "bg-emerald-50 text-emerald-600",

    Pending:
      "bg-orange-50 text-orange-600",

    Completed:
      "bg-blue-50 text-blue-600",
  };


  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:shadow-md sm:p-6">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">


        
        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
            Dr
          </div>


          <div>

            <div className="flex flex-wrap items-center gap-3">

              <h2 className="text-lg font-bold text-slate-800">
                {doctor}
              </h2>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  statusStyle[status]
                }`}
              >
                {status}
              </span>

            </div>


            <p className="mt-1 text-sm text-slate-500">
              {specialization}
            </p>

          </div>

        </div>


       
        <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-3">

          <div className="flex items-center gap-2">

            <FiCalendar className="text-blue-500" />

            <div>
              <p className="text-xs text-slate-400">
                Date
              </p>

              <p className="font-semibold text-slate-700">
                {date}
              </p>
            </div>

          </div>


          <div className="flex items-center gap-2">

            <FiClock className="text-emerald-500" />

            <div>
              <p className="text-xs text-slate-400">
                Time
              </p>

              <p className="font-semibold text-slate-700">
                {time}
              </p>
            </div>

          </div>


          <div className="flex items-center gap-2">

            <FiMapPin className="text-red-500" />

            <div>
              <p className="text-xs text-slate-400">
                Department
              </p>

              <p className="font-semibold text-slate-700">
                {location}
              </p>
            </div>

          </div>

        </div>


      
        <div>

          {type === "upcoming" ? (

            <button
              onClick={() => onCancel(id)}
              className="flex items-center justify-center gap-2 rounded-xl border border-red-200 px-5 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            >
              <FiX />

              Cancel
            </button>

          ) : (

            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">

              <FiCheckCircle />

              Completed

            </div>

          )}

        </div>

      </div>

    </div>
  );
};


export default MyAppointments;