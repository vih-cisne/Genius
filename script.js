/*const cores=[{cor:'blue',id:1},{cor:'red',id:2},{cor:'yellow',id:3},{cor:'green',id:4},]*/

function getRandom() {
    return Math.floor(Math.random() * (4)) + 1;
}

const sequency=[]

function getSequency() {
    sequency.push(getRandom())
    console.log(sequency)
}

function showSequency() {
    sequency.forEach(element => {
        switch (element){
            case 1:
            document.getElementById('blue').style.filter='drop-shadow(0 0 10px rgb(54, 140, 238))'
            setTimeout(() => {document.getElementById('blue').style.filter='none'}, 1000)
            break;
            case 2:
            document.getElementById('red').style.filter='drop-shadow(0 0 10px rgb(54, 140, 238))'
            setTimeout(() => {document.getElementById('red').style.filter='none'}, 1000)
            break;
            case 3:
            document.getElementById('yellow').style.filter='drop-shadow(0 0 10px rgb(54, 140, 238))'
            setTimeout(() => {document.getElementById('yellow').style.filter='none'}, 1000)
            break;
            case 4:
            document.getElementById('green').style.filter='drop-shadow(0 0 10px rgb(54, 140, 238))'
            setTimeout(() => {document.getElementById('green').style.filter='none'}, 1000)
            break;
        }
    })
}

const start=document.querySelector('#start')
start.addEventListener('click',function() {
    getSequency()
    showSequency()
})