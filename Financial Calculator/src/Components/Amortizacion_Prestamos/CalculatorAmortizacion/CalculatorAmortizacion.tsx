import React from 'react';

interface CalculatorProps {
  principal: number;
  rate: number;
  frequency: string;
  years: number;
  setPrincipal: (value: number) => void;
  setRate: (value: number) => void;
  setFrequency: (value: string) => void;
  setYears: (value: number) => void;
  calculateCompoundInterest: () => void;
}

const Calculator: React.FC<CalculatorProps> = ({
  principal,
  rate,
  frequency,
  years,
  setPrincipal,
  setRate,
  setFrequency,
  setYears,
  calculateCompoundInterest,
}) => {
  return (
    <>
      <div className='mr-5 ml-5'>
        <div className="flex flex-col mb-5">
          <label className='mb-1 font-bold' htmlFor="principal">Monto del Préstamo: (€)</label>
          <input
            className='p-3 rounded-md text-l border border-solid border-gray-300'
            id="principal"
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(parseFloat(e.target.value))}
            placeholder="Ingrese el monto del préstamo"
          />
        </div>

        <div className="flex flex-col mb-5">
          <label className='mb-1 font-bold' htmlFor="rate">Tasa de Interés (%):</label>
          <input
            className='p-3 rounded-md text-l border border-solid border-gray-300'
            id="rate"
            type="number"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            placeholder="Ingrese la tasa de interés"
          />
        </div>

        <div className="flex flex-col mb-5">
          <label className='mb-1 font-bold' htmlFor="years">Duración del Préstamo (Años):</label>
          <input
            className='p-3 rounded-md text-l border border-solid border-gray-300'
            id="years"
            type="number"
            value={years}
            onChange={(e) => setYears(parseInt(e.target.value))}
            placeholder="Ingrese la duración del préstamo en años"
          />
        </div>

        <div className="flex flex-col mb-5">
          <label className='mb-1 font-bold' htmlFor="frequency">Frecuencia de Pagos:</label>
          <select
            className='p-3 rounded-md text-l border border-solid border-gray-300'
            id="frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value="Mensual">Mensual</option>
            <option value="Anual">Anual</option>
          </select>
        </div>

        <button className='pt-3 pb-3 w-full bg-blue-600 text-white border-none rounded-md cursor-pointer text-l hover:bg-blue-800 transitio duration-300' onClick={calculateCompoundInterest}>Calcular Amortización</button>
      </div>
    </>
  );
};

export default Calculator;
