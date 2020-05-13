// document.addEventListener('DOMContentLoaded', () => {

let btnStart = document.getElementById('btnStart');
let btnCloseModal = document.getElementById('btnCloseModal');

let cortina = document.getElementById('cortina');
let modal = document.getElementById('modal');

let mode01 = document.getElementById('mode-01');
let mode02 = document.getElementById('mode-02');

let step01 = document.getElementsByClassName('step-01');
let step02 = document.getElementsByClassName('step-02');

let step02Opt01 = document.getElementById('step-02-opt-01');
let step02Opt02 = document.getElementById('step-02-opt-02');

let btnReturn = document.getElementById('btnReturn');
let btnStartGame = document.getElementById('btnStartGame');

let tableroItem = document.getElementsByClassName('tablero-item')

let txtPlayer1 = document.getElementById('txtPlayer1');
let txtPlayer2 = document.getElementById('txtPlayer2');
let txtComputer = document.getElementById('txtComputer');

let computerNames = ['Timoteo', 'Chupetín', 'Alonso', 'Presi'];

init();

function init() {
    showHideId(modal, 'hide');
    showHideId(cortina, 'hide');
    showHideClass(step02, 'hide');

    showHideClass(tableroItem, 'hide');
}

function openModal() {
    showHideId(cortina, 'show');
    showHideId(modal, 'show');

    txtComputer.value = computerNames[Math.floor(Math.random() * computerNames.length)];
}

function closeModal() {
    showHideId(cortina, 'hide');
    showHideId(modal, 'hide');

    showHideClass(step01, 'show');
    showHideClass(step02, 'hide');

    cleanInputs()
}

function gameMode01() {
    showHideClass(step01, 'hide');
    showHideClass(step02, 'show');
    showHideId(step02Opt01, 'show');
    showHideId(step02Opt02, 'hide');

    localStorage.setItem('modeGame', JSON.stringify({
        mode1: true,
        mode2: false
    }));
}

function gameMode02() {
    showHideClass(step01, 'hide');
    showHideClass(step02, 'show');
    showHideId(step02Opt01, 'hide');
    showHideId(step02Opt02, 'show');

    localStorage.setItem('modeGame', JSON.stringify({
        mode1: false,
        mode2: true
    }));
}

function returnStep01() {
    showHideClass(step01, 'show');
    showHideClass(step02, 'hide');
}

function cleanInputs() {
    txtPlayer1.value = '';
    txtPlayer2.value = '';
}

function showHideId(element, method) {
    if (method === 'show') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

function showHideClass(element, method) {
    if (method === 'show') {
        for (let i = 0; i < element.length; i++) {
            element[i].style.display = 'block';
        }
    } else {
        for (let i = 0; i < element.length; i++) {
            element[i].style.display = 'none';
        }
    }
}

// });