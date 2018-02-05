var f1 = new Date();

var dia = '1';
var mes = '3';
var año = '2018';

var fecha_texto = año+"-"+mes+"-"+dia;

var ms = Date.parse(fecha_texto);
var f2 = new Date(ms);

var difM = f2 - f1 // diferencia en milisegundos
var difD = difM / (1000 * 60 * 60 * 24) // diferencia en dias

var title = document.getElementById('dia');
title.textContent = Math.round(difD) + " días";