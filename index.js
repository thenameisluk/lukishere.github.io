Array.prototype.random = function(){
    return this[Math.floor(Math.random()*this.length)]
}

let sec = 1000
let min = 60*sec

let plep = [ "I am luk", "The name is luk", "thenameisluk", "Luk says hi" ]
let l = plep.length

console.log(l)

for(var i = 0;i<10;i++)
    console.log(plep.random())

el = document.querySelector("name")

let textNow = "I am luk"
let textNext = ""
let textErase = false;

function plepType(){
    textNext = plep.random()
    textErase = true

    if(textNow==textNext){
        setTimeout(plepType,sec*10)
        return
    }

    let tick = ()=>{
        //console.log(textNow)

        if(textNow.length==0)
            textErase = false

        if(textErase){
            textNow = textNow.slice(0,-1)
        }else{
            textNow+=textNext[textNow.length]
        }
        
        el.innerHTML = textNow+"_"

        if(textNow==textNext)
            setTimeout(plepType,sec*10)
        else
            setTimeout(tick,50)
    }

    tick()

    
}

plepType()