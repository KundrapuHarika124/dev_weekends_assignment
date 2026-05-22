import React, { useState } from 'react';
import InputField from './components/InputField';
import TipSelector from './components/TipSelector';
import ResultsPanel from './components/ResultsPanel';

export default function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [people, setPeople] = useState('');

  const [billError, setBillError] = useState('');
  const [tipError, setTipError] = useState('');
  const [peopleError, setPeopleError] = useState('');
  const currencyFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  function handleBill(value) {
    const clean = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    setBill(clean);

    if (!clean) setBillError('Bill is required');
    else if (Number(clean) <= 0) setBillError('Bill must be greater than 0');
    else setBillError('');
  }

  function handleTip(value) {
    const clean = value.replace(/[^0-9]/g, '');
    setTip(clean);

    if (clean === '') setTipError('Tip percentage required');
    else if (Number(clean) < 0 || Number(clean) > 100) setTipError('Tip must be between 0 and 100');
    else setTipError('');
  }

  function handlePeople(value) {
    const clean = value.replace(/[^0-9]/g, '');
    setPeople(clean);

    if (!clean) setPeopleError('Number required');
    else if (Number(clean) < 1) setPeopleError('At least 1 person required');
    else setPeopleError('');
  }

  function preventInvalidKey(event, allowDot = false) {
    if (['e', 'E', '+', '-'].includes(event.key) || (!allowDot && event.key === '.')) {
      event.preventDefault();
    }
  }

  function selectTip(value) {
    setTip(value);
    setTipError('');
  }

  const isValid = bill && tip !== '' && people && !billError && !tipError && !peopleError;
  const billValue = Number(bill);
  const tipValue = Number(tip);
  const peopleValue = Number(people);
  const tipAmount = isValid ? ((billValue * tipValue) / 100).toFixed(2) : '0.00';
  const grandTotal = isValid ? (billValue + Number(tipAmount)).toFixed(2) : '0.00';
  const perPerson = isValid ? (Number(grandTotal) / peopleValue).toFixed(2) : '0.00';

  function handleReset() {
    setBill('');
    setTip('');
    setPeople('');
    setBillError('');
    setTipError('');
    setPeopleError('');
  }

  return (
    <main className="min-h-screen px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-glow backdrop-blur md:flex-row">
        <form
          className="flex w-full flex-col gap-6 p-6 sm:p-8 md:w-1/2 md:p-10"
          onSubmit={(event) => event.preventDefault()}
          autoComplete="off"
          noValidate
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">Split smart</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Tip Calculator</h1>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
              Enter the bill, pick a tip, and divide the total instantly.
            </p>
          </div>

          <InputField
            label="Bill Amount"
            name="bill"
            placeholder="Enter bill amount"
            value={bill}
            prefix="₹"
            onChange={handleBill}
            onKeyDown={(event) => preventInvalidKey(event, true)}
            error={billError}
            inputMode="decimal"
            min="0"
            step="0.01"
          />

          <TipSelector
            label="Tip Percentage"
            tips={[5, 10, 15, 20, 25]}
            selected={tip}
            onSelect={selectTip}
            onCustomChange={handleTip}
            customValue={tip}
            error={tipError}
          />

          <InputField
            label="Number of People"
            name="people"
            placeholder="Enter number"
            value={people}
            prefix=""
            onChange={handlePeople}
            onKeyDown={preventInvalidKey}
            error={peopleError}
            inputMode="numeric"
            min="1"
            step="1"
          />

          <button
            type="button"
            onClick={handleReset}
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Reset
          </button>
        </form>

        <ResultsPanel
          tipAmount={tipAmount}
          grandTotal={grandTotal}
          perPerson={perPerson}
          people={peopleValue}
          currencyFormatter={currencyFormatter}
        />
      </section>
    </main>
  );
}
