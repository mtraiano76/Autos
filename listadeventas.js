let autos = require('./autos');
const concesionaria = {
   autos: autos,

   buscarAuto: function(patente){
      for(let i = 0;i<autos.length;i++){
         if(autos[i].patente == patente) {
            return autos[i];
         }
      }
      return null;
   },
   venderAuto: function(patente){
      if(this.buscarAuto(patente) != null){
         let index = autos.indexOf(this.buscarAuto(patente));
         autos[index].vendido = true;
      }
   },  
   autosParaLaVenta: function(patente){
      return autos = this.autos.filter(function (elemento){
         return !elemento.vendido
      })
   },

   autosNuevos : function(autos){
    autosNoVendidos =  this.autosParaLaVenta();
     return auto = autosNoVendidos.filter(function(elemento){
         return elemento.km < 100
      });
   },
   
  listaDeVentas: function () {
        let ventas = this.autos.filter(function (elemento) {
            return elemento.vendido == true
        });
        let lista = [];
        ventas.forEach(function (costo) {
            lista.push(costo.precio);
        })
        return lista;
  }
}