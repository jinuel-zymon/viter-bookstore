import React from "react";
import Header from "./Header";
import BookSlider from "./BookSlider";
import BookSliderBest from "./BookSliderBest";
import Footer from "./Footer";
import Cart from "./Cart";
import AdSlider from "./AdSlider";
import SpinnerTable from "../backend/partials/spinners/SpinnerTable";
import useQueryData from "../../custom-hook/useQueryData";
import { StoreContext } from "../../store/storeContext";

const Home = () => {

  const { dispatch, store } = React.useContext(StoreContext);

  const [booksCart, setBooksCart] = React.useState([]);

  const [bestsellersCart, setBestsellersCart] = React.useState([]);

  const [totals, setTotals] = React.useState({
    books: "",
    bestsellers: "",
  });


  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v1/books`, // endpoint
    "get", // method
    "books"
  );
  const {
    isLoading: bestsellersIsLoading,
    isFetching: bestsellersIsFetching,
    error: bestsellersError,
    data: bestsellers,
  } = useQueryData(
    `/v1/bestsellers`, // endpoint
    "get", // method
    "bestsellers"
  );

  const getAllNYRB =
    !isLoading &&
    result?.data.filter((books) => books.books_category === "NYRB");
  const getAllClassics =
    !isLoading &&
    result?.data.filter((books) => books.books_category === "Classics");

  return (
    <>
      <Header 
        booksCart={booksCart}
        bestsellersCart={bestsellersCart}
      />
      <AdSlider />

      {bestsellersIsLoading ? (
        <SpinnerTable />
      ) : (
        <BookSliderBest title='Best Sellers' category={bestsellers} bestsellersCart={bestsellersCart} setBestsellersCart={setBestsellersCart}/>
      )}

      {isLoading ? (
        <SpinnerTable />
      ) : (
        <BookSlider title='NYRB' category={getAllNYRB} booksCart={booksCart} setBooksCart={setBooksCart}/>
      )}
      {isLoading ? (
        <SpinnerTable />
      ) : (
        <BookSlider title='Classics' category={getAllClassics} booksCart={booksCart} setBooksCart={setBooksCart}/>
      )}

      {/* <BookSliderBest/>
    <BookSlider/>
    <BookSlider/> */}

      <Footer />
      {store.isAdd && (
        <Cart
          booksCart={booksCart}
          setBooksCart={setBooksCart}
          bestsellersCart={bestsellersCart}
          setBestsellersCart={setBestsellersCart}
          setTotals={setTotals}
          totals={totals}
        />
      )}
    </>
  );
};

export default Home;
