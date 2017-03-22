// changer l'objet className
var megaman = document.getElementById('megaman').getElementsByTagName('div')
[0]

// on définit la fonction jump
function jump(){
  console.log([megaman])
  megaman.className = "jump"

  setTimeout( function(){
    megaman.className = 'run'
  }, 300)


}
// on utilise l'eventlistener.
megaman.addEventListener("click", jump)
