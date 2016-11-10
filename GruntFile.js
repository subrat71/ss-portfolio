// Gruntfile.js
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          protocol:'http',
          hostname:'localhost',
          base:'./',
          keepalive: true,
          open:{
            target:'http://localhost:5050/index.html', // target url to open
            appName:'Google Chrome', // name of the app that opens, ie: open, start, xdg-open
            callback: function() {
              grunt.log("Server connected !!!").ok();
            } // called when the app has opened
          },         
          port: 5050
        }
      }
    }        
  })
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-http');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');


  grunt.registerTask('default', ['connect','open']);
  grunt.registerTask('app', ['connect:server','open']);

};