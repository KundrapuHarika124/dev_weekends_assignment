import React from 'react';

export default function ErrorMessage({ message, id }) {
  if (!message) return null;

  return (
    <p className="mt-2 text-sm font-medium text-rose-600" id={id} role="alert" aria-live="polite">
      {message}
    </p>
  );
}
