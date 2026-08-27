const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Ahmed",
      specialty: "Cardiologist",
      experience: "10+ Years Experience",
    },
    {
      name: "Dr. Rahim Khan",
      specialty: "Neurologist",
      experience: "8+ Years Experience",
    },
    {
      name: "Dr. Nusrat Jahan",
      specialty: "Dermatologist",
      experience: "7+ Years Experience",
    },
    {
      name: "Dr. Kamal Hossain",
      specialty: "General Physician",
      experience: "12+ Years Experience",
    },
  ];

  return (
    <section className="bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="font-semibold text-emerald-600">
            OUR DOCTORS
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Meet Our Expert Doctors
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Our experienced medical professionals are dedicated to
            providing you with the best healthcare services.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
                Dr
              </div>

              <h2 className="mt-5 text-lg font-bold text-slate-800">
                {doctor.name}
              </h2>

              <p className="mt-2 font-medium text-emerald-600">
                {doctor.specialty}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {doctor.experience}
              </p>

              <button className="mt-5 w-full rounded-xl bg-blue-600 py-2.5 font-semibold text-white hover:bg-blue-700">
                View Profile
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Doctors;