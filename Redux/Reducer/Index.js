import {combineReducers} from 'redux'
import CartReducer from './CartReducer'

const Reducer = combineReducers({
    cartReducer: CartReducer
})

export default Reducer