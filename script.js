function converter(){
    let resultado=document.getElementById("resultado")
    let valoreEmDolar=document.getElementById("valor").value

    let dolarDoDia =6

    let valorReal=valoreEmDolar*dolarDoDia
    resultado.innerHTML= "R$"+valorReal
    
}
 



