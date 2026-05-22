import React from 'react';

export default function ResultsPanel({ tipAmount, grandTotal, perPerson, people, currencyFormatter }) {
  const formatCurrency = (value) => {
    const amount = Number(value);

    if (Number.isNaN(amount)) {
      return '₹0.00';
    }

    return currencyFormatter ? currencyFormatter.format(amount) : `₹${amount.toFixed(2)}`;
  };

  return (
    <aside className="flex w-full flex-col justify-center gap-5 bg-slate-950 p-6 text-white sm:p-8 md:w-1/2 md:p-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Results</p>
        <h2 className="mt-2 text-2xl font-bold">A clean split, every time.</h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
          The values below update as you type, so you can compare tips without a calculate button.
        </p>
      </div>

      <div className="space-y-3">
        <ResultRow label="Tip Amount" value={formatCurrency(tipAmount)} />
        <ResultRow label="Grand Total" value={formatCurrency(grandTotal)} />
        <ResultRow label={`Per Person (${people || 1})`} value={formatCurrency(perPerson)} />
      </div>
    </aside>
  );
}

function ResultRow({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
      <span className="text-sm font-medium text-slate-300">{label}</span>
      <span className="font-mono text-lg font-semibold text-white">{value}</span>
    </div>
  );
}
