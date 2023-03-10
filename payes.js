var lastpoem
function loaded(){
    lastpoem = document.getElementById("poem0")
    setpoems()
}



function setpoems(){
   var elements = document.getElementsByClassName("button")
   for(i=0; i<elements.length;i++){
    elements[i].addEventListener('click',function(e){
       var name = e.target.getAttribute('name')
       var poem = document.getElementById(name)
       lastpoem.style.display = 'none'
       poem.style.display ='flex'
       lastpoem = poem
    })
   }
}

window.onload = loaded;