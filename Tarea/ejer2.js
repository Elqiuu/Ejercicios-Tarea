class palindroma{
  polindormo(){
    let a=[]
    let con1=0
    let ingreso=document.getElementById("ingreso").value
    let numero2=ingreso.length
    let res=document.getElementById("res")
    for(let i=0; i<numero2; i++){
    a[i]=ingreso.substring(i,i+1)
    }
    numero2=numero2-1
    for(let i=0; i<=numero2; i++){
        if(a[i]!=a[numero2]){
        con1=con1+1}
        numero2=numero2-1
    }
    if(con1!=0){
        res.textContent=`Lo que usted ha ingresado no es un palindromo`  
    } else{
        res.textContent=`Lo que usted ha ingresado si es un polindromo` 
    }  
}
}
let ejer2= new palindroma()
