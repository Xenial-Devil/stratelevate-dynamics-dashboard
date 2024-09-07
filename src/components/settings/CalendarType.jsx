import React from 'react'
import Form from "../common/Form";


class FieldTypeForm extends Form {
  state = {
    data: { id: null , orgTypeName: "", description: "" },
    errors: {},
    validationMessage: {
      orgTypeName: '',

    },
	commonValidationMessage:"",
  };
  }


const CalendarType = () => {
//   let thisContext = this;
//   const { data, errors } = this.state;

  return(
    <div className='w-full'>
      <section class="bg-white dark:bg-[#434343] rounded-lg">
        <div class="py-8 px-4 mx-auto max-w-6xl">
          <form action="#">
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <label for="fieldType"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Calendar Type</label>
                <input type="text" name="fieldType" id="fieldType"
                    class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 placeholder-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-2-primary-600 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500"
                    placeholder="Calendar Type..." required="" />
              </div>
              <div class="sm:col-span-2">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-2 border-2-gray-600 placeholder-gray-600 focus:ring-primary-500 focus:border-2-primary-500 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500 resize-none" placeholder="Your description here"></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button type="button" class="inline-flex w-2/3 justify-center items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 dark:bg-gray-950 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default CalendarType