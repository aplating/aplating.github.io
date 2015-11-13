// Our simplified "load" function accepts a URL and CALLBACK parameter.
setTimeout(function(){getImg('1.htm')}, 1000);
setTimeout(function(){getImg('2.htm')}, 5000*1);
setTimeout(function(){getImg('3.htm')}, 5000*2);
setTimeout(function(){
    getImg('4.htm');
    document.getElementById('append').lastElementChild.style.display = 'none';
}, 5000*3);

setTimeout (function(){console.log("sss")}, 3000);

function getImg(url) {
    load(url, function(xhr) {
        //console.log(xhr.responseText);
        //var content = document.createTextNode(xhr.responseText);

        var temp = document.createElement('div');
        temp.innerHTML = xhr.responseText;
        //console.log(temp);

        var figures = temp.getElementsByTagName('figure');
        for (var i = 0; i < figures.length; i++)
            document.getElementById('append').insertBefore(figures[i], document.getElementById('append').lastElementChild);

            //document.getElementById('append').appendChild(figures[i]);

        initPhotoSwipeFromDOM('#append');
    });
}
 
function load(url, callback) {
    var xhr;
     
    if(typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();
    else {
        var versions = ["MSXML2.XmlHttp.5.0", 
                        "MSXML2.XmlHttp.4.0",
                        "MSXML2.XmlHttp.3.0", 
                        "MSXML2.XmlHttp.2.0",
                        "Microsoft.XmlHttp"]

         for(var i = 0, len = versions.length; i < len; i++) {
            try {
                xhr = new ActiveXObject(versions[i]);
                break;
            }
            catch(e){}
         } // end for
    }
     
    xhr.onreadystatechange = ensureReadiness;
     
    function ensureReadiness() {
        if(xhr.readyState < 4) {
            return;
        }
         
        if(xhr.status !== 200) {
            return;
        }

        // all is well  
        if(xhr.readyState === 4) {
            callback(xhr);
        }           
    }
     
    xhr.open('GET', url, true);
    xhr.send('');
}