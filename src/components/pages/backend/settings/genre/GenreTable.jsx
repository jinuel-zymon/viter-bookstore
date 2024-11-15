import React from "react";

import {
  Archive,
  ArchiveRestore,
  Pencil,
  Plus,
  Trash,
} from "lucide-react";

import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";



import GenreModalAdd from "./GenreModalAdd";
import Searchbar from "../../partials/Searchbar";
import Pill from "../../partials/Pill";
import LoaderTable from "../../partials/LoaderTable";
import NoData from "../../partials/icons/NoData";
import ServerError from "../../partials/icons/ServerError";
import { queryDataInfinite } from "../../../../helpers/queryDataInfinite";
import { StoreContext } from "../../../../store/storeContext";
import { setIsAdd, setIsConfirm, setIsDelete } from "../../../../store/StoreAction";
import Loadmore from "../../partials/LoadMore";
import ModalConfirm from "../../partials/modals/ModalConfirm";
import ModalDelete from "../../partials/modals/ModalDelete";
import ModalValidate from "../../partials/modals/ModalValidate";
import ToastSuccess from "../../partials/ToastSuccess";

const GenreTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setId] = React.useState(null);
  const [onSearch, setOnSearch] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const search = React.useRef({ value: "" });
  const { ref, inView } = useInView();

  const [isActive, setIsActive] = React.useState(0);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [dataTitle, setDataTitle] = React.useState("");

  let count = 0;
  const {
    data: result,
    error,
    fetchNextPage,
    refetch,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["genre", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/v1/genre/search`, // search endpoint
        `/v1/genre/page/${pageParam}`, // list endpoint
        store.isSearch, // search boolean
        { searchValue: search.current.value, id: "" } // search value
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };
  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.genre_aid);
    setDataTitle(item.genre_title);
  };
  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setIsActive(0);
    setId(item.genre_aid);
    setDataTitle(item.genre_title);
  };
  const handleRestore = (item) => {
    dispatch(setIsConfirm(true));
    setIsActive(1);
    setId(item.genre_aid);
  };



  return (
    <>
      <div className='m-8'>
        <div className='flex justify-between items-center'>
          <Searchbar
            search={search}
            dispatch={dispatch}
            store={store}
            result={result?.pages}
            isFetching={isFetching}
            setOnSearch={setOnSearch}
            onSearch={onSearch}
          />
          <button className='btn btn-warning' onClick={handleAdd}>
            <Plus size={14} /> Add New
          </button>
        </div>

        <div className='table_wrapper bg-primary p-4 mt-5 rounded-md relative'>

          <table>
            <thead>
              <tr>
                <td className='w-[30px]'>#</td>
                <td className='w-[80px]'>Status</td>
                <td>Title</td>

                <td></td>
              </tr>
            </thead>

            <tbody>
              {(status === "loading" || result?.pages[0].data.length === 0) && (
                <tr>
                  <td colSpan='100%'>
                    {status === "loading" ? (
                      <LoaderTable count={30} cols={6} />
                    ) : (
                      <NoData />
                    )}
                  </td>
                </tr>
              )}

              {error && (
                <tr>
                  <td colSpan='100%'>
                    <ServerError />
                  </td>
                </tr>
              )}

              {result?.pages.map((page, key) => (
                <React.Fragment key={key}>
                  {page.data.map((item, key) => {
                    count++;
                    return (
                      <tr key={key}>
                        <td>{count}.</td>
                        <td>
                          <Pill isActive={item.genre_is_active} />
                        </td>
                        <td>{item.genre_title}</td>
                        <td>
                          <ul className='table-action translate-y-2'>
                            {item.genre_is_active ? (
                              <>
                                <li>
                                  <button
                                    data-tooltip='Edit'
                                    onClick={() => handleEdit(item)}
                                  >
                                    <Pencil size={15} />
                                  </button>
                                </li>
                                <li>
                                  <button
                                    data-tooltip='Archive'
                                    onClick={() => handleArchive(item)}
                                  >
                                    <Archive size={15} />
                                  </button>
                                </li>
                              </>
                            ) : (
                              <>
                                <li>
                                  <button
                                    data-tooltip='Restore'
                                    onClick={() => handleRestore(item)}
                                  >
                                    <ArchiveRestore size={15} />
                                  </button>
                                </li>
                                <li>
                                  <button
                                    data-tooltip='Delete'
                                    onClick={() => handleDelete(item)}
                                  >
                                    <Trash size={15} />
                                  </button>
                                </li>
                              </>
                            )}
                          </ul>
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className='text-center mt-5'>
          <Loadmore
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
            result={result?.pages[0]}
            setPage={setPage}
            page={page}
            refView={ref}
          />
        </div>
      </div>

      {store.isConfirm && (
        <ModalConfirm
          queryKey='genre'
          mysqlApiArchive={`/v1/genre/active/${id}`}
          active={isActive}
          dataTitle={dataTitle}
        />
      )}
      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`/v1/genre/${id}`}
          queryKey='genre'
          dataTitle={dataTitle}
        />
      )}
      {store.success && <ToastSuccess />}
      {store.validate && <ModalValidate />}
      {store.isAdd && <GenreModalAdd itemEdit={itemEdit} />}
    </>
  );
};

export default GenreTable;
