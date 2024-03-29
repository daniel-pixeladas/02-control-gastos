import React from 'react'
import Gasto from './Gasto'


const ListadoGastos = ({
    gastos,
    setGastoEditar,
    eliminarGasto,
    filtro,
    gastosFiltrados,

}) => {
    return (

        <div className='listado-gastos contenedor'>

            {
                filtro ? (
                    <>
                        <h2>{gastosFiltrados.length ? 'Listado de gastos' : 'No hay gastos'}</h2>
                        {gastosFiltrados.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}>
                            </Gasto>
                        ))}
                    </>

                ) : (
                    <>
                        <h2>{gastos.length ? 'Listado de gastos' : 'No hay gastos'}</h2>
                        {gastos.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}>
                            </Gasto>
                        ))}
                    </>

                )
            }
        </div>
    )
}

export default ListadoGastos