"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="grid place-items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="grid place-items-center h-screen">
        <p>You are not logged in. Please log in to access this page.</p>
      </div>
    );
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-gray-100 rounded-2xl flex flex-col gap-4 my-6 max-w-md w-full text-center">
        <div>
          <span className="text-lg font-semibold">Name:</span>{" "}
          <span className="font-bold">{session?.user?.name || "N/A"}</span>
        </div>
        <div>
          <span className="text-lg font-semibold">Email:</span>{" "}
          <span className="font-bold">{session?.user?.email || "N/A"}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-2 mt-3 rounded-lg transition-all duration-200"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
