import React from "react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { imgPath } from "../../../helpers/functions-general";
import { Dot, ShoppingCart, X } from "lucide-react";

const BestsellersModalView = ({itemEdit,setIsView}) => {
  const handleClose = () => setIsView(false)

  return (
    <ModalWrapper>
      <div className='view-modal z-10 bg-white max-w-[600px] w-full rounded-md pb-10 pt-3'>
      
      <div className="view-header flex justify-between items-start border-b border-gray-200 mb-5 px-3">
        <div className="header-text mb-2">
          <h6 className="mb-0">Website View</h6>
          <small>This is how the information are displayed on the website.</small>
        </div>

        <button onClick={handleClose}><X size={20}/></button>
      </div>

      <div className="view-text grid grid-cols-2 mb-2">
          <h6 className="text-center">Normal View</h6>
          <h6 className="text-center">Hover View</h6>
        </div>

      <div className="view-bestsellers grid grid-cols-2">
        <div className='book-item overflow-hidden w-[220px] h-[390px] mx-auto'>
          <div className='bg-gray-100 border border-[#635C52] py-2 rounded-md flex flex-col justify-center items-center relative'>
          <h5 className='text-center mt-1 border border-[#635C52] p-1 rounded-md text-white bg-[#635C52]'>#{itemEdit.bestsellers_rank}</h5>
            <img
              src={`${imgPath}/${itemEdit.bestsellers_photo}`}
              alt=''
              className='h-[230px] w-[153px] my-2 mx-auto object-cover'
            />
            <h6 className='text-center truncate w-[80%]'>
              {itemEdit.bestsellers_title}
            </h6>
            <h6 className='text-center font-normal mb-3 truncate w-[80%]'>by {itemEdit.bestsellers_author}</h6>
            <h5 className='text-center text-[#927F64]'>₱ {itemEdit.bestsellers_price}</h5>
          </div>
        </div>
        <div className='book-item-hover bg-[#635C52] w-[220px] h-[390px] transition-all bg-opacity-95 px-5 py-4 rounded-md flex flex-col justify-start items-center mx-auto'>
                <div className='book-item-title mb-3'>
                  <h5 className='text-center text-white'>
                  {itemEdit.bestsellers_title}
                  </h5>
                  <h6 className='text-center text-white font-normal'>
                    by <span>{itemEdit.bestsellers_author}</span>
                  </h6>
                </div>

                <small className='mb-3 text-white'>{itemEdit.bestsellers_type}</small>

                <div className='book-item-details flex justify-between italic mb-2 text-white'>
                  <small>{itemEdit.bestsellers_genre}</small>
                  <Dot />
                  <small>{itemEdit.bestsellers_year}</small>
                </div>

                <small className='text-justify mb-4 text-white'>
                {itemEdit.bestsellers_summary}
                </small>
                <button className='btn btn-warning justify-self-center'>
                  <ShoppingCart size={18} /> Add to Cart
                </button>
        </div>
      </div>  
      </div>


    </ModalWrapper>
  );
};

export default BestsellersModalView;
