import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({ presupuesto, setPresupuesto, gastos, setGastos, setIsValidPresupuesto }) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        setGastado(totalGastado);
        setDisponible(presupuesto - totalGastado);

        setTimeout(() => {
            setPorcentaje((totalGastado / presupuesto * 100).toFixed(2));
        }, 500);
    }, [gastos]);

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('es-ES', {
            style: 'currency',
            currency: 'EUR'
        })
    }

    const handleResetApp = () => {
        const resultado = confirm('¿Estás seguro?');
        if (resultado) {
            setGastos([]);
            setPresupuesto(0);
            setIsValidPresupuesto(false);
        } else {
            console.log("No");
        }
    }


    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <CircularProgressbar
                value={porcentaje}
                styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                    trailColor: '#F5F5F5'
                })
                }
                text={`${porcentaje}% Gastado`} />
            <div className='contenido-presupuesto'>
                <button
                    className='reset-app'
                    type="button"
                    onClick={handleResetApp}
                >
                    Resetear APP
                </button>
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                    <span>Disponible: </span> {formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span> {formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto