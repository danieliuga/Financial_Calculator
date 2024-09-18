import React, { useState } from 'react';

import Graphics from './GraphicsAmortizacion/GraphicsAmortizacion';
import Calculator from './CalculatorAmortizacion/CalculatorAmortizacion';
import TableResults from './TableResultsAmortizacion/TableResultsAmortizacion';
import AssistantAmortizacion from './AssistantAmortizacion/AssistantAmortizacion';
import './Amortizacion.css';

interface AmortizacionData {
    year: number;
    payment: number;
    principalPaid: number;
    interestPaid: number;
    balance: number;
}

const Amortizacion: React.FC = () => {
    const [principal, setPrincipal] = useState<number>(1000);
    const [rate, setRate] = useState<number>(10);
    const [years, setYears] = useState<number>(10);
    const [frequency, setFrequency] = useState<string>('Mensual');

    const [amortizationData, setAmortizationData] = useState<AmortizacionData[]>([]);

    const [isAssistantVisible, setAssistantVisible] = useState<boolean>(false);
    const [isButtonVisible, setButtonVisible] = useState<boolean>(true);

    const calculateAmortization = () => {
        const paymentsPerYear = frequency === 'Mensual' ? 12 : 1;
        const totalPayments = years * paymentsPerYear;
        const interestRatePerPeriod = (rate / 100) / paymentsPerYear;

        const payment = (principal * interestRatePerPeriod) / (1 - Math.pow(1 + interestRatePerPeriod, -totalPayments));

        let balance = principal;
        const amortizationSchedule: AmortizacionData[] = [];

        for (let i = 1; i <= totalPayments; i++) {
            const interestPaid = balance * interestRatePerPeriod;
            const principalPaid = payment - interestPaid;
            balance -= principalPaid;

            if (i % paymentsPerYear === 0) {
                amortizationSchedule.push({
                    year: i / paymentsPerYear,
                    payment: payment,
                    principalPaid: principalPaid,
                    interestPaid: interestPaid,
                    balance: balance > 0 ? balance : 0,
                });
            }
        }

        setAmortizationData(amortizationSchedule);
    };

    const periodicDeposit = amortizationData.length > 0 ? amortizationData[0].payment : 0;

    return (
        <div className='App'>
            <div className="amortizacion">
                <div className="text-center mb-5">
                    <p className="title text-3xl mb-5 mt-5 text-blue-600 font-bold">Calculadora de Amortización de Préstamos</p>
                    <p className="subtitle text-lg md:text-xl">Calcula la amortización de tus préstamos.</p>
                </div>
                <div className="calculator-body flex flex-col gap-6">
                    <Calculator
                        principal={principal}
                        rate={rate}
                        years={years}
                        frequency={frequency}
                        setPrincipal={setPrincipal}
                        setRate={setRate}
                        setYears={setYears}
                        setFrequency={setFrequency}
                        calculateCompoundInterest={calculateAmortization}
                    />

                    {amortizationData.length > 0 && (
                        <div className="mt-5">
                            <Graphics
                                principal={principal}
                                interestEarned={amortizationData.reduce((acc, data) => acc + data.interestPaid, 0)}
                                periodicDeposit={periodicDeposit}
                            />
                        </div>
                    )}

                    {amortizationData.length > 0 && (
                        <div className="flex justify-center items-center">
                            <TableResults amortizationData={amortizationData} />
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
            {isAssistantVisible && <AssistantAmortizacion isVisible={isAssistantVisible} onClose={() => setAssistantVisible(false)} />}
        </div>
    );
};

export default Amortizacion;
