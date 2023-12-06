'use client'
import { changeCheck } from '@/redux/features/checkoutSlice'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { useEffect } from 'react'
import InfoOrderBox from './InfoOrderBox'
import ProcedPayBox from './ProcedPayBox'

const CheckOutPaypal = () => {
  const dispatch = useAppDispatch()
  const check = useAppSelector(state => state.checkOut)
  useEffect(() => {
    return () => {
      dispatch(changeCheck({ descriptionCheck: '', amountCheck: '1', payType: '' }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <main>
      <section className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-10 lg:px-24 w-full gap-12">
        <InfoOrderBox descrip={check.descriptionCheck} amountMoney={check.amountCheck} payType={check.payType} />
        <ProcedPayBox descrip={check.descriptionCheck} amountMoney={check.amountCheck} />
      </section>
    </main>
  )
}

export default CheckOutPaypal
