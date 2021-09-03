import {cardType} from '../types'

const INITIAL_STATE = {
  loading: false,
  all: [],
  upload: {},
  selected: {},
  filtred: [],
  page: 1,
  error:[]

}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cardType.CARD_LOADING:
    state.error = []
    state.loading = action.status
    return state
    case cardType.CARD_ALL:
    state.all = state.all.concat(action.data.cards)
    state.page += 1
    state.loading = false
    return state
    case cardType.CARD_EDIT:
    state.selected = action.data
    state.loading = false
    return state
    case cardType.CARD_CREATE:
    state.loading = false
    return state
    case cardType.CARD_ERROR:
    const err = [...state.error, action.data]
    state.loading = false
    state.error = err;
    return state
    default:
    return state
  }
}

export default reducer
