import {cardType} from '../types'

const INITIAL_STATE = {
  loading: false,
  success: false,
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
    state.success = false
    return state

    case cardType.CARD_ALL:
    state.all = state.all.concat(action.data.cards)
    state.page += 1
    state.error = []
    state.loading = false
    return state

    case cardType.CARD_SEARCH:
    state.all = action.data.cards
    state.page += 1
    state.loading = false
    state.error = []
    return state

    case cardType.CARD_EDIT:
    state.selected = action.data
    state.loading = false
    state.error = []
    return state

    case cardType.CARD_SUCCESS:
    state.loading = false
    state.success = true
    state.error = []
    return state

    case cardType.CARD_CLEAR_ERROR:
    state.loading = false
    state.error = []
    return state

    case cardType.CARD_CREATE:
    state.loading = false
    state.success = true
    state.error = []
    return state

    case cardType.CARD_ERROR:
    const err = [...state.error, action.data]
    state.loading = false
    state.success = false
    state.error = err;
    return state

    default:
    return state
  }
}

export default reducer
