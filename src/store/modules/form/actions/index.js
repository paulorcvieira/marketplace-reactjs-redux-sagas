export const Types = {
  START_ADD_REQUEST: '@form/START_ADD_REQUEST',
  FINISH_ADD_SUCCESS: '@form/FINISH_ADD_SUCCESS',
  START_UPDATE_REQUEST: '@form/START_UPDATE_REQUEST',
  FINISH_UPDATE_SUCCESS: '@form/FINISH_UPDATE_SUCCESS',
}

export const Creators = {
  startAdd: list => ({
    type: Types.START_ADD_REQUEST,
    list,
  }),

  finishAdd: () => ({
    type: Types.FINISH_ADD_SUCCESS,
  }),

  startUpdate: (list, product) => ({
    type: Types.START_UPDATE_REQUEST,
    product,
    list,
  }),

  finishUpdate: product => ({
    type: Types.FINISH_UPDATE_SUCCESS,
  }),
}