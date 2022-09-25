class divisores{
    divisores(){
        //let messi=[]
        //let cr7=0
        console.log("ingreso")
        let ingreso=document.getElementById("ingreso").value
        ingreso=parseInt(ingreso)
        for (let i = ingreso; i > 0; i--){
            if (ingreso%i==0){
               resp.textContent+=i + `,`
            }
        }
        
    }
}
let ejer1= new divisores()