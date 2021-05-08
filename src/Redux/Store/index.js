import {configureStore , getDefaultMiddleware} from '@reduxjs/toolkit';
import { currentUserReducer, fetchDataByEmailReducer, fetchDataReducer, IsLoadingReducer, ScoreReducer, TimeFinishedReducer, TimerReducer } from '../Reducers';

const reducer = {
    Datas: fetchDataReducer , 
    Timer : TimerReducer,
    TimeFinsh : TimeFinishedReducer,
    Score : ScoreReducer,
    User : currentUserReducer,
    UserByEmail : fetchDataByEmailReducer,
    IsLoading : IsLoadingReducer
}


export const store = configureStore({
    reducer,
    middleware : getDefaultMiddleware({
        serializableCheck : false
    })
})

