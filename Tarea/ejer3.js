class contarcaracteres{
contarcaracteres(){
    let punto=0, vocales=0, consonantes=0, punto_coma=0, doble_punto=0, coma=0, caracteres_especiales=0
                let ingresado=document.getElementById("ingresado").value
                let res=document.getElementById("res")
                
                let lon=ingresado.length
                let array=[]
                for(let i=0; i<lon; i++){
                    array[i]=ingresado.substring(i,i+1)
                    switch(array[i]){
                    case "B" :
                    case "C":
                    case "D":
                    case "F": 
                    case "G":
                    case "H":
                    case "J" :
                    case "K":
                    case "L": 
                    case "M": 
                    case "N":
                    case "Ñ": 
                    case "P": 
                    case "Q": 
                    case "R": 
                    case "S":
                    case "T":
                    case "V":
                    case "X":
                    case "Z": 
                    case "W": 
                    case "Y":
                    case "b" :
                    case "c":
                    case "d":
                    case "f": 
                    case "g":
                    case "h":
                    case "J" :
                    case "k":
                    case "l": 
                    case "m": 
                    case "n":
                    case "ñ": 
                    case "p": 
                    case "q": 
                    case "r": 
                    case "s":
                    case "t":
                    case "v":
                    case "x":
                    case "z": 
                    case "w": 
                    case "y":
                    consonantes=consonantes+1
                    break
                    case "A":
                    case "a":
                    case "E":
                    case "e":
                    case "I":
                    case "i":
                    case "O":
                    case "o":
                    case "U":
                    case "u":
                    vocales=vocales+1
                    break
                    case ";":
                    punto_coma=punto_coma+1
                    break
                    case ".":
                    punto=punto+1
                    break
                    case ":":
                    doble_punto=doble_punto+1
                    break
                    case ",":
                    coma=coma+1
                    break
                    default: caracteres_especiales=caracteres_especiales+1
                    break
                    }
                    
                }
                res.textContent=`Usted ha ingresado ${vocales.toString()} vocales, ${consonantes.toString()} consonante/s, ${coma.toString()} coma/s, ${punto.toString()} punto\s, ${doble_punto.toString()} doble punto/s, ${punto_coma.toString()} punto/s, ${coma.toString()} coma/s y ${caracteres_especiales.toString()} caracter/es especial/es`
              
                

            }
}
let ejer3= new contarcaracteres()