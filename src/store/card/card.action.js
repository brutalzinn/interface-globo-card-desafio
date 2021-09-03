import {
  getAllCards,
  insertCard
} from '../../services/cards.service'
import {  cardType  } from '../types'
import store from '../../store';
export const getAllCardsAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: cardType.CARD_LOADING, status: true })

      const stateRedux = store.getState();
      let page = stateRedux.cards.page
      let result = await getAllCards(page)
      dispatch({ type: cardType.CARD_ALL, data: result.data })

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
      dispatch({ type: cardType.CARD_LOADING, status: false })

    }
    catch (error) {
      console.log(error)
    }
  }
}
