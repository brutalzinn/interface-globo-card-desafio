import {
  getAllCards,
  insertCard
} from '../../services/cards.service'
import {  cardType  } from '../types'

export const getAllCardsAction = () => {
  return async (dispatch) => {
    try {

      let result = await getAllCards()
      console.log('card list',result.data.cards)
      dispatch({ type: cardType.CARD_ALL, data: result.data })
    }
    catch (error) {
      console.log(error)
    }
  }
}

export const insertCardAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: cardType.CARD_LOADING, status: false })

      await insertCard(data)
      dispatch({ type: cardType.CARD_LOADING, status: true })

    }
    catch (error) {
      console.log(error)
    }
  }
}
