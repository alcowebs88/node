const playPause = document.getElementById('play-pause')
const proximo = document.getElementById('proximo')
const anterior = document.getElementById('anterior')


const play = document.getElementById('audio-capitulo')

const capitulos = 10
let taTocando = 0
let atual = 1;

function tocar(){
	play.play()

}

function pausar(){
	play.pause()

}

function tocarOuPausar(){
	if(taTocando===0){
		tocar()
		taTocando = 1
	}else{
		pausar()
		taTocando=0
	}



}

function proximos(){
	if(atual === capitulos){
		atual = 1
	}else{
		atual+=1
	}
	play.src = `/books/dom-casmurro/${atual}.mp3`
	tocar()
	taTocando = 1
}

function anterioss(){
	if(atual === 1){
		atual = capitulos
	}else{
		atual-=1
	}
	play.src = `/books/dom-casmurro/${atual}.mp3`
	tocar()
	taTocando = 1
}

playPause.addEventListener('click',tocarOuPausar)
proximo.addEventListener('click',proximos)
anterior.addEventListener('click',anterioss)