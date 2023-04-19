import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import { formatearFechas, formatearCantidad } from '../helpers';

import IconoAhorro from '../assets/icono_ahorro.svg'
import IconoCasa from '../assets/icono_casa.svg'
import IconoComida from '../assets/icono_comida.svg'
import IconoGastos from '../assets/icono_gastos.svg'
import IconoOcio from '../assets/icono_ocio.svg'
import IconoSalud from '../assets/icono_salud.svg'
import IconoSuscripciones from '../assets/icono_suscripciones.svg'

const diccionarioIconos = {
    ahorro: IconoAhorro,
    casa: IconoCasa,
    comida: IconoComida,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones
}


const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {

    const { id, categoria, nombre, fecha, cantidad } = gasto;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={() => eliminarGasto(id)}
                destructive={true}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )
      

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}>
                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        <img
                            src={diccionarioIconos[categoria]}
                            alt="Categoria" />
                        <div className='descripcion-gasto'>
                            <p className='categoria'>{categoria}</p>
                            <p className='nombre-gasto'>{nombre}</p>
                            <p className='fecha-gasto'>Agregado el: <span>{formatearFechas(fecha)}</span></p>
                        </div>
                    </div>
                    <div className='cantidad-gasto'>
                        {formatearCantidad(cantidad)}
                    </div>
                </div>
            </SwipeableListItem>
        </SwipeableList>

    )
}

export default Gasto