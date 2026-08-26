import { useState } from "react";

import {
  FiCalendar,
  FiClock,
  FiUser,
  FiFileText,
} from "react-icons/fi";

const doctors = [
  {
    id: "1",
    name: "Dr. Sarah Ahmed",
    specialization: "Cardiologist",
    fee: 1200,
  },
  {
    id: "2",
    name: "Dr. Rahim Khan",
    specialization: "Neurologist",
    fee: 1500,
  },
  {
    id: "3",
    name: "Dr. Nusrat Jahan",
    specialization: "Dermatologist",
    fee: 1000,
  },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const BookAppointment = () => {

  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    timeSlot: "",
    reason: "",
  });

  const [success, setSuccess] = useState(false);


  const selectedDoctor = doctors.find(
    (doctor) =>
      doctor.id === formData.doctor
  );


  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSuccess(false);
  };


  const handleSubmit = (event) => {

    event.preventDefault();

    if (
      !formData.doctor ||
      !formData.date ||
      !formData.timeSlot
    ) {
      return;
    }

    console.log(
      "Appointment:",
      formData
    );

    setSuccess(true);
  };


  return (
    <section className="min-h-screen bg-slate-50 px-4 py-12 lg:px-8">

      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-10">

          <p className="font-semibold text-emerald-600">
            PATIENT PORTAL
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Book an Appointment
          </h1>

          <p className="mt-3 text-slate-500">
            Select your preferred doctor,
            date and consultation time.
          </p>

        </div>


        <div className="grid gap-8 lg:grid-cols-3">

          
          <div className="lg:col-span-2">

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8"
            >

              {/* Success */}
              {success && (
                <div className="mb-6 rounded-xl bg-emerald-50 p-4 text-sm font-medium text-emerald-700">
                  Appointment request submitted successfully.
                </div>
              )}


        
              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Select Doctor
                </label>

                <div className="relative">

                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-11 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  >

                    <option value="">
                      Select a doctor
                    </option>

                    {doctors.map(
                      (doctor) => (
                        <option
                          key={doctor.id}
                          value={doctor.id}
                        >
                          {doctor.name} —
                          {" "}
                          {doctor.specialization}
                        </option>
                      )
                    )}

                  </select>

                </div>

              </div>


            
              <div className="mt-6">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Appointment Date
                </label>

                <div className="relative">

                  <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={
                      new Date()
                        .toISOString()
                        .split("T")[0]
                    }
                    className="w-full rounded-xl border border-slate-200 px-11 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />

                </div>

              </div>


              
              <div className="mt-6">

                <div className="mb-3 flex items-center justify-between">

                  <label className="text-sm font-semibold text-slate-700">
                    Available Time
                  </label>

                  <span className="text-xs text-slate-400">
                    Select one
                  </span>

                </div>


                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                  {timeSlots.map(
                    (slot) => {

                      const active =
                        formData.timeSlot ===
                        slot;

                      return (
                        <button
                          type="button"
                          key={slot}
                          onClick={() =>
                            setFormData(
                              (previous) => ({
                                ...previous,
                                timeSlot: slot,
                              })
                            )
                          }
                          className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                            active
                              ? "border-blue-600 bg-blue-600 text-white"
                              : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
                          }`}
                        >
                          <FiClock />
                          {slot}
                        </button>
                      );
                    }
                  )}

                </div>

              </div>


              
              <div className="mt-6">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Reason for Visit
                </label>

                <div className="relative">

                  <FiFileText className="absolute left-4 top-4 text-slate-400" />

                  <textarea
                    name="reason"
                    rows="4"
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Describe your symptoms or reason for consultation..."
                    className="w-full resize-none rounded-xl border border-slate-200 px-11 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />

                </div>

              </div>


              
              <button
                type="submit"
                className="mt-8 w-full rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white shadow-lg shadow-emerald-100 transition hover:bg-emerald-700"
              >
                Confirm Appointment
              </button>

            </form>

          </div>


          
          <div>

            <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">

              <h2 className="text-xl font-bold text-slate-800">
                Appointment Summary
              </h2>

              <div className="my-5 h-px bg-slate-100" />


              {selectedDoctor ? (

                <div>

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                      Dr
                    </div>

                    <div>

                      <h3 className="font-bold text-slate-800">
                        {selectedDoctor.name}
                      </h3>

                      <p className="text-sm text-slate-500">
                        {selectedDoctor.specialization}
                      </p>

                    </div>

                  </div>


                  <div className="mt-6 space-y-4">

                    <SummaryRow
                      label="Date"
                      value={
                        formData.date ||
                        "Not selected"
                      }
                    />

                    <SummaryRow
                      label="Time"
                      value={
                        formData.timeSlot ||
                        "Not selected"
                      }
                    />

                    <SummaryRow
                      label="Consultation Fee"
                      value={
                        `৳${selectedDoctor.fee}`
                      }
                    />

                  </div>

                </div>

              ) : (

                <div className="py-10 text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                    <FiCalendar size={24} />
                  </div>

                  <p className="mt-4 text-sm text-slate-500">
                    Select a doctor to see
                    appointment details.
                  </p>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};


const SummaryRow = ({
  label,
  value,
}) => {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">

      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-semibold text-slate-800">
        {value}
      </span>

    </div>
  );
};


export default BookAppointment;