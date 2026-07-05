const FLOW = {

inicio: {
mensajeCliente: "Buen día. Quiero cancelar mi reserva.",
opciones: [
{
texto: "Gracias por escribir a Despegar. ¿Cómo puedo ayudarlo?",
correcta: true,
siguiente: "apertura"
},
{
texto: "Necesito su número de reserva.",
correcta: false,
penalizacion: 10
},
{
texto: "No es posible cancelar reservas.",
correcta: false,
penalizacion: 20
}
]
},

apertura: {
mensajeCliente: "Quisiera cancelar mi reserva.",
opciones: [
{
texto: "Será un gusto ayudarlo con la cancelación de su reserva.",
correcta: true,
siguiente: "validacion"
},
{
texto: "¿Por qué desea cancelar?",
correcta: false,
penalizacion: 10
},
{
texto: "Eso depende del hotel.",
correcta: false,
penalizacion: 15
}
]
},

validacion: {
mensajeCliente: "Claro.",
opciones: [
{
texto: "Por seguridad de la información, indíqueme su nombre, número de reserva y código PIN.",
correcta: true,
siguiente: "sistema"
},
{
texto: "Solo necesito el número de reserva.",
correcta: false,
penalizacion: 30
},
{
texto: "Solo necesito el PIN.",
correcta: false,
penalizacion: 30
}
]
},

sistema: {
mensajeCliente: "SISTEMA: La reserva está programada para el 8 de julio.",
opciones: [
{
texto: "Entiendo, el sistema me muestra que su reserva está programada para el 8 de julio, por lo que no es posible proceder con la cancelación de acuerdo con nuestra política.",
correcta: true,
siguiente: "pregunta"
},
{
texto: "Procederé con la cancelación.",
correcta: false,
penalizacion: 40
}
]
},

pregunta: {
mensajeCliente: "¿Por qué no se puede cancelar?",
opciones: [
{
texto: "El derecho de retracto no aplica si la fecha de la reserva está dentro de los cinco días siguientes a la fecha en que deseas ejercerlo.",
correcta: true,
siguiente: "cierre"
},
{
texto: "Porque el sistema no lo permite.",
correcta: false,
penalizacion: 20
}
]
},

cierre: {
mensajeCliente: "Muchas gracias por la información.",
opciones: [
{
texto: "Gracias por su comprensión. Espero tenga un excelente día.",
correcta: true,
siguiente: null
}
]
}

};