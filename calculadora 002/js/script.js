function insert (num)

{ 
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

}
function clean() { /* aqui limpo o campo da cal. */
    document.getElementById('resultado').innerHTML = "";



}
function back() {  /* aqui faço a ação de "voltar". */
    
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
}
function calcular (){
    
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    
    {   
        document.getElementById('resultado').innerHTML =eval(resultado);

    }
    else
    {
        document.getElementById('resultado').innerHTML = "digite algo!";
    }
}

    


    
    




















    
   
    
    
   

