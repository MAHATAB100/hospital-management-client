import { useState } from "react";
import {
  FiFileText,
  FiCalendar,
  FiUser,
  FiPrinter,
  FiEye,
  FiX,
} from "react-icons/fi";

const prescriptionsData = [
  {
    id: 1,
    doctor: "Dr. Sarah Ahmed",
    specialization: "Cardiologist",
    date: "20 August, 2026",
    diagnosis: "High Blood Pressure",
    notes: "Take medicines regularly and maintain a low-sodium diet.",
    medicines: [
      {
        name: "Amlodipine",
        dosage: "5 mg",
        frequency: "Once daily",
        duration: "30 days",
      },
      {
        name: "Losartan",
        dosage: "50 mg",
        frequency: "Once daily",
        duration: "30 days",
      },
    ],
  },

  {
    id: 2,
    doctor: "Dr. Rahim Khan",
    specialization: "Neurologist",
    date: "12 August, 2026",
    diagnosis: "Migraine",
    notes: "Get adequate sleep and avoid prolonged screen exposure.",
    medicines: [
      {
        name: "Naproxen",
        dosage: "250 mg",
        frequency: "Twice daily",
        duration: "7 days",
      },
      {
        name: "Propranolol",
        dosage: "40 mg",
        frequency: "Once daily",
        duration: "30 days",
      },
    ],
  },

  {
    id: 3,
    doctor: "Dr. Nusrat Jahan",
    specialization: "Dermatologist",
    date: "05 August, 2026",
    diagnosis: "Skin Allergy",
    notes: "Avoid known allergens and keep the affected area clean.",
    medicines: [
      {
        name: "Cetirizine",
        dosage: "10 mg",
        frequency: "Once daily",
        duration: "10 days",
      },
      {
        name: "Hydrocortisone Cream",
        dosage: "1%",
        frequency: "Twice daily",
        duration: "7 days",
      },
    ],
  },
];

const Prescriptions = () => {
  const [prescriptions] = useState(prescriptionsData);

  const [selectedPrescription, setSelectedPrescription] =
    useState(null);

  return (
    <div className="mx-auto max-w-7xl">

      
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>
          <p className="text-sm font-semibold text-emerald-600">
            PATIENT PORTAL
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            My Prescriptions
          </h1>

          <p className="mt-2 text-slate-500">
            View your prescriptions and prescribed medicines.
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
          <FiFileText />
        </div>

      </div>


     
      <div className="mt-10 grid gap-6 lg:grid-cols-2">

        {prescriptions.map((prescription) => (
          <PrescriptionCard
            key={prescription.id}
            prescription={prescription}
            onView={() =>
              setSelectedPrescription(prescription)
            }
          />
        ))}

      </div>


     
      {prescriptions.length === 0 && (
        <div className="mt-10 rounded-2xl bg-white py-20 text-center shadow-sm ring-1 ring-slate-100">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
            <FiFileText size={28} />
          </div>

          <h3 className="mt-5 text-lg font-bold text-slate-700">
            No prescriptions found
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Your prescriptions will appear here after a doctor consultation.
          </p>

        </div>
      )}


      
      {selectedPrescription && (
        <PrescriptionModal
          prescription={selectedPrescription}
          onClose={() => setSelectedPrescription(null)}
        />
      )}

    </div>
  );
};




const PrescriptionCard = ({
  prescription,
  onView,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:shadow-md">

      {/* Card Header */}
      <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-emerald-50 p-6">

        <div className="flex items-start justify-between gap-4">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white font-bold text-blue-600 shadow-sm">
              Dr
            </div>

            <div>

              <h2 className="font-bold text-slate-800">
                {prescription.doctor}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {prescription.specialization}
              </p>

            </div>

          </div>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            Active
          </span>

        </div>


        <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">

          <FiCalendar className="text-blue-600" />

          Prescription Date:

          <span className="font-semibold text-slate-700">
            {prescription.date}
          </span>

        </div>

      </div>


      
      <div className="p-6">

        <div>

          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Diagnosis
          </p>

          <p className="mt-1 font-bold text-slate-800">
            {prescription.diagnosis}
          </p>

        </div>


       
        <div className="mt-6">

          <div className="flex items-center justify-between">

            <p className="text-sm font-bold text-slate-800">
              Medicines
            </p>

            <span className="text-xs text-slate-400">
              {prescription.medicines.length} medicines
            </span>

          </div>


          <div className="mt-3 space-y-3">

            {prescription.medicines.map(
              (medicine, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-slate-50 p-3"
                >

                  <div className="flex items-center justify-between">

                    <p className="font-semibold text-slate-700">
                      {medicine.name}
                    </p>

                    <span className="text-xs font-semibold text-blue-600">
                      {medicine.dosage}
                    </span>

                  </div>

                  <p className="mt-1 text-xs text-slate-500">
                    {medicine.frequency} •{" "}
                    {medicine.duration}
                  </p>

                </div>
              )
            )}

          </div>

        </div>


       
        <button
          onClick={onView}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 px-4 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
        >
          <FiEye />

          View Full Prescription

        </button>

      </div>

    </div>
  );
};



const PrescriptionModal = ({
  prescription,
  onClose,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">

      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">

      
        <div className="sticky top-0 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-5">

          <div>

            <h2 className="text-xl font-bold text-slate-800">
              Prescription Details
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {prescription.date}
            </p>

          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
          >
            <FiX />
          </button>

        </div>


     
        <div className="p-6">

         
          <div className="border-b border-slate-200 pb-6">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
                +
              </div>

              <div>

                <h3 className="text-xl font-bold text-slate-800">
                  MediCare Hospital
                </h3>

                <p className="text-sm text-slate-500">
                  Hospital & Healthcare
                </p>

              </div>

            </div>

          </div>


          <div className="mt-6 rounded-xl bg-slate-50 p-5">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
                Dr
              </div>

              <div>

                <p className="text-sm text-slate-400">
                  Prescribed by
                </p>

                <h3 className="font-bold text-slate-800">
                  {prescription.doctor}
                </h3>

                <p className="text-sm text-slate-500">
                  {prescription.specialization}
                </p>

              </div>

            </div>

          </div>


          <div className="mt-6">

            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Diagnosis
            </p>

            <p className="mt-2 font-bold text-slate-800">
              {prescription.diagnosis}
            </p>

          </div>


        
          <div className="mt-6">

            <h3 className="mb-3 font-bold text-slate-800">
              Prescribed Medicines
            </h3>

            <div className="overflow-hidden rounded-xl border border-slate-200">

              <div className="grid grid-cols-4 bg-slate-50 px-4 py-3 text-xs font-bold uppercase text-slate-500">

                <span>Medicine</span>
                <span>Dosage</span>
                <span>Frequency</span>
                <span>Duration</span>

              </div>


              {prescription.medicines.map(
                (medicine, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 border-t border-slate-100 px-4 py-4 text-sm"
                  >

                    <span className="font-semibold text-slate-700">
                      {medicine.name}
                    </span>

                    <span className="text-slate-600">
                      {medicine.dosage}
                    </span>

                    <span className="text-slate-600">
                      {medicine.frequency}
                    </span>

                    <span className="text-slate-600">
                      {medicine.duration}
                    </span>

                  </div>
                )
              )}

            </div>

          </div>


          
          <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50 p-5">

            <p className="text-sm font-bold text-emerald-700">
              Doctor's Notes
            </p>

            <p className="mt-2 text-sm leading-6 text-emerald-800">
              {prescription.notes}
            </p>

          </div>


      
          <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">

            <button
              onClick={onClose}
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Close
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <FiPrinter />

              Print Prescription
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Prescriptions;