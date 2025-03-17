"use client";
import React, { useState } from "react";

function ToggleBar() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center">
      <span className="mr-2 text-sm font-medium text-gray-900"></span>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`${
          enabled ? "bg-indigo-600" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </button>
    </div>
  );
}

export default ToggleBar;
