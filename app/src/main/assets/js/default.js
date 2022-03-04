// JavaScript Document
var n = 1;

$(document).ready(function(){
	listarTarefa();
});

function addTarefa(){
	let tarefa = $('#NovaTarefa').val();
	let texto = '';

	 texto += '<label>';
	 texto += '<input type="checkbox">';
     texto += '<span class="checkbox">✔</span>';
	 texto += tarefa+'</label><p>Excluir</p>';
	 texto += '<hr>';
	
	$("form.home").append(texto);
	localStorage.setItem('Nova Tarefa'+n, tarefa);
	n++;
}

function listarTarefa(){
	for (var i = 0; i < localStorage.length; i++){
	
	let tarefa = localStorage.getItem(localStorage.key(i));
	let texto = '';
	 texto += '<label>';
	 texto += '<input type="checkbox">';
     texto += '<span class="checkbox">✔</span>';
	 texto += tarefa+'</label><p>Excluir</p>';
	 texto += '<hr>';
	
	$('form.home').append(texto);
		n++;
		
	}
	
}