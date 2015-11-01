// Programa de Prueba (con aserciones) para utilizar operaciones de calificación de empresas
//-------------------------------------------------------------------------

// **Autor:** Abel Josué Francisco Agra
// **Versión:** _1.0_

// El presente programa permite ejecutar algunas funcionalidades de la librería de calificaciones
// de empresas por parte de estudiantes que realizaron prácticas en éstas (libCalificacionEmpresa.js),
// utilizando el módulo de aserciones de _node.js_

// Requiere la instalación del manejador de base de datos _sqlite3_, y una versión de _node.js_
// superior a _0.10_. Aún así, dada su dependencia de _sqlite3_, este programa no puede ejecutarse
// para versiones inestables de _node.js_, como las versiones del orden _0.11_.

// El presente programa constituye un ejercicio para la asignatura de Cloud Computing (CC),
// en el marco del Máster en Ingeniería Informática de la Universidad de Granada

// Cargar módulo de _sqlite3_
var sqlite3 = require('sqlite3').verbose();

// Cargar archivo de base de datos con los datos de prueba
var db = new sqlite3.Database('../db/CC_calificacionEmpresa.db');

// Cargar libreria de funciones de calificación de empresas
var libCalif = require('./lib/libCalificacionEmpresa.js');

// Cargar modulo de aserciones
var assert = require('assert');

// Iniciar pruebas con aserciones

// Aserciones exitosas

// Prueba de registro de nueva empresa
var resultado1 = libCalif.crearEmpresa(db, 'EmpTest','EmpresaTest', 'DireccionTest', 'AreaTest');
assert.equal(resultado1, true, 'Creacion correcta de nueva empresa');

// Prueba de registro de nueva calificación
var resultado2 = libCalif.crearCalificacion(db, 'Emp1', 'Usr1', 3);
assert.equal(resultado2, true, 'Creacion correcta de nueva calificacion');

// Prueba de eliminación de valoración
var resultado3 = libCalif.eliminarCalificacion(db, 'Emp1', 'Usr1');
assert.equal(resultado3, true, 'Eliminacion correcta de calificacion');

console.log("Todas las pruebas con aserciones fueron superadas con exito!!!");