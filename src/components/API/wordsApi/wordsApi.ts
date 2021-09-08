const WordsApi = {
  userId: 'annaloft',

  postWord: async (body: any) => {
      const response = await fetch(`https://tranquil-tor-20074.herokuapp.com/api/words/${localStorage.getItem('user')}/`, {
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

  getAllWords: async () => {
    const response = await fetch(`https://tranquil-tor-20074.herokuapp.com/api/words/${localStorage.getItem('user')}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    return data
  },
  getAllWordsOfCategory: async (categoryName: string) => {
    const response = await fetch(`https://tranquil-tor-20074.herokuapp.com/api/words/all/${localStorage.getItem('user')}/${categoryName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
  
    return data
  },

  getSingleWord: async (id: any) => {
    const response = await fetch(`https://tranquil-tor-20074.herokuapp.com/api/words/${localStorage.getItem('user')}/${id}`, {
      method: 'GET'
    })

    const data = await response.json()
    return data
  },

  deleteWord: async (id: any) => {
    const response = await fetch(`https://tranquil-tor-20074.herokuapp.com/api/words/${localStorage.getItem('user')}/${id}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    
    return data
  },

  putWord: async (_id: any, body: any) => {
    const response = await fetch(`https://tranquil-tor-20074.herokuapp.com/api/words/${localStorage.getItem('user')}/${_id}`, {
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

export default WordsApi