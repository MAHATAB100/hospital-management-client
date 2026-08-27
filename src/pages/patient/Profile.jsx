import { useState } from "react";

import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiEdit3,
  FiSave,
  FiShield,
} from "react-icons/fi";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Mahatab Hossan",
    email: "mahatab@example.com",
    phone: "+880 1712-345678",
    dateOfBirth: "15 January, 2000",
    gender: "Male",
    bloodGroup: "O+",
    address: "Dhaka, Bangladesh",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);

    alert("Profile updated successfully!");
  };

  return (
    <div className="mx-auto max-w-7xl">

      {/* =========================
          Header
      ========================== */}

      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

        <div>

          <p className="text-sm font-semibold text-emerald-600">
            PATIENT PORTAL
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            My Profile
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your personal information and account details.
          </p>

        </div>


        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700"
          >
            <FiEdit3 />

            Edit Profile
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-100 transition hover:bg-emerald-700"
          >
            <FiSave />

            Save Changes
          </button>
        )}

      </div>


      {/* =========================
          Profile Card
      ========================== */}

      <div className="mt-10 grid gap-8 lg:grid-cols-3">

        {/* Left Profile Card */}

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">

          <div className="flex flex-col items-center text-center">

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-emerald-100 text-3xl font-bold text-blue-600 ring-8 ring-slate-50">
              MH
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-800">
              {profile.name}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Patient
            </p>

            <div className="mt-4 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-600">
              Account Active
            </div>

          </div>


          {/* Patient ID */}

          <div className="mt-8 rounded-xl bg-slate-50 p-4">

            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Patient ID
            </p>

            <p className="mt-1 font-bold text-slate-700">
              PT-2026-001
            </p>

          </div>


          {/* Blood Group */}

          <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-100 p-4">

            <div>

              <p className="text-xs text-slate-400">
                Blood Group
              </p>

              <p className="mt-1 font-bold text-slate-800">
                {profile.bloodGroup}
              </p>

            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 font-bold text-red-500">
              +
            </div>

          </div>

        </div>


        {/* Right Information */}

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 lg:col-span-2">

          <div className="flex items-center gap-3 border-b border-slate-100 pb-5">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FiUser />
            </div>

            <div>

              <h2 className="font-bold text-slate-800">
                Personal Information
              </h2>

              <p className="text-sm text-slate-500">
                Your basic personal information
              </p>

            </div>

          </div>


          <div className="mt-6 grid gap-6 sm:grid-cols-2">

            <ProfileInput
              label="Full Name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              icon={<FiUser />}
              editing={isEditing}
            />


            <ProfileInput
              label="Email Address"
              name="email"
              value={profile.email}
              onChange={handleChange}
              icon={<FiMail />}
              type="email"
              editing={isEditing}
            />


            <ProfileInput
              label="Phone Number"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              icon={<FiPhone />}
              editing={isEditing}
            />


            <ProfileInput
              label="Date of Birth"
              name="dateOfBirth"
              value={profile.dateOfBirth}
              onChange={handleChange}
              icon={<FiCalendar />}
              editing={isEditing}
            />


            <ProfileInput
              label="Gender"
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              icon={<FiUser />}
              editing={isEditing}
            />


            <ProfileInput
              label="Blood Group"
              name="bloodGroup"
              value={profile.bloodGroup}
              onChange={handleChange}
              icon={<FiShield />}
              editing={isEditing}
            />

          </div>


          {/* Address */}

          <div className="mt-6">

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Address
            </label>

            <div className="relative">

              <FiMapPin className="absolute left-4 top-4 text-slate-400" />

              <textarea
                name="address"
                value={profile.address}
                onChange={handleChange}
                disabled={!isEditing}
                rows="3"
                className={`w-full rounded-xl border px-11 py-3 text-sm outline-none transition ${
                  isEditing
                    ? "border-blue-200 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                    : "border-slate-100 bg-slate-50 text-slate-600"
                }`}
              />

            </div>

          </div>

        </div>

      </div>


      {/* =========================
          Account Security
      ========================== */}

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <FiShield />
          </div>

          <div>

            <h2 className="font-bold text-slate-800">
              Account Security
            </h2>

            <p className="text-sm text-slate-500">
              Manage your account security settings.
            </p>

          </div>

        </div>


        <div className="mt-6 flex flex-col justify-between gap-5 rounded-xl border border-slate-100 p-5 sm:flex-row sm:items-center">

          <div>

            <h3 className="font-semibold text-slate-800">
              Password
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Last updated recently
            </p>

          </div>


          <button
            className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Change Password
          </button>

        </div>

      </div>

    </div>
  );
};


/* =========================================
   Profile Input
========================================= */

const ProfileInput = ({
  label,
  name,
  value,
  onChange,
  icon,
  type = "text",
  editing,
}) => {
  return (
    <div>

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <div className="relative">

        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </span>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          disabled={!editing}
          className={`w-full rounded-xl border py-3 pl-11 pr-4 text-sm outline-none transition ${
            editing
              ? "border-blue-200 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
              : "border-slate-100 bg-slate-50 text-slate-600"
          }`}
        />

      </div>

    </div>
  );
};

export default Profile;