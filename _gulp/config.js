var dest = "./build";
var source = './src';
var demoSrc = './demos';

module.exports = {
    sass: {
        src: [
            source + '/sass/**/*.scss'
        ],
        outputName: 'app.css',
        dest: dest + "/css"
    },
    js: {
        src: source + '/js/**/*.js'
    },
    html: {
        src: dest
    }
};
