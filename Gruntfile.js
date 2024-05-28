module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          implementation: require('sass'),
          sourceMap: true,
          outputStyle: 'expanded',
          indentType: 'tab',
          indentWidth: 1
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'dist/',
          ext: '.css'
        }]
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          () => require('autoprefixer')()
        ]
      },
      dist: {
        src: 'dist/*.css'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/',
          ext: '.min.css'
        }]
      }
    },
    browserify: {
      dist: {
        files: {
          'dist/scripts.js': ['js/main.js']
        },
        options: {
          transform: [['babelify', { presets: ['@babel/preset-env'] }]],
          browserifyOptions: {
            debug: true
          }
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/scripts.min.js': ['dist/scripts.js']
        }
      }
    },
    watch: {
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass', 'postcss', 'cssmin'],
        options: {
          spawn: false
        }
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['browserify', 'uglify'],
        options: {
          spawn: false
        }
      }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks.
  grunt.registerTask('default', ['sass', 'postcss', 'cssmin', 'browserify', 'uglify', 'watch']);

};
