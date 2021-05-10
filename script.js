window.addEventListener("load", function(){
	var cursor = document.createElement("span");
	cursor.classList.add("cursor");
	document.body.appendChild(cursor);

	document.addEventListener("mousemove",function(event){
		cursor.style.left = (event.clientX+5)+"px";
		cursor.style.top = (event.clientY+5)+"px";
	});

	document.querySelectorAll("a").forEach(function(item){
		item.addEventListener("mouseout",function(){
			cursor.style.display = "none";
			cursor.setAttribute("data-icon","");
		});

		item.addEventListener("mouseover",function(){
			cursor.style.display = "block";
			cursor.setAttribute("data-icon", this.getAttribute("data-icon"));
		});
	});


});
