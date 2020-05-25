// var x = document.getElementsByClassName("grid_square");
// x[0].onclick = test;

colors = ["rgb(255, 102, 99)","rgb(254, 177, 68)","rgb(253, 253, 151)","rgb(158, 224, 158)","rgb(148, 183, 227)","rgb(204, 153, 201)"]

// angle = 0
// function test() {
// 	currentColor = window.getComputedStyle( x[0] ,null).getPropertyValue('background-color');  
// 	currentIndex = colors.indexOf(currentColor);

// 	idx = (currentIndex+1)%6
// 	newColor = colors[idx]
// 	x[0].style.background = newColor;
// 	angle+=180
// 	x[0].style.transform = "rotateY("+angle+"deg)";

// }


function square(i,j,color) {
	var self = this
	self.i = i;
	self.j = j;
	self.color = color;
	self.angle = 0
	self.flip_counter = 0
 

	self.generate = function()
	{
		self.element =  document.createElement("div");
		self.element.classList.add("grid_square");
		document.getElementById("page").appendChild(self.element);
		for (var i = 0; i < 6; i++) {
			self.flip()
		}
		
	}

	self.flip = function()
	{
		self.flip_counter+=1
		currentIndex = colors.indexOf(self.color);
		newColor = colors[(currentIndex+1)%6]
		self.color = newColor
		self.angle+=180
		console.log(self)
		self.element.style.background = newColor;
		self.element.style.color = darken(newColor);
		self.element.style.transform = "rotateY("+self.angle+"deg)";
		self.element.style.boxShadow = ((-1)**self.flip_counter*3)+"px 3px 0px 0px";
	}

	self.generate()

	self.element.onclick = self.flip
	}

function darken(c)
{
	
	lst = c.substring(4,c.length-1).split(',')
	r = lst[0]*.8
	g = lst[1]*.8
	b = lst[2]*.8
	return("rgb("+r+","+g+","+b+")")
}

a = new square(0,0,"rgb(255, 102, 99)")
a = new square(0,0,"rgb(255, 102, 99)")
a = new square(0,0,"rgb(255, 102, 99)")
a = new square(0,0,"rgb(255, 102, 99)")
a = new square(0,0,"rgb(255, 102, 99)")
a = new square(0,0,"rgb(255, 102, 99)")