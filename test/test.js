// Programa de Prueba (con aserciones y _mocha_) para utilizar operaciones de calificación de empresas
//-----------------------------------------------------------------------------------------------------

// **Autor:** Abel Josué Francisco Agra
// **Versión:** _1.0_

// El presente programa permite ejecutar algunas funcionalidades de la librería de calificaciones
// de empresas por parte de estudiantes que realizaron prácticas en éstas (libCalificacionEmpresa.js),
// utilizando el módulo de aserciones de _node.js_ y _mocha_

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
var libCalif = require('../src/lib/libCalificacionEmpresa.js');

// Cargar modulo de aserciones
var assert = require('assert');

// Grupo de pruebas sobre librería de calificación de empresas
describe('CalificacionEmpresa_Test', function(){

	// Verifica que se haya cargado bien la librería de valoración de empresas
	describe('Carga', function(){
		it('Cargando libreria...', function(){
			assert(libCalif, "Carga de Libreria Exitosa!!");
		});

	});

	// Prueba de registro de nueva empresa
	describe('Crear_Empresa', function(){
		it('Registrando Correctamente Empresa...', function(){
			var resultado1 = libCalif.crearEmpresa(db, 'EmpTest','EmpresaTest', 'DireccionTest', 'AreaTest');
			assert.equal(resultado1, true, 'Creacion correcta de nueva empresa');
		});
	});
	
	// Prueba de registro de nueva calificación de usuario a empresa
	describe('Registrar_Calificacion', function(){
		it('Registrando Correctamente Calificacion...', function(){
			var resultado2 = libCalif.crearCalificacion(db, 'Emp1', 'Usr1', 3);
			assert.equal(resultado2, true, 'Creacion correcta de nueva calificacion');
		});
	});
	
	// Prueba de eliminación de calificación o valoración de empresa
	describe('Eliminar_Calificacion', function(){
		it('Eliminando Correctamente Calificacion...', function(){
			var resultado3 = libCalif.eliminarCalificacion(db, 'Emp1', 'Usr1');
			assert.equal(resultado3, true, 'Eliminacion correcta de calificacion');
		});
	});
});