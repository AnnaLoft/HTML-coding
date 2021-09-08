
export let randomIp = Math.random() - 1000
const initLocalStorageLogin = () => {
  if (localStorage.getItem('user')) { return } else {
    
    localStorage.setItem('user', `${randomIp}`)
  }
}

export default initLocalStorageLogin