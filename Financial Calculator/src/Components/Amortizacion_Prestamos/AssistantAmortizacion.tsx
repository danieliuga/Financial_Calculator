import React, { useEffect, useRef } from 'react';
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const AssistantAmortizacion: React.FC<{ isVisible: boolean; onClose: () => void }> = ({ isVisible }) => {
    const driverRef = useRef<any>(null);

    useEffect(() => {
        if (isVisible) {
            driverRef.current = driver({
                animate: true,
                showProgress: true,
                showButtons: ['next', 'previous', 'close'],

                steps: [
                    { element: '.monto', popover: { title: 'Step 1', description: 'Escribe la cantidad del préstamo.', side: "left", align: 'start' } },
                    { element: '.tasa', popover: { title: 'Step 2', description: 'Escribe el numero de la tasa de interés.', side: "bottom", align: 'start' } },
                    { element: '.años', popover: { title: 'Step 3', description: 'Escribe la duración del préstamo.', side: "top", align: 'start' } },
                    { element: '.frequencia', popover: { title: 'Step 4', description: 'Selecciona la frequencia de los pagos.', side: "left", align: 'start' } },
                    { element: '.calcular', popover: { title: 'Step 5', description: 'Dale al boton para calcular la amortización de tu préstamo.', side: "top", align: 'center' } },
                    { popover: { title: 'Step 6', description: 'Y eso es todo, disfruta de la calculadora de finanzas de Daniel Iuga.' } }
                ],
            });

            driverRef.current.drive();

            return () => {
                driverRef.current?.destroy();
                driverRef.current = null;
            };
        } else {
            driverRef.current?.destroy();
        }

    }, [isVisible]);

    return null;
};

export default AssistantAmortizacion;
