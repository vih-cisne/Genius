/*const cores=[{cor:'blue',id:1},{cor:'red',id:2},{cor:'yellow',id:3},{cor:'green',id:4},]*/

let body = document.getElementsByTagName('body')[0]
let header = document.createElement('header')
let logo = document.createElement('img')
    logo.src = 'img/The_Penguins_of_Madagascar_logo.png'
    logo.alt = 'Logo Pinguins de Madagascar'
    header.appendChild(logo)
    body.appendChild(header)

let circle_div = document.createElement('div')
    circle_div.id = 'circle'
    let blue = document.createElement('div')
        blue.id = 'blue'
    let recruta = document.createElement('img')
        recruta.src = 'img/Recruta.png'
        recruta.alt = 'Pinguim com gravata azul'
        recruta.id = 'recruta'
    let red = document.createElement('div')
        red.id = 'red'
    let kowalski = document.createElement('img')
        kowalski.src = 'img/Kowalski.png'
        kowalski.alt = 'Pinguim com gravata vermelha'
        kowalski.id = 'kowalski'
    let middle_div = document.createElement('div')
        middle_div .id = 'middle'
    let descricao = document.createElement('p')
    let yellow = document.createElement('div')
        yellow.id = 'yellow'
    let capitao = document.createElement('img')
        capitao.src = 'img/Capitão.png'
        capitao.alt = 'Pinguim com gravata amarela'
        capitao.id = 'capitao'
    let green = document.createElement('div')
        green.id = 'green'
    let rico = document.createElement('img')
        rico.src = 'img/Rico.png'
        rico.alt = 'Pinguim com gravata verde'
        rico.id = 'rico'
    let btn_start = document.createElement('button')
        btn_start.innerText = 'INICIAR'
        btn_start.id = 'start'

    blue.appendChild(recruta)
    red.appendChild(kowalski)
    yellow.appendChild(capitao)
    green.appendChild(rico)
    middle_div.appendChild(descricao)
    middle_div.appendChild(btn_start)
    circle_div.appendChild(blue)
    circle_div.appendChild(red)
    circle_div.appendChild(middle_div)
    circle_div.appendChild(yellow)
    circle_div.appendChild(green)
    body.appendChild(circle_div)
    


function getRandom() {
    return Math.floor(Math.random() * (4)) + 1;
}

const go=document.querySelector('#go')
go.addEventListener('click',function() {
    let nome=document.getElementsByTagName('input')[0]
        descricao.innerText =`Oi ${nome.value}! Preparado(a)?`
    const modal=document.getElementById('modal')
    modal.style.display='none'
})

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
       colorSoundEffect(sequence[i])
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
    if (event.target.id=='blue' || event.target.id=='recruta' ||event.target.id=='red' || event.target.id=='kowalski' || event.target.id=='green' || event.target.id=='capitao' || event.target.id=='yellow' || event.target.id=='rico') {
        let color=event.target.id
        switch (color){
            case 'recruta':
            color='blue'
            break;
            case 'kowalski':
            color='red'
            break;
            case 'capitao':
            color='yellow'
            break;
            case 'rico':
            color='green'
        }
        document.getElementById(color).classList.add(color+'--active')
        colorSoundEffect(color)
        deleteColors(color)
        if (color==sequence[count]) {
            middle.innerHTML=''
        } else {
            let pontuacao=sequence.length-1
            if (pontuacao==-1) {
                pontuacao=0
            }
            middle.innerHTML=`<img src='img/nao_foi_dessa_vez.gif' id='gif_nao_foi'><p>Maior pontuação: ${pontuacao}</p><button id="again">Reload</button>`
            errorSoundEffect()
            reloadPage()
        }
        count++
        if(count==sequence.length && color==sequence[count-1]) {
            middle.innerHTML='<p>Muito bem! aguarde a próxima sequência</p>'
            count=0
            getSequence()
            showSequence()
        }
    }
})

function reloadPage() {
    const again=document.getElementById('again')
    again.addEventListener('click',function() {
    window.location.reload()
}) 
}




let colorSoundEffect = (color) => {
    if ((color == 0) || (color == 'blue')) {
        let audio = new Audio('./audio/audio_blue.wav');
        audio.play();
        if (audio.currentTime > 0.5) {
            setTimeout(() => {
                audio.pause();
            }, 450);
        }
    } else if ((color == 1) || (color == 'red')) {
        let audio = new Audio('./audio/audio_red.wav');
        audio.play();
        if (audio.currentTime > 0.5) {
            setTimeout(() => {
                audio.pause();
            }, 450);
        }
    } else if ((color == 2) || (color == 'yellow')) {
        let audio = new Audio('./audio/audio_yellow.wav');
        audio.play();
        if (audio.currentTime > 0.5) {
            setTimeout(() => {
                audio.pause();
            }, 450);
        }
    } else if ((color == 3) || (color == 'green')) {
        let audio = new Audio('./audio/audio_green.wav');
        audio.play();
        if (audio.currentTime > 0.5) {
            setTimeout(() => {
                audio.pause();
            }, 450);
        }
    }
}

let errorSoundEffect = () => {
    let audio = new Audio('./audio/audio_error.wav');
    audio.play();
}

