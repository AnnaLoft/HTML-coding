import CategoriesApi from '../components/API/categoriesApi/categoriesApi';
import { BaseThunkType, InferActionTypes } from './root-reducer';

export type ActionTypes = InferActionTypes<typeof categoriesReducerActions>
type ThunkType = BaseThunkType<ActionTypes>

export const initialCategoriesState: any = {
    "Action A": { _id: "unknown_Action A", CategoryData: { name: 'Action A', img: "./images/painter.png" }, userId: 'unknown' },
    "Action B": { _id: "unknown_Action B", CategoryData: { name: 'Action B', img: './images/unicorn.png' }, userId: 'unknown' },
    "Food": { _id: "unknown_Food", CategoryData: { name: 'Food', img: './images/diet.png' }, userId: 'unknown' },
    "Dishes": { _id: "Dishes", CategoryData: { name: 'Dishes', img: './images/dish.png' }, userId: 'unknown' },
    "Pets": { _id: "unknown_Pets", CategoryData: { name: 'Pets', img: './images/pet.png' }, userId: 'unknown' },
    "Animals": { _id: "unknown_Animals", CategoryData: { name: 'Animals', img: './images/chick.png' }, userId: 'unknown' },
    "Clothes": { _id: "unknown_Clothes", CategoryData: { name: 'Clothes', img: './images/clothes.png' }, userId: 'unknown' },
    "Emotion": { _id: "unknown_Emotion", CategoryData: { name: 'Emotion', img: './images/emotions.png' }, userId: 'unknown' },
    "Body": { _id: "unknown_Body", CategoryData: { name: 'Body', img: './images/anatomy.png' }, userId: 'unknown' },
    "Space": { _id: "unknown_Space", CategoryData: { name: 'Space', img: './images/solar-system.png' }, userId: 'unknown' },
    "Music": { _id: "unknown_Music", CategoryData: { name: 'Music', img: './images/music.png' }, userId: 'unknown' },
    "Profession": { _id: "unknown_Profession", CategoryData: { name: 'Profession', img: './images/job.png' }, userId: 'unknown' },
    "Weather": { _id: "unknown_Weather", CategoryData: { name: 'Weather', img: './images/weather.png' }, userId: 'unknown' },
    "Tales": { _id: "unknown_Tales", CategoryData: { name: 'Tales', img: './images/magic-book.png' }, userId: 'unknown' },
    "Beverages": { _id: "unknown_Beverages", CategoryData: { name: 'Beverages', img: './images/beverage.png' }, userId: 'unknown' },
    "Nature": { _id: "unknown_Nature", CategoryData: { name: 'Nature', img: './images/nature.png' }, userId: 'unknown' },
}

export const CategoriesReducer = (state = initialCategoriesState, action: any) => {

    switch (action.type) {

        case 'SET_CATEGORY':
            return {
                ...state,
                ...action.newCategory
            }
        case 'SET_ALL_CATEGORIES':
            return {
                ...state,
                ...action.newCategories
            }
        case 'UPDATE_CATEGORY':
            return {
                ...state,
                ...action.newCategories
            }
        case 'DELETE_CATEGORY':
            debugger
            delete state[action.category.CategoryData.name]
            return {
                ...state,
                
            }
       
        default:
            return state;
    }

}


export const categoriesReducerActions = {
    setCategory: (newCategory: any) =>
        ({ type: 'SET_CATEGORY', newCategory: newCategory } as const),
    setAllCategories: (categories: any) =>
        ({ type: 'SET_ALL_CATEGORIES', newCategories: categories } as const),
    updateCategory: (newCategory: any) =>
        ({ type: 'UPDATE_CATEGORY', newCategory: newCategory } as const),
    deleteCategory: (category: any) =>
        ({ type: 'DELETE_CATEGORY', category: category } as const),
  

}

export const deleteCategoryThunk = (category: any): ThunkType => async (dispatch) => {
    const res = await CategoriesApi.deleteCategory(category._id)
   
   

    dispatch(categoriesReducerActions.deleteCategory(res))
    dispatch(getAllCategoriesThunk)

}

export const updateCategoryThunk = (newCategory: any): ThunkType => async (dispatch) => {
    const resCategory = await CategoriesApi.putCategory(newCategory._id, newCategory)
  

    let inStoreCategoryName = newCategory._id.split('_')[1]


    dispatch(categoriesReducerActions.updateCategory({
        [inStoreCategoryName.toString()]: resCategory
    }))
}


export const setCategoryThunk = (newCategory: any): ThunkType => async (dispatch) => {
    const resCategory = await CategoriesApi.postCategory(newCategory)
    

    dispatch(categoriesReducerActions.setCategory({
        [resCategory.CategoryData.name]: newCategory
    }))
}

export const getCategoryThunk = (id: string): ThunkType => async (dispatch) => {
    let category = await CategoriesApi.getSingleCategory(id)
    let newCategory = { [category.CategoryData.name]: category }
    dispatch(categoriesReducerActions.setCategory(newCategory))
}

export const getAllCategoriesThunk = (): ThunkType => async (dispatch) => {
    let categories = await CategoriesApi.getAllCategories()
    const newCategories: any = {}
    categories.forEach((category: any) => newCategories[category.CategoryData.name] = category);
  

    dispatch(categoriesReducerActions.setAllCategories(newCategories))
}
