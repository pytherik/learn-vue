import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useUserStore = defineStore('users', () => {
  const user = ref(null);
  const errorMessage = ref("");

  const handleLogin = () => {
  }

  const handleSignup = (credentials) => {
    
    const {email, password, username} = credentials;

    console.log(password.value);
    const validateEmail = (email) => {
      return String(email)
          .toLowerCase()
          .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };

    if(password.length < 6) {
      console.log('passwort zu kurt');
      console.log(password.value);
      return errorMessage.value = "Passwort ist zu short";
    }

    if(username.length < 4) return errorMessage.value = "Username is too short";

    if(!validateEmail(email.value)) return errorMessage.value = "No valid email!"
  }

  const handleLogout = () => {
  }

  const getUser = () => {
  }

  return {user, handleLogin, handleSignup, handleLogout, getUser}
})
