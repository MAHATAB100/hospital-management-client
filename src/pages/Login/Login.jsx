import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">

        <div className="text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-2xl font-bold text-white">
            +
          </div>

          <h1 className="mt-5 text-2xl font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Login to access your healthcare portal.
          </p>

        </div>


        <form className="mt-8 space-y-5">

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            />
          </div>


          <div>
            <label className="mb-2 block text-sm font-semibold">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            />
          </div>


          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3.5 font-bold text-white transition hover:bg-blue-700"
          >
            Login
          </button>

        </form>


        <p className="mt-6 text-center text-sm text-slate-500">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="font-semibold text-blue-600 hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </section>
  );
};

export default Login;