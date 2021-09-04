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
      dispatch({ type: cardType.CARD_ERROR, data: error.response ? error.response.data : "Ocorreu um erro na listagem de cards. Tente novamente." })

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
     dispatch({ type: cardType.CARD_ERROR, data: error.response ? error.response.data : "Ocorreu um erro ao pesquisar o card"})
    }
  }
}

export const insertCardAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: cardType.CARD_LOADING, status: true })
      await insertCard(data)
      dispatch({ type: cardType.CARD_CREATE })

    }
    catch (error) {
      dispatch({ type: cardType.CARD_ERROR, data: error.response ? error.response.data : "Ocorreu um erro ao inserir o card"})
    }
  }
}
