import asyncReducer from './index'

describe('reducers', () => {
  describe('asyncReducer', () => {
    it('should provide the initial state', () => {
      expect(asyncReducer(undefined, {})).toEqual({
        balance: 0,
        isFetching: false,
        isError: false
    })
    })

    it('should provide the stub state', () => {
        expect(asyncReducer(undefined, { type: 'REC_BALANCE',data:{
            balance: 2
        }})).toEqual({
          balance: 2,
          isFetching: false,
          isError: false
      })
      })

    it('should increment wallet', () => {
      expect(asyncReducer(undefined, { type: 'ADD_BALANCE',balance:{
          data: 2
      }})).toEqual({
        balance: 3,
        isFetching: false,
        isError: false
    })
    })

    it('should decrement wallet', () => {
      expect(asyncReducer(undefined, { type: 'REDUCE_BALANCE',balance:{
        data: 2
    }})).toEqual({
        balance: 1,
        isFetching: false,
        isError: false
    })
    })

 
  })
})