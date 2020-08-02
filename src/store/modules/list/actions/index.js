export const Types = {
  ADD_PRODUCT_REQUEST: '@list/ADD_PRODUCT_REQUEST',
  TOGGLE_PRODUCT_REQUEST: '@list/TOGGLE_PRODUCT_REQUEST',
  UPDATE_PRODUCT_REQUEST: '@list/UPDATE_PRODUCT_REQUEST',
  DELETE_PRODUCT_REQUEST: '@list/DELETE_PRODUCT_REQUEST',
  ADD_NEW_LIST_REQUEST: '@list/ADD_NEW_LIST_REQUEST',
  GET_IMAGE_SUCCESS: '@list/GET_IMAGE_SUCCESS',
  GET_IMAGE_FAILURE: '@list/GET_IMAGE_FAILURE',
}

export const Creators = {
  addProduct: (product, list) => ({
      type: Types.ADD_PRODUCT_REQUEST,
      product,
      list,
  }),

  toggleProduct: productId => ({
    type: Types.TOGGLE_PRODUCT_REQUEST,
    productId,
  }),

  updateProduct: (product, list) => ({
    type: Types.UPDATE_PRODUCT_REQUEST,
    product,
    list,
  }),

  deleteProduct: productId => ({
    type: Types.DELETE_PRODUCT_REQUEST,
    productId,
  }),

  newList: () => ({
    type: Types.ADD_NEW_LIST_REQUEST,
  }),

  getImageSuccess: (product, img) => ({
    type: Types.GET_IMAGE_SUCCESS,
    product,
    img,
  }),

  getImageFailure: (product, img) => ({
    type: Types.GET_IMAGE_FAILURE,
    product,
    img,
  }),
}
