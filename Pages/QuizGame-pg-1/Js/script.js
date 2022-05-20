 //Verificação das questões

 let respostaA = document.querySelector('#a')
 let respostaB = document.querySelector('#b')
 let respostaC = document.querySelector('#c')
 let respostaD = document.querySelector('#d')
 let respostaE = document.querySelector('#e')

 let rightAnswer = document.querySelector('.bg-popup-right')
 let wrongAnswer = document.querySelector('.bg-popup-wrong')
function Tfunction(){
   respostaB.classList.add('correto')
    rightAnswer.style.display = "block"
}

function Ffunction(){
   respostaA.classList.add('errada')
   respostaC.classList.add('errada')
   respostaD.classList.add('errada')
   respostaE.classList.add('errada')
   wrongAnswer.style.display = "block"
}




