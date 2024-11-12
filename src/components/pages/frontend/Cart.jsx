import { Formik, Form } from 'formik'
import React from 'react'
import { InputText } from '../../helpers/formInputs'
import { ShoppingBasket, Trash2, X } from 'lucide-react'

const Cart = () => {
  return (
    <div className="w-[300px] h-screen fixed top-0 right-0 bg-white text-black z-50 grid grid-rows-[auto,_1fr,_auto] shadow-[rgba(17,_0,_26,_0.1)_0px_0px_16px]">
    <div className="cart-header p-3 flex justify-between mb-2 border-b border-gray-200">
      <h5 className="mb-0 text-black leading-tight">Your Cart</h5>


      <button>
        <X />
      </button>
    </div>


    <div className="cart-body px-2 h-[62vh] overflow-auto">

        <button
          className="flex justify-end mb-5 w-full"
        >
          <Trash2 />
        </button>


          <div className="size-[200px] mx-auto text-center flex flex-col justify-center items-center opacity-30">
            <ShoppingBasket size={100} className="mb-5" strokeWidth={1} />
            <h4>Cart is Empty</h4>
          </div>

    </div>


    <Formik
    >

          <Form className="mb-5">
            <div className="cart-summary p-2 ">
              <h5 className="mb-3 pb-2 ">Summary</h5>
              <ul className="flex justify-between items-center mb-1 text-xs space-y-2">
                <li className=" ">Subtotal</li>
                <li>
                  <span className="pr-1">PHP</span>

                </li>
              </ul>
              <ul className="flex justify-between items-center mb-1 text-xs space-y-2">
                <li className=" ">Service Fee</li>
                <li>
                  <span className="pr-1">PHP</span>

                </li>
              </ul>


              <ul className="flex justify-between items-center mb-2 text-xs space-y-2 ">
                <li className="">Total </li>


                <li>
                  <span className="pr-1">PHP</span>

                </li>
              </ul>


              <div className="input-wrap  flex items-center justify-between [&>input]:basis-[70px] mb-2">
                <InputText
                  label="Payment"
                  type="text"
                  name="transaction_payment"
                />
              </div>

              <div className="input-wrap  flex items-center justify-between [&>input]:basis-[70px] mb-2">
                <InputText
                  label="MOP"
                  type="text"
                  name="transaction_mop"
                />
              </div>




              <ul className="flex justify-between items-center   mb-5 text-xs space-y-2">
                <li className=" ">Change</li>
                <li>
                  <span className="pr-1">PHP</span>

                </li>
              </ul>


              <button
                className="btn btn-warning w-full text-center flex justify-center"
                type="submit"
              >
                Continue
              </button>
            </div>
          </Form>
    </Formik>
  </div>
  )
}

export default Cart