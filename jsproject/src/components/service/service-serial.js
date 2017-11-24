export default function getSerial() {
    var link = "https://api.themoviedb.org/3/discover/tv?api_key=1f5122f1a2587836c891fa31b67c0bfe&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false";
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", link, true);

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