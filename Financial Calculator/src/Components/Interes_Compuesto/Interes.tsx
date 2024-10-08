import React, { useState } from 'react';

import Graphics from './Graphics/Graphics';
import Calculator from './Calculator/Calculator';
import TableResults from './TableResults/TableResults';
import AssistantInterest from './AssistantInteres/AssistantInterest';
import './Interes.css';

interface YearlyData {
  year: number;
  totalAdded: number;
  totalInvested: number;
  interestEarned: number;
  totalAmount: number;
}

const Interes: React.FC = () => {
  const [principal, setPrincipal] = useState<number>(1000);
  const [rate, setRate] = useState<number>(10);
  const [years, setYears] = useState<number>(10);
  const [periodicDeposit, setPeriodicDeposit] = useState<number>(100);
  const [frequency, setFrequency] = useState<string>('Mensual');

  const [result, setResult] = useState<number | null>(null);

  const [, setTotalInvested] = useState<number | null>(null);
  const [interestEarned, setInterestEarned] = useState<number | null>(null);
  const [yearlyData, setYearlyData] = useState<YearlyData[]>([]);

  const [isAssistantVisible, setAssistantVisible] = useState<boolean>(false);
  const [isButtonVisible, setButtonVisible] = useState<boolean>(true);

  const calculateCompoundInterest = () => {
    let frequencia = frequency === 'Mensual' ? 12 : 1;

    let tasaInteresPorPeriodo = (rate / 100) / frequencia;
    let montoTotal = principal;
    let anualData: YearlyData[] = [];

    let totalDeposits = periodicDeposit * frequencia * years;
    let totalInversion = principal + totalDeposits;

    for (let i = 1; i <= years; i++) {
      let periodosAño = frequencia * i;

      let montoInicialAcumulado = principal * Math.pow(1 + tasaInteresPorPeriodo, periodosAño);
      let montoDepositosAcumulado = periodicDeposit * (Math.pow(1 + tasaInteresPorPeriodo, periodosAño) - 1) / tasaInteresPorPeriodo;
      montoTotal = montoInicialAcumulado + montoDepositosAcumulado;

      let totalDepositosAnuales = periodicDeposit * frequencia * i;
      let totalInvestedYear = principal + totalDepositosAnuales;
      let interesGanadoAño = montoTotal - totalInvestedYear;

      anualData.push({
        year: i,
        totalAdded: periodicDeposit * frequencia,
        totalInvested: totalInvestedYear,
        interestEarned: interesGanadoAño,
        totalAmount: montoTotal,
      });
    }

    let gananciasInteres = montoTotal - totalInversion;

    setResult(montoTotal);
    setTotalInvested(totalInversion);
    setInterestEarned(gananciasInteres);
    setYearlyData(anualData);
  };

  return (
    <div className='App'>
      <div className="calculator">
        <div className="text-center mb-5">
          <p className="title text-3xl mb-5 mt-5 text-blue-600 font-bold">Calculadora Interés Compuesto</p>
          <p className="subtitle text-lg md:text-xl">Calcula el crecimiento de tus inversiones o ahorros con interés compuesto.</p>
        </div>
        <div className="calculator-body flex flex-col gap-6">
          <Calculator
            principal={principal}
            rate={rate}
            years={years}
            periodicDeposit={periodicDeposit}
            frequency={frequency}
            setPrincipal={setPrincipal}
            setRate={setRate}
            setYears={setYears}
            setPeriodicDeposit={setPeriodicDeposit}
            setFrequency={setFrequency}
            calculateCompoundInterest={calculateCompoundInterest}
          />

          {result !== null && (
            <div className="mt-5">
              <Graphics principal={principal} totalDeposits={periodicDeposit * 12 * years} interestEarned={interestEarned ?? 0} periodicDeposit={periodicDeposit} />
            </div>
          )}

          {yearlyData.length > 0 && (
            <div className="flex justify-center items-center ">
              <TableResults yearlyData={yearlyData} />
            </div>
          )}

        </div>
      </div>
      {isButtonVisible && (
        <button
          onClick={() => {
            setAssistantVisible(true);
            setButtonVisible(false);
          }}
          style={{ position: 'fixed', bottom: 20, right: 20 }}
          className='text-white bg-blue-600 px-4 py-2 rounded-md shadow-md hover:bg-blue-400 transition-all'
        >
          Assistant
        </button>
      )}
      {isAssistantVisible && <AssistantInterest isVisible={isAssistantVisible} onClose={() => setAssistantVisible(false)} />}
    </div>
  );
};

export default Interes;
