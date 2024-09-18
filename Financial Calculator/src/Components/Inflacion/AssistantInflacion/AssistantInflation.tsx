import React, { useEffect, useRef } from 'react';
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const AssistantInflation: React.FC<{ isVisible: boolean; onClose: () => void }> = ({ isVisible }) => {
    const driverRef = useRef<any>(null);

    useEffect(() => {
        if (isVisible) {
            driverRef.current = driver({
                animate: true,
                showProgress: true,
                showButtons: ['next', 'previous', 'close'],

                steps: [
                    { element: '.monto', popover: { title: 'Step 1', description: 'Escribe la cantidad inicial.', side: "left", align: 'start' } },
                    { element: '.tasa', popover: { title: 'Step 2', description: 'Escribe la tasa de la inflacion.', side: "bottom", align: 'start' } },
                    { element: '.años', popover: { title: 'Step 3', description: 'Y escribe los años.', side: "top", align: 'start' } },
                    { element: '.calcular', popover: { title: 'Step 4', description: 'Y dale al boton de calcula para ver la inflación sobre tu dinero.', side: "top", align: 'center' } },
                    { popover: { title: 'Step 5', description: 'Y eso es todo, disfruta de la calculadora de finanzas de Daniel Iuga.' } }
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

export default AssistantInflation;
