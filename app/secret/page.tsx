"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function SecretPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl font-bold mb-8">🎉 Secret Page!</h1>
      <p className="text-xl text-gray-600 mb-8">
        You're authenticated and viewing the protected content
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
      >
        Back to Home
      </a>
    </main>
  );
}

export default withAuthenticator(SecretPage);