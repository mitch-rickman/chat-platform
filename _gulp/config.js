var dest = "./build";
var src = './src';
var demoSrc = './demos';

module.exports = {
  sass: {
    src: [
      src + "/sass/**/*.scss"
    ],
    outputName: 'app.css',
    dest: dest + "/css"
  }
};
