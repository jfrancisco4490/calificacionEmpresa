'use strict';

module.exports = function(grunt) {

  // Configuraci—n del proyecto
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  docco: {
	  debug: {
	  src: ['src/*.js','src/lib/*.js','test/*.js'],
	  options: {
		  output: 'docs/'
	  }
	  }
  }
  });

  // Carga el plugin de grunt para ejecutar tareas
  grunt.loadNpmTasks('grunt-docco');

  // Tarea por omisi—n: generar la documentaci—n del c—digo
  grunt.registerTask('default', ['docco']);
};