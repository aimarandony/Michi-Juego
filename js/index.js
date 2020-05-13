document.addEventListener('DOMContentLoaded', () => {
    console.log('index.js run !!');

    let btnStartGame = document.getElementById('btnStartGame');

    let txtPlayer1 = document.getElementById('txtPlayer1');
    let txtPlayer2 = document.getElementById('txtPlayer2');
    let txtComputer = document.getElementById('txtComputer');
    
    btnStartGame.addEventListener('click', () => {

        const modeGame = JSON.parse(localStorage.getItem('modeGame'));

        let players = {};

        if (modeGame.mode1) {
            players = {
               p1: txtPlayer1.value,
               p2: txtPlayer2.value,
            };
        } else {
            players = {
                p1: txtPlayer1.value,
                pc: txtComputer.value,
             };
        }

        console.log(players);
        localStorage.setItem('players', JSON.stringify(players));
    });
});