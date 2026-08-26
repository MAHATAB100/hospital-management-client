const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

        <div>
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-xl font-bold text-white">
              +
            </div>

            <span className="text-xl font-bold text-white">
              MediCare
            </span>

          </div>

          <p className="mt-4 leading-7 text-slate-400">
            Professional healthcare services
            focused on your health and wellbeing.
          </p>
        </div>


        <div>
          <h3 className="font-bold text-white">
            Quick Links
          </h3>

          <div className="mt-4 space-y-3 text-sm">
            <p>Home</p>
            <p>Doctors</p>
            <p>Services</p>
            <p>About Us</p>
          </div>
        </div>


        <div>
          <h3 className="font-bold text-white">
            Patient Care
          </h3>

          <div className="mt-4 space-y-3 text-sm">
            <p>Book Appointment</p>
            <p>Patient Portal</p>
            <p>Medical Records</p>
            <p>Billing</p>
          </div>
        </div>


        <div>
          <h3 className="font-bold text-white">
            Emergency
          </h3>

          <p className="mt-4 text-2xl font-bold text-red-400">
            +880 999
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Available 24 hours a day,
            7 days a week.
          </p>
        </div>

      </div>


      <div className="border-t border-slate-800">

        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-sm text-slate-500 lg:px-8">
          © 2026 MediCare Hospital.
          All rights reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;
