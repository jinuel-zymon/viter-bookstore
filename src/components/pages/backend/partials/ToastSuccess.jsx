
import { CheckCircle, X } from 'lucide-react'
import React from 'react'
import { setSuccess } from '../../../store/StoreAction'
import { StoreContext } from '../../../store/storeContext'


const ToastSuccess = () => {
  const {store, dispatch} = React.useContext(StoreContext)
  const handleClose = () => dispatch(setSuccess(false))

  React.useEffect(()=> {
    setTimeout(() => {
      handleClose()
    }, 2000)
  })
  return (
    <div className='fixed top-5 left-1/2 -translate-x-1/2  bg-secondary min-w-[50px]  overflow-hidden rounded-md shadow-md border-success border'>
        <div className="flex items-center overflow-hidden pr-2">
            <div className='grid place-content-center bg-success basis-[35px] size-[50px] mr-3'>
                <CheckCircle size={18} className='text-white'/>
            </div>

            <p className='basis-[80%] mb-0'>{store.message}</p>

            <button className='basis-[10%]' onClick={handleClose}><X size={14}/></button>
        </div>

    </div>
  )
}

export default ToastSuccess