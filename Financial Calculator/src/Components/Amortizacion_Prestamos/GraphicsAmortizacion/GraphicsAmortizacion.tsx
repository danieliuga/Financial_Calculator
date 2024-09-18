import { PieChart } from '@mui/x-charts/PieChart';

interface GraphicsType {
    principal: number;
    interestEarned: number;
    periodicDeposit: number;
}

const Graphics = ({ principal, interestEarned, periodicDeposit }: GraphicsType) => {
    const data = [
        { label: 'Monto Inicial', value: principal, color: '#50afae' },
        { label: 'Depósito Periódico', value: periodicDeposit, color: '#4e94f7' },
        { label: 'Intereses Pagados', value: interestEarned, color: '#a922d0' },
    ];

    return (
        <div>
            <div className='grid md:grid-rows-[1fr_1fr] lg:grid-rows-1 lg:grid-cols-[1fr_1fr]'>
                <div className='ml-5'>
                    <p className='text-3xl ml-5 mt-5'>Analítica gráfica</p>
                    <div className='border border-gray-300 ml-5 mr-5 mt-3'></div>
                    <p className='text-l ml-5 mt-3'>En total pagas</p>
                    <p className='text-2xl ml-5 mt-1'>
                        {(principal + interestEarned).toFixed(2)} €
                    </p>
                    <div className='flex flex-row ml-5 mt-3'>
                        <p className='verdeTexto pr-4 font-bold'>Monto Inicial:</p>
                        <p>{principal.toFixed(2)} €</p>
                    </div>
                    <div className='flex flex-row ml-5 mt-1'>
                        <p className='text-blue-500 pr-4 font-bold'>Depósitos Periódicos:</p>
                        <p>{periodicDeposit.toFixed(2)} €</p>
                    </div>
                    <div className='flex flex-row ml-5 mt-1 mb-3'>
                        <p className='text-purple-500 pr-4 font-bold'>Intereses Pagados:</p>
                        <p>{interestEarned.toFixed(2)} €</p>
                    </div>
                </div>
                <div className='ml-0 p-0 mt-5 grid grid-cols-[1fr_1fr]'>
                    <div className=''>
                        <PieChart
                        series={[
                            {
                                outerRadius: 80,
                                innerRadius: 50,
                                data: data,
                                cx: 85,
                            },
                        ]}
                        height={200}
                        slotProps={{
                            legend: { hidden: true },
                        }}
                    />
                    </div>
                    <div className='flex flex-col mt-16'>
                        <div className='flex flex-row justify-start gap-2'>
                            <div className='w-5 h-5 verdeFondo'></div>
                            <p className='flex justify-center'>Monto Inicial</p>
                        </div>
                        <div className='flex flex-row justify-start gap-2'>
                            <div className='w-5 h-5 bg-blue-500'></div>
                            <p>Depósitos Periódicos</p>
                        </div>
                        <div className='flex flex-row justify-start gap-2'>
                            <div className='w-5 h-5 bg-purple-500'></div>
                            <p>Intereses Pagados</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Graphics;
