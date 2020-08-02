import { call, put } from 'redux-saga/effects'
import { services } from '../../../services/api'
import { Creators as ListActions } from '../actions'

import genericImg from '../../../../assets/genericImg.jpg'

export function* getImageRequest(action) {
  try {
    const img = yield call(services.getImages, action.product.product)
    yield put(ListActions.getImageSuccess(action.product, img))
  } catch(err) {
    console.log(err)
    yield put(ListActions.getImageFailure(action.product, genericImg))
  }
}