import React from 'react'

const MeasureField = () => {
  return (
    <section className='bg-white dark:bg-[#434343] rounded-lg'>
      <div className="py-8 px-4 mx-auto max-w-6xl">
          <form action="#">
              <h1 className='text-gray-900 dark:text-white text-3xl mb-4'>Measure Details</h1>
              <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                      <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Measure Values</label>
                      <select id="category" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500" defaultValue="">
                          <option disabled value=''>Select Type</option>
                          <option value="TV">Option 1</option>
                          <option value="PC">Option 2</option>
                          <option value="GA">Option 3</option>
                          <option value="PH">Option 4</option>
                      </select>
                  </div>
                  <div>
                      <label htmlFor="Worst" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Worst</label>
                      <select id="Worst" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500" defaultValue="">
                          <option disabled value=''>Select Type</option>
                          <option value="TV">Option 1</option>
                          <option value="PC">Option 2</option>
                          <option value="GA">Option 3</option>
                          <option value="PH">Option 4</option>
                      </select>
                      <input type="text" htmlFor="Worst" name="" id="" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-[#292929] dark:border-gray-600 placeholder-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div>
                      <label htmlFor="Red-Flag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Red Flag</label>
                      <select id="Red-Flag" className="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500" defaultValue="">
                          <option disabled value=''>Select Type</option>
                          <option value="TV">Option 1</option>
                          <option value="PC">Option 2</option>
                          <option value="GA">Option 3</option>
                          <option value="PH">Option 4</option>
                      </select>
                      <input type="text" htmlFor="Red-Flag" name="" id="" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-[#292929] dark:border-gray-600 placeholder-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div>
                      <label htmlFor="Goal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Goal</label>
                      <select id="Red-Flag" className="mt-2 bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500" defaultValue="">
                          <option disabled value=''>Select Type</option>
                          <option value="TV">Option 1</option>
                          <option value="PC">Option 2</option>
                          <option value="GA">Option 3</option>
                          <option value="PH">Option 4</option>
                      </select>
                      <input type="text" htmlFor="Goal" name="" id="" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-[#292929] dark:border-gray-600 placeholder-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div>
                      <label htmlFor="Best" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Best</label>
                      <select id="Red-Flag" className="mt-2 bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500" defaultValue="">
                          <option disabled value=''>Select Type</option>
                          <option value="TV">Option 1</option>
                          <option value="PC">Option 2</option>
                          <option value="GA">Option 3</option>
                          <option value="PH">Option 4</option>
                      </select>
                      <input type="text" htmlFor="Best" name="" id="" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-[#292929] dark:border-gray-600 placeholder-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  
              </div>
          </form>
      </div>
    </section>
  )
}

export default MeasureField