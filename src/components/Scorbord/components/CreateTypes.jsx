import React,{useEffect} from 'react'
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';
const CreateTypes = () => {
  useEffect(() => {
    
    const dateRangePickerEl = document?.getElementById('dateRangePickerId');
    new DateRangePicker(dateRangePickerEl, {
      minDate: new Date(),
      format: 'dd/mm/yyyy',
    }); 
    return () => {
      
    }
  }, [])
  
  return(
    <div className='w-full'>
      <section className="bg-white dark:bg-[#434343] rounded-lg">
        <div className="py-8 px-4 mx-auto max-w-6xl">
          <form action="#">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" name="name" id="name" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 placeholder-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-2-primary-600 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500" placeholder="Name ..." required="" />
              </div>
              <div>
                <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                <select id="category" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                  <option selected="" disabled value=''>Select Type</option>
                  <option value="TV">Option 1</option>
                  <option value="PC">Option 2</option>
                  <option value="GA">Option 3</option>
                  <option value="PH">Option 4</option>
                </select>
              </div>
              <div>
                <label for="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight</label>
                <input type="text" name="item-weight" id="item-weight" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg placeholder-gray-600 focus:ring-primary-600 focus:border-2-primary-600 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500" placeholder="Set Weight..." required="" />
              </div>
              <div className="sm:col-span-2">
                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-2 border-2-gray-600 placeholder-gray-600 focus:ring-primary-500 focus:border-2-primary-500 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500 resize-none" placeholder="Your description here"></textarea>
              </div>
            </div>
            <div date-rangepicker id='dateRangePickerId' className="grid gap-4 md:grid-cols-2 mt-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 mt-7 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <label for="Start" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start On</label>
                <input name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-[#292929] dark:border-gray-600 placeholder-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 mt-7 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <label for="end" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Archives On</label>
                <input name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-[#292929] dark:border-gray-600 placeholder-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
              </div>
            </div>
            <div className="flex justify-center">
              <button type="button" className="inline-flex w-2/3 justify-center items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 dark:bg-gray-950 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Create
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default CreateTypes