// Get form and table elements
const userForm = document.getElementById('userForm');
const userTable = document.querySelector('#userTable tbody');

let users = [];
let editIndex = -1; // To keep track of editing user

// Function to render user data in the table
function renderUsers() {
    userTable.innerHTML = '';
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.address}</td>
            <td class="actions">
                <button class="edit" onclick="editUser(${index})">Edit</button>
                <button class="delete" onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        userTable.appendChild(row);
    });
}

// Function to add or update user
userForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    const newUser = { name, email, phone, address };

    if (editIndex >= 0) {
        // Update existing user
        users[editIndex] = newUser;
        editIndex = -1;
    } else {
        // Add new user
        users.push(newUser);
    }

    userForm.reset();
    renderUsers();
});

// Function to delete user
function deleteUser(index) {
    users.splice(index, 1);
    renderUsers();
}

// Function to edit user
function editUser(index) {
    const user = users[index];
    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
    document.getElementById('phone').value = user.phone;
    document.getElementById('address').value = user.address;
    editIndex = index;
}

// Initial rendering
renderUsers();
