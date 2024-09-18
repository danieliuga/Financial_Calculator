import React, { useState } from 'react';

interface YearlyData {
    year: number;
    valueAfterInflation: number;
    inflationLoss: number;
}

interface TableResultsProps {
    yearlyData: YearlyData[];
}

const TableResultsInflation: React.FC<TableResultsProps> = ({ yearlyData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;

    const currentRows = yearlyData.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(yearlyData.length / rowsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    }

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    }

    return (
        <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <p className='text-2xl font-bold text-center py-4 bg-blue-600 text-white'>Resumen Anual</p>
            <table className="min-w-full leading-normal">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Año</th>
                        <th className="py-3 px-6 text-left">Dinero Total Inicial</th>
                        <th className="py-3 px-6 text-left">Porcentaje Perdido</th>
                        <th className="py-3 px-6 text-left">Dinero Perdido</th>
                        <th className="py-3 px-6 text-left">Dinero Total Final</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRows.map((data) => {
                        const porcentajePerdido = (data.inflationLoss / (data.valueAfterInflation + data.inflationLoss)) * 100;
                        return (
                            <tr key={data.year} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left">{data.year}</td>
                                <td className="py-3 px-6 text-left">{(data.inflationLoss + data.valueAfterInflation).toFixed(2)} €</td>
                                <td className="py-3 px-6 text-left">{porcentajePerdido.toFixed(2)} %</td>
                                <td className="py-3 px-6 text-left">{data.inflationLoss.toFixed(2)} €</td>
                                <td className="py-3 px-6 text-left">{data.valueAfterInflation.toFixed(2)} €</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="flex justify-between items-center py-4 pl-4 pr-4">
                <button
                    className={`px-4 py-2 rounded-md bg-blue-500 text-white ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                    onClick={prevPage}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>

                <span className="text-gray-700">
                    Página {currentPage} de {totalPages}
                </span>

                <button
                    className={`px-4 py-2 rounded-md bg-blue-500 text-white ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default TableResultsInflation;
