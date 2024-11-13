import { Form, Formik } from 'formik'
import { ImagePlusIcon, X } from 'lucide-react'
import React from 'react'
import ModalWrapper from '../partials/modals/ModalWrapper'
import { InputPhotoUpload, InputText, InputTextArea } from '../../../helpers/formInputs'

const BooksModalAdd = () => {
  return (
    <ModalWrapper>
    <Formik>

        <Form >
          <div className="modal-main absolute top-0 right-0 h-[100dvh] w-[320px] bg-primary border-l border-line grid grid-rows-[auto,_1fr,_auto] animate-slideLeft">
            <div className="modal-header p-3 px-4 pb-0 flex justify-between items-center self-start">
              <h5 className="mb-0">Add Books</h5>
              <button>
                <X />
              </button>
            </div>

    
            <div className="modal-body  p-3 px-4 ">

            <div className="input-wrap relative  group input-photo-wrap h-[150px] ">
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

                <InputPhotoUpload
                  name="photo"
                  type="file"
                  title="Upload photo"
                  className={`opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full`}
                />
              </div>

              <div className="input-wrap">
                  <InputText
                  label="Title"
                  type="text"
                  name="books_title"
                />
              </div>

              <div className="input-wrap">
                <InputText
                  label="Author"
                  type="text"
                  name="books_author"
                />
              </div>

              <div className="input-wrap">
                <InputText
                  label="Price"
                  type="text"
                  name="books_price"
                />
              </div>

              <div className="input-wrap">
                <InputText
                  label="Type"
                  type="text"
                  name="books_type"
                />
              </div>

              <div className="input-wrap">
                <InputText
                  label="Genre"
                  type="text"
                  name="books_genre"
                />
              </div>

              <div className="input-wrap">
                <InputText
                  label="Year"
                  type="text"
                  name="books_year"
                />
              </div>

              <div className="input-wrap">
                <InputText
                  label="Category"
                  type="text"
                  name="books_category"
                />
              </div>

              <div className="input-wrap relative">
                <InputTextArea
                  label="Summary"
                  name="books_summary"
                />
              </div>

            </div>
            <div className="modal-action flex justify-end gap-3 items-center p-3 px-4 pb-5 self-start">
              <button
                className="btn btn-warning min-w-[90px] flex justify-center"
                type="submit"
              >
                Save
              </button>
              <button
                className="btn btn-cancel min-w-[90px] flex justify-center"
                type="reset"          
              >
                Cancel
              </button>
            </div>
          </div>
          </Form>
    </Formik>
      
</ModalWrapper>
  )
}

export default BooksModalAdd