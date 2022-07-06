var alterador = document.querySelector('.js-botao-chaveador');


alterador.onclick = function() {
	var menu = document.querySelector('.js-menu');
	menu.classList.toggle('menu--exibindo')
}