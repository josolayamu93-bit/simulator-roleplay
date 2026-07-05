// ======================================================
// ROLEPLAY TRAINER V2.0
// app.js
// Lógica principal
// ======================================================

let currentStep = "inicio";
let score = 100;
let errors = [];
let startTime;
let timerInterval;

// ===============================
// INICIAR SIMULACIÓN
// ===============================

document.getElementById("agentForm").addEventListener("submit", startSimulation);

function startSimulation(e){

e.preventDefault();

const name = document.getElementById("advisorName").value;

document.getElementById("advisorLabel").innerText = name;

document.getElementById("welcomeScreen").classList.remove("active");

document.getElementById("simulationScreen").classList.add("active");

startTime = Date.now();

startTimer();

currentStep = "inicio"; // 🔥 IMPORTANTE

renderStep(currentStep); // 🔥 ESTO ES CLAVE
}

// ===============================
// TIMER
// ===============================

function startTimer(){

timerInterval = setInterval(()=>{

let seconds = Math.floor((Date.now() - startTime)/1000);

let min = String(Math.floor(seconds/60)).padStart(2,"0");

let sec = String(seconds%60).padStart(2,"0");

document.getElementById("timer").innerText = `${min}:${sec}`;

},1000);

}
// ======================================================
// RENDER DEL PASO ACTUAL
// ======================================================

function renderStep(stepKey){

const step = FLOW[stepKey];

const chat = document.getElementById("chatMessages");
const buttons = document.getElementById("answerButtons");

buttons.innerHTML = "";

if(!step){
addMessage("ERROR: Paso no encontrado: " + stepKey, "system");
return;
}

if(step.mensajeCliente){
addMessage(step.mensajeCliente, "client");
}

if(step.opciones && step.opciones.length > 0){

step.opciones.forEach((op)=>{

const btn = document.createElement("button");
btn.innerText = op.texto;

btn.onclick = ()=>handleAnswer(op);

buttons.appendChild(btn);

});

} else {
addMessage("Fin del flujo o paso sin opciones", "system");
}
}

// ======================================================
// MANEJAR RESPUESTA
// ======================================================

function handleAnswer(option){

const buttons = document.getElementById("answerButtons");

buttons.innerHTML = "";

addMessage(option.texto, "agent");

// Si es incorrecta
if(!option.correcta){

score -= option.penalizacion || 0;

errors.push(option.texto);

}

// Avanzar flujo
if(option.siguiente){

currentStep = option.siguiente;

setTimeout(()=>{

renderStep(currentStep);

},600);

} else {

endSimulation();

}

}

// ======================================================
// MENSAJES
// ======================================================

function addMessage(text, type){

const chat = document.getElementById("chatMessages");

const div = document.createElement("div");

div.classList.add("message", type);

div.innerHTML = `<strong>${type.toUpperCase()}</strong>${text}`;

chat.appendChild(div);

chat.scrollTop = chat.scrollHeight;

}

// ======================================================
// FINALIZAR SIMULACIÓN
// ======================================================

function endSimulation(){

clearInterval(timerInterval);

document.getElementById("simulationScreen").classList.remove("active");

document.getElementById("resultScreen").classList.add("active");

const endTime = Date.now();

const seconds = Math.floor((endTime - startTime)/1000);

const min = String(Math.floor(seconds/60)).padStart(2,"0");

const sec = String(seconds%60).padStart(2,"0");

document.getElementById("resultAdvisor").innerText =
document.getElementById("advisorLabel").innerText;

document.getElementById("resultScore").innerText = score + " / 100";

document.getElementById("resultTime").innerText = `${min}:${sec}`;

document.getElementById("resultStatus").innerText =
score >= 80 ? "APROBADO" : "REQUIERE MEJORA";

}

// ======================================================
// REINICIAR SIMULACIÓN
// ======================================================

document.getElementById("restartButton").onclick = ()=>{

location.reload();

};