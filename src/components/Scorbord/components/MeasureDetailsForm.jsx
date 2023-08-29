import React from 'react'

const MeasureDetailsForm = () => {
    return (
        <div className='w-full'>
            <section className="bg-white dark:bg-[#434343] rounded-lg">
                <div className="py-8 px-4 mx-auto max-w-6xl">
                    <form action="#">
                        <h1 className='text-gray-900 dark:text-white text-3xl mb-4'>Measure Details</h1>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Scoring Type</label>
                                <select id="category" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                                    <option selected="" disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div>
                                <label for="Calender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Calender</label>
                                <select id="Calender" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                                    <option selected="" disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div>
                                <label for="Data-Type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data Type</label>
                                <select id="Data-Type" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                                    <option selected="" disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div>
                                <label for="Manual-Aggregation-Type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Manual Aggregation Type</label>
                                <select id="Manual-Aggregation-Type" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                                    <option selected="" disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div>
                                <label for="Calculated-Aggregation-Type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Calculated Aggregation Type</label>
                                <select id="Calculated-Aggregation-Type" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                                    <option selected="" disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div>
                                <label for="Decimal-Precision" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Decimal Precision</label>
                                <select id="Decimal-Precision" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                                    <option selected="" disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div>
                                <label for="Units" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Units</label>
                                <select id="Units" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                                    <option selected="" disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div className='flex flex-wrap items-center '>
                                <label for="gender" className="mr-4 text-sm font-medium text-gray-900 dark:text-white">Gender:</label>
                                <div className="flex" id='gender'>
                                    <div className="flex items-center mr-4">
                                        <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-[#292929] dark:border-gray-600" />
                                        <label for="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-white">Male</label>
                                    </div>
                                    <div className="flex items-center mr-4">
                                        <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-[#292929] dark:border-gray-600" />
                                        <label for="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-white">Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )

}

export default MeasureDetailsForm