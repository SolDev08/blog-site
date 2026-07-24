"use client";

import {useFormStatus} from "react-dom";

export default function SubmitButton() {
  const {pending} = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex-1 bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
    >
      {pending ? "Saving..." : "Save Changes"}
    </button>
  );
}
