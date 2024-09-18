import React from 'react';

interface CalculatorProps {
  initialAmount: number;
  inflationRate: number;
  years: number;
  setInitialAmount: (value: number) => void;
  setInflationRate: (value: number) => void;
  setYears: (value: number) => void;
  calculateInflationImpact: () => void;
}

const CalculatorInflation: React.FC<CalculatorProps> = ({
  initialAmount,
  inflationRate,
  years,
  setInitialAmount,
  setInflationRate,
  setYears,
  calculateInflationImpact,
}) => {
  return (
    <div className='mr-5 ml-5'>
      <div className="flex flex-col mb-5 monto">
        <label className='mb-1 font-bold' htmlFor="initialAmount">Monto Inicial: (€)</label>
        <input
          className='p-3 rounded-md text-l border border-solid border-gray-300'
          id="initialAmount"
          type="number"
          value={initialAmount}
          onChange={(e) => setInitialAmount(parseFloat(e.target.value))}
          placeholder="Ingrese el monto inicial"
        />
      </div>

      <div className="flex flex-col mb-5 tasa">
        <label className='mb-1 font-bold' htmlFor="inflationRate">Tasa de Inflación: (%)</label>
        <input
          className='p-3 rounded-md text-l border border-solid border-gray-300'
          id="inflationRate"
          type="number"
          value={inflationRate}
          onChange={(e) => setInflationRate(parseFloat(e.target.value))}
          placeholder="Ingrese la tasa de inflación"
        />
      </div>

      <div className="flex flex-col mb-5 años">
        <label className='mb-1 font-bold' htmlFor="years">Años:</label>
        <input
          className='p-3 rounded-md text-l border border-solid border-gray-300'
          id="years"
          type="number"
          value={years}
          onChange={(e) => setYears(parseInt(e.target.value))}
          placeholder="Ingrese los años"
        />
      </div>

      <button
        className='calcular pt-3 pb-3 w-full bg-blue-600 text-white border-none rounded-md cursor-pointer text-l hover:bg-blue-800 transition duration-300'
        onClick={calculateInflationImpact}
      >
        Calcular
      </button>
    </div>
  );
};

export default CalculatorInflation;
