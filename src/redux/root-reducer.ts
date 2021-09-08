import { CategoriesReducer } from './categories-reducer';
import { WordsReducer } from './words-reducer';
import { UserReducer } from './user-reducer';
import { Action, combineReducers } from "redux";
import { ThunkAction } from 'redux-thunk';


export const RootReducer = combineReducers({
    users: UserReducer,
    words: WordsReducer,
    categories: CategoriesReducer
})

type RootReducerType = typeof RootReducer;

export type AppStateType = ReturnType<RootReducerType>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
