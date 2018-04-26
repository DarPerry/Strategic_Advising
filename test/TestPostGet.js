var testFetch = {
    get: function(callback){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '900935524.sa', true);

        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    callback(null, JSON.parse(xhr.responseText));
                } else {
                    callback(xhr.status);
                }
            }
        };
        xhr.send();
    },
    post: function (data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'placeholder.sa', true);

        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                callback();
            }
        };
        xhr.send(JSON.stringify(data));
    }
};