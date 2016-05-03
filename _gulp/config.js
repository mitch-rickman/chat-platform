var build = "./build";
var source = './src';
var demoSrc = './demos';

module.exports = {
    sass: {
        src: [
            source + '/sass/**/*.scss'
        ],
        build: build + "/css"
    },
    js: {
        src: source + '/js/**/*.js',
        build: build + "/js"
    },
    templates: {
        src: source + '/templates/**/*.*',
        build: build
    }
};
