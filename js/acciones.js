$(document).ready(function(e){
$("#javi").height( $("#principal").height() - $("#cab").height() - $("#pie").height() );
});//ready
// JavaScript Document

function buscartodos ()
{
	//datos a mandar
	
	$.ajax({
		type:"POST",
		url: "http://192.168.1.182/biblioteca/consultalibros.php"		
	}).done (function(msg){
		var DatosLibros = JSON.parse(msg);
		if(DatosLibros.datos == 1)
		{
			$('#biblioteca').empty();
			for(var i=0;i<DatosLibros.libros.length;i++)
			{
				$('#biblioteca').append('<div style="float:left; width:50%" ><h2> ISBN: <span style="color:blue">'+DatosLibros.libros[i].ISBN+'</span></h2><hr><h2> Titulo: <span style="color:blue">'+DatosLibros.libros[i].Titulo+'</span> </h2><hr><h2> Autor: <span style="color:blue">'+DatosLibros.libros[i].Autor+'</span> </h2><hr><h2> Genero: <span style="color:blue">'+DatosLibros.libros[i].Genero+'</span> </h2><hr><h2> Numero de Paginas: <span style="color:blue">'+DatosLibros.libros[i].NP+'</span> </h2><hr><h2> Editorial: <span style="color:blue">'+DatosLibros.libros[i].EDI+'</span> </h2><hr><h2> Edicion: <span style="color:blue">'+DatosLibros.libros[i].EDICION+'</span> </h2><hr><h2> Numero de Libros: <span style="color:blue">'+DatosLibros.libros[i].NL+'</span> </h2></div><div style="float:left; width:50%" ><h2 align="left" style="color:#00F">LIBRO</h2><img src="http://192.168.1.182/biblioteca/recursos/fotos/'+DatosLibros.libros[i].ISBN+'.JPG" width="230" height="360"></div><div style="clear:both"><hr style="color:#F00; border:double"></div>');
			}
			
			
			
			$('#listado').trigger('pagecreate');
		}
		if (DatosJuegos.datos == 0)
		{
		 alert(" no hay libros que mostrar	")
		}
	});
}

$(document).ready(function(e){	
	document.addEventListener("deviceready",function(){
		
		$('#buscar_todos').tap(function(){
			
			buscartodos();
			$.mobile.changePage("#listado");
		});
		
		$('#buscar_autor').tap(function(){
			buscarAutor();
			$.mobile.changePage("#autor");
		});
	});
	});
	
	
	
	function buscarAutor ()
{
	//datos a mandar
	
	$.ajax({
		type:"POST",
		url: "http://192.168.1.182/biblioteca/consultaAutor.php"		
	}).done (function(msg){
		var DatosLibros = JSON.parse(msg);
		if(DatosLibros.datos == 1)
		{
			$('#liAutor').empty();
			for(var i=0;i<DatosLibros.libros.length;i++)
			{
				$('#liAutor').append('<div style="width:50%"><h2>Autor: <span style="color:blue">'+DatosLibros.libros[i].Autor+'</span></h2><hr><h2>Titulo: <span style="color:blue">'+DatosLibros.libros[i].Titulo+'</span></h2><hr><h2>Foto: <span style="color:blue">{Foto}</span></h2><img src="http://192.168.1.182/biblioteca/recursos/fotos/'+DatosLibros.libros[i].ISBN+'.JPG" width="230" height="360"></div><div style="clear:both"><hr style="color:#F00; border:double"></div>');
			}
			
			
			
			$('#autor').trigger('pagecreate');
		}
		if (DatosJuegos.datos == 0)
		{
		 alert(" no hay libros que mostrar	")
		}
	});
}
