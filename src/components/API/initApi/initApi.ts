const initApi = {
  initPostWord: async (word: any) => {
    const newWord = {
      _id: `${localStorage.getItem('user')}_${word.eng}`,
      WordData: {
        eng: word.eng,
        rus: word.rus,
        img: btoa(word.img),
        sound: btoa(word.sound),
        category: word.category,
        Statistics: { clicks: 0, wrong: 0, right: 0, percent: 0 }
      },
      userId: localStorage.getItem('user')
    } as any
    const response = await fetch(`https://tranquil-tor-20074.herokuapp.com/api/words/${localStorage.getItem('user')}`, {
      method: 'POST',
      body: JSON.stringify(newWord),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    
  },

  initPostCategory: async (category: any) => {
    const newCategory = {
      _id: `${localStorage.getItem('user')}_${category.name}`,
      CategoryData: {
        name: category.name,
        img: btoa(category.img)
      },
      userId: localStorage.getItem('user')
    }
    const response = await fetch(`https://tranquil-tor-20074.herokuapp.com/api/categories/${localStorage.getItem('user')}`, {
      method: 'POST',
      body: JSON.stringify(newCategory),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
   

  }

}

export default initApi