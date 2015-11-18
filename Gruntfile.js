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
    prompt: {
      secrets: {
        options: {
          questions: [
            {
              config: 'token',
              type: 'password',
              message: 'Enter your token from https://api.slack.com/web:',

            }
          ],
          then: function(results) {
            grunt.file.write('secrets.json', JSON.stringify(results, null, 2));
          }
        }
      }
    }
  });

  grunt.registerTask('configure', ['prompt']);
  grunt.registerTask('default', ['bower']);
}
