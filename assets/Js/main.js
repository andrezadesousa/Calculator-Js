function insert(num){
    var numero = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = numero + num
}

//Apagar o resultado
function clean(){
    document.getElementById('result').innerHTML = ""
}

//Apagar caracteres
function back(){
    var result = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = result.substring(0, result.length -1)
}

/*
    eval(resultado) = irá calcular automaticamente 
*/
function calculate(){
    var result = document.getElementById('result').innerHTML
    if(result){
        document.getElementById('result').innerHTML = eval(result)
    }else{
        document.getElementById('result').innerHTML = "Error"
    }
}