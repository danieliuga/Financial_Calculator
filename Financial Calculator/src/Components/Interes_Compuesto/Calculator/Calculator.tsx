import React from 'react';

interface CalculatorProps {
  principal: number;
  rate: number;
  periodicDeposit: number;
  frequency: string;
  years: number;
  setPrincipal: (value: number) => void;
  setRate: (value: number) => void;
  setPeriodicDeposit: (value: number) => void;
  setFrequency: (value: string) => void;
  setYears: (value: number) => void;
  calculateCompoundInterest: () => void;
}

const Calculator: React.FC<CalculatorProps> = ({
  principal,
  rate,
  periodicDeposit,
  frequency,
  years,
  setPrincipal,
  setRate,
  setPeriodicDeposit,
  setFrequency,
  setYears,
  calculateCompoundInterest,
}) => {
  return (
    <>
      <div className='mr-5 ml-5'>
        <div className="flex flex-col mb-5 monto">
          <label className='mb-1 font-bold text-xs sm:text-sm' htmlFor="principal">Monto Inicial: (€)</label>
          <input
            className='p-3 rounded-md text-l border border-solid border-gray-300'
            id="principal"
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(parseFloat(e.target.value))}
            placeholder="Ingrese el monto inicial"
          />
        </div>

        <div className="flex flex-col mb-5 tasa">
          <label className='mb-1 font-bold text-xs sm:text-sm' htmlFor="rate">Tasa de Interés: (%)</label>
          <input
            className='p-3 rounded-md text-l border border-solid border-gray-300'
            id="rate"
            type="number"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            placeholder="Ingrese la tasa de interés"
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col mb-5 deposito">
            <label className='mb-1 font-bold text-xs sm:text-sm' htmlFor="periodicDeposit">Depósito Periódico: (€)</label>
            <input
              className='p-3 rounded-md text-l border border-solid border-gray-300'
              id="periodicDeposit"
              type="number"
              value={periodicDeposit}
              onChange={(e) => setPeriodicDeposit(parseFloat(e.target.value))}
              placeholder="Ingrese el depósito periódico"
            />
          </div>

          <div className="flex flex-col mb-5 frequencia">
            <label className='mb-1 font-bold text-xs sm:text-sm' htmlFor="frequency">Frecuencia:</label>
            <select
              className='p-3 h-13 rounded-md text-l border border-solid border-gray-300'
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            >
              <option value="Anual">Anual</option>
              <option value="Mensual">Mensual</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col mb-5 años">
          <label className='mb-1 font-bold text-xs sm:text-sm' htmlFor="years">Duración de la Inversión:  (Años)</label>
          <input
            className='p-3 rounded-md text-l border border-solid border-gray-300'
            id="years"
            type="number"
            value={years}
            onChange={(e) => setYears(parseInt(e.target.value))}
            placeholder="Ingrese los años de inversión"
          />
        </div>

        <button className='calcular pt-3 pb-3 w-full bg-blue-600 text-white border-none rounded-md cursor-pointer text-l hover:bg-blue-800 transitio duration-300' onClick={calculateCompoundInterest}>Calcular</button>
      </div>
    </>
  );
};

export default Calculator;
