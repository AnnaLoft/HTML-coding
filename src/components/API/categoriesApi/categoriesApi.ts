const CategoriesApi = {

  postCategory: async (body: any) => {
    const response = await fetch(`https://tranquil-tor-20074.herokuapp.com/api/categories/${localStorage.getItem('user')}/`, {
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
  },

  getAllCategories: async () => {
    const response = await fetch(`https://tranquil-tor-20074.herokuapp.com/api/categories/${localStorage.getItem('user')}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
   
    return data
  },

  getSingleCategory: async (id: any) => {
    const response = await fetch(`https://tranquil-tor-20074.herokuapp.com/api/categories/${localStorage.getItem('user')}/${id}/`, {
      method: 'GET'
    })

    const data = await response.json()
    return data
  },

  deleteCategory: async (id: any) => {
    const response = await fetch(`https://tranquil-tor-20074.herokuapp.com/api/categories/${localStorage.getItem('user')}/${id}/`, {
      method: 'DELETE'
    })
    const data = await response.json()
    return data
  },

  putCategory: async (id: string, body: any) => {
    const response = await fetch(`https://tranquil-tor-20074.herokuapp.com/api/categories/${localStorage.getItem('user')}/${id}/`, {
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

export default CategoriesApi