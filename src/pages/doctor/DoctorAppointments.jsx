import { useMemo, useState } from "react";
import {
  FiSearch,
  FiCalendar,
  FiClock,
  FiUser,
  FiPhone,
  FiX,
  FiCheckCircle,
  FiEye,
} from "react-icons/fi";

const initialAppointments = [
  {
    id: 1,
    patient: "Mahatab Hossan",
    age: 26,
    gender: "Male",
    date: "02 September, 2026",
    time: "09:30 AM",
    type: "Follow-up",
    department: "Cardiology",
    reason: "Regular heart checkup",
    phone: "+880 1712-345678",
    status: "Confirmed",
  },
  {
    id: 2,
    patient: "Nusrat Jahan",
    age: 31,
    gender: "Female",
    date: "02 September, 2026",
    time: "10:30 AM",
    type: "New Patient",
    department: "Cardiology",
    reason: "Chest pain and shortness of breath",
    phone: "+880 1812-456789",
    status: "Pending",
  },
  {
    id: 3,
    patient: "Rahim Ahmed",
    age: 45,
    gender: "Male",
    date: "03 September, 2026",
    time: "11:30 AM",
    type: "Consultation",
    department: "Cardiology",
    reason: "Blood pressure consultation",
    phone: "+880 1912-567890",
    status: "Completed",
  },
  {
    id: 4,
    patient: "Sumaiya Akter",
    age: 28,
    gender: "Female",
    date: "04 September, 2026",
    time: "01:00 PM",
    type: "Follow-up",
    department: "Cardiology",
    reason: "Follow-up after treatment",
    phone: "+880 1612-678901",
    status: "Confirmed",
  },
  {
    id: 5,
    patient: "Karim Hasan",
    age: 52,
    gender: "Male",
    date: "05 September, 2026",
    time: "03:00 PM",
    type: "Consultation",
    department: "Cardiology",
    reason: "Irregular heartbeat",
    phone: "+880 1512-345678",
    status: "Pending",
  },
];

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState(
    initialAppointments
  );

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("All");

  const [selectedPatient, setSelectedPatient] =
    useState(null);

  const filteredAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      const matchesSearch =
        appointment.patient
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        appointment.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [appointments, search, statusFilter]);

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

    setSelectedPatient((previous) =>
      previous && previous.id === id
        ? {
            ...previous,
            status: newStatus,
          }
        : previous
    );
  };

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold text-emerald-600">
            DOCTOR PORTAL
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Appointments
          </h1>

          <p className="mt-2 text-slate-500">
            Manage and update your patient appointments.
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
          <FiCalendar />
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AppointmentStat
          label="Total"
          value={appointments.length}
          icon={<FiCalendar />}
        />

        <AppointmentStat
          label="Pending"
          value={
            appointments.filter(
              (item) => item.status === "Pending"
            ).length
          }
          icon={<FiClock />}
        />

        <AppointmentStat
          label="Confirmed"
          value={
            appointments.filter(
              (item) => item.status === "Confirmed"
            ).length
          }
          icon={<FiCheckCircle />}
        />

        <AppointmentStat
          label="Completed"
          value={
            appointments.filter(
              (item) => item.status === "Completed"
            ).length
          }
          icon={<FiCheckCircle />}
        />
      </div>

      {/* Main Card */}
      <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
        {/* Filters */}
        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search patient..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "All",
              "Pending",
              "Confirmed",
              "Completed",
            ].map((status) => (
              <button
                key={status}
                onClick={() =>
                  setStatusFilter(status)
                }
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  statusFilter === status
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr className="border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">
                  Patient
                </th>

                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">
                  Date & Time
                </th>

                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">
                  Type
                </th>

                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">
                  Status
                </th>

                <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredAppointments.map(
                (appointment) => (
                  <tr
                    key={appointment.id}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
                          {appointment.patient
                            .split(" ")
                            .map((name) => name[0])
                            .join("")
                            .slice(0, 2)}
                        </div>

                        <div>
                          <p className="font-bold text-slate-800">
                            {appointment.patient}
                          </p>

                          <p className="text-xs text-slate-500">
                            {appointment.age} years •{" "}
                            {appointment.gender}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <p className="font-semibold text-slate-700">
                        {appointment.date}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {appointment.time}
                      </p>
                    </td>

                    <td className="px-6 py-5">
                      <p className="font-semibold text-slate-700">
                        {appointment.type}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {appointment.department}
                      </p>
                    </td>

                    <td className="px-6 py-5">
                      <StatusBadge
                        status={appointment.status}
                      />
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            setSelectedPatient(
                              appointment
                            )
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition hover:bg-blue-100"
                        >
                          <FiEye />
                        </button>

                        <StatusAction
                          appointment={appointment}
                          onStatusChange={
                            handleStatusChange
                          }
                        />
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="space-y-4 p-4 lg:hidden">
          {filteredAppointments.map(
            (appointment) => (
              <div
                key={appointment.id}
                className="rounded-xl border border-slate-100 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
                      {appointment.patient
                        .split(" ")
                        .map((name) => name[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <div>
                      <p className="font-bold text-slate-800">
                        {appointment.patient}
                      </p>

                      <p className="text-xs text-slate-500">
                        {appointment.age} years •{" "}
                        {appointment.gender}
                      </p>
                    </div>
                  </div>

                  <StatusBadge
                    status={appointment.status}
                  />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4 text-sm">
                  <div>
                    <p className="text-xs text-slate-400">
                      Date
                    </p>

                    <p className="mt-1 font-semibold text-slate-700">
                      {appointment.date}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Time
                    </p>

                    <p className="mt-1 font-semibold text-slate-700">
                      {appointment.time}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() =>
                      setSelectedPatient(appointment)
                    }
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-50 py-2.5 text-sm font-semibold text-blue-600"
                  >
                    <FiEye />
                    View
                  </button>

                  <StatusAction
                    appointment={appointment}
                    onStatusChange={
                      handleStatusChange
                    }
                  />
                </div>
              </div>
            )
          )}
        </div>

        {filteredAppointments.length === 0 && (
          <div className="p-12 text-center">
            <FiCalendar className="mx-auto text-4xl text-slate-300" />

            <h3 className="mt-4 font-bold text-slate-700">
              No appointments found
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Try changing your search or filter.
            </p>
          </div>
        )}
      </div>

      {/* Patient Details Modal */}
      {selectedPatient && (
        <PatientModal
          appointment={selectedPatient}
          onClose={() => setSelectedPatient(null)}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
};


/* ===============================
   Appointment Stat
================================ */

const AppointmentStat = ({
  label,
  value,
  icon,
}) => {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {label}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
          {icon}
        </div>
      </div>
    </div>
  );
};


/* ===============================
   Status Badge
================================ */

const StatusBadge = ({ status }) => {
  const styles = {
    Pending:
      "bg-orange-50 text-orange-600",

    Confirmed:
      "bg-blue-50 text-blue-600",

    Completed:
      "bg-emerald-50 text-emerald-600",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
};


/* ===============================
   Status Action
================================ */

const StatusAction = ({
  appointment,
  onStatusChange,
}) => {
  if (appointment.status === "Pending") {
    return (
      <button
        onClick={() =>
          onStatusChange(
            appointment.id,
            "Confirmed"
          )
        }
        className="flex-1 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-emerald-700"
      >
        Confirm
      </button>
    );
  }

  if (appointment.status === "Confirmed") {
    return (
      <button
        onClick={() =>
          onStatusChange(
            appointment.id,
            "Completed"
          )
        }
        className="flex-1 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-700"
      >
        Complete
      </button>
    );
  }

  return (
    <div className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-emerald-50 px-4 py-2.5 text-xs font-semibold text-emerald-600">
      <FiCheckCircle />
      Completed
    </div>
  );
};


/* ===============================
   Patient Modal
================================ */

const PatientModal = ({
  appointment,
  onClose,
  onStatusChange,
}) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between border-b border-slate-100 bg-white p-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Patient Details
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-800">
              {appointment.patient}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-600"
          >
            <FiX />
          </button>
        </div>

        <div className="p-6">
          {/* Patient */}
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
              {appointment.patient
                .split(" ")
                .map((name) => name[0])
                .join("")
                .slice(0, 2)}
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-800">
                {appointment.patient}
              </h3>

              <p className="text-sm text-slate-500">
                {appointment.age} years •{" "}
                {appointment.gender}
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <DetailItem
              icon={<FiCalendar />}
              label="Appointment Date"
              value={appointment.date}
            />

            <DetailItem
              icon={<FiClock />}
              label="Appointment Time"
              value={appointment.time}
            />

            <DetailItem
              icon={<FiUser />}
              label="Appointment Type"
              value={appointment.type}
            />

            <DetailItem
              icon={<FiPhone />}
              label="Phone Number"
              value={appointment.phone}
            />
          </div>

          {/* Reason */}
          <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase text-slate-400">
              Reason for Visit
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-700">
              {appointment.reason}
            </p>
          </div>

          {/* Status */}
          <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-100 p-4">
            <span className="font-semibold text-slate-600">
              Current Status
            </span>

            <StatusBadge status={appointment.status} />
          </div>

          {/* Action */}
          <div className="mt-7 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              Close
            </button>

            {appointment.status !== "Completed" && (
              <StatusAction
                appointment={appointment}
                onStatusChange={onStatusChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


/* ===============================
   Detail Item
================================ */

const DetailItem = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className="rounded-xl border border-slate-100 p-4">
      <div className="flex items-center gap-2 text-blue-600">
        {icon}

        <span className="text-xs font-semibold text-slate-400">
          {label}
        </span>
      </div>

      <p className="mt-3 text-sm font-bold text-slate-700">
        {value}
      </p>
    </div>
  );
};

export default DoctorAppointments;