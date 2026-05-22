import React from 'react';
import ErrorMessage from './ErrorMessage';

export default function InputField({
  label,
  name,
  placeholder,
  value,
  prefix,
  onChange,
  onKeyDown,
  error,
  inputMode,
  min,
  step
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <div className="flex overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition focus-within:border-sky-400 focus-within:ring-4 focus-within:ring-sky-100">
        {prefix ? (
          <span className="inline-flex items-center border-r border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-500">
            {prefix}
          </span>
        ) : null}
        <input
          id={name}
          name={name}
          type="text"
          inputMode={inputMode}
          min={min}
          step={step}
          pattern={inputMode === 'numeric' ? '[0-9]*' : undefined}
          className={`w-full bg-transparent px-4 py-3 text-base text-slate-900 outline-none placeholder:text-slate-400 ${prefix ? 'rounded-l-none' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={onKeyDown}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      </div>
      <ErrorMessage id={`${name}-error`} message={error} />
    </div>
  );
}
