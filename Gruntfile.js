module.exports = function(grunt) {
    grunt.initConfig({
        browserSync: {
            bsFiles: { src : ['*.css', '*.html'] },
            options: {
                server: { baseDir: "./" }
            }
        }
    });
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('server', ['browserSync'])
}