var bttPlus = document.querySelectorAll('.plus')
var bttMoins = document.querySelectorAll('.moins')
var bttEnl = document.querySelectorAll('.buttt')



for( let i=0; i<bttPlus.length;i++){
    bttPlus[i].addEventListener('click',function(){
        bttPlus[i].nextElementSibling.innerHTML++
        SommeTotale()
    })
}
for( let i=0; i<bttMoins.length;i++){
    bttMoins[i].addEventListener('click',function(){
        if(bttMoins[i].previousElementSibling.innerHTML>0){
            bttMoins[i].previousElementSibling.innerHTML-- 
            SommeTotale()   
        }  
    })
}

for (let i=0; i<bttEnl.length;i++){
    bttEnl[i].addEventListener('click',function(){
        bttEnl[i].parentElement.parentElement.remove()
        SommeTotale()
    })
}

function SommeTotale(){
    var Totalaffiche = document.querySelector('.somme')
    var Totall=0
    var price= document.querySelectorAll('.prix')
    var quan = document.querySelectorAll('.quantite') 
    
    for (let i=0; i<price.length;i++){ 
        Totall = Totall + price[i].innerHTML * quan[i].innerHTML
    }
    Totalaffiche.innerHTML = Totall 
}



var button = document.querySelectorAll('.coeur');

const whiteHeart = '\u2661';
const blackHeart = '\u2764';

for (let i=0; i<button.length;i++){
button[i].addEventListener('click', function(){
    
        const like = button[i].textContent;
        if(like==whiteHeart) {
          button[i].textContent = blackHeart;
        } else {
          button[i].textContent = whiteHeart;
        }
      
})
}

