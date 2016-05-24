var reminderApp = angular.module('reminderApp', []);

reminderApp.controller('reminderList', function( $http ) {
    $http({
        method: "GET",
        url: "./api/reminders"
    }).then(
        function success(response) {

        },
        function error( response) {

        }
    );
});

reminderApp.filter('ordinal', function() {
    return function(input) {
        var s=["th","st","nd","rd"],
        v=input%100;
        return input+(s[(v-20)%10]||s[v]||s[0]);
    }
});
