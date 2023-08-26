import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../icon'
const MultiPurposeTable = () => {
    return (
<>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-[#434343]">
                    <div className="flex w-full justify-between items-center">
                        <h2>Score List</h2>
                            <button type="button" class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" data-modal-target="createProductModal" data-modal-toggle="createProductModal">
                            <Icon icon='ic:round-add'/>
                            Add Score
                        </button>
                    </div>
                </caption>
                <thead className="text-xs text-gray-950 bg-gray-300 uppercase dark:bg-[#292929] dark:text-gray-200">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        {/* <th scope="col" className="px-6 py-3">
                            Action
                        </th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-[#434343] dark:border-[#383838] dark:hover:bg-[#333333] text-gray-900 dark:text-white hover:bg-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        {/* <td className="px-6 py-4">
                            <Link to="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                        </td> */}
                    </tr>
                    <tr className="border-b bg-gray-50 dark:bg-[#434343] dark:border-[#383838] dark:hover:bg-[#333333] text-gray-900 dark:text-white hover:bg-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-4">
                            White
                        </td>
                        <td className="px-6 py-4">
                            Laptop PC
                        </td>
                        <td className="px-6 py-4">
                            $1999
                        </td>
                        {/* <td className="px-6 py-4">
                            <Link to="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                        </td> */}
                    </tr>
                    <tr className="bg-white border-b dark:bg-[#434343] dark:border-[#383838] dark:hover:bg-[#333333] text-gray-900 dark:text-white hover:bg-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                            Black
                        </td>
                        <td className="px-6 py-4">
                            Accessories
                        </td>
                        <td className="px-6 py-4">
                            $99
                        </td>
                        {/* <td className="px-6 py-4">
                            <Link to="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                        </td> */}
                    </tr>
                    <tr className="border-b bg-gray-50 dark:bg-[#434343] dark:border-[#383838] dark:hover:bg-[#333333] text-gray-900 dark:text-white hover:bg-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Google Pixel Phone
                        </th>
                        <td className="px-6 py-4">
                            Gray
                        </td>
                        <td className="px-6 py-4">
                            Phone
                        </td>
                        <td className="px-6 py-4">
                            $799
                        </td>
                        {/* <td className="px-6 py-4">
                            <Link to="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                        </td> */}
                    </tr>
                    <tr className='bg-white border-b dark:bg-[#434343] dark:border-[#383838] dark:hover:bg-[#333333] text-gray-900 dark:text-white hover:bg-gray-200'>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple Watch 5
                        </th>
                        <td className="px-6 py-4">
                            Red
                        </td>
                        <td className="px-6 py-4">
                            Wearables
                        </td>
                        <td className="px-6 py-4">
                            $999
                        </td>
                        {/* <td className="px-6 py-4">
                            <Link to="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                        </td> */}
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="createProductModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* <!-- Modal header --> */}
            <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Add New</h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-target="createProductModal" data-modal-toggle="createProductModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <form action="#">
                <div class="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
                    </div>
                    <div>
                        <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                        <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
                    </div>
                    <div>
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
                    </div>
                    <div><label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label><select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"><option selected="">Select category</option><option value="TV">TV/Monitors</option><option value="PC">PC</option><option value="GA">Gaming/Console</option><option value="PH">Phones</option></select></div>
                    <div class="sm:col-span-2"><label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label><textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here"></textarea></div>
                </div>
                <button type="submit" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>
                    Add new product
                </button>
            </form>
        </div>
    </div>
</div>
        </>
    )
}

export default MultiPurposeTable