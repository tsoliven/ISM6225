let reservations = [];

function addReservation() {
  const name = document.getElementById('guestName').value;
  const room = document.getElementById('roomType').value;
  const checkIn = document.getElementById('checkIn').value;
  const checkOut = document.getElementById('checkOut').value;

  if(!name || !room || !checkIn || !checkOut){
    alert("Please fill in all fields.");
    return;
  }

  const existingIndex = reservations.findIndex(r => r.name === name);
  if(existingIndex >= 0){
    reservations[existingIndex] = {name, room, checkIn, checkOut};
  } else {
    reservations.push({name, room, checkIn, checkOut});
  }

  renderTable();
  clearForm();
}

function deleteReservation(name){
  reservations = reservations.filter(r => r.name !== name);
  renderTable();
}

function renderTable(){
  const tbody = document.querySelector('#reservationTable tbody');
  tbody.innerHTML = '';
  reservations.forEach(r => {
    const row = `<tr>
      <td>${r.name}</td>
      <td>${r.room}</td>
      <td>${r.checkIn}</td>
      <td>${r.checkOut}</td>
      <td><button class="btn-outline" onclick="deleteReservation('${r.name}')">Delete</button></td>
    </tr>`;
    tbody.insertAdjacentHTML('beforeend', row);
  });
}

function clearForm(){
  document.getElementById('guestName').value = '';
  document.getElementById('roomType').value = '';
  document.getElementById('checkIn').value = '';
  document.getElementById('checkOut').value = '';
}