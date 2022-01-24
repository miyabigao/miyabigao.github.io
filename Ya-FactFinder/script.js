function fact1(){
	document.querySelector('#factBox').innerHTML = 
	"<h3>One of the ingredients needed to make dynamite is peanuts.</h3><hr><img src='images/f1.jpg' >";
}

function fact2(){
	document.querySelector('#factBox').innerHTML = 
	"<h3>Snails take the longest naps! They can sleep for up to 3 years!</h3><hr><img src='images/f2.jpg'>";
}

function fact3(){
	document.querySelector('#factBox').innerHTML = 
	"<h3>Hippopotamus milk is pink.</h3><hr><img src='images/f3.jfif'>";
}

function fact4(){
	document.querySelector('#factBox').innerHTML = 
	"<h3>The average person spends two weeks of their life waiting at traffic lights.</h3><hr><img src='images/f4.jfif'>";
}

function fact5(){
	document.querySelector('#factBox').innerHTML = 
	"<h3>Don’t like mosquitoes?  Get a bat.  They could eat 3,000 insects a night.</h3><hr><img src='images/f5.png'>";
}

function t1(){
	document.querySelector('html').style.
	backgroundColor = "#A59132";
	document.querySelector('body').style.
	backgroundColor = "#A59132";
	document.querySelector('main').style.
	backgroundColor = "#A59132";
	document.querySelector('section').style.
	backgroundColor = "#FFFBDB";
	document.querySelector('section').style.
	borderColor = "#da7422";
	document.querySelector('#factBox').style.
	color = "#30362F";
	
	
	var topBox = document.querySelector('#menu').getElementsByTagName('input');
	var bottomBox = document.querySelector('#theme').getElementsByTagName('input');
	
	for(var i = 0;i < topBox.length ;i++ ){
		topBox[i].style.color = "#FFFBDB";
		topBox[i].style.backgroundColor = "#30362F";
	}

	for(var i = 0;i < bottomBox.length ;i++ ){
		bottomBox[i].style.color = "#FFFBDB";
		bottomBox[i].style.backgroundColor = "#30362F";
	}

}

function t2(){
	document.querySelector('html').style.
	backgroundColor = "#9DD9D2";
	document.querySelector('body').style.
	backgroundColor = "#9DD9D2";
	document.querySelector('main').style.
	backgroundColor = "#9DD9D2";
	document.querySelector('section').style.
	backgroundColor = "#F4D06F";
	document.querySelector('section').style.
	borderColor = "#FF8811";
	document.querySelector('#factBox').style.
	color = "#392F5A";
	
	
	var topBox = document.querySelector('#menu').getElementsByTagName('input');
	var bottomBox = document.querySelector('#theme').getElementsByTagName('input');
	
	for(var i = 0;i < topBox.length ;i++ ){
		topBox[i].style.color = "#FFF8F0";
		topBox[i].style.backgroundColor = "#392F5A";
	}

	for(var i = 0;i < bottomBox.length ;i++ ){
		bottomBox[i].style.color = "#FFF8F0";
		bottomBox[i].style.backgroundColor = "#392F5A";
	}

}

function t3(){
	document.querySelector('html').style.
	backgroundColor = "#474448";
	document.querySelector('body').style.
	backgroundColor = "#474448";
	document.querySelector('main').style.
	backgroundColor = "#474448";
	document.querySelector('section').style.
	backgroundColor = "#F1F0EA";
	document.querySelector('section').style.
	borderColor = "#2D232E";
	document.querySelector('#factBox').style.
	color = "#534B52";
	
	
	var topBox = document.querySelector('#menu').getElementsByTagName('input');
	var bottomBox = document.querySelector('#theme').getElementsByTagName('input');
	
	for(var i = 0;i < topBox.length ;i++ ){
		topBox[i].style.color = "#E0DDCF";
		topBox[i].style.backgroundColor = "#2D232E";
	}

	for(var i = 0;i < bottomBox.length ;i++ ){
		bottomBox[i].style.color = "#E0DDCF";
		bottomBox[i].style.backgroundColor = "#2D232E";
	}

}