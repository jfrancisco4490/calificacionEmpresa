// Programa de Prueba para utilizar operaciones de calificación de empresas
//-------------------------------------------------------------------------

// **Autor:** Abel Josué Francisco Agra
// **Versión:** _1.0_

// El presente programa permite ejecutar algunas funcionalidades de la librería de calificaciones
// de empresas por parte de estudiantes que realizaron prácticas en éstas (libCalificacionEmpresa.js).
// En este programa de prueba se invocan, al menos una vez, todas las funciones de dicha librería,
// tanto en casos exitosos, como en casos de error, en base a las especificaciones del problema.
// Los resultados y estado de la ejecución se presentan en la consola o terminal de comandos en
// las que se ejecute el programa.

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

console.log("[INFO] Iniciando Ejecucion de Pruebas!!!");
console.log("");

// Realizar pruebas sobre posibles funciones de la libreria

// Pruebas sobre registro de nuevas empresas
console.log("[INFO] Prueba de Creacion de Empresa...");

libCalif.crearEmpresa(db, 'EmpTest','EmpresaTest', 'DireccionTest', 'AreaTest');

console.log("[INFO] Finalizada con exito!!!");
console.log("");

// Definir calificaciones de usuarios a empresas
console.log("[INFO] Prueba de Registro de calificaciones validas...");

libCalif.crearCalificacion(db, 'Emp1', 'Usr1', 3);
libCalif.crearCalificacion(db, 'Emp2', 'Usr1', 2);
libCalif.crearCalificacion(db, 'Emp3', 'Usr1', 5);
libCalif.crearCalificacion(db, 'EmpTest', 'Usr1', 4);

libCalif.crearCalificacion(db, 'Emp1', 'Usr2', 1);
libCalif.crearCalificacion(db, 'Emp2', 'Usr2', 1);
libCalif.crearCalificacion(db, 'Emp3', 'Usr2', 2);
libCalif.crearCalificacion(db, 'EmpTest', 'Usr2', 5);

libCalif.crearCalificacion(db, 'Emp1', 'Usr3', 2);
libCalif.crearCalificacion(db, 'Emp2', 'Usr3', 4);
libCalif.crearCalificacion(db, 'Emp3', 'Usr3', 5);
libCalif.crearCalificacion(db, 'EmpTest', 'Usr3', 1);

libCalif.crearCalificacion(db, 'Emp1', 'UsrTest', 5);
libCalif.crearCalificacion(db, 'Emp2', 'UsrTest', 5);
libCalif.crearCalificacion(db, 'Emp3', 'UsrTest', 4);
libCalif.crearCalificacion(db, 'EmpTest', 'UsrTest', 3);

console.log("[INFO] Finalizada con exito!!!");
console.log("");

// Eliminar valoraciones registradas
console.log("[INFO] Prueba de Eliminacion de calificaciones...");

libCalif.eliminarCalificacion(db, 'EmpTest', 'UsrTest');

console.log("[INFO] Finalizada con exito!!!");
console.log("");

// Presentar listado de calificaciones registradas para cada empresa
console.log("[INFO] Prueba de Listado de calificaciones por empresa...");

libCalif.listarCalificaciones(db, 'Emp1');

libCalif.listarCalificaciones(db, 'Emp2');

libCalif.listarCalificaciones(db, 'Emp3');

libCalif.listarCalificaciones(db, 'EmpTest');

console.log("");

// Mostrar ránking actual de empresas (según el promedio de sus calificaciones)
console.log("[INFO] Prueba de Ranking de empresas...");

libCalif.ranking(db);

console.log("[INFO] Finalizada con exito!!!");
console.log("");

// Intentar registro de calificaciones duplicadas (un usuario intenta valorar 
// a una empresa a la cual ya había calificado previamente)
console.log("[INFO] Prueba de Registro de calificaciones duplicadas...");

libCalif.crearCalificacion(db, 'EmpTest', 'Usr1', 4);
libCalif.crearCalificacion(db, 'EmpTest', 'Usr2', 5);
libCalif.crearCalificacion(db, 'EmpTest', 'Usr3', 1);
libCalif.crearCalificacion(db, 'EmpTest', 'UsrTest', 3);

console.log("[INFO] Finalizada con exito!!!");
console.log("");

db.close();

console.log("[INFO] Terminando Ejecucion de Pruebas!!!");