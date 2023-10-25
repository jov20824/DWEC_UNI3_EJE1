var calendario = document.getElementById("calendario");

var fecha = Date();
var lista = [];

lista = fecha.split(" ");
dia = lista[2];
mes = lista[1];
anio = lista[3]
calendario.innerHTML="<div id='mes'>"+mes+"</div>"+"<div id='dia'>"+dia+"</div>"+"<div id='anio'>"+anio+"</div>"