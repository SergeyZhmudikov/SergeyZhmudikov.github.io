export default function getGenre() {
    var url = "https://api.themoviedb.org/3/genre/movie/list?api_key=1f5122f1a2587836c891fa31b67c0bfe&language=en-US";
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