import {
  getAllCards,
  insertCard,
  searchCard
} from '../../services/cards.service'
import {  cardType  } from '../types'
import store from '../../store';
const stateRedux = store.getState();

export const getAllCardsAction = (clearCards) => {
  return async (dispatch) => {
    try {
      dispatch({ type: cardType.CARD_LOADING, status: true })
      let page = stateRedux.cards.page

      if(clearCards){
        stateRedux.cards.page = 1
        page = 1
        stateRedux.cards.all = []
      }
      let result = await getAllCards(page)
      dispatch({ type: cardType.CARD_ALL, data: result.data })

    }
    catch (error) {
      dispatch({ type: cardType.CARD_ERROR, data: error.response.data })

    }
  }
}

export const searchCardAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: cardType.CARD_LOADING, status: true })
      stateRedux.cards.page = 1
      let page = stateRedux.cards.page
      let result = await searchCard(data, page)
      dispatch({ type: cardType.CARD_SEARCH, data: result.data })
    }
    catch (error) {
     dispatch({ type: cardType.CARD_ERROR, data: error.response.data })
    }
  }
}

export const insertCardAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: cardType.CARD_LOADING, status: true })
      await insertCard(data)
    }
    catch (error) {
      dispatch({ type: cardType.CARD_ERROR, data: error.response.data })
    }
  }
}
