
module.exports = {
    css: {
        src: ["./src/scss/**/*.scss"],
        build: "./build/public/css/"
    },

    templates: {
        src: ["./src/templates/**/*.*"],
        build: "./build/public"
    },

    js: {
        entry: ["./src/js/main.js", "./src/api/api-entry.js"],
        src: "./src/js/**/*.js",
        build: "./build/public/js"
    },

    api: {
        src: ['./src/api/**/*.js'],
        build: "./build"
    }
}
