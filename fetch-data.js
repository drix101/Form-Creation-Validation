// Define the async function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> to hold the user list
        const userList = document.createElement('ul');

        // Loop through users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the user list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors by displaying a failure message
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Run fetchUserData when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
