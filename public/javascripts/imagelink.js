/* 

	Image Link, single style version
	written by Alen Grakalic, provided by Css Globe (cssglobe.com)
	please visit http://cssglobe.com/post/1238/style-your-image-links for more info
	
*/

this.imagelink = function(){
	
	// CONFIG
		
	
	// css class of images that you want to apply this script to
	// if you want to apply this script to all images inside anchor tags, leave this string blank
	var imageClass = "pic";
	
	// css class that defines how span that covers the image is styled by default
	// if you don't want any styling, leave this string blank
	var defaultClass = "";
	
	// css class that defines how span that covers the image is styled when rolled over 
	var overClass = "imageOver";
			
	// END CONFIG
	
	var a = document.getElementsByTagName("a");
		for (var i=0;i<a.length;i++){
			var img = a[i].getElementsByTagName("img");		
			for (var j=0;j<img.length;j++){			
				if(img[j].className == imageClass || imageClass == ""){
					a[i].style.position = "static";		
					if(a[i].getElementsByTagName("span").length > 0) a[i].removeChild(a[i].getElementsByTagName("span")[0]);
					var span = document.createElement("span");	
					var image = img[j];
					span.style.position = "absolute";
					span.style.top = image.offsetTop + "px";
					span.style.left = image.offsetLeft + "px";
					span.style.width = image.offsetWidth + "px";
					span.style.height = image.offsetHeight + "px";
					span.style.cursor = "pointer";
					span.out = span.className = defaultClass;
					span.over = overClass;
					span.a = img[j].a = a[i];	
					span.j = img[j].j = j;					
					a[i]["span" + j] = span;					
					span.onmouseover = img[j].onmouseover = function(){ 
						this.a["span" + this.j].className = this.a["span" + this.j].over;
					};
					span.onmouseout = img[j].onmouseout = function(){
						this.a["span" + this.j].className = this.a["span" + this.j].out;
					};
					a[i].appendChild(span);			
				};		
			};	
		};

};

this.videolink = function(){
	
	// CONFIG
		
	
	// css class of images that you want to apply this script to
	// if you want to apply this script to all images inside anchor tags, leave this string blank
	var imageClass = "video";
	
	// css class that defines how span that covers the image is styled by default
	// if you don't want any styling, leave this string blank
	var defaultClass = "";
	
	// css class that defines how span that covers the image is styled when rolled over 
	var overClass = "videoOver";
			
	// END CONFIG
	
	var a = document.getElementsByTagName("a");
		for (var i=0;i<a.length;i++){
			var img = a[i].getElementsByTagName("img");		
			for (var j=0;j<img.length;j++){			
				if(img[j].className == imageClass || imageClass == ""){
					a[i].style.position = "static";		
					if(a[i].getElementsByTagName("span").length > 0) a[i].removeChild(a[i].getElementsByTagName("span")[0]);
					var span = document.createElement("span");	
					var image = img[j];
					span.style.position = "absolute";
					span.style.top = image.offsetTop + "px";
					span.style.left = image.offsetLeft + "px";
					span.style.width = image.offsetWidth + "px";
					span.style.height = image.offsetHeight + "px";
					span.style.cursor = "pointer";
					span.out = span.className = defaultClass;
					span.over = overClass;
					span.a = img[j].a = a[i];	
					span.j = img[j].j = j;					
					a[i]["span" + j] = span;					
					span.onmouseover = img[j].onmouseover = function(){ 
						this.a["span" + this.j].className = this.a["span" + this.j].over;
					};
					span.onmouseout = img[j].onmouseout = function(){
						this.a["span" + this.j].className = this.a["span" + this.j].out;
					};
					a[i].appendChild(span);			
				};		
			};	
		};

};



// script initiates on page load. 

this.addEvent = function(obj,type,fn){
	if(obj.attachEvent){
		obj['e'+type+fn] = fn;
		obj[type+fn] = function(){obj['e'+type+fn](window.event );}
		obj.attachEvent('on'+type, obj[type+fn]);
	} else {
		obj.addEventListener(type,fn,false);
	};
};
addEvent(window,"load",imagelink);
addEvent(window,"resize",imagelink);
addEvent(window,"load",videolink);
addEvent(window,"resize",videolink);