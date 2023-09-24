import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MeasureDetailsForm from '../Scorbord/components/MeasureDetailsForm'
import Icon from '../icon'
import CreateTypes from '../Scorbord/components/CreateTypes'
import { Divider } from '@mui/material'
const MultiPurposeTable = ({ data = null, headers = null }) => {
    const dir = document.documentElement.getAttribute('dir');
    const keynames = data != null ? Object.keys(data[0]) : null;
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [tabledata, setTabledata] = useState([]);
    const [rowCount, setRowCount] = useState(0);
    const pagecount = Math.ceil(rowCount / rowsPerPage);
    const pagination = () => {
        if (data !== null) {
            setRowCount(data.length);
            setTabledata(data.slice((page - 1) * rowsPerPage, page * rowsPerPage));
        }
    }
    const changepage = (newpage) => {
        setPage(newpage);
        setTabledata(data.slice((newpage - 1) * rowsPerPage, newpage * rowsPerPage));
    }

    useEffect(() => {
        pagination()
    }, [pagination, page]);
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-[#434343]">
                        <div className="flex w-full justify-between items-center">
                            <h2>Score List</h2>
                            <button type="button" className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" data-modal-target="createProductModal" data-modal-toggle="createProductModal">
                                <Icon icon='ic:round-add' />
                                Add Score
                            </button>
                        </div>
                    </caption>
                    {data !== null ? (
                        <>
                            <thead className="text-xs text-gray-950 bg-gray-200 uppercase dark:bg-[#292929] dark:text-gray-200">
                                <tr>
                                    {headers != null ? (
                                        <>
                                            {headers.map((header) => (
                                                <th scope="col" className="px-6 py-3">
                                                    {header}
                                                </th>
                                            ))}
                                        </>
                                    ) : (<>
                                        {keynames.map((keyname) => (
                                            <th scope="col" className="px-6 py-3">
                                                {keyname}
                                            </th>
                                        ))}
                                    </>
                                    )}
                                    <th scope="col" className="px-0 py-3">
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tabledata.map((item) => (
                                    <tr className="bg-white border-b dark:bg-[#434343] dark:border-[#383838] dark:hover:bg-[#333333] text-gray-900 dark:text-white hover:bg-gray-200" key={item.id}>

                                        {keynames.map((keyname) => (
                                            <td className="px-6 py-4">
                                                {item[keyname]}
                                            </td>
                                        ))}
                                        <td className='px-0 py-3'>
                                             <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 dark:hover-bg-gray-800 text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                                <Icon icon="pepicons-pop:dots-y" />
                                            </button>
                                            <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-[#292929] dark:divide-gray-600">
                                                <ul className="py-1 text-sm" aria-labelledby="apple-imac-27-dropdown-button">
                                                    <li>
                                                        <button type="button" data-drawer-target="updateProductModal" data-drawer-show="updateProductModal" data-drawer-placement={dir == 'ltr' ? 'right' : 'left'} aria-controls="updateProductModal" className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200">
                                                            <Icon icon="akar-icons:edit" className="mr-2" />
                                                            Edit
                                                        </button>
                                                    </li>

                                                    <li>
                                                        <button type="button" data-modal-target="deleteModal" data-modal-toggle="deleteModal" className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 text-red-500 dark:hover:text-red-400">
                                                            <Icon icon="material-symbols:delete" className="mr-2" color="#ef4444" />
                                                            Delete
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div> 
                                            
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </>
                    ) : null}
                </table>
                {data !== null ? (
                    <>
                        <Divider className='w-full border-b-gray-600 dark:border-b-gray-300' />
                        <nav className="flex w-full flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4  text-gray-900 bg-white dark:text-white dark:bg-[#434343]" aria-label="Table navigation">
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ">
                                Showing <span className="font-semibold text-gray-900 dark:text-white " id='items'> {page < 2 ? ((page - 1) * rowsPerPage) : (((page - 1) * rowsPerPage) + 1)} - {rowCount > (page * rowsPerPage) ? (page * rowsPerPage) : rowCount} </span> of <span className="font-semibold text-gray-900 dark:text-white" id='totalpage'> {rowCount} </span></span>
                            <ul className="inline-flex items-stretch -space-x-px">
                                <li>
                                    <Link to="#" aria-current="page" className={`flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-gray-200 ${dir == 'ltr' ? 'rounded-l-lg' : 'rounded-r-lg'} border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`} onClick={() => (page > 1) ? changepage(page - 1) : null}>
                                        <span className="sr-only">Previous</span>
                                        <svg className={`w-5 h-5 ${dir == 'ltr' ? '' : 'rotate-180'}`} aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page == 1 ? `!bg-gray-400 !text-black dark:!bg-gray-600 dark:!text-white` : null}`} onClick={() => changepage(1)}>1</Link>
                                </li>
                                {page > 2 ? (
                                    <li>
                                        <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>...</Link>
                                    </li>
                                ) : null}
                                {page != 1 ? (
                                    <>
                                        {page >= pagecount - 1 && pagecount > 2 ? (
                                            <>
                                                <li>
                                                    <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`} onClick={() => changepage(page - 2)}>{page - 2}</Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`} onClick={() => changepage(page - 1)}>{page - 1}</Link>
                                                </li>
                                                {page === pagecount ? null : (
                                                    <>
                                                        <li>
                                                            <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-600 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-600 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white !bg-gray-400 !text-black dark:!bg-gray-600 dark:!text-white`}>{page}</Link>
                                                        </li>
                                                    </>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                {page > 3 ? (<>
                                                    <li>
                                                        <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`} onClick={() => changepage(page - 1)}>{page - 1}</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-600 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-600 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white !bg-gray-400 !text-black dark:!bg-gray-600 dark:!text-white`}>{page}</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`} onClick={() => changepage(page + 1)}>{page + 1}</Link>
                                                    </li>
                                                </>) : (<>
                                                    {pagecount == 2 ? (<>
                                                        <li>
                                                            <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page == 2 ? `!bg-gray-400 !text-black dark:!bg-gray-600 dark:!text-white` : null}`} onClick={() => changepage(page)}>{page}</Link>
                                                        </li>
                                                    </>) : null}
                                                    {pagecount == 3 ? (<>
                                                        <li>
                                                            <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`} onClick={() => changepage(page - 1)}>{page - 1}</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page == 3 ? `!bg-gray-400 !text-black dark:!bg-gray-600 dark:!text-white` : null}`} onClick={() => changepage(page)}>{page}</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`} onClick={() => changepage(page + 1)}>{page + 1}</Link>
                                                        </li>
                                                    </>) : null}
                                                    {pagecount >= 3 ? (<>
                                                        <li>
                                                            <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white !bg-gray-400 !text-black dark:!bg-gray-600 dark:!text-white`} onClick={() => changepage(page)}>{page}</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`} onClick={() => changepage(page + 1)}>{page + 1}</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`} onClick={() => changepage(page + 2)}>{page + 2}</Link>
                                                        </li>
                                                    </>) : null}
                                                </>)}
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {pagecount == 2 ? (<>
                                            <li>
                                                <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white${page == 2 ? `!bg-gray-400 !text-black dark:!bg-gray-600 dark:!text-white` : null}`} onClick={() => changepage(2)}>2</Link>
                                            </li>
                                        </>) : null}
                                        {pagecount == 3 ? (<>
                                            <li>
                                                <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white${page == 2 ? `!bg-gray-400 !text-black dark:!bg-gray-600 dark:!text-white` : null}`} onClick={() => changepage(2)}>2</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white${page == 3 ? `!bg-gray-400 !text-black dark:!bg-gray-600 dark:!text-white` : null}`} onClick={() => changepage(3)}>3</Link>
                                            </li>
                                        </>) : null}
                                        {pagecount >= 4 ? (<>
                                            <li>
                                                <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white${page == 2 ? `!bg-gray-400 !text-black dark:!bg-gray-600 dark:!text-white` : null}`} onClick={() => changepage(2)}>2</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white${page == 3 ? `!bg-gray-400 !text-black dark:!bg-gray-600 dark:!text-white` : null}`} onClick={() => changepage(3)}>3</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white${page == 4 ? `!bg-gray-400 !text-black dark:!bg-gray-600 dark:!text-white` : null}`} onClick={() => changepage(4)}>4</Link>
                                            </li>
                                        </>) : null}
                                    </>
                                )}
                                {pagecount > 3 ? (
                                    <>
                                        {page != pagecount && page < pagecount - 1 ? (
                                            <li>
                                                <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>...</Link>
                                            </li>
                                        ) : null}
                                        <li>
                                            <Link to="#" className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${(page == pagecount) ? `!bg-gray-400 !text-black dark:!bg-gray-600 dark:!text-white` : null}`} onClick={() => changepage(pagecount)}>{pagecount}</Link>
                                        </li>
                                    </>
                                ) : null}
                                <li>
                                    <Link to="#" className={`flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-gray-200 ${dir == 'ltr' ? 'rounded-r-lg' : 'rounded-l-lg'} border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#292929] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`} onClick={() => (page < pagecount) ? changepage(page + 1) : null}>
                                        <span className="sr-only">Next</span>
                                        <svg className={`w-5 h-5 ${dir == 'ltr' ? '' : 'rotate-180'}`} aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </>
                ) : null}

            </div>
            <div id="createProductModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative p-4 rounded-lg shadow bg-white dark:bg-[#434343] sm:p-5">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between items-center pb-4 rounded-t border-b dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add New</h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-target="createProductModal" data-modal-toggle="createProductModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <CreateTypes />
                    </div>
                </div>
            </div>
            <div id="deleteModal" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full h-auto max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-[#434343]">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="deleteModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center">
                            <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                            <button data-modal-toggle="deleteModal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">Yes, I'm sure</button>
                            <button data-modal-toggle="deleteModal" type="button" className="text-gray-500 bg-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="updateProductModal" className={`fixed top-0 ${dir == 'ltr' ? 'right-0' : 'left-0'} z-40 h-screen p-4 overflow-y-auto transition-transform ${dir == 'ltr' ? 'translate-x-full' : '-translate-x-full'} w-1/2 bg-[#bac2c8] dark:bg-[#292929] grid gap-4`} tabIndex="-1" aria-labelledby="drawer-right-label">
                <h1 id="drawer-right-label" className="inline-flex items-center mb-4 text-base font-semibold text-black dark:text-white">Update Score Card</h1>
                <button type="button" data-drawer-hide="updateProductModal" aria-controls="updateProductModal" className={`text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 ${dir == 'ltr' ? 'right-2.5' : 'left-2.5'} inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white`} >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>

                <MeasureDetailsForm />
            </div>
        </>
    )
}

export default MultiPurposeTable