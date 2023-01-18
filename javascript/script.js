const form = document.querySelector('form') //formulario
let resp1 = document.querySelector('h3') //campo para renderizar nota
let resp2 = document.querySelector('h4') //campo para renderizar mesnagem final
let resp3 = document.querySelector('p') //campo para renderizar o nome do aluno na mensagem final

let personName = document.getElementById('name') //input de nome
let materia = document.getElementById('materia') //input de materia



//inputs de notas
let firstNote = document.getElementById('firstNote')
let secondNote = document.getElementById('secondNote')
let thirdNote = document.getElementById('thirdNote')
let fourthNote = document.getElementById('fourthNote')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = personName.value //obtem o valor do input de nome
    const materiaSelected = materia.value //obtem o valor do input de materia


    //obtem o valor do input de nota
     firstNote = Number(firstNote.value)
     secondNote = Number(secondNote.value)
     thirdNote = Number(thirdNote.value) 
     fourthNote = Number(fourthNote.value)

    const finalNote = (firstNote + secondNote + thirdNote + fourthNote) / 4

    resp1.innerText = `Na materia de ${materiaSelected} você obteve uma media de ${finalNote.toFixed(2)}`

    //renderização condicional de mensagens sobre aprovação/reprovação
    if(finalNote >= 6){
        resp3.innerText = `${name}`
        resp2.innerText = `Você foi aprovado!`
        resp2.style.color = 'green'
        
    } else if (finalNote >= 4) {
        resp3.innerText = `${name}`
        resp2.innerText = `Você esta de recuperação!`
        resp2.style.color ='orange'
    } else {
        resp3.innerText = `${name}`
        resp2.innerText = `Você foi reprovado!`
        resp2.style.color ='red'
    }

})