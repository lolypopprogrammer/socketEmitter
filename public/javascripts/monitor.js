$(function(){
  //make connection
  const socket = io.connect('http://localhost:3000');

  const name = document.querySelector('#name');
  const photo = document.querySelector('#photo');
  const answer = document.querySelector('#answer');

  //Listen on new_visit
  socket.on("visit", (data) => {
    name.innerHTML = `${data.fullName}`;
    photo.src = data.photo;

    setTimeout(() => {

      name.innerHTML = '';
      photo.src = '';
      answer.innerHTML = '';

    }, 5000);

  })

});