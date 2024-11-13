import React from "react";
import Searchbar from "../partials/Searchbar";
import { Archive, ArchiveRestore, Pencil, Plus, Trash, View } from "lucide-react";
import SpinnerTable from "../partials/spinners/SpinnerTable";
import Pill from "../partials/Pill";

const BooksTable = () => {
  return (
    <>
      <div className='m-8'>
        <div className='flex justify-between items-center'>
          <Searchbar />
          <button className='btn btn-warning'>
            <Plus size={14} /> Add New
          </button>
        </div>

        <div className='table_wrapper bg-primary p-4 mt-5 rounded-md relative'>
          {/* <SpinnerTable/> */}
          <table>
            <thead>
              <tr>
                <td className='w-[30px]'>#</td>
                <td className='w-[80px]'>Status</td>
                <td>Title</td>
                <td>Author</td>
                <td>Genre</td>
                <td>Category</td>
                <td>Price</td>

                <td></td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1.</td>
                <td>
                  <Pill isActive={true} />
                </td>
                <td>Beware of Pity</td>
                <td>Stefan Zweig</td>
                <td>Historical</td>
                <td>Classics</td>
                <td>750 </td>
                <td>
                  <ul className='table-action translate-y-2'>
                    <li>
                      <button data-tooltip='View'>
                        <View size={15} />
                      </button>
                    </li>
                    <li>
                      <button data-tooltip='Edit'>
                        <Pencil size={15} />
                      </button>
                    </li>
                    <li>
                      <button data-tooltip='Archive'>
                        <Archive size={15} />
                      </button>
                    </li>

                    <li>
                      <button data-tooltip='Restore'>
                        <ArchiveRestore size={15} />
                      </button>
                    </li>
                    <li>
                      <button data-tooltip='Delete'>
                        <Trash size={15} />
                      </button>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BooksTable;
