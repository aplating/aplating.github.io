function getImg(e){load(e,function(e){var t=document.createElement("div");t.innerHTML=e.responseText;for(var n=t.getElementsByTagName("figure"),o=0;o<n.length;o++)document.getElementById("append").insertBefore(n[o],document.getElementById("append").lastElementChild);initPhotoSwipeFromDOM(".photoswipe-support")})}function load(e,t){function n(){o.readyState<4||200===o.status&&4===o.readyState&&t(o)}var o;if("undefined"!=typeof XMLHttpRequest)o=new XMLHttpRequest;else for(var m=["MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"],i=0,s=m.length;s>i;i++)try{o=new ActiveXObject(m[i]);break}catch(a){}o.onreadystatechange=n,o.open("GET",e,!0),o.send("")}setTimeout(function(){getImg("1.htm")},1e3),setTimeout(function(){getImg("2.htm")},5e3),setTimeout(function(){getImg("3.htm")},1e4),setTimeout(function(){getImg("4.htm"),document.getElementById("append").lastElementChild.style.display="none"},15e3),setTimeout(function(){console.log("sss")},3e3);