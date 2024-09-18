import { PieChart } from '@mui/x-charts/PieChart';

interface GraphicsType {
    initialAmount: number;
    result: number;
}

const GraphicsInflation = ({ initialAmount, result }: GraphicsType) => {

    const inflationLoss = initialAmount - result;

    const data = [
        { label: 'Monto Inicial', value: initialAmount, color: '#50afae' },
        { label: 'Pérdida por Inflación', value: inflationLoss, color: '#f7634e' },
    ];

    return (
        <div>
            <div className='grid md:grid-rows-[1fr_1fr] lg:grid-rows-1 lg:grid-cols-[1fr_1fr]'>
                <div className='ml-5'>
                    <p className='text-3xl ml-5 mt-5'>Impacto de la Inflación</p>
                    <div className='border border-gray-300 ml-5 mr-5 mt-3'></div>
                    <p className='text-l ml-5 mt-3'>Valor futuro ajustado</p>
                    <p className='text-2xl ml-5 mt-1'>
                        {result.toFixed(2)} €
                    </p>
                    <p className='text-l ml-5 mt-1'>
                        La inflación habría reducido el valor inicial de <strong>{initialAmount.toFixed(2)}</strong> € en <strong>{inflationLoss.toFixed(2)}</strong> €.
                    </p>
                    <div className='flex flex-row ml-5 mt-3'>
                        <p className='verdeTexto pr-4 font-bold'>Monto Inicial:</p>
                        <p>{initialAmount.toFixed(2)} €</p>
                    </div>
                    <div className='flex flex-row ml-5 mt-1 mb-3'>
                        <p className='text-red-500 pr-4 font-bold'>Pérdida por Inflación:</p>
                        <p>{inflationLoss.toFixed(2)} €</p>
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
                            <div className='w-5 h-5 bg-red-500'></div>
                            <p>Pérdida por Inflación</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GraphicsInflation;
