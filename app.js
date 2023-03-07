const textH1 = document.getElementById('animate')
const message = "Hi 👋 My name is  Forrest, And I am a Web developper "
const speed = 100
let i = 0

function typeWritter(){
    if( i < message.length ){
        textH1.innerHTML += message.charAt(i)
        i++;
        setTimeout(typeWritter,speed)
    }
}
typeWritter()