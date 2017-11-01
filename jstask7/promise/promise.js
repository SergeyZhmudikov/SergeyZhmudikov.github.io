var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


var link1 = "http://www.nbrb.by/API/ExRates/Rates?onDate=Mon%2C+30+Oct+2017+21%3A00%3A00+GMT&Periodicity=0";
var link2 = "http://www.nbrb.by/API/ExRates/Rates?Periodicity=0";
var link3 = "http://www.nbrb.by/API/ExRates/Rates?onDate=Mon%2C+30+Oct+2017+21%3A00%3A00+GMT&Periodicity=1";
var link4 = "http://www.nbrb.by/API/ExRates/Currencies/19";
var link5 = "http://www.nbrb.by/API/ExRates/Rates?onDate=Sun%2C+29+Oct+2017+21%3A00%3A00+GMT&Periodicity=0";

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function apiGet(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);

        xhr.onload = function() {
            if (this.status == 200) {
                resolve(xhr.responseText);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function() {
            reject(new Error("Error"));
        };

        xhr.send();
    });
}



apiGet(link1)
    .then(response => {
        console.log(response);
        console.log('1-------');
        return apiGet(link2);
    })
    .then(response => {
        console.log(response);
        console.log('2-------');
        return apiGet(link3);
    })
    .then(response => {
        console.log(response);
        console.log('3-------');
        return apiGet(link4);
    })
    .then(response => {
        console.log(response);
        console.log('4-------');
        return apiGet(link5);
    })
    .then(response => {
        console.log(response);
        console.log('5-------');
    })