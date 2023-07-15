let buttons =document.getElementsByTagName('button');

let calculater = document.getElementById('calculater');

for(i=0;i<buttons.length;i++){
    buttons[i].onclick = function(){
        let input = this.innerText;
        updateDisplay(input)
        
    }
}
function updateDisplay(input){
    let currentDisplay = calculater.innerText
    if(currentDisplay=="0"){
        if(input!="C"&&input!="DEL" && input!="="){
            calculater.innerText=""
            calculater.innerText=input
        }

    }
    else{
       
    
        if(input=="DEL"){
            calculater.innerText = currentDisplay.substring(0,currentDisplay.length-1)
             //if(result.innerText==""){
              //   result.innerText="0"
            // }
        }
        if(input=="C"){
            calculater.innerText="0"
        }
        if(input!="C"&&input!="DEL"&&input!="="){
            calculater.innerText+=input
            x = x+6
            x+=7
        }

        if(input=="="){          
            let display = calculater.innerText
            calculater.innerText= eval(display)
        }
    }

}






