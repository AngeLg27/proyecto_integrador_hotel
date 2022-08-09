
const btn_calcular = document.querySelector("#btn_calcular");
const p_dias = document.querySelector(".p-dias");
const span_PrecioTotal = document.querySelector(".span-PrecioTotal");
const span_PrecioNoche = document.querySelector(".span-PrecioNoche");
const form = document.querySelector(".form");



const fechaEntrada = document.querySelector("#fechaEntrada");
const fechaSalida = document.querySelector("#fechaSalida");

function mensajerError(mensaje="") {
    const alerta = document.createElement("div");
    alerta.textContent = mensaje;
    alerta.classList.add("mensaje-error")
    form.insertBefore(alerta, btn_calcular)
    setTimeout(() => alerta.remove(), 4000)
    

}

function calcularDiasYPrecio(e) {
    e.preventDefault()
    if(!document.querySelector("#fechaEntrada") || !document.querySelector("#fechaSalida").value) {
        mensajerError('Debe ingresar una fecha valida');
        return
    }
    const fechaEntrada = new Date(document.querySelector("#fechaEntrada").value);
    const fechaSalida = new Date(document.querySelector("#fechaSalida").value);
    
    
    if ((fechaSalida < fechaEntrada)) {
        mensajerError("La fecha de salida, no puede ser menor a la fecha de entrada");
        return;
    }
    if ((fechaSalida.toDateString() === fechaEntrada.toDateString())) {
        mensajerError("la fecha de entrada, no puede ser igual a la salida");
        return;
    }
    const miliSegTrans = fechaSalida.getTime() - fechaEntrada.getTime();
    const diasTrans = Math.round(miliSegTrans / (1000 * 60 * 60 * 24) );
    
    p_dias.textContent = diasTrans;

    span_PrecioTotal.textContent = Number(span_PrecioNoche.textContent) * diasTrans;
    span_PrecioNoche.textContent;

    if(document.querySelector("#input-precioTotal").nextElementSibling) {
        return
    }
    const btn_comprar = document.createElement("a");
    btn_comprar.setAttribute("href", "compra_realizada.html")
    btn_comprar.classList.add("btn", "btn--comprar");
    btn_comprar.textContent = "Comprar";


    document.querySelector("#input-precioTotal").after(btn_comprar);

}
form.addEventListener("change", e => {
    
    if(document.querySelector("#fechaEntrada") && document.querySelector("#fechaSalida").value) {
        btn_calcular.classList.add("btn--activar");
        btn_calcular.classList.remove("btn--disabled");
        
        btn_calcular.removeAttribute("disabled");
    }
});

btn_calcular.addEventListener("click", calcularDiasYPrecio);

