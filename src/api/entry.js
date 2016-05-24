var express = require('express');
var app = express();

app.use( express.static( 'public') );

app.get('/api/reminders', (req, res) => {
    var data = [
        {
            name: "Test reminder",
            increment: "hour",
            meta: {
                start: "9:00 AM",
                end: "5:00 PM"
            },

        },

        {
            name: "Go for a jog",
            increment: "day",
            meta: {
                time: "9:00 AM",
            },
        },

        {
            name: "vaccuum",
            increment: "week",
            meta: {
                time: '8:00 AM',
                day: 'Sunday'
            }
        },

        {
            name: "Check oil",
            increment: "month",
            meta: {
                day: "1",
                time: "10:00 AM"
            }
        },

        {
            name: "Clean Furnace",
            increment: "year",
            meta: {
                month: "March",
                day: 3,
                time: "9:00 AM"
            }
        }
    ];

    res.json(data);
});

app.listen(3000, function() {
    console.log("Listening on 3000");
});
