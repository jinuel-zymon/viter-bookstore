import React from 'react'

import { X } from 'lucide-react'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import * as Yup from "Yup"
import { Formik, Form } from 'formik'
import { StoreContext } from '../../../../store/storeContext'
import { queryData } from '../../../../helpers/queryData'
import { setIsAdd, setMessage, setSuccess, setValidate } from '../../../../store/StoreAction'
import ModalWrapper from '../../partials/modals/ModalWrapper'
import SpinnerButton from '../../partials/spinners/SpinnerButton'
import { InputText } from '../../../../helpers/formInputs'

const GenreModalAdd = ({itemEdit}) => {
  const {dispatch, store} =React.useContext(StoreContext)

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/genre/${itemEdit.genre_aid}` : `/v1/genre`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["genre"],
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

  const initVal = {
    genre_title: itemEdit ? itemEdit.genre_title : '',
    genre_title_old: itemEdit ? itemEdit.genre_title : '',
  }

  const yupSchema = Yup.object({
    genre_title: Yup.string().required('Required'),
  })

  const handleClose = () => dispatch(setIsAdd(false))

  return (
    <ModalWrapper>
    <div className="modal-main bg-primary z-50 max-w-[300px] w-full rounded-md animate-slideUp">
    <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            mutation.mutate(values);
          }}
        >
          {(props) => {
            return (
            <Form >
              <div className="modal-header p-2 border-b border-line flex justify-between items-center">
                <h6 className="mb-0 leading-none text-dark">
                {itemEdit ? "Edit" : "Add"} 
                </h6>
                <button onClick={handleClose} type="button">
                  <X />
                </button>
              </div>
              <div className="modal-body p-2 px-4">
                <div className="input-wrap">
                <InputText
                  label="Genre"
                  type="text"
                  name="genre_title"
                  disabled={mutation.isPending}
                />
                </div>
              </div>
              <div className="modal-footer flex py-2 px-4 border-t border-line justify-end gap-3">
                <button
                  className="btn btn-accent !text-xs"
                  type="submit"
                >
                   {mutation.isPending ? <SpinnerButton/> : 'Save'}
                </button>
                <button
                  className="btn btn-cancel !text-xs"
                  type="reset"
                  onClick={()=> dispatch(setIsAdd(false))}
                >
                  Cancel
                </button>
              </div>
          </Form>
          );
        }}
      </Formik>
    </div>
  </ModalWrapper>
  )
}

export default GenreModalAdd