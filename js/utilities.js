colors = ["rgb(255, 102, 99)","rgb(254, 177, 68)","rgb(253, 253, 151)","rgb(158, 224, 158)","rgb(148, 183, 227)","rgb(204, 153, 201)"]

// Darkends a color string of the form "rgb(r,g,b)"
function darken(c)
{
	
	lst = c.substring(4,c.length-1).split(',')
	r = lst[0]*.8
	g = lst[1]*.8
	b = lst[2]*.8
	return("rgb("+r+","+g+","+b+")")
}

// chose a random list element
function random_choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};