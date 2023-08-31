import React from 'react'
import Dropzone from './dropzone/Dropzone'
import MeasureField from './MeasureField'
import MeasuerOwners from './MeasuerOwners'
import MeasureUpdaters from './MeasureUpdaters'
import { Divider } from '@mui/material'
const MeasureDetailsForm = () => {
    return (
        <div className='w-full grid gap-4'>
            <section className="bg-white dark:bg-[#434343] rounded-lg">
                <div className="py-8 px-4 mx-auto max-w-6xl">
                    <form action="#">
                        <h4 className='text-gray-900 dark:text-white text-lg mb-1 uppercase'>Measure Details</h4>
                        <Divider className='col-span-3 border-b-gray-600 dark:border-b-gray-300' />
                        <div className="grid gap-4 sm:grid-cols-2 mt-3">
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Scoring Type</label>
                                <select id="category" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500" defaultValue="">
                                    <option  disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="Calender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Calender</label>
                                <select id="Calender" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500" defaultValue="">
                                    <option  disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="Data-Type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data Type</label>
                                <select id="Data-Type" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500" defaultValue="">
                                    <option  disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="Manual-Aggregation-Type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Manual Aggregation Type</label>
                                <select id="Manual-Aggregation-Type" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500" defaultValue="">
                                    <option disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="Calculated-Aggregation-Type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Calculated Aggregation Type</label>
                                <select id="Calculated-Aggregation-Type" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500" defaultValue="">
                                    <option disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="Decimal-Precision" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Decimal Precision</label>
                                <select id="Decimal-Precision" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500" defaultValue="">
                                    <option disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="Units" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Units</label>
                                <select id="Units" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500" defaultValue="">
                                    <option disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div className="grid gap-2 items-center mt-5">
                                <div className='flex flex-wrap items-center'>
                                    <label htmlFor="gender" className="mr-4 text-sm font-medium text-gray-900 dark:text-white">Gender:</label>
                                    <div className="flex" id='gender'>
                                        <div className="flex items-center mr-4">
                                            <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-[#292929] dark:border-gray-600" />
                                            <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-white">Male</label>
                                        </div>
                                        <div className="flex items-center mr-4">
                                            <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-[#292929] dark:border-gray-600" />
                                            <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-white">Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center mt-2">
                                    <label htmlFor="checkbox-2" class="mr-2 text-sm font-medium text-gray-900 dark:text-white">Full Time Employee</label>
                                    <input id="checkbox-2" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-[#292929]  dark:border-gray-600" />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <Dropzone />
                            </div>
                            <div className="flex justify-end items-center col-span-2">
                                <button type="button" className="inline-flex justify-center items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center w-1/4 text-white bg-primary-700 dark:bg-gray-950 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                    Save
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
            <MeasureField />
            <MeasuerOwners/>   
            <MeasureUpdaters/> 
        </div>
    )

}

export default MeasureDetailsForm