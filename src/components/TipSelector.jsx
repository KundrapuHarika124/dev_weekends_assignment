import React from 'react';
import ErrorMessage from './ErrorMessage';

export default function TipSelector({
  label,
  tips,
  selected,
  onSelect,
  onCustomChange,
  customValue,
  error
}) {
  const customTipVisible = customValue !== '' && !tips.includes(Number(customValue));

  return (
    <div>
      <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
      <div className="flex flex-wrap gap-2">
        {tips.map((tip) => (
          <button
            key={tip}
            type="button"
            className={`rounded-xl border px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-sky-100 ${String(tip) === selected ? 'border-sky-500 bg-sky-500 text-white shadow-lg shadow-sky-500/20' : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-sky-200 hover:bg-sky-50'}`}
            onClick={() => onSelect(String(tip))}
            aria-pressed={String(tip) === selected}
          >
            {tip}%
          </button>
        ))}
        <input
          type="text"
          inputMode="numeric"
          maxLength={3}
          value={customTipVisible ? customValue : ''}
          onChange={(event) => onCustomChange(event.target.value)}
          onKeyDown={(event) => {
            if (['e', 'E', '+', '-', '.'].includes(event.key)) {
              event.preventDefault();
            }
          }}
          placeholder="Custom"
          className="w-24 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
          aria-label="Custom tip percentage"
        />
      </div>
      <ErrorMessage id="tip-error" message={error} />
    </div>
  );
}
