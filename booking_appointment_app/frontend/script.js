const apiBase = 'http://localhost:3000/appointments';
let editingId = null;

window.onload = () => {
  fetchAppointments();
};

function handleSubmit() {
  const username = document.getElementById('username').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  if (!username || !phone || !email) {
    alert('All fields required!');
    return;
  }

  const data = { username, phone, email };

  if (editingId) {
    fetch(`${apiBase}/${editingId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(() => {
      editingId = null;
      resetForm();
      fetchAppointments();
    });
  } else {
    fetch(apiBase, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(() => {
      resetForm();
      fetchAppointments();
    });
  }
}

function fetchAppointments() {
  fetch(apiBase)
    .then(res => res.json())
    .then(data => {
      const entriesDiv = document.getElementById('entries');
      entriesDiv.innerHTML = '';

      data.forEach(entry => {
        const div = document.createElement('div');
        div.className = 'entry';
        div.innerHTML = `
          <p><strong>Username:</strong> ${entry.username}</p>
          <p><strong>Phone:</strong> ${entry.phone}</p>
          <p><strong>Email:</strong> ${entry.email}</p>
          <button onclick="editEntry(${entry.id}, '${entry.username}', '${entry.phone}', '${entry.email}')">Update</button>
          <button onclick="deleteEntry(${entry.id})" style="background: #dc3545;">Delete</button>
        `;
        entriesDiv.appendChild(div);
      });
    });
}

function editEntry(id, username, phone, email) {
  document.getElementById('username').value = username;
  document.getElementById('phone').value = phone;
  document.getElementById('email').value = email;
  editingId = id;
}

function deleteEntry(id) {
  fetch(`${apiBase}/${id}`, { method: 'DELETE' })
    .then(() => fetchAppointments());
}

function resetForm() {
  document.getElementById('username').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('email').value = '';
}
