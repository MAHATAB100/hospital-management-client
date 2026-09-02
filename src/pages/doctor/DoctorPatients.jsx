import { useMemo, useState } from "react";

import {
  FiSearch,
  FiUser,
  FiPhone,
  FiMail,
  FiX,
  FiFileText,
  FiPlus,
  FiCalendar,
  FiActivity,
} from "react-icons/fi";

const initialPatients = [
  {
    id: 1,
    name: "Mahatab Hossan",
    age: 26,
    gender: "Male",
    bloodGroup: "O+",
    phone: "+880 1712-345678",
    email: "mahatab@example.com",
    lastVisit: "02 September, 2026",
    condition: "Regular Heart Checkup",
    medicalHistory: [
      {
        date: "02 September, 2026",
        diagnosis: "Blood Pressure Check",
        doctorNote:
          "Blood pressure is stable. Continue regular exercise.",
      },
      {
        date: "15 August, 2026",
        diagnosis: "Chest Discomfort",
        doctorNote:
          "Patient advised for ECG and follow-up consultation.",
      },
    ],
  },

  {
    id: 2,
    name: "Nusrat Jahan",
    age: 31,
    gender: "Female",
    bloodGroup: "A+",
    phone: "+880 1812-456789",
    email: "nusrat@example.com",
    lastVisit: "28 August, 2026",
    condition: "Chest Pain",
    medicalHistory: [
      {
        date: "28 August, 2026",
        diagnosis: "Chest Pain Examination",
        doctorNote:
          "Further cardiac tests recommended.",
      },
    ],
  },

  {
    id: 3,
    name: "Rahim Ahmed",
    age: 45,
    gender: "Male",
    bloodGroup: "B+",
    phone: "+880 1912-567890",
    email: "rahim@example.com",
    lastVisit: "20 August, 2026",
    condition: "High Blood Pressure",
    medicalHistory: [
      {
        date: "20 August, 2026",
        diagnosis: "Hypertension",
        doctorNote:
          "Continue prescribed medication and reduce salt intake.",
      },
    ],
  },

  {
    id: 4,
    name: "Sumaiya Akter",
    age: 28,
    gender: "Female",
    bloodGroup: "O+",
    phone: "+880 1612-678901",
    email: "sumaiya@example.com",
    lastVisit: "12 August, 2026",
    condition: "Follow-up Consultation",
    medicalHistory: [
      {
        date: "12 August, 2026",
        diagnosis: "Recovery Follow-up",
        doctorNote:
          "Patient recovery is progressing well.",
      },
    ],
  },
];

const DoctorPatients = () => {
  const [patients, setPatients] =
    useState(initialPatients);

  const [search, setSearch] = useState("");

  const [selectedPatient, setSelectedPatient] =
    useState(null);

  const [showAddRecord, setShowAddRecord] =
    useState(false);

  const filteredPatients = useMemo(() => {
    return patients.filter((patient) =>
      patient.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [patients, search]);


  const handleAddMedicalRecord = (record) => {
    setPatients((previous) =>
      previous.map((patient) =>
        patient.id === selectedPatient.id
          ? {
              ...patient,
              lastVisit: record.date,
              condition: record.diagnosis,
              medicalHistory: [
                record,
                ...patient.medicalHistory,
              ],
            }
          : patient
      )
    );

    setSelectedPatient((previous) => ({
      ...previous,
      lastVisit: record.date,
      condition: record.diagnosis,
      medicalHistory: [
        record,
        ...previous.medicalHistory,
      ],
    }));

    setShowAddRecord(false);
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
            My Patients
          </h1>

          <p className="mt-2 text-slate-500">
            View and manage your patient medical records.
          </p>

        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
          <FiUser />
        </div>

      </div>


      {/* Search */}

      <div className="mt-8">

        <div className="relative max-w-xl">

          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search patient by name..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />

        </div>

      </div>


      {/* Patients Grid */}

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {filteredPatients.map((patient) => (

          <PatientCard
            key={patient.id}
            patient={patient}
            onView={() =>
              setSelectedPatient(patient)
            }
          />

        ))}

      </div>


      {filteredPatients.length === 0 && (

        <div className="mt-10 rounded-2xl bg-white p-12 text-center shadow-sm ring-1 ring-slate-100">

          <FiUser className="mx-auto text-5xl text-slate-300" />

          <h3 className="mt-4 text-lg font-bold text-slate-700">
            No patients found
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Try searching with a different name.
          </p>

        </div>

      )}


      {/* Patient Details Modal */}

      {selectedPatient && (

        <PatientDetailsModal
          patient={selectedPatient}
          onClose={() =>
            setSelectedPatient(null)
          }
          onAddRecord={() =>
            setShowAddRecord(true)
          }
        />

      )}


      {/* Add Medical Record Modal */}

      {showAddRecord && selectedPatient && (

        <AddMedicalRecordModal
          patient={selectedPatient}
          onClose={() =>
            setShowAddRecord(false)
          }
          onSave={handleAddMedicalRecord}
        />

      )}

    </div>
  );
};


/* ================================
   Patient Card
================================ */

const PatientCard = ({
  patient,
  onView,
}) => {

  const initials = patient.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2);


  return (
    <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg">

      {/* Top */}

      <div className="flex items-start justify-between">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
          {initials}
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
          Patient
        </span>

      </div>


      {/* Info */}

      <h3 className="mt-5 text-lg font-bold text-slate-800">
        {patient.name}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {patient.age} years • {patient.gender}
      </p>


      {/* Details */}

      <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">

        <div className="flex items-center gap-3 text-sm text-slate-600">

          <FiActivity className="text-blue-500" />

          <span>{patient.condition}</span>

        </div>


        <div className="flex items-center gap-3 text-sm text-slate-600">

          <FiCalendar className="text-blue-500" />

          <span>
            Last Visit: {patient.lastVisit}
          </span>

        </div>

      </div>


      {/* Button */}

      <button
        onClick={onView}
        className="mt-6 w-full rounded-xl bg-blue-50 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
      >
        View Medical Record
      </button>

    </div>
  );
};


/* ================================
   Patient Details Modal
================================ */

const PatientDetailsModal = ({
  patient,
  onClose,
  onAddRecord,
}) => {

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">

      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">

        {/* Header */}

        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">

              {patient.name
                .split(" ")
                .map((name) => name[0])
                .join("")
                .slice(0, 2)}

            </div>

            <div>

              <h2 className="text-xl font-bold text-slate-800">
                {patient.name}
              </h2>

              <p className="text-sm text-slate-500">
                {patient.age} years • {patient.gender}
              </p>

            </div>

          </div>


          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
          >
            <FiX />
          </button>

        </div>


        <div className="p-6">

          {/* Patient Info */}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <InfoBox
              label="Blood Group"
              value={patient.bloodGroup}
            />

            <InfoBox
              label="Phone"
              value={patient.phone}
              icon={<FiPhone />}
            />

            <InfoBox
              label="Email"
              value={patient.email}
              icon={<FiMail />}
            />

          </div>


          {/* Medical History */}

          <div className="mt-8">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <h3 className="text-lg font-bold text-slate-800">
                  Medical History
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Previous consultations and doctor notes.
                </p>

              </div>


              <button
                onClick={onAddRecord}
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >

                <FiPlus />

                Add Record

              </button>

            </div>


            <div className="mt-6 space-y-4">

              {patient.medicalHistory.map(
                (record, index) => (

                  <div
                    key={index}
                    className="rounded-xl border border-slate-100 p-5"
                  >

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                      <div>

                        <div className="flex items-center gap-2 text-blue-600">

                          <FiFileText />

                          <span className="text-sm font-bold">
                            {record.diagnosis}
                          </span>

                        </div>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {record.doctorNote}
                        </p>

                      </div>


                      <span className="whitespace-nowrap text-xs text-slate-400">
                        {record.date}
                      </span>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};


/* ================================
   Add Medical Record Modal
================================ */

const AddMedicalRecordModal = ({
  patient,
  onClose,
  onSave,
}) => {

  const [diagnosis, setDiagnosis] =
    useState("");

  const [doctorNote, setDoctorNote] =
    useState("");


  const handleSubmit = (event) => {

    event.preventDefault();

    if (!diagnosis || !doctorNote) {
      alert(
        "Please fill in diagnosis and doctor note."
      );

      return;
    }


    const today = new Date();

    const formattedDate =
      today.toLocaleDateString(
        "en-GB",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      );


    onSave({
      date: formattedDate,
      diagnosis,
      doctorNote,
    });

  };


  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">

      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Medical Record
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-800">
              Add Patient Record
            </h2>

          </div>


          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-600"
          >
            <FiX />
          </button>

        </div>


        <p className="mt-3 text-sm text-slate-500">
          Adding medical information for{" "}
          <span className="font-semibold text-slate-700">
            {patient.name}
          </span>
        </p>


        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-5"
        >

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Diagnosis
            </label>

            <input
              type="text"
              placeholder="Enter diagnosis..."
              value={diagnosis}
              onChange={(event) =>
                setDiagnosis(event.target.value)
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            />

          </div>


          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Doctor Note
            </label>

            <textarea
              rows="5"
              placeholder="Write medical notes..."
              value={doctorNote}
              onChange={(event) =>
                setDoctorNote(event.target.value)
              }
              className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            />

          </div>


          {/* Actions */}

          <div className="flex gap-3 pt-2">

            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-slate-200 py-3 font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Cancel
            </button>


            <button
              type="submit"
              className="flex-1 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Save Record
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};


/* ================================
   Info Box
================================ */

const InfoBox = ({
  label,
  value,
  icon,
}) => {

  return (
    <div className="rounded-xl border border-slate-100 p-4">

      <div className="flex items-center gap-2 text-blue-600">

        {icon}

        <span className="text-xs font-semibold text-slate-400">
          {label}
        </span>

      </div>

      <p className="mt-3 truncate text-sm font-bold text-slate-700">
        {value}
      </p>

    </div>
  );
};

export default DoctorPatients;