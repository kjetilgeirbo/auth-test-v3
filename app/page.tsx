"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl font-bold mb-8">Welcome</h1>
      <p className="text-xl text-gray-600 mb-8">
        This is a public page that anyone can see
      </p>
      
      <Authenticator>
        {({ signOut, user }) => (
          <div className="text-center">
            <p className="mb-4">Hello, {user?.username}!</p>
            <div className="space-y-4">
              <a
                href="/secret"
                className="block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Go to Secret Page 🔒
              </a>
              <button
                onClick={signOut}
                className="block w-full px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </Authenticator>
    </main>
  );
}