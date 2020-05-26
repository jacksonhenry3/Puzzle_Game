// var w = window.innerWidth;
// var h = window.innerHeight;

var w = document.getElementById('page').clientWidth;
// var h = window.innerHeight;
// var l = Math.min(w,h);
var l = w;
var tilewidth = l/6
var squarewidth = l/7

console.log(l)

function square(i,j,color)
{
	var self = this
	self.i = i;
	self.j = j;
	self.color = color;
	self.Hangle = 0
	self.Vangle = 0
	self.Zangle = 0
	self.Hflip_counter = 0
	self.Vflip_counter = 0
 
	self.generate = function()
	{
		// create a new div
		self.element =  document.createElement("div");

		// give it the class grid_square
		self.element.classList.add("grid_square");

		// add the element to the page
		document.getElementById("page").appendChild(self.element);

		// set the background color
		self.element.style.background = self.color

		// this sets the shadow color becouse box shadow inherits its color from color
		self.element.style.color = darken(self.color);

		// positioning, THIS SHOULD BE CHANGED
		self.element.style.top = self.j*tilewidth+"px"
		self.element.style.left = (5-self.i)*tilewidth+"px"

		// initializes the elemnt with zero rotation so rotations on click are smooth
		self.element.style.transform = "perspective(100px) rotateX("+self.Vangle+"deg) rotateY("+self.Hangle+"deg)";	
	}

	self.flip = function(dir,inverse = false)
	{
		if (inverse) {
			inverse = -1
		}
		else
		{
			inverse = 1
		}

		// console.log(inverse)
		current_color_index = colors.indexOf(self.color);
		new_color_index = ((current_color_index+inverse*1)%6+6)%6
		new_color = colors[new_color_index]
		self.color = new_color
		
		self.element.style.background = new_color;
		self.element.style.color = darken(new_color);
		
		if (dir == "right")
			{
				self.Hflip_counter+=1;
				if (self.Vflip_counter%2==0) {self.Hangle+=inverse*180;}
				else {self.Hangle-=inverse*180;}
			}
		else if (dir == "left")
			{
				self.Hflip_counter+=1;
				if (self.Vflip_counter%2==0) {self.Hangle-=inverse*180;}
				else {self.Hangle+=inverse*180;}
			}
		else if (dir == "up") 
			{
				self.Vflip_counter+=1;
				self.Vangle-=inverse*180;
			}
		else if (dir ==  "down") 
			{
				self.Vflip_counter+=1;
				self.Vangle+=inverse*180;
			}
		else
		{
				self.Zangle+=360
		}

		self.element.style.transform = "perspective(100px) rotateX("+self.Vangle+"deg) rotateY("+self.Hangle+"deg) rotateZ("+self.Zangle+"deg)";
		self.element.style.boxShadow = ((-1)**self.Hflip_counter*5)+"px "+((-1)**self.Vflip_counter*5)+"px 0px 0px";

		click()
	}

	self.generate()
	self.element.onclick = function(){move(self.i,self.j,"")}
}