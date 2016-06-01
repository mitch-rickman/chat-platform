var chatBuilder = angular.module('chatBuilder', []);

/*
* controller for sidebar editor
* allows user to build new inputs for the conversation
*/
chatBuilder.controller('conversationEditor', function() {
    /*
    * Input data
    */
    this.inputs = [
        {
            user: "user",
            input: "This is a user input"
        },
        {
            user: "user",
            input: "This is a user input"
        }
    ];

    /*
    * create a new user input
    */
    this.addUserInput = function() {
        addNewInput("user");
    };

    /*
    * create a new alme input
    */
    this.addAlmeInput = function() {
        addNewInput("user");
    }

    /*
    * helps create a new input
    */
    function addNewInput ( author ) {
        let template;
        switch ( author ) {
            case "user":
                template = './partials/user-input.html'
                break;

            case "alme":
                template = './partials/alme-input.html'
                break;
        }
    };
});
