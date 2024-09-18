import React, { useState } from 'react';

import GraphicsInflation from './GraphicsInflation/GraphicsInflation';
import CalculatorInflation from './CalculatorInflation/CalculatorInflation';
import TableResultsInflation from './TableResultsInflation/TableResultsInflation';
import AssistantInflation from './AssistantInflation';
import './Inflation.css'

interface YearlyData {
  year: number;
  valueAfterInflation: number;
  inflationLoss: number;
}

const Inflacion: React.FC = () => {
  const [initialAmount, setInitialAmount] = useState<number>(1000);
  const [inflationRate, setInflationRate] = useState<number>(3);
  const [years, setYears] = useState<number>(10);

  const [result, setResult] = useState<number | null>(null);
  const [yearlyData, setYearlyData] = useState<YearlyData[]>([]);

  const [isAssistantVisible, setAssistantVisible] = useState<boolean>(false);

  const calculateInflationImpact = () => {
    let anualData: YearlyData[] = [];

    for (let i = 1; i <= years; i++) {
      let valorDespuesDeInflacion = initialAmount / Math.pow(1 + inflationRate / 100, i);

      let perdidaInflacion = initialAmount - valorDespuesDeInflacion;

      anualData.push({
        year: i,
        valueAfterInflation: valorDespuesDeInflacion,
        inflationLoss: perdidaInflacion,
      });
    }

    let valorFinal = initialAmount / Math.pow(1 + inflationRate / 100, years);
    setResult(valorFinal);
    setYearlyData(anualData);
  };

  return (
    <div className='App'>
      <div className="inflation">
        <div className="text-center mb-5">
          <p className="title text-3xl mb-5 mt-5 text-blue-600 font-bold">Calculadora de Impacto de la Inflación</p>
          <p className="subtitle text-xl">Calcula cómo la inflación afecta el valor de tu dinero con el tiempo.</p>
        </div>
        <div className="calculator-body flex flex-col gap-6">
          <CalculatorInflation
            initialAmount={initialAmount}
            inflationRate={inflationRate}
            years={years}
            setInitialAmount={setInitialAmount}
            setInflationRate={setInflationRate}
            setYears={setYears}
            calculateInflationImpact={calculateInflationImpact}
          />

          {result !== null && (
            <div className="mt-5">
              <GraphicsInflation initialAmount={initialAmount} result={result} />
            </div>
          )}

          {yearlyData.length > 0 && (
            <div className="flex justify-center items-center">
              <TableResultsInflation yearlyData={yearlyData} />
            </div>
          )}

        </div>
      </div>
      <button
        onClick={() => setAssistantVisible(true)}
        style={{ position: 'fixed', bottom: 20, right: 20 }}
        className='text-white bg-blue-600 px-4 py-2 rounded-md shadow-md hover:bg-blue-400 transition-all'
      >
        Assistant
      </button>
      {isAssistantVisible && <AssistantInflation isVisible={isAssistantVisible} onClose={() => setAssistantVisible(false)} />}
    </div>
  );
};

export default Inflacion;
