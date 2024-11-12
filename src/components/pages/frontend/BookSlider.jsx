import {
  ChevronLeft,
  ChevronRight,
  Dot,
  Plus,
  ShoppingCart,
} from "lucide-react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imgPath } from "../../helpers/functions-general";

const BookSlider = () => {
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
    <section className='pt-16 bg-primary text-white border-b border-gray-200'>
      <div className='container'>
        <h2>Fantasy</h2>
        <Slider {...settings} className='relative'>
          <div className='book-item group px-4 overflow-hidden'>
            <div className='bg-gray-100 py-2 pt-6 rounded-md flex flex-col justify-center items-center relative'>
              <img
                src={`${imgPath}/drive.jpg`}
                alt=''
                className='h-[230px] w-[153px] my-2 mx-auto object-cover'
              />
              <h6 className='text-center truncate w-[80%]'>
                Drive Your Plow Over The Bones of the Dead
              </h6>
              <h6 className='text-center font-normal mb-3'>
                by Olga Tokarczuk
              </h6>
              <h5 className='text-center text-[#927F64]'>₱ 100</h5>

              <div className='book-item-hover bg-[#635C52] absolute z-50 top-full w-full h-full transition-all bg-opacity-95 px-5 py-4 rounded-md flex flex-col justify-start items-center group-hover:top-0'>
                <div className='book-item-title mb-3'>
                  <h5 className='text-center text-white'>
                  Drive Your Plow Over The Bones of the Dead
                  </h5>
                  <h6 className='text-center text-white font-normal'>
                    by <span>Olga Tokarczuk</span>
                  </h6>
                </div>

                <small className='mb-3'>Paperback</small>

                <div className='book-item-details flex justify-between italic mb-2'>
                  <small>Literary Fiction</small>
                  <Dot />
                  <small>1978</small>
                </div>

                <small className='text-justify mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil in soluta vel? A, ad. Vel cum dolorem repellat rerum
                  nesciunt.
                </small>
                <button className='btn btn-warning justify-self-center'>
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className='book-item group px-4 overflow-hidden'>
            <div className='bg-gray-100 py-2 pt-6 rounded-md flex flex-col justify-center items-center relative'>
              <img
                src={`${imgPath}/hourstar.jpg`}
                alt=''
                className='h-[230px] w-[153px] my-2 mx-auto object-cover'
              />
              <h6 className='text-center'>The Hour of the Star</h6>
              <h6 className='text-center font-normal mb-3'>
                by Clarice Lispector
              </h6>
              <h5 className='text-center text-[#927F64]'>₱ 100</h5>

              <div className='book-item-hover bg-[#635C52] absolute z-50 top-full w-full h-full transition-all bg-opacity-95 px-5 py-4 rounded-md flex flex-col justify-start items-center group-hover:top-0'>
                <div className='book-item-title mb-3'>
                  <h5 className='text-center text-white'>
                    The Hour of the Star
                  </h5>
                  <h6 className='text-center text-white font-normal'>
                    by <span>Clarice Lispector</span>
                  </h6>
                </div>

                <small className='mb-3'>Paperback</small>

                <div className='book-item-details flex justify-between italic mb-2'>
                  <small>Literary Fiction</small>
                  <Dot />
                  <small>1978</small>
                </div>

                <small className='text-justify mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil in soluta vel? A, ad. Vel cum dolorem repellat rerum
                  nesciunt.
                </small>
                <button className='btn btn-warning justify-self-center'>
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className='book-item group px-4 overflow-hidden'>
            <div className='bg-gray-100 py-2 pt-6 rounded-md flex flex-col justify-center items-center relative'>
              <img
                src={`${imgPath}/hourstar.jpg`}
                alt=''
                className='h-[230px] w-[153px] my-2 mx-auto object-cover'
              />
              <h6 className='text-center'>The Hour of the Star</h6>
              <h6 className='text-center font-normal mb-3'>
                by Clarice Lispector
              </h6>
              <h5 className='text-center text-[#927F64]'>₱ 100</h5>

              <div className='book-item-hover bg-[#635C52] absolute z-50 top-full w-full h-full transition-all bg-opacity-95 px-5 py-4 rounded-md flex flex-col justify-start items-center group-hover:top-0'>
                <div className='book-item-title mb-3'>
                  <h5 className='text-center text-white'>
                    The Hour of the Star
                  </h5>
                  <h6 className='text-center text-white font-normal'>
                    by <span>Clarice Lispector</span>
                  </h6>
                </div>

                <small className='mb-3'>Paperback</small>

                <div className='book-item-details flex justify-between italic mb-2'>
                  <small>Literary Fiction</small>
                  <Dot />
                  <small>1978</small>
                </div>

                <small className='text-justify mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil in soluta vel? A, ad. Vel cum dolorem repellat rerum
                  nesciunt.
                </small>
                <button className='btn btn-warning justify-self-center'>
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className='book-item group px-4 overflow-hidden'>
            <div className='bg-gray-100 py-2 pt-6 rounded-md flex flex-col justify-center items-center relative'>
              <img
                src={`${imgPath}/hourstar.jpg`}
                alt=''
                className='h-[230px] w-[153px] my-2 mx-auto object-cover'
              />
              <h6 className='text-center'>The Hour of the Star</h6>
              <h6 className='text-center font-normal mb-3'>
                by Clarice Lispector
              </h6>
              <h5 className='text-center text-[#927F64]'>₱ 100</h5>

              <div className='book-item-hover bg-[#635C52] absolute z-50 top-full w-full h-full transition-all bg-opacity-95 px-5 py-4 rounded-md flex flex-col justify-start items-center group-hover:top-0'>
                <div className='book-item-title mb-3'>
                  <h5 className='text-center text-white'>
                    The Hour of the Star
                  </h5>
                  <h6 className='text-center text-white font-normal'>
                    by <span>Clarice Lispector</span>
                  </h6>
                </div>

                <small className='mb-3'>Paperback</small>

                <div className='book-item-details flex justify-between italic mb-2'>
                  <small>Literary Fiction</small>
                  <Dot />
                  <small>1978</small>
                </div>

                <small className='text-justify mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil in soluta vel? A, ad. Vel cum dolorem repellat rerum
                  nesciunt.
                </small>
                <button className='btn btn-warning justify-self-center'>
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className='book-item group px-4 overflow-hidden'>
            <div className='bg-gray-100 py-2 pt-6 rounded-md flex flex-col justify-center items-center relative'>
              <img
                src={`${imgPath}/hourstar.jpg`}
                alt=''
                className='h-[230px] w-[153px] my-2 mx-auto object-cover'
              />
              <h6 className='text-center'>The Hour of the Star</h6>
              <h6 className='text-center font-normal mb-3'>
                by Clarice Lispector
              </h6>
              <h5 className='text-center text-[#927F64]'>₱ 100</h5>

              <div className='book-item-hover bg-[#635C52] absolute z-50 top-full w-full h-full transition-all bg-opacity-95 px-5 py-4 rounded-md flex flex-col justify-start items-center group-hover:top-0'>
                <div className='book-item-title mb-3'>
                  <h5 className='text-center text-white'>
                    The Hour of the Star
                  </h5>
                  <h6 className='text-center text-white font-normal'>
                    by <span>Clarice Lispector</span>
                  </h6>
                </div>

                <small className='mb-3'>Paperback</small>

                <div className='book-item-details flex justify-between italic mb-2'>
                  <small>Literary Fiction</small>
                  <Dot />
                  <small>1978</small>
                </div>

                <small className='text-justify mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil in soluta vel? A, ad. Vel cum dolorem repellat rerum
                  nesciunt.
                </small>
                <button className='btn btn-warning justify-self-center'>
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className='book-item group px-4 overflow-hidden'>
            <div className='bg-gray-100 py-2 pt-6 rounded-md flex flex-col justify-center items-center relative'>
              <img
                src={`${imgPath}/hourstar.jpg`}
                alt=''
                className='h-[230px] w-[153px] my-2 mx-auto object-cover'
              />
              <h6 className='text-center'>The Hour of the Star</h6>
              <h6 className='text-center font-normal mb-3'>
                by Clarice Lispector
              </h6>
              <h5 className='text-center text-[#927F64]'>₱ 100</h5>

              <div className='book-item-hover bg-[#635C52] absolute z-50 top-full w-full h-full transition-all bg-opacity-95 px-5 py-4 rounded-md flex flex-col justify-start items-center group-hover:top-0'>
                <div className='book-item-title mb-3'>
                  <h5 className='text-center text-white'>
                    The Hour of the Star
                  </h5>
                  <h6 className='text-center text-white font-normal'>
                    by <span>Clarice Lispector</span>
                  </h6>
                </div>

                <small className='mb-3'>Paperback</small>

                <div className='book-item-details flex justify-between italic mb-2'>
                  <small>Literary Fiction</small>
                  <Dot />
                  <small>1978</small>
                </div>

                <small className='text-justify mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil in soluta vel? A, ad. Vel cum dolorem repellat rerum
                  nesciunt.
                </small>
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

export default BookSlider;
