 var pesta = document.getElementById('pesta');
 var altura = pesta.offsetTop;

 window.addEventListener('scroll', function(){
 	if(window.pageYOffset > altura){
 		pesta.classList.add('fixed');
 	}else{
 		pesta.classList.remove('fixed');
 	}
 	
 });




