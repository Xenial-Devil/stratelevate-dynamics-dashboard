import React from 'react'

const MeasureDetailsForm = () => {
    return (
        <div className='w-full'>
            <section class="bg-white dark:bg-[#434343] rounded-lg">
                <div class="py-8 px-4 mx-auto max-w-6xl">
                    <form action="#">
                        <h1 className='text-gray-900 dark:text-white text-3xl mb-4'>Measure Details</h1>
                        <div class="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Scoring Type</label>
                                <select id="category" class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                                    <option selected="" disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div>
                                <label for="Calender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Calender</label>
                                <select id="Calender" class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                                    <option selected="" disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div>
                                <label for="Data-Type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data Type</label>
                                <select id="Data-Type" class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                                    <option selected="" disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div>
                                <label for="Manual-Aggregation-Type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Manual Aggregation Type</label>
                                <select id="Manual-Aggregation-Type" class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                                    <option selected="" disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div>
                                <label for="Calculated-Aggregation-Type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Calculated Aggregation Type</label>
                                <select id="Calculated-Aggregation-Type" class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                                    <option selected="" disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div>
                                <label for="Decimal-Precision" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Decimal Precision</label>
                                <select id="Decimal-Precision" class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                                    <option selected="" disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                            <div>
                                <label for="Units" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Units</label>
                                <select id="Units" class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                                    <option selected="" disabled value=''>Select Type</option>
                                    <option value="TV">Option 1</option>
                                    <option value="PC">Option 2</option>
                                    <option value="GA">Option 3</option>
                                    <option value="PH">Option 4</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )

}

export default MeasureDetailsForm