if (localStorage.getItem("fx_local")) {
  window.location.href = "index.html";
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  var url = "https://script.google.com/macros/s/AKfycbwLRS80y9lZHiNMrR4mR_GZTS27J5aycIMelHx-Ajxnrp42IxEc4g0SxcoH48GXiUI5/exec";

  var data = {
    "username": username,
    "password": password
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(data)
  })
  .then(response => response.text())
  .then(responseText => {
    if (responseText === "success") {
      localStorage.setItem("fx_local", username);
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password!");
    }
  })
  .catch(error => console.error('Error:', error));
});
