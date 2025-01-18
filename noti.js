const localUsername = localStorage.getItem('fx_local');

async function fetchUserData(username) {
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyHiJOx7XmB6VxKG95GQT_AREMYpL9BwgiEauWheTFefsbYGUIkeVZp1wKvlivUeO7U/exec?username=' + username);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

async function initialize() {
    if (localUsername) {
        const userData = await fetchUserData(localUsername);
        if (userData && userData.match) {
            document.getElementById('counter').innerText = userData.password || 'N/A';
            document.getElementById('userId').innerText = userData.id || '';
        } else {
            error('User not found or not authorized.');
        }
    } else {
        alert('No user data found in local storage.');
    }
}

function toggleDetails() {
    const detailsPage = document.getElementById('details-page');
    detailsPage.style.display = detailsPage.style.display === 'block' ? 'none' : 'block';
}

window.onload = initialize;

document.getElementById('counter').addEventListener('click', toggleDetails);
