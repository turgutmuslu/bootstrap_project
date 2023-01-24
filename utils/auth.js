export function saveUserData(user) {
    const localData = {
        user:{...user, logged_in:new Date()}
    }
    localStorage.setItem('user', localData)
  }
  
  export function getUserData() {
    return localStorage.getItem('user')
  }
  
  export function deleteUserData() {
    localStorage.removeItem('user')
  }
  