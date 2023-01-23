import { saveUserData } from "./auth";

function login(username, password) {
  // make API call to verify username and password
  fetch("https://your-api-endpoint.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
  
  .then(response => response.json())
  .then(data => {
    if (data.authenticated) {
      console.log("Başarılı giriş: " + data.username);
      // Save user data in a cookie
      saveUserData(data);
      // Redirect to the homepage or protected page
      window.location.href = "/home";
    } else {
      console.log("Kullanıcı adı veya şifre yanlış.");
      // Show an error message or shake the login form
    }
  })
  .catch(error => {
    console.log("API çağrısı sırasında hata oluştu: " + error);
  });
}