import {
  getAllCargo
} from '../../services/cargo.service'
import {cardType} from '../types'

export const getAll = () => {
  return async (dispatch) => {
    try {

      let result = await getAllCargo()
      console.log('cargo list',result.data)
      dispatch({ type: cardType.CARD_ALL, data: result.data })
    }
    catch (error) {
    }
  }
}

