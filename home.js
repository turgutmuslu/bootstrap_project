import { checkAuthorization } from "./auth";

class HomePage extends React.Component {
componentDidMount() {
  const userData = checkAuthorization();
  if (!userData) {
    // Redirect to login page
    window.location.href = "/login";
  } else {
    console.log("Oturum açmış kullanıcı: " + userData.username);
    // Render the protected content
  }
}

logout() {
  // Delete user data from cookie
  deleteUserData();
  // Redirect to login page
  window.location.href = "/login";
}

render() {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <button onClick={this.logout}>Logout</button>
      {/* Protected content */}
    </div>
    );
}
}