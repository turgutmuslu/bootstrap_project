export function saveUserData(user) {
    const expires = new Date();
    expires.setDate(expires.getDate() + 7); // expires in 7 days
    const userDataString = JSON.stringify(user);
    document.cookie = `loggeduser=${userDataString};expires=${expires.toUTCString()};path=/`;
  }
  
  export function checkAuthorization() {
    const cookies = document.cookie.split(";");
    let loggeduser = "";
    cookies.forEach(cookie => {
      if (cookie.startsWith("loggeduser=")) {
        loggeduser = cookie.split("=")[1];
      }
    });
    if (loggeduser !== "") {
      return JSON.parse(loggeduser);
    } else {
      return null;
    }
  }
  
  export function deleteUserData() {
    document.cookie = "loggeduser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
  