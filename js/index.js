const $video = document.querySelector('#video')

const $pause = document.querySelector('#pause')

const $play = document.querySelector('#play')
const $forward = document.querySelector('#forward')
const $backward = document.querySelector('#backward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste click al boton de play')
}
function handlePause() {
    $video.pause()
    console.log('le diste click al boton de pausa')
    $pause.hidden = true
    $play.hidden = false
}

$backward.addEventListener('click', handleBackward)

function handleBackward() {
    $video.currentTime = $video.currentTime - 10
    console.log('para tras 10 segundos', $video.currentTime)
}
$forward.addEventListener('click', handleForward)

function handleForward() {
    $video.currentTime = $video.currentTime + 10
    console.log('para adelante 10 segundo', $video.currentTime)
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handletImeUpdate)


function handleLoaded() {
    $progress.max= $video.duration
    console.log('ha cargado mi video', $video.duration)

}

function handletImeUpdate() {
    $progress.value= $video.currentTime
    console.log('tiempo actual', $video.currentTime)
}
$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime= $progress.value
   console.log($progress.value) 
}