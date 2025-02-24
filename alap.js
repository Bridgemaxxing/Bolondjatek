let sz=""
const sor=15
const oszl=15
//--------------------------------------------------gombok kirajzolása
for (let i = 0; i < sor; i++) {
    sz+=`<br>`
    
    for (let j = 0; j < oszl; j++) {
        sz+=`
        
        <button id="${i}_${j}"  onclick="kattint(this.id)" style="width:50px;height:50px;background-color:#e5e5e5"></button>
        
        `
        
    }
    
    
    
}



document.getElementById("tabla").innerHTML=sz
//----------------------------------------------ketD tomb
let tomb=[]
for (let i = 0; i < sor; i++) {
    let egysor=[]
    for (let j = 0; j < oszl; j++) {
        egysor.push(0)
        
    }
    tomb.push(egysor)
}




function kattint(id){
    //alert(id)
    let split=id.split("_")
    let s=parseInt(split[0])
    let o=parseInt(split[1])
 



    szinez(s,o)
    szinez(s-1,o)
    szinez(s+1,o)
    szinez(s,o-1)
    szinez(s,o+1)

    
    
     
    

}

function szinez(s,o){


        //felette lévő



        if (s>=0 && s<sor && o>=0 && o<oszl) {
        
       
        
    
        if(tomb[s][o]==0){
            document.getElementById(s+"_"+o).style.backgroundColor="red"
             tomb[s][o]=1
         }
         else{
             document.getElementById(s+"_"+o).style.backgroundColor="#e5e5e5"
             tomb[s][o]=0
         }

 }


}


