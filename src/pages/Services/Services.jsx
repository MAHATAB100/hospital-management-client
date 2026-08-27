import {
  FiHeart,
  FiActivity,
  FiUser,
  FiThermometer,
  FiEye,
  FiClipboard,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiShield,
  FiPhone,
} from "react-icons/fi";

import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FiHeart />,
      title: "Cardiology",
      description:
        "Comprehensive heart care including diagnosis, prevention and advanced cardiovascular treatment.",
      features: [
        "Heart Checkup",
        "ECG & Cardiac Tests",
        "Cardiologist Consultation",
      ],
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },

    {
      id: 2,
      icon: <FiActivity />,
      title: "Neurology",
      description:
        "Expert neurological care for brain, nerve and spinal conditions with modern diagnostic support.",
      features: [
        "Neurological Tests",
        "Brain & Nerve Care",
        "Specialist Consultation",
      ],
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },

    {
      id: 3,
      icon: <FiUser />,
      title: "General Medicine",
      description:
        "Complete medical care for everyday health concerns, regular checkups and preventive healthcare.",
      features: [
        "General Checkup",
        "Health Screening",
        "Medical Consultation",
      ],
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },

    {
      id: 4,
      icon: <FiThermometer />,
      title: "Emergency Care",
      description:
        "Fast and reliable emergency medical care available 24 hours a day for urgent situations.",
      features: [
        "24/7 Emergency",
        "Immediate Treatment",
        "Critical Care",
      ],
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },

    {
      id: 5,
      icon: <FiEye />,
      title: "Ophthalmology",
      description:
        "Complete eye care services including routine examinations, vision testing and treatment.",
      features: [
        "Eye Examination",
        "Vision Testing",
        "Eye Treatment",
      ],
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },

    {
      id: 6,
      icon: <FiClipboard />,
      title: "Health Checkup",
      description:
        "Comprehensive health screening programs designed to detect potential health problems early.",
      features: [
        "Full Body Checkup",
        "Blood Tests",
        "Health Assessment",
      ],
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <div className="overflow-hidden bg-slate-50">

      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-emerald-600 px-4 py-20 sm:py-24">

        {/* Background Shapes */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-3xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">

              <FiHeart />

              Quality Healthcare

            </div>


            {/* Heading */}
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">

              Healthcare Services

              <span className="block text-blue-100">
                You Can Trust
              </span>

            </h1>


            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">

              From routine health checkups to specialized medical
              treatment, our experienced doctors and healthcare
              professionals are here to provide compassionate care.

            </p>


            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-blue-600 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
              >
                Book Appointment

                <FiArrowRight />
              </Link>


              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Explore Services
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          STATS
      ========================================= */}

      <section className="relative -mt-8 px-4">

        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">

          <StatCard
            icon={<FiShield />}
            value="100%"
            title="Patient Focused"
          />

          <StatCard
            icon={<FiClock />}
            value="24/7"
            title="Emergency Support"
          />

          <StatCard
            icon={<FiCheckCircle />}
            value="50+"
            title="Expert Doctors"
          />

        </div>

      </section>


      {/* =========================================
          SERVICES SECTION
      ========================================= */}

      <section
        id="services"
        className="px-4 py-20 sm:py-24"
      >

        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">

              Complete Healthcare Solutions

            </h2>

            <p className="mt-4 leading-7 text-slate-500">

              We provide a wide range of medical services designed
              to keep you and your family healthy.

            </p>

          </div>


          {/* Service Cards */}

          <div className="mt-14 grid min-w-0 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          WHY CHOOSE US
      ========================================= */}

      <section className="bg-white px-4 py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Left */}

          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">
              Why Choose MediCare
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">

              Healthcare Designed Around You

            </h2>

            <p className="mt-5 leading-8 text-slate-500">

              We believe healthcare should be simple, accessible
              and patient-focused. Our platform helps you connect
              with trusted doctors and manage your healthcare easily.

            </p>


            <div className="mt-7 space-y-5">

              <Feature
                title="Experienced Doctors"
                text="Get care from qualified and experienced medical professionals."
              />

              <Feature
                title="Modern Facilities"
                text="Advanced technology and comfortable healthcare facilities."
              />

              <Feature
                title="24/7 Emergency Support"
                text="Our emergency services are available whenever you need them."
              />

            </div>

          </div>


          {/* Right */}

          <div className="relative">

            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-emerald-600 p-8 text-white shadow-xl sm:p-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl backdrop-blur">
                <FiHeart />
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                Your Health Matters
              </h3>

              <p className="mt-4 leading-7 text-blue-100">

                Whether you need a routine checkup or specialized
                medical care, our healthcare team is ready to help.

              </p>


              <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600">
                    <FiPhone />
                  </div>

                  <div>

                    <p className="text-sm text-blue-100">
                      Need Emergency Help?
                    </p>

                    <p className="text-lg font-bold">
                      Available 24/7
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="px-4 py-20">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-12 text-center text-white shadow-xl sm:px-12">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-100">
            Need Medical Care?
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Take Care of Your Health Today
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">

            Schedule an appointment with one of our experienced
            doctors and take the first step towards better health.

          </p>


          <Link
            to="/book-appointment"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-600 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Book Appointment

            <FiArrowRight />

          </Link>

        </div>

      </section>

    </div>
  );
};


/* =========================================
   STAT CARD
========================================= */

const StatCard = ({
  icon,
  value,
  title,
}) => {
  return (
    <div className="flex min-w-0 items-center gap-4 rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-100 sm:p-6">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
        {icon}
      </div>

      <div className="min-w-0">

        <h3 className="text-xl font-extrabold text-slate-900">
          {value}
        </h3>

        <p className="truncate text-sm text-slate-500">
          {title}
        </p>

      </div>

    </div>
  );
};


/* =========================================
   SERVICE CARD
========================================= */

const ServiceCard = ({ service }) => {
  return (
    <div className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-7">

      {/* Icon + Number */}

      <div className="flex items-start justify-between">

        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl transition duration-300 group-hover:scale-110 ${service.iconBg} ${service.iconColor}`}
        >
          {service.icon}
        </div>

        <span className="text-4xl font-black text-slate-100">
          0{service.id}
        </span>

      </div>


      {/* Title */}

      <h3 className="mt-6 break-words text-xl font-bold text-slate-800">
        {service.title}
      </h3>


      {/* Description */}

      <p className="mt-3 break-words text-sm leading-7 text-slate-500">
        {service.description}
      </p>


      {/* Features */}

      <div className="mt-5 space-y-3">

        {service.features.map((feature) => (
          <div
            key={feature}
            className="flex min-w-0 items-start gap-2"
          >

            <FiCheckCircle
              className={`mt-0.5 shrink-0 ${service.iconColor}`}
            />

            <span className="min-w-0 break-words text-sm text-slate-600">
              {feature}
            </span>

          </div>
        ))}

      </div>


      {/* Bottom */}

      <div className="mt-auto pt-7">

        <div className="border-t border-slate-100 pt-5">

          <Link
            to="/book-appointment"
            className={`inline-flex max-w-full items-center gap-2 text-sm font-bold text-slate-600 transition hover:${service.iconColor}`}
          >

            <span className="break-words">
              Book Consultation
            </span>

            <FiArrowRight className="shrink-0 transition duration-300 group-hover:translate-x-1" />

          </Link>

        </div>

      </div>

    </div>
  );
};


/* =========================================
   FEATURE
========================================= */

const Feature = ({
  title,
  text,
}) => {
  return (
    <div className="flex gap-4">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
        <FiCheckCircle />
      </div>

      <div>

        <h3 className="font-bold text-slate-800">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {text}
        </p>

      </div>

    </div>
  );
};


export default Services;