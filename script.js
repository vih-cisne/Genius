/*const cores=[{cor:'blue',id:1},{cor:'red',id:2},{cor:'yellow',id:3},{cor:'green',id:4},]*/

function getRandom() {
    return Math.floor(Math.random() * (4)) + 1;
}

const sequence=[]

function getSequence() {
    let color=getRandom()

    switch (color){
        case 1:
        color='blue'
        break;
        case 2:
        color='red'
        break;
        case 3:
        color='yellow'
        break;
        case 4:
        color='green'
        break;
    }
    sequence.push(color)
}
const middle=document.getElementById('middle')


function showSequence() {
    let i=0
    const intervalo=setInterval(
     function() {
       document.getElementById(sequence[i]).classList.add(sequence[i]+'--active')
       deleteColors(sequence[i])
       i++
       if(i==sequence.length) {
           middle.innerHTML='<p>Agora,clique nas cores na mesma ordem</p>'
           clearInterval(intervalo)
            return;
       }
     }
    , 1000)
}

const start=document.querySelector('#start')
start.addEventListener('click',function() {
    getSequence()
    showSequence()
    middle.removeChild(start)
    changeInstrution(start)
})

function changeInstrution() {
    middle.innerHTML='<p>Memorize a sequência</p>'
}

function deleteColors(element) {
    setTimeout(() => {document.getElementById(element).classList.remove(element+'--active')}, 500)
}

const circle=document.getElementById('circle')
let count=0
circle.addEventListener('click',function(event) {
    if (event.target.id=='blue' || event.target.id=='red' || event.target.id=='green' || event.target.id=='yellow') {
        /*console.log(sequence)
        console.log(sequence[count])*/
        if (event.target.id==sequence[count]) {
            console.log('correto!')
        }
        count++
    }
})

