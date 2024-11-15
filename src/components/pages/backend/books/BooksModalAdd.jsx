import { Form, Formik } from 'formik'
import { ImagePlusIcon, X } from 'lucide-react'
import React from 'react'
import ModalWrapper from '../partials/modals/ModalWrapper'
import { InputPhotoUpload, InputSelect, InputText, InputTextArea } from '../../../helpers/formInputs'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../../helpers/queryData'
import useUploadPhoto from '../../../custom-hook/useUploadPhoto'
import { imgPath } from '../../../helpers/functions-general'
import SpinnerButton from '../partials/spinners/SpinnerButton'
import { setIsAdd, setMessage, setSuccess, setValidate } from '../../../store/StoreAction'
import { StoreContext } from '../../../store/storeContext'
import * as Yup from 'Yup';
import useQueryData from '../../../custom-hook/useQueryData'

const BooksModalAdd = ({itemEdit}) => {
  const {dispatch} = React.useContext(StoreContext)
  const handleClose = () => dispatch(setIsAdd(false))
  const { uploadPhoto, handleChangePhoto, photo } =
    useUploadPhoto("/v1/upload-photo");

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/books/${itemEdit.books_aid}` :`/v1/books`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["books"],
      });

      // show error box
      if (data.success) {
        dispatch(setIsAdd(false))
        dispatch(setSuccess(true))
        dispatch(setMessage(`Record ${itemEdit ? "Updated" : "Added"}`))
      } else {
        dispatch(setValidate(true))
        dispatch(setMessage(data.error))
      }
    },
  });

  const {
    isLoading,
    isFetching,
    error,
    data: booktype,
  } = useQueryData(
    "/v1/booktype", // endpoint
    "get", // method
    "booktype" // key
  );

  const {
    isLoading:categoryIsLoading,
    isFetching:categoryIsFetching,
    error:categoryError,
    data: category,
  } = useQueryData(
    "/v1/category", // endpoint
    "get", // method
    "category" // key
  );

  const {
    isLoading:genreIsLoading,
    isFetching:genreIsFetching,
    error:genreError,
    data: genre,
  } = useQueryData(
    "/v1/genre", // endpoint
    "get", // method
    "genre" // key
  );


  const initVal = {
    books_title: itemEdit ? itemEdit.books_title : '',
    books_author: itemEdit ? itemEdit.books_author : '',
    books_type: itemEdit ? itemEdit.books_type : '',
    books_genre: itemEdit ? itemEdit.books_genre : '',
    books_year: itemEdit ? itemEdit.books_year : '',
    books_category: itemEdit ? itemEdit.books_category : '',
    books_summary: itemEdit ? itemEdit.books_summary : '',
    books_price: itemEdit ? itemEdit.books_price : '',
    books_title_old: itemEdit ? itemEdit.books_title : '',
  }

  const yupSchema = Yup.object({
    books_title: Yup.string().required('Required'),
    books_author: Yup.string().required('Required'),
    books_type: Yup.string().required('Required'),
    books_genre: Yup.string().required('Required'),
    books_year: Yup.string().required('Required'),
    books_category: Yup.string().required('Required'),
    books_summary: Yup.string().required('Required'),
    books_price: Yup.string().required('Required'),
  })


  return (
    <ModalWrapper>
    <Formik
     initialValues={initVal}
     validationSchema={yupSchema}
     onSubmit={async (values) => {
       mutation.mutate({...values,
         books_photo:
           (itemEdit?.books_photo === "" && photo) ||
           (!photo && "") ||
           (photo === undefined && "") ||
           (photo && itemEdit?.books_photo !== photo?.name)
             ? photo?.name || ""
             : itemEdit?.books_photo || "",
       });
       uploadPhoto();

     }}
    >
 {(props) => {
            return (
            <Form >
          <div className="modal-main absolute top-0 right-0 h-[100dvh] w-[320px] bg-primary border-l border-line grid grid-rows-[auto,_1fr,_auto] animate-slideLeft">
            <div className="modal-header p-3 px-4 pb-0 flex justify-between items-center self-start">
            <h5 className="mb-0">{itemEdit ? "Edit" : "Add"} Books</h5>
              <button onClick={handleClose}>
                <X />
              </button>
            </div>

    
            <div className="modal-body  p-3 px-4 ">

            <div className="input-wrap relative  group input-photo-wrap h-[150px] ">
                {itemEdit === null && photo === null ? (
                  <div className="w-full  rounded-md flex justify-center items-center flex-col h-full">
                    <ImagePlusIcon
                      size={50}
                      strokeWidth={1}
                      className="opacity-20 group-hover:opacity-50 transition-opacity"
                    />
                    <small className="opacity-20 group-hover:opacity-50 transition-opacity">
                      Upload Photo
                    </small>
                  </div>
                ) : (
                  <img
                    src={
                      photo
                        ? URL.createObjectURL(photo) // preview
                        : imgPath + "/" + itemEdit?.books_photo // check db
                    }
                    alt="books photo"
                    className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto ${mutation.isPending ? "opacity-40 pointer-events-none" : ""}`}
                  />
                )}


                <InputPhotoUpload
                  name="photo"
                  type="file"
                  id="photo"
                  accept="image/*"
                  title="Upload photo"
                  onChange={(e) => handleChangePhoto(e)}
                  onDrop={(e) => handleChangePhoto(e)}
                  className={`opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full ${mutation.isPending ? "pointer-events-none" : ""}`}
                />
              </div>

              <div className="input-wrap">
                  <InputText
                  label="Title"
                  type="text"
                  name="books_title"
                  disabled={mutation.isPending}
                />
              </div>

              <div className="input-wrap">
                <InputText
                  label="Author"
                  type="text"
                  name="books_author"
                  disabled={mutation.isPending}
                />
              </div>

              <div className="input-wrap">
                <InputText
                  label="Price"
                  type="text"
                  name="books_price"
                  disabled={mutation.isPending}
                />
              </div>

              <div className="input-wrap">
              <InputSelect
                    label="Book Type"
                    name="books_type"
                    disabled={mutation.isLoading}
                  >
                    <optgroup label="Select Book Type">
                      <option value="" hidden></option>
                      {!isLoading && booktype?.data.length > 0 ? (
                        booktype?.data.map((item, key) => (
                          <option key={key} value={item.booktype_title}>
                            {item.booktype_title}
                          </option>
                        ))
                      ) : (
                        <option value="">No data</option>
                      )}
                    </optgroup>
                  </InputSelect>
              </div>

              <div className="input-wrap">
              <InputSelect
                    label="Genre"
                    name="books_genre"
                    disabled={mutation.isLoading}
                  >
                    <optgroup label="Select Genre">
                      <option value="" hidden></option>
                      {!genreIsLoading && genre?.data.length > 0 ? (
                        genre?.data.map((item, key) => (
                          <option key={key} value={item.genre_title}>
                            {item.genre_title}
                          </option>
                        ))
                      ) : (
                        <option value="">No data</option>
                      )}
                    </optgroup>
                  </InputSelect>
              </div>

              <div className="input-wrap">
                <InputText
                  label="Year"
                  type="text"
                  name="books_year"
                  disabled={mutation.isPending}
                />
              </div>

              <div className="input-wrap">
              <InputSelect
                    label="Category"
                    name="books_category"
                    disabled={mutation.isLoading}
                  >
                    <optgroup label="Select Category">
                      <option value="" hidden></option>
                      {!categoryIsLoading && category?.data.length > 0 ? (
                        category?.data.map((item, key) => (
                          <option key={key} value={item.category_title}>
                            {item.category_title}
                          </option>
                        ))
                      ) : (
                        <option value="">No data</option>
                      )}
                    </optgroup>
                  </InputSelect>
              </div>

              <div className="input-wrap relative">
                <InputTextArea
                  label="Summary"
                  name="books_summary"
                  disabled={mutation.isPending}
                />
              </div>

            </div>
            <div className="modal-action flex justify-end gap-3 items-center p-3 px-4 pb-5 self-start">
              <button
                className="btn btn-warning min-w-[90px] flex justify-center"
                type="submit"
              >
                {mutation.isPending ? <SpinnerButton/> : 'Save'} 
              </button>
              <button
                className="btn btn-cancel min-w-[90px] flex justify-center"
                type="reset" 
                onClick={handleClose}         
              >
                Cancel
              </button>
            </div>
          </div>
          </Form>
            );
          }}
    </Formik>
      
</ModalWrapper>
  )
}

export default BooksModalAdd