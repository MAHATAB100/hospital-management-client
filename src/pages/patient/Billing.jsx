import { useState } from "react";

import {
  FiCreditCard,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiEye,
  FiPrinter,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";

const billingData = [
  {
    id: "INV-2026-001",
    date: "28 August, 2026",
    doctor: "Dr. Sarah Ahmed",
    service: "Cardiology Consultation",
    amount: 1200,
    paymentStatus: "Pending",
    paymentMethod: "Not Paid",
  },

  {
    id: "INV-2026-002",
    date: "20 August, 2026",
    doctor: "Dr. Rahim Khan",
    service: "Neurology Consultation",
    amount: 1500,
    paymentStatus: "Paid",
    paymentMethod: "Card",
  },

  {
    id: "INV-2026-003",
    date: "10 August, 2026",
    doctor: "Dr. Nusrat Jahan",
    service: "Dermatology Consultation",
    amount: 1000,
    paymentStatus: "Paid",
    paymentMethod: "Mobile Banking",
  },

  {
    id: "INV-2026-004",
    date: "05 August, 2026",
    doctor: "Dr. Kamal Hossain",
    service: "General Consultation",
    amount: 800,
    paymentStatus: "Paid",
    paymentMethod: "Cash",
  },
];

const Billing = () => {
  const [bills, setBills] = useState(billingData);

  const [selectedBill, setSelectedBill] = useState(null);

  const totalAmount = bills.reduce(
    (total, bill) => total + bill.amount,
    0
  );

  const paidAmount = bills
    .filter((bill) => bill.paymentStatus === "Paid")
    .reduce(
      (total, bill) => total + bill.amount,
      0
    );

  const pendingAmount = bills
    .filter((bill) => bill.paymentStatus === "Pending")
    .reduce(
      (total, bill) => total + bill.amount,
      0
    );

  const handlePayment = (id) => {
    const confirmPayment = window.confirm(
      "Proceed with payment?"
    );

    if (!confirmPayment) {
      return;
    }

    setBills((previous) =>
      previous.map((bill) =>
        bill.id === id
          ? {
              ...bill,
              paymentStatus: "Paid",
              paymentMethod: "Online Payment",
            }
          : bill
      )
    );
  };

  return (
    <div className="mx-auto max-w-7xl">

      

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>

          <p className="text-sm font-semibold text-emerald-600">
            PATIENT PORTAL
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Billing & Payments
          </h1>

          <p className="mt-2 text-slate-500">
            View your invoices and manage healthcare payments.
          </p>

        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
          <FiCreditCard />
        </div>

      </div>


     

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

        <BillingStat
          title="Total Billing"
          amount={totalAmount}
          icon={<FiFileText />}
          bg="bg-blue-50"
          iconColor="text-blue-600"
        />

        <BillingStat
          title="Paid Amount"
          amount={paidAmount}
          icon={<FiCheckCircle />}
          bg="bg-emerald-50"
          iconColor="text-emerald-600"
        />

        <BillingStat
          title="Pending Amount"
          amount={pendingAmount}
          icon={<FiClock />}
          bg="bg-orange-50"
          iconColor="text-orange-600"
        />

      </div>


      

      {pendingAmount > 0 && (
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-orange-100 bg-orange-50 p-5 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <FiClock />
            </div>

            <div>

              <h3 className="font-bold text-orange-800">
                Pending Payment
              </h3>

              <p className="mt-1 text-sm text-orange-700">
                You have ৳{pendingAmount.toLocaleString()} in pending bills.
              </p>

            </div>

          </div>

          <button
            onClick={() => {
              const pendingBill = bills.find(
                (bill) =>
                  bill.paymentStatus === "Pending"
              );

              if (pendingBill) {
                handlePayment(pendingBill.id);
              }
            }}
            className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            Pay Now
          </button>

        </div>
      )}


      

      <div className="mt-10 rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">

        <div className="flex flex-col gap-3 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <h2 className="text-xl font-bold text-slate-800">
              Billing History
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your recent invoices and payment records.
            </p>

          </div>

          <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {bills.length} Invoices
          </span>

        </div>



        <div className="hidden overflow-x-auto md:block">

          <table className="w-full text-left">

            <thead>

              <tr className="border-b border-slate-100 bg-slate-50">

                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Invoice
                </th>

                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Service
                </th>

                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Date
                </th>

                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Amount
                </th>

                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Status
                </th>

                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Action
                </th>

              </tr>

            </thead>


            <tbody>

              {bills.map((bill) => (

                <tr
                  key={bill.id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50/70"
                >

                  <td className="px-6 py-5">

                    <p className="font-bold text-slate-700">
                      {bill.id}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {bill.doctor}
                    </p>

                  </td>


                  <td className="px-6 py-5">

                    <p className="text-sm font-semibold text-slate-700">
                      {bill.service}
                    </p>

                  </td>


                  <td className="px-6 py-5 text-sm text-slate-500">
                    {bill.date}
                  </td>


                  <td className="px-6 py-5">

                    <span className="font-bold text-slate-800">
                      |Tk{bill.amount.toLocaleString()}
                    </span>

                  </td>


                  <td className="px-6 py-5">

                    <PaymentStatus
                      status={bill.paymentStatus}
                    />

                  </td>


                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      <button
                        onClick={() =>
                          setSelectedBill(bill)
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition hover:bg-blue-100"
                        title="View Invoice"
                      >
                        <FiEye />
                      </button>


                      {bill.paymentStatus ===
                        "Pending" && (
                        <button
                          onClick={() =>
                            handlePayment(bill.id)
                          }
                          className="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700"
                        >
                          Pay
                        </button>
                      )}

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>


       

        <div className="space-y-4 p-5 md:hidden">

          {bills.map((bill) => (

            <div
              key={bill.id}
              className="rounded-xl border border-slate-100 p-4"
            >

              <div className="flex items-start justify-between gap-4">

                <div>

                  <p className="font-bold text-slate-800">
                    {bill.id}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {bill.date}
                  </p>

                </div>

                <PaymentStatus
                  status={bill.paymentStatus}
                />

              </div>


              <div className="mt-4">

                <p className="text-sm font-semibold text-slate-700">
                  {bill.service}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {bill.doctor}
                </p>

              </div>


              <div className="mt-4 flex items-center justify-between">

                <p className="text-lg font-bold text-slate-800">
                  ${bill.amount.toLocaleString()}
                </p>

                <div className="flex gap-2">

                  <button
                    onClick={() =>
                      setSelectedBill(bill)
                    }
                    className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600"
                  >
                    <FiEye />
                    View
                  </button>

                  {bill.paymentStatus ===
                    "Pending" && (
                    <button
                      onClick={() =>
                        handlePayment(bill.id)
                      }
                      className="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white"
                    >
                      Pay
                    </button>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>


      

      {selectedBill && (
        <InvoiceModal
          bill={selectedBill}
          onClose={() => setSelectedBill(null)}
          onPayment={handlePayment}
        />
      )}

    </div>
  );
};




const BillingStat = ({
  title,
  amount,
  icon,
  bg,
  iconColor,
}) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            ${amount.toLocaleString()}
          </h3>

        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${bg} ${iconColor}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
};




const PaymentStatus = ({ status }) => {
  if (status === "Paid") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
        <FiCheckCircle />
        Paid
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
      <FiClock />
      Pending
    </span>
  );
};



const InvoiceModal = ({
  bill,
  onClose,
  onPayment,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">

      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">

       
        <div className="sticky top-0 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-5">

          <div>

            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              Invoice
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-800">
              {bill.id}
            </h2>

          </div>


          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
          >
            <FiX />
          </button>

        </div>


       

        <div className="p-6">

       

          <div className="flex flex-col justify-between gap-5 border-b border-slate-200 pb-6 sm:flex-row">

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


            <div className="sm:text-right">

              <p className="text-sm text-slate-400">
                Invoice Date
              </p>

              <p className="font-semibold text-slate-700">
                {bill.date}
              </p>

            </div>

          </div>


         

          <div className="mt-6 rounded-xl bg-slate-50 p-5">

            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Patient
            </p>

            <p className="mt-1 font-bold text-slate-800">
              Mahatab Hossan
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Patient ID: PT-2026-001
            </p>

          </div>


          

          <div className="mt-6">

            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Healthcare Provider
            </p>

            <div className="mt-2 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
                Dr
              </div>

              <div>

                <p className="font-bold text-slate-800">
                  {bill.doctor}
                </p>

                <p className="text-sm text-slate-500">
                  {bill.service}
                </p>

              </div>

            </div>

          </div>


  

          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200">

            <div className="flex items-center justify-between bg-slate-50 px-5 py-4">

              <span className="font-semibold text-slate-600">
                Service
              </span>

              <span className="font-semibold text-slate-600">
                Amount
              </span>

            </div>


            <div className="flex items-center justify-between px-5 py-5">

              <span className="text-slate-700">
                {bill.service}
              </span>

              <span className="font-bold text-slate-800">
                ${bill.amount.toLocaleString()}
              </span>

            </div>


            <div className="flex items-center justify-between border-t border-slate-200 px-5 py-5">

              <span className="text-lg font-bold text-slate-800">
                Total
              </span>

              <span className="text-xl font-bold text-blue-600">
                ${bill.amount.toLocaleString()}
              </span>

            </div>

          </div>


       

          <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-100 p-4">

            <span className="font-semibold text-slate-600">
              Payment Status
            </span>

            <PaymentStatus
              status={bill.paymentStatus}
            />

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
              className="flex items-center justify-center gap-2 rounded-xl border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              <FiPrinter />
              Print
            </button>


            {bill.paymentStatus ===
              "Pending" && (
              <button
                onClick={() => {
                  onPayment(bill.id);
                  onClose();
                }}
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Pay Now
                <FiArrowUpRight />
              </button>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Billing;