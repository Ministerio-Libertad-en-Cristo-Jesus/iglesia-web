import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
interface Check {
  amountCheck: string
  descriptionCheck: string
  payType: string
}

const initialState: Check = {
  amountCheck: '1',
  descriptionCheck: '',
  payType: ''
}

export const checkOutSlice = createSlice({
  name: 'checkOut',
  initialState,
  reducers: {
    changeCheck: (state, actions: PayloadAction<Check>) => {
      state.amountCheck = actions.payload.amountCheck
      state.descriptionCheck = actions.payload.descriptionCheck
      state.payType = actions.payload.payType
    }
  }
})

export default checkOutSlice.reducer
export const { changeCheck } = checkOutSlice.actions
