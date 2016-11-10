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
            target:'http://localhost:5050/ssapp/index.html', // target url to open
            appName:'Google Chrome', // name of the app that opens, ie: open, start, xdg-open
            callback: function(val) {
            	console.log("val = ",val);
              grunt.log(val," :: Server connected !!!").ok();
            } // called when the app has opened
          },         
          port: 5050
        }
      }
    },
    copy: {
    	main: {
    		cwd: 'devapp',
	        src: ['**','!devapp/**/*.css', '!devapp/**/*.js'],
	        dest: 'ssapp',
	        expand: true
    	}
	},
	clean: {
	  ssapp: {
	    src: ['ssapp']
	  }
	},
	watch: {
		devapp: {
			files: ['devapp/**/*.js','devapp/**/*.css','devapp/**/*.html'],
      		tasks: ['devapp','notify:complete']
		}
	},	
	notify: {
	    task_name: {
	      options: {
	        // Task-specific options go here.
	      }
	    },
	    complete: {
	      options: {
	        title: 'Compiled Successfully!!',  // optional
	        message: 'Refresh your browser', //required
	      }
	    }
	}
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-http');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['connect','open','watch']);
  grunt.registerTask('app',['clean','copy','connect:server','open','watch']);
};