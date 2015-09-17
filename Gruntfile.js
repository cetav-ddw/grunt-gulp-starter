module.exports = function(grunt) {
    grunt.initConfig({
        browserSync: {
            dev: {
                bsFiles: { src : ['*.css', '*.html', 'assets/main.js'] },
                options: {
                    server: {
                        baseDir: './'
                    },
                    watchTask: true
                }
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'styles.css': 'styles.scss'
                }
            }
        },
        uglify: {
            dist: {
                files: { 'assets/main.js': ['main.js'] }
            }
        },
        watch: {
            css: {
                files: '*.scss',
                tasks: ['sass']
            },
            js: {
                files: '*.js',
                tasks: ['uglify']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('dev', ['sass', 'uglify','browserSync', 'watch']);
}