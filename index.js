
alert ('Bienvenidos a mi CV Online');


/**cuando hago click en los botones del header me cambia el color de ese elemento en el body */

  document.getElementById('btnF').addEventListener('click', function() {
    
    document.getElementById('formacion').style.backgroundColor = '#a4f3a4';
  
  }); 
 
  document.getElementById('btnE').addEventListener('click', function() {
    
    document.getElementById('experiencia').style.backgroundColor = '#a4f3a4';
  
  }); 

  document.getElementById('btnC').addEventListener('click', function() {
    
    document.getElementById('cursos').style.backgroundColor = '#a4f3a4';
  
  }); 

  document.getElementById('btnA').addEventListener('click', function() {
    
    document.getElementById('aptitudes').style.backgroundColor = '#a4f3a4';
  
  }); 





/* 

  document.getElementById('formacion').addEventListener('mousemove', function() {

 */