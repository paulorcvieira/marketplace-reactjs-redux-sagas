import { takeLatest, all } from 'redux-saga/effects'

import { Types as ListTypes } from './list/actions'

import { getImageRequest } from './list/sagas'

export default function* rootSaga() {
  return yield all([
    takeLatest(ListTypes.ADD_PRODUCT_REQUEST, getImageRequest)
  ])
}