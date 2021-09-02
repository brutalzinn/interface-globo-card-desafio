// import as libs
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// importação dos reducers
import { reducer as toastrReducer } from 'react-redux-toastr'
import CardReducer from './card/card.reducer'


const reducers = combineReducers({
  card: CardReducer
})

// middlewares de redux
const middlewares = [thunk]

// compose junta os middlewares e ferramentas de debug

const compose = composeWithDevTools(applyMiddleware(...middlewares))

// criar a store do redux

const store = createStore(reducers, compose)

export default store