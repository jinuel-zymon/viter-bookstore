import { ChevronLeft, ChevronRight, Dot, Plus, ShoppingCart } from "lucide-react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imgPath } from "../../helpers/functions-general";

const BookSliderBest = () => {
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

  return (
    <section className='pt-16 bg-[#F4F1EA] text-white'>
      <div className='container'>
        <h2>Best Sellers</h2>
        <Slider {...settings} className='relative'>

          <div className='book-item group px-4 overflow-hidden'>
            <div className='bg-gray-100 border border-[#635C52] py-2 rounded-md flex flex-col justify-center items-center relative'>
              <h5 className='text-center mt-1 border border-[#635C52] p-1 rounded-md text-white bg-[#635C52]'>#1</h5>
              <img
                src={`${imgPath}/windup.jpg`}
                alt=''
                className='h-[230px] w-[153px] my-2 mx-auto object-cover'
              />
             <h6 className='text-center truncate w-[80%]'>The Wind-Up Bird Chronicle</h6>
              <h6 className='text-center font-normal mb-3'>by Haruki Murakami</h6>
              <h5 className="text-center text-[#927F64]">₱ 100</h5>
              
              <div className='book-item-hover bg-[#635C52] absolute z-50 top-full w-full h-full transition-all bg-opacity-95 px-5 py-4 rounded-md flex flex-col justify-start items-center group-hover:top-0'>

                <div className="book-item-title mb-3">
                <h5 className='text-center text-white'>The Wind-Up Bird Chronicle</h5>
                <h6 className='text-center text-white font-normal'>by <span>Haruki Murakami</span></h6>
                </div>
                
                <small className="mb-3">Paperback</small>

                <div className="book-item-details flex justify-between italic mb-2">
                <small>Magical Realism</small>
                <Dot/>
                <small>2004</small>
                </div>
                
                <small className="text-justify mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil in soluta vel? A, ad. Vel cum dolorem repellat rerum nesciunt.</small>
                <button className='btn btn-warning justify-self-center'>
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>

            </div>


          </div>

          <div className='book-item group px-4 overflow-hidden'>
            <div className='bg-gray-100 border border-[#635C52] py-2 rounded-md flex flex-col justify-center items-center relative'>
              <h5 className='text-center mt-1 border border-[#635C52] p-1 rounded-md text-white bg-[#635C52]'>#2</h5>
              <img
                src={`${imgPath}/afterdark.jpg`}
                alt=''
                className='h-[230px] w-[153px] my-2 mx-auto object-cover'
              />
             <h6 className='text-center'>After Dark</h6>
              <h6 className='text-center font-normal mb-3'>by Haruki Murakami</h6>
              <h5 className="text-center text-[#927F64]">₱ 100</h5>
              
              <div className='book-item-hover bg-[#635C52] absolute z-50 top-full w-full h-full transition-all bg-opacity-95 px-5 py-4 rounded-md flex flex-col justify-start items-center group-hover:top-0'>

                <div className="book-item-title mb-3">
                <h5 className='text-center text-white'>After Dark</h5>
                <h6 className='text-center text-white font-normal'>by <span>Haruki Murakami</span></h6>
                </div>
                
                <small className="mb-3">Paperback</small>

                <div className="book-item-details flex justify-between italic mb-2">
                <small>Magical Realism</small>
                <Dot/>
                <small>2004</small>
                </div>
                
                <small className="text-justify mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil in soluta vel? A, ad. Vel cum dolorem repellat rerum nesciunt.</small>
                <button className='btn btn-warning justify-self-center'>
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>

            </div>


          </div>

          <div className='book-item group px-4 overflow-hidden'>
            <div className='bg-gray-100 border border-[#635C52] py-2 rounded-md flex flex-col justify-center items-center relative'>
              <h5 className='text-center mt-1 border border-[#635C52] p-1 rounded-md text-white bg-[#635C52]'>#1</h5>
              <img
                src={`${imgPath}/afterdark.jpg`}
                alt=''
                className='h-[230px] w-[153px] my-2 mx-auto object-cover'
              />
             <h6 className='text-center'>After Dark</h6>
              <h6 className='text-center font-normal mb-3'>by Haruki Murakami</h6>
              <h5 className="text-center text-[#927F64]">₱ 100</h5>
              
              <div className='book-item-hover bg-[#635C52] absolute z-50 top-full w-full h-full transition-all bg-opacity-95 px-5 py-4 rounded-md flex flex-col justify-start items-center group-hover:top-0'>

                <div className="book-item-title mb-3">
                <h5 className='text-center text-white'>After Dark</h5>
                <h6 className='text-center text-white font-normal'>by <span>Haruki Murakami</span></h6>
                </div>
                
                <small className="mb-3">Paperback</small>

                <div className="book-item-details flex justify-between italic mb-2">
                <small>Magical Realism</small>
                <Dot/>
                <small>2004</small>
                </div>
                
                <small className="text-justify mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil in soluta vel? A, ad. Vel cum dolorem repellat rerum nesciunt.</small>
                <button className='btn btn-warning justify-self-center'>
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>

            </div>


          </div>

          <div className='book-item group px-4 overflow-hidden'>
            <div className='bg-gray-100 border border-[#635C52] py-2 rounded-md flex flex-col justify-center items-center relative'>
              <h5 className='text-center mt-1 border border-[#635C52] p-1 rounded-md text-white bg-[#635C52]'>#1</h5>
              <img
                src={`${imgPath}/afterdark.jpg`}
                alt=''
                className='h-[230px] w-[153px] my-2 mx-auto object-cover'
              />
             <h6 className='text-center'>After Dark</h6>
              <h6 className='text-center font-normal mb-3'>by Haruki Murakami</h6>
              <h5 className="text-center text-[#927F64]">₱ 100</h5>
              
              <div className='book-item-hover bg-[#635C52] absolute z-50 top-full w-full h-full transition-all bg-opacity-95 px-5 py-4 rounded-md flex flex-col justify-start items-center group-hover:top-0'>

                <div className="book-item-title mb-3">
                <h5 className='text-center text-white'>After Dark</h5>
                <h6 className='text-center text-white font-normal'>by <span>Haruki Murakami</span></h6>
                </div>
                
                <small className="mb-3">Paperback</small>

                <div className="book-item-details flex justify-between italic mb-2">
                <small>Magical Realism</small>
                <Dot/>
                <small>2004</small>
                </div>
                
                <small className="text-justify mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil in soluta vel? A, ad. Vel cum dolorem repellat rerum nesciunt.</small>
                <button className='btn btn-warning justify-self-center'>
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>

            </div>


          </div>

          <div className='book-item group px-4 overflow-hidden'>
            <div className='bg-gray-100 border border-[#635C52] py-2 rounded-md flex flex-col justify-center items-center relative'>
              <h5 className='text-center mt-1 border border-[#635C52] p-1 rounded-md text-white bg-[#635C52]'>#1</h5>
              <img
                src={`${imgPath}/afterdark.jpg`}
                alt=''
                className='h-[230px] w-[153px] my-2 mx-auto object-cover'
              />
             <h6 className='text-center'>After Dark</h6>
              <h6 className='text-center font-normal mb-3'>by Haruki Murakami</h6>
              <h5 className="text-center text-[#927F64]">₱ 100</h5>
              
              <div className='book-item-hover bg-[#635C52] absolute z-50 top-full w-full h-full transition-all bg-opacity-95 px-5 py-4 rounded-md flex flex-col justify-start items-center group-hover:top-0'>

                <div className="book-item-title mb-3">
                <h5 className='text-center text-white'>After Dark</h5>
                <h6 className='text-center text-white font-normal'>by <span>Haruki Murakami</span></h6>
                </div>
                
                <small className="mb-3">Paperback</small>

                <div className="book-item-details flex justify-between italic mb-2">
                <small>Magical Realism</small>
                <Dot/>
                <small>2004</small>
                </div>
                
                <small className="text-justify mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil in soluta vel? A, ad. Vel cum dolorem repellat rerum nesciunt.</small>
                <button className='btn btn-warning justify-self-center'>
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>

            </div>


          </div>

          <div className='book-item group px-4 overflow-hidden'>
            <div className='bg-gray-100 border border-[#635C52] py-2 rounded-md flex flex-col justify-center items-center relative'>
              <h5 className='text-center mt-1 border border-[#635C52] p-1 rounded-md text-white bg-[#635C52]'>#1</h5>
              <img
                src={`${imgPath}/afterdark.jpg`}
                alt=''
                className='h-[230px] w-[153px] my-2 mx-auto object-cover'
              />
             <h6 className='text-center'>After Dark</h6>
              <h6 className='text-center font-normal mb-3'>by Haruki Murakami</h6>
              <h5 className="text-center text-[#927F64]">₱ 100</h5>
              
              <div className='book-item-hover bg-[#635C52] absolute z-50 top-full w-full h-full transition-all bg-opacity-95 px-5 py-4 rounded-md flex flex-col justify-start items-center group-hover:top-0'>

                <div className="book-item-title mb-3">
                <h5 className='text-center text-white'>After Dark</h5>
                <h6 className='text-center text-white font-normal'>by <span>Haruki Murakami</span></h6>
                </div>
                
                <small className="mb-3">Paperback</small>

                <div className="book-item-details flex justify-between italic mb-2">
                <small>Magical Realism</small>
                <Dot/>
                <small>2004</small>
                </div>
                
                <small className="text-justify mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil in soluta vel? A, ad. Vel cum dolorem repellat rerum nesciunt.</small>
                <button className='btn btn-warning justify-self-center'>
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>

            </div>


          </div>



      
   
        </Slider>
      </div>
    </section>
  );
};

export default BookSliderBest;
