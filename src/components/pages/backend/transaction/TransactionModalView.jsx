
import React from 'react'
import ModalWrapper from '../partials/modals/ModalWrapper'
import { X } from 'lucide-react'

import LoaderTable from '../partials/LoaderTable'
import NoData from '../partials/icons/NoData'
import ServerError from '../partials/icons/ServerError'
import { StoreContext } from '../../../store/storeContext'
import useQueryData from '../../../custom-hook/useQueryData'
import { setIsAdd } from '../../../store/StoreAction'


const TransactionModalView = ({id}) => {
    const {dispatch} = React.useContext(StoreContext)


    const {
        isLoading,
        isFetching,
        error,
        data: result,
      } = useQueryData (
       `/v1/transaction/${id}`, // endpoint
       "get", // method
        "transaction",
      );


  return (
    <>
    <ModalWrapper>
    <div className="modal-main bg-primary z-50 max-w-[850px] w-full rounded-md">
      <div className="modal-header p-2 border-b border-line flex justify-between items-center">
        <h6 className="mb-0 leading-none text-dark">
          View Transaction
        </h6>
        <button onClick={() => dispatch(setIsAdd(false))}>
          <X />
        </button>
      </div>
      <div className="modal-body p-2 px-4 text-center"> 
        <div className="table-wrapper mb-4">
            <table>
                <thead>
                    <tr className='text-left'>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>  
                </thead>  


                <tbody>
                {((isLoading && !isFetching) || result?.data.length === 0) && (
                  <tr>
                    <td colSpan="100%">
                      {isLoading ? (
                        <LoaderTable count={30} cols={6} />
                      ) : (
                        <NoData />
                      )}
                    </td>
                  </tr>
                )}
                {error && (
                  <tr>
                    <td colSpan="100%" className="p-10">
                      <ServerError />
                    </td>
                  </tr>
                )}


                {result?.data[0].transaction_cart_books !== undefined &&
                  JSON.parse(result?.data[0].transaction_cart_books).map(
                    (item, key) => {

                      return (
                        <tr className="text-left" key={key}>
                          <td>{item.books_title}</td>
                          <td>{item.books_price}</td>
                          <td>{item.quantity}</td>
                          <td>
                            {Number(item.books_price) * Number(item.quantity)}
                          </td>
                        </tr>
                      );
                    }
                  )}

                {result?.data[0].transaction_cart_bestsellers !== undefined &&
                  JSON.parse(result?.data[0].transaction_cart_bestsellers).map(
                    (item, key) => {

                      return (
                        <tr className="text-left" key={key}>

                          <td>{item.bestsellers_title}</td>
                          <td>{item.bestsellers_price}</td>
                          <td>{item.quantity}</td>
                          <td>
                            {Number(item.bestsellers_price) * Number(item.quantity)}
                          </td>
                        </tr>
                      );
                    }
                  )}


                </tbody>
            </table>    
        </div>
      </div>


     
    </div>
  </ModalWrapper>
  </>
  )
}


export default TransactionModalView




