var idade = 22;
const data = new Date();
const dia = data.getDate();
const mes = data.getMonth();
var text;

if(dia == 5 && mes == 11){
    idade = idade +1;
    text = `Feliz aniversario hoje você completa ${idade} ano/s de idade`;
}else if(dia != 5 && mes != 11){
    text = `Feliz aniversario hoje você completa ${idade} ano/s de idade`;
}
console.log(text)