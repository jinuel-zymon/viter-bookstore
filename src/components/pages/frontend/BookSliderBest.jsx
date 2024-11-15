import { ChevronLeft, ChevronRight, Dot, Plus, ShoppingCart } from "lucide-react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imgPath } from "../../helpers/functions-general";
import { StoreContext } from "../../store/storeContext";
import { setMessage, setSuccess } from "../../store/StoreAction";
import ToastSuccess from "../backend/partials/ToastSuccess";

const BookSliderBest = ({title="", category, bestsellersCart, setBestsellersCart}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className='' onClick={onClick}>
        <ChevronRight
          className='absolute -top-12 right-3'
          stroke={"#382110"}
          size={30}
        />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className='absolute -top-12 right-12' onClick={onClick}>
        <ChevronLeft stroke={"#382110"} size={30} />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleAddBestsellers = (item) => {
    const exist = bestsellersCart.find((cart) => cart.bestsellers_aid === item.bestsellers_aid);


    if (exist !== undefined) {
      setBestsellersCart(
        bestsellersCart.map((cart) =>
          cart.bestsellers_aid === item.bestsellers_aid
            ? { ...exist, quantity: exist.quantity + 1 }
            : cart
        )
      );
    } else {
      setBestsellersCart([...bestsellersCart, { ...item, quantity: 1 }]);
    }
    setShowToppings(true)
    dispatch(setSuccess(true));
    dispatch(setMessage("Added to Cart!"));
  };

  return (
    <>
    
    <section className='pt-16 bg-[#F4F1EA] text-white'>
      <div className='container'>
        <h2>{title}</h2>
        <Slider {...settings} className='relative'>
        {category?.data.map((item, key) => (
          <div className='book-item group px-4 overflow-hidden' key={key}>
            <div className='bg-gray-100 border border-[#635C52] py-2 rounded-md flex flex-col justify-center items-center relative'>
              <h5 className='text-center mt-1 border border-[#635C52] p-1 rounded-md text-white bg-[#635C52]'>#{item.bestsellers_rank}</h5>
              <img
                src={`${imgPath}/${item.bestsellers_photo}`}
                alt=''
                className='h-[230px] w-[153px] my-2 mx-auto object-cover'
              />
             <h6 className='text-center truncate w-[80%]'>{item.bestsellers_title}</h6>
              <h6 className='text-center font-normal mb-3 truncate w-[80%]'>by {item.bestsellers_author}</h6>
              <h5 className="text-center text-[#927F64]">₱ {item.bestsellers_price}</h5>
              
              <div className='book-item-hover bg-[#635C52] absolute z-50 top-full w-full h-full transition-all bg-opacity-95 px-5 py-4 rounded-md flex flex-col justify-start items-center group-hover:top-0'>

                <div className="book-item-title mb-3">
                <h5 className='text-center text-white'>{item.bestsellers_title}</h5>
                <h6 className='text-center text-white font-normal'>by <span>{item.bestsellers_author}</span></h6>
                </div>
                
                <small className="mb-3">{item.bestsellers_type}</small>

                <div className="book-item-details flex justify-between italic mb-2">
                <small>{item.bestsellers_genre}</small>
                <Dot/>
                <small>{item.bestsellers_year}</small>
                </div>
                
                <small className="text-justify mb-4">{item.bestsellers_summary}</small>
                <button className='btn btn-warning justify-self-center'
                onClick={() => handleAddBestsellers(item)}>
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>

            </div>


          </div>
        ))}
        </Slider>
      </div>
    </section>

    {store.success && <ToastSuccess/>}
    </>
  );
};

export default BookSliderBest;
