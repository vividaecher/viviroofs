module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

      clean: {
      css: ['css/*'],
    },

      sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },

        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'css',
              src: ['main.css', 'main.min.css'],
              dest: 'css',
              ext: '.min.css'
            }]
          }
        },

      watch: {
        files: ['scss/*.scss'],
        tasks: ['default'],
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'sass', 'cssmin']);

};
