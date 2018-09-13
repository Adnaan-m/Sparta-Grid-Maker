document.addEventListener('DOMContentLoaded', function(){

  var rownum = prompt('how many rows would you like?');
  var colnum = prompt('how many columns would you like?');

  const board = document.getElementById('board');

  for (i = 0; i<rownum; i++) {
    const section = document.createElement('div');
    section.setAttribute('class', 'row');
    board.appendChild(section);

    for (a= 0; a<colnum; a++) {
      const section = document.createElement('div');
      section.setAttribute('class', 'col');
      board.appendChild(section);
      section.addEventListener('click', () =>{
      });
    }
  }
});
