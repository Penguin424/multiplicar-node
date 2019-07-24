const fs = require('fs');
const colors = require('colors');


let listarTabla = async(base, limite) => {
    console.log('=========================='.green)
    console.log(`=======tabla de ${ base }=========`.green)
    console.log('=========================='.green)

    for (let i = 1; i <= limite; i++) {
        console.log(` ${base} * ${i} = ${ base * i } `);

    }
}

let crearArchivo = async(base, limite) => {

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i} \n`;
    }

    fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw new Error(err);

        else return console.log(`Arcivho tabla - ${ base }.txt creado`.red);
    })
}

module.exports = { crearArchivo, listarTabla }