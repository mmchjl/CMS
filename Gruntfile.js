module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/articleControllers.js',
        dest: 'dest/articleControllers.min.js'
      }
    }
  });

  // ���ذ��� "uglify" ����Ĳ����
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Ĭ�ϱ�ִ�е������б�
  grunt.registerTask('default', ['uglify']);

};