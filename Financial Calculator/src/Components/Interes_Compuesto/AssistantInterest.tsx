import React, { useEffect, useRef } from 'react';
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const AssistantInterest: React.FC<{ isVisible: boolean; onClose: () => void }> = ({ isVisible }) => {
    const driverRef = useRef<any>(null);

    useEffect(() => {
        if (isVisible) {
            driverRef.current = driver({
                animate: true,
                showProgress: true,
                showButtons: ['next', 'previous', 'close'],

                steps: [
                    { element: '.monto', popover: { title: 'Step 1', description: 'Escribe la cantidad inicial de tu dinero.', side: "left", align: 'start' } },
                    { element: '.tasa', popover: { title: 'Step 2', description: 'Escribe la tasa de interés.', side: "bottom", align: 'start' } },
                    { element: '.deposito', popover: { title: 'Step 3', description: 'Escribe el depósito que harás.', side: "top", align: 'start' } },
                    { element: '.frequencia', popover: { title: 'Step 4', description: 'Y la frequencia con las que harás los pagos.', side: "left", align: 'start' } },
                    { element: '.años', popover: { title: 'Step 5', description: 'Escribe los años de inversión.', side: "top", align: 'start' } },
                    { element: '.calcular', popover: { title: 'Step 6', description: 'Y dale a calcular para ver el dinero acumulado al cabo de los años.', side: "top", align: 'center' } },
                    { popover: { title: 'Step 7', description: 'Y eso es todo, disfruta de la calculadora de finanzas de Daniel Iuga.' } }
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

export default AssistantInterest;
