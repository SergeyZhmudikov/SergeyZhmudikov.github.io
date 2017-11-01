var XMLHttpRequest = require('XMLHttpRequest').XMLHttpRequest;

var url1 = "http://www.nbrb.by/API/ExRates/Rates?onDate=Mon%2C+30+Oct+2017+21%3A00%3A00+GMT&Periodicity=0";
var url2 = "http://www.nbrb.by/API/ExRates/Rates?Periodicity=0";
var url3 = "http://www.nbrb.by/API/ExRates/Rates?onDate=Mon%2C+30+Oct+2017+21%3A00%3A00+GMT&Periodicity=1";
var url4 = "http://www.nbrb.by/API/ExRates/Currencies/19";
var url5 = "http://www.nbrb.by/API/ExRates/Rates?onDate=Sun%2C+29+Oct+2017+21%3A00%3A00+GMT&Periodicity=0";


function answerFromServer(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) {
            console.log(xhr.statusText);
            callback();
        } else {
            console.log(xhr.responseText);
            callback();
        };
    };

    xhr.open('GET', url, true);
    xhr.send();

};

answerFromServer(url1, function() {
    console.log('First answer');
    answerFromServer(url2, function() {
        console.log('Second answer');
        answerFromServer(url3, function() {
            console.log('Third answer');
            answerFromServer(url4, function() {
                console.log('Forth answer');
                answerFromServer(url5, function() { console.log('Fifth answer'); })
            })
        })
    })
})