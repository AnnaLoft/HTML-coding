const LoginApi = {

  postLogin: async (body: any) => {
    try {
      const response = await fetch(`https://tranquil-tor-20074.herokuapp.com/api/users/`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
     
      if (response.status === 400) {
        return response.status
      } else {
        return data
      }
    } catch (error) {
   
    }
  },

  getSingleLogin: async (id: any) => {
    const response = await fetch(`https://tranquil-tor-20074.herokuapp.com/api/users/${id}`, {
      method: 'GET'
    })

    const data = await response.json()
    return data
  },

  deleteLogin: async (id: any) => {
    const response = await fetch(`https://tranquil-tor-20074.herokuapp.com/api/users/${id}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    return data
  },

  putLogin: async (id: any, body: any) => {
    const response = await fetch(`https://tranquil-tor-20074.herokuapp.com/api/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    return data
  }


}

export default LoginApi