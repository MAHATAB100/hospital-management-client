import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiPhone,
  FiCalendar,
  FiUserCheck,
  FiHeart,
} from "react-icons/fi";

const Home = () => {
  return (
    <div>

      {/* Hero */}
      <section className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

          <div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">

              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              Trusted Healthcare Provider

            </div>


            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">

              Quality Healthcare
              <span className="text-blue-600">
                {" "}You Can Trust
              </span>

            </h1>


            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Get access to experienced doctors,
              modern medical facilities, and
              compassionate healthcare services
              all in one place.
            </p>


            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/book-appointment"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-emerald-100 transition hover:bg-emerald-700"
              >
                Book Appointment
                <FiArrowRight />
              </Link>


              <Link
                to="/doctors"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
              >
                Find a Doctor
              </Link>

            </div>


            
            <div className="mt-10 flex items-center gap-4 rounded-2xl border border-red-100 bg-white p-4 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <FiPhone size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Emergency Hotline
                </p>

                <p className="font-bold text-slate-800">
                  +880 999
                </p>
              </div>

            </div>

          </div>


          
          <div className="relative">

            <div className="rounded-[2rem] bg-blue-600 p-5 shadow-2xl shadow-blue-100">

              <div className="flex min-h-[450px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-blue-100 to-emerald-100">

                <div className="text-center">

                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-white text-7xl font-bold text-blue-600 shadow-xl">
                    +
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-800">
                    Your Health,
                  </h3>

                  <p className="text-lg text-slate-600">
                    Our Priority
                  </p>

                </div>

              </div>

            </div>


            
            <div className="absolute -bottom-6 -left-5 rounded-2xl bg-white p-5 shadow-xl sm:left-5">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <FiUserCheck size={22} />
                </div>

                <div>
                  <p className="font-bold text-slate-800">
                    Expert Doctors
                  </p>

                  <p className="text-sm text-slate-500">
                    24/7 Healthcare
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Services */}
      <section
        id="services"
        className="bg-white py-20"
      >

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="font-semibold text-emerald-600">
              OUR SERVICES
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Comprehensive Healthcare Services
            </h2>

            <p className="mt-4 text-slate-500">
              Professional healthcare services
              designed around your needs.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <ServiceCard
              icon={<FiCalendar />}
              title="Appointments"
              text="Book appointments with qualified doctors."
            />

            <ServiceCard
              icon={<FiUserCheck />}
              title="Expert Doctors"
              text="Connect with experienced medical professionals."
            />

            <ServiceCard
              icon={<FiHeart />}
              title="Patient Care"
              text="Personalized care and medical support."
            />

            <ServiceCard
              icon={<FiPhone />}
              title="Emergency Care"
              text="Emergency assistance available 24/7."
            />

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-slate-900 py-16">

        <div className="mx-auto max-w-4xl px-4 text-center">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need to see a doctor?
          </h2>

          <p className="mt-4 text-slate-400">
            Book your appointment today and
            take the first step toward better health.
          </p>

          <Link
            to="/book-appointment"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-7 py-3.5 font-bold text-white transition hover:bg-emerald-600"
          >
            Book Appointment
            <FiArrowRight />
          </Link>

        </div>

      </section>

    </div>
  );
};


const ServiceCard = ({
  icon,
  title,
  text,
}) => {
  return (
    <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-800">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-500">
        {text}
      </p>

    </div>
  );
};

export default Home;