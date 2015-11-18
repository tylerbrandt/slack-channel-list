module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-bower');
  grunt.loadNpmTasks('grunt-prompt');

  grunt.initConfig({
    bower: {
      dev: {
        dest: 'public/vendor',
        options: {
          expand: true,
        }
      },
    },
  });

  grunt.registerTask('default', ['bower']);
}
