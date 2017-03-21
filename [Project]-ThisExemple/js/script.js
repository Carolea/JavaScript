function display(e){
  var element = e.name
  var hiddingElement = document.getElementsByClassName('btn-display')

  //Hidding all elements
  for( var i = 0; i < hiddingElement.length; i++ ){
    hiddingElement[i].style.display = 'none';
  }

  //Show selected element
  var screenPlay =  document.getElementsByName( element + '-content' )
  screenPlay[0].style.display = 'block';
}

function bonbon(e){
  console.log([e])
  var element = e.name

  //Show selected element
  var screenPlay =  document.getElementsByName( element + '-content' )

  console.log( screenPlay )

  screenPlay[0].className = 'void'
}
