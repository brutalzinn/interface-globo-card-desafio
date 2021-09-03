import {
  getAllCards
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

