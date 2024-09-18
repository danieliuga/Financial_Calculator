import React, { useState } from 'react';

interface AmortizacionData {
    year: number;
    payment: number;
    principalPaid: number;
    interestPaid: number;
    balance: number;
}

interface TableResultsProps {
    amortizationData: AmortizacionData[];
}

const TableResults: React.FC<TableResultsProps> = ({ amortizationData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;

    const currentRows = amortizationData.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(amortizationData.length / rowsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    }

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    }

    return (
        <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <p className='text-2xl font-bold text-center py-4 bg-blue-600 text-white'>Tabla de Amortización</p>
            <table className="min-w-full leading-normal">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                        <th className="py-2 px-4 sm:py-3 sm:px-6 text-left">Año</th>
                        <th className="py-2 px-8 sm:py-3 sm:px-6 text-left">Pago</th>
                        <th className="py-2 px-6 sm:py-3 sm:px-6 text-left">Principal Pagado</th>
                        <th className="py-2 px-2 sm:py-3 sm:px-6 text-left">Interés Pagado</th>
                        <th className="py-2 px-4 sm:py-3 sm:px-6 text-left">Saldo Restante</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRows.map((data) => (
                        <tr key={data.year} className="border-b border-gray-200 hover:bg-gray-100 text-xs sm:text-sm">
                            <td className="py-2 px-4 sm:py-3 sm:px-6 text-left">{data.year}</td>
                            <td className="py-2 px-5 sm:py-3 sm:px-6 text-left">{data.payment.toFixed(2)}€</td>
                            <td className="py-2 px-6 sm:py-3 sm:px-6 text-left">{data.principalPaid.toFixed(2)}€</td>
                            <td className="py-2 px-2 sm:py-3 sm:px-6 text-left">{data.interestPaid.toFixed(2)}€</td>
                            <td className="py-2 px-4 sm:py-3 sm:px-6 text-left">{data.balance.toFixed(2)}€</td>
                        </tr>
                    ))}
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

export default TableResults;
