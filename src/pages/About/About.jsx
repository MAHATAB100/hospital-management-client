import { FiCheckCircle, FiHeart, FiUsers, FiAward } from "react-icons/fi";

const About = () => {
  return (
    <section className="bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">
          <p className="font-semibold text-emerald-600">
            ABOUT MEDICARE
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Caring For Your Health
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            MediCare is a modern healthcare platform designed to
            make quality medical care simple and accessible.
          </p>
        </div>

        {/* About Content */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">

          <div className="flex min-h-[350px] items-center justify-center rounded-3xl bg-blue-600 p-10 text-center text-white">
            <div>
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-5xl">
                +
              </div>

              <h2 className="mt-6 text-3xl font-bold">
                MediCare
              </h2>

              <p className="mt-3 text-blue-100">
                Hospital & Healthcare
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-emerald-600">
              WHO WE ARE
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Your Health Is Our Priority
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              MediCare provides patients with easy access to
              doctors, appointments, prescriptions and healthcare
              information in one convenient platform.
            </p>

            <div className="mt-6 space-y-4">

              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-emerald-600" />
                <span className="text-slate-700">
                  Experienced medical professionals
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-emerald-600" />
                <span className="text-slate-700">
                  Modern healthcare facilities
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-emerald-600" />
                <span className="text-slate-700">
                  Patient-focused healthcare
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-emerald-600" />
                <span className="text-slate-700">
                  24/7 emergency support
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-5 sm:grid-cols-3">

          <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
            <FiHeart className="mx-auto text-3xl text-red-500" />
            <h3 className="mt-3 text-3xl font-bold text-slate-900">
              10+
            </h3>
            <p className="mt-1 text-slate-500">
              Years of Service
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
            <FiUsers className="mx-auto text-3xl text-blue-600" />
            <h3 className="mt-3 text-3xl font-bold text-slate-900">
              50+
            </h3>
            <p className="mt-1 text-slate-500">
              Expert Doctors
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
            <FiAward className="mx-auto text-3xl text-emerald-600" />
            <h3 className="mt-3 text-3xl font-bold text-slate-900">
              10K+
            </h3>
            <p className="mt-1 text-slate-500">
              Happy Patients
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;