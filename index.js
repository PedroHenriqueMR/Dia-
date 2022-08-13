import {dados, dia, semana ,mes ,ano ,hora ,manha, tarde, noite} from "./dados.js";
import {resultado, resul, mTN} from "./resultado.js";


const diaDaSemana =  resultado(dados, semana);
const diaMesAno = resul(dia, mes, ano);
const saldacao = mTN(hora ,manha, tarde, noite);

console.log(saldacao)
console.log(`Hoje é ${diaDaSemana}, ${diaMesAno}`)