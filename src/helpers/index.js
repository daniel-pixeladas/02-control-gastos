export function generarId() {
    const random = Math.random().toString(36).substring(2);
    const fecha= Date.now().toString(10);

    return fecha + random;
}

export const formatearFechas = fecha => {
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones);
}

export const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR'
    })
}