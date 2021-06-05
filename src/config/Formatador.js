export const formatarData = (data) => {
    // var dia  = data.getDate().toString(),
    //     diaF = (dia.length == 1) ? '0' + dia : dia,
    //     mes  = (data.getMonth() + 1).toString(),
    //     mesF = (mes.length == 1) ? '0'+ mes : mes,
    //     anoF = data.getFullYear();
    // return diaF+"/"+mesF+"/"+anoF;

    if (data) {
        var dataFormatada = ("0" + data.getDate()).substr(-2) + "/"
            + ("0" + (data.getMonth() + 1)).substr(-2) + "/" + data.getFullYear();

        return dataFormatada;
    }
}


//BIBLIOTECA MOMENT
// moment().format('MMMM Do YYYY, h:mm:ss a');
// moment().format('dddd');
// moment().format("MMM Do YY");
// moment().format('YYYY [escaped] YYYY');
// moment().format(); 