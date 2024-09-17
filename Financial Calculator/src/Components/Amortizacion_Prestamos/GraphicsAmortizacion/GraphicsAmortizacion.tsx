import { PieChart } from '@mui/x-charts/PieChart';

interface GraphicsType {
    principal: number;
    totalDeposits: number;
    interestEarned: number;
    periodicDeposit: number;
}

const Graphics = ({ principal, totalDeposits, interestEarned }: GraphicsType) => {
    const data = [
        { label: 'Monto Inicial', value: principal, color: '#50afae' },
        { label: 'Pagos Totales', value: totalDeposits, color: '#4e94f7' },
        { label: 'Intereses Pagados', value: interestEarned, color: '#a922d0' },
    ];

    return (
        <div>
            <div className='grid grid-cols-[1fr_1fr]'>
                <div className='ml-5'>
                    <p className='text-3xl ml-5 mt-5'>Analítica gráfica</p>
                    <div className='border border-gray-300 ml-5 mr-5 mt-3'></div>
                    <p className='text-l ml-5 mt-3'>En total pagas</p>
                    <p className='text-2xl ml-5 mt-1'>
                        {(principal + interestEarned).toFixed(2)} €
                    </p>
                    <div className='flex flex-row ml-5 mt-3'>
                        <p className='text-purple-500 pr-4 font-bold'>Monto Inicial:</p>
                        <p>{principal.toFixed(2)} €</p>
                    </div>
                    <div className='flex flex-row ml-5 mt-1'>
                        <p className='text-blue-500 pr-4 font-bold'>Pagos Totales:</p>
                        <p>{totalDeposits.toFixed(2)} €</p>
                    </div>
                    <div className='flex flex-row ml-5 mt-1 mb-3'>
                        <p className='text-green-600 pr-4 font-bold'>Intereses Pagados:</p>
                        <p>{interestEarned.toFixed(2)} €</p>
                    </div>
                </div>
                <div className='flex ml-0 p-0 mt-5'>
                    <PieChart
                        series={[
                            {
                                outerRadius: 80,
                                innerRadius: 50,
                                data: data,
                                cx: 125,
                            },
                        ]}
                        height={200}
                        slotProps={{
                            legend: { hidden: false },
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Graphics;
