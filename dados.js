const dados = [
    "dimingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sabado"
];

const data = new Date();
const dia = data.getDate();
const semana = data.getDay();
const mes = data.getMonth()+1;
const ano = data.getFullYear()
const hora = data.getHours();

const manha = "Bom dia!"
const tarde = "Boa tarde!"
const noite = "Boa noite!"

export {dados, dia, semana ,mes ,ano ,hora ,manha, tarde, noite};
