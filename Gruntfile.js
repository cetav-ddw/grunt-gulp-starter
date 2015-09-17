module.exports = function(grunt) {
    grunt.initConfig({
        browserSync: {
            bsFiles: { src : ['*.css', '*.html'] },
            options: {
                server: { baseDir: "./" }
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
        }
    });
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('server', ['browserSync']);
    grunt.registerTask('css', ['sass']);
}