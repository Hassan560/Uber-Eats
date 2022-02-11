import {createStore} from 'redux'
import Reducer from './Reducer/Index'

const Store = createStore(Reducer)
export default Store