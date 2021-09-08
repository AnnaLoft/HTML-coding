import LoginApi from '../components/API/loginApi/loginApi';
import { BaseThunkType, InferActionTypes } from './root-reducer';

export type ActionTypes = InferActionTypes<typeof userReducerActions>
type ThunkType = BaseThunkType<ActionTypes>


export const initialUserState: any = {
    'unknown': { _id: 'unknown', password: 'unknown' }
}

export const UserReducer = (state = initialUserState, action: any) => {

    switch (action.type) {

        case 'SET_USER':
            return {
                ...action.newUser
            }

        default:
            return state;
    }

}

export const userReducerActions = {
    setUser: (newUser: any) =>
        ({ type: 'SET_USER', newUser: newUser } as const),
}




export const setUserThunk = (user: any): ThunkType => async (dispatch) => {
  
    
    const newUser = { [user._id]: user }
    dispatch(userReducerActions.setUser(newUser))
}

export const getUserThunk = (cat: any): ThunkType => async (dispatch) => {
    
}



