module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    browserSync: {
      bsFiles: {
        src : [
          "./app/**/*.js",
          "./build/css/**/*.css",
          "./src/**/*.html"
        ]
      },
      options: {
        server: {
          baseDir: "./src"
        },
        socket: {
          domain: "localhost:3000"
        }
      }
    },
    sass: {
      dist: {
        options: {
          sourcemap: "none"
        },
        files: [{
          expand: true,
          cwd: "sass",
          src: ["**/*.scss"],
          dest: "./build/css",
          ext: ".min.css"
        }]
      }
    },
    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: ["opera 12", "ff 15", "chrome 25", "ie 8", "ie 9", "ie 10", "ie 11"]})
        ],
        map: {
          inline: false,
          sourcesContent: true,
          prev: "build/css/main.min.css.map",
          annotation: "build/css/"
        }
      },
      dist: {
        src: "./build/css/app.min.css"
      }
    },
    cssmin: { // Begin CSS Minify Plugin
      target: {
        files: [{
          expand: true,
          cwd: "css",
          src: ["*.css", "!*.min.css"],
          dest: "css",
          ext: ".min.css"
        }]
      }
    },
    uglify: {
      dist: {
        options: {
          sourceMap: '../js/main.min.map',
          sourceMapIn: '../js/main.js.map',
          sourceMapRoot: '../ts/'
        },
        files: {
          '../js/main.js': ['main.js']
        }
      }
    },
    ts: {
      default : {
        src: ["./src/**/*.ts", "!./node_modules/**/*.ts"],
        tsconfig: true
      }
    },
    watch: { // Compile everything into one task with Watch Plugin
      options: {
        livereload: true,
        spawn: false,
      },
      css: {
        files: "**/*.scss",
        tasks: ["sass", "newer:postcss", "cssmin"]
      },
      ts: {
        files: ["./src/*.ts", "./src/**/*.ts"],
        tasks: ["ts", "uglify"]
      }
    }
  });
  // Load Grunt plugins
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-newer");
  grunt.loadNpmTasks("grunt-ts");

  // Register Grunt tasks
  grunt.registerTask("build", ["sass", "newer:postcss", "ts"]);
  grunt.registerTask("default", ["watch"]);
};