function resultado(dados, semana){
    const diaSemana = dados[semana];
    return diaSemana;
}

function resul(dia, mes, ano){
    const diaMes = `${dia}/${mes}/${ano}`
    return diaMes
}

function mTN (hora, manha, tarde, noite){
    if(hora <= 11){
        return manha;
    }else if(hora >= 12 || hora <= 18){
        return tarde;
    }else{
        return noite;
    }
}

export {resultado, resul, mTN};