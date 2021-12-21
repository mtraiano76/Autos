let autos = require('./modulos/autos');

const concesionaria = {
    autos: autos,
    buscarAuto: function(patente){
             for(let i = 0;i<autos.length;i++){
          if(autos[i].patente == patente) {
             return autos[i];
          }
       }
       return null;
 }
 }