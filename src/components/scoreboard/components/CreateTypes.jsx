import React, { useEffect, useRef, useState, useCallback } from 'react';
import axios from 'axios';
import Tags from "@yaireo/tagify/dist/react.tagify";
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';
import Datepicker from 'flowbite-datepicker/Datepicker';

import '@yaireo/tagify/dist/tagify.css'
import './scoreStyle.css'


const CreateScoreBoard = () => {

const [name, setName] = useState('');
  //const [isChildType, setChildType] = useState('');
  const [description, setDescription] = useState('');

   const [cardTypeId, setSelectedCardType]  = useState('');
   const [optionList,setOptionList] = useState([]);

        const fetchData = () => {
            let url1 = 'http://localhost:8080/api/cardTypes/all'
                           var config = {
                             headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") }
                           };

                           axios.get(url1, config)
              .then((response) => {
                const { data } = response;
                 console.log(response.data)
                if (response.status === 200){
                    //check the api call is success by stats code 200,201 ...etc
                    setOptionList(data)
                    //console.log("Rifr:" + optionList[0].cardType)
                } else {
                    //error handle section
                }
              })
              .catch((error) => console.log(error));
          };


       const tagifyRefDragSort = useRef()
         const [tagifySettings, setTagifySettings] = useState([])
         const [tagifyProps, setTagifyProps] = useState({})
         const baseTagifySettings = {
           blacklist: ["xxx", "yyy", "zzz"],
           //backspace: "edit",
           placeholder: "type something",
           dropdown: {
             enabled: 0 // a;ways show suggestions dropdown
           }
         }
         const settings = {
           ...baseTagifySettings,
           ...tagifySettings
         }
         const clearAll = () => {
           tagifyRefDragSort.current && tagifyRefDragSort.current.removeAllTags()
         }
         const onChange = useCallback(e => {
           console.log("CHANGED:", e.detail.value)
         }, [])

         useEffect(() => {
           const dateRangePickerEl = document?.getElementById('dateRangePickerId');
           new DateRangePicker(dateRangePickerEl, {
             minDate: new Date(),
             format: 'dd/mm/yyyy',
           });
//            new Datepicker(document.getElementById('datepicker'), {
//              minDate: new Date(),
//              format: 'dd/mm/yyyy'
//            });
           setTagifyProps({ loading: false })
           // simulate state change where some tags were deleted
           setTimeout(
             () =>
               setTagifyProps((lastProps) => ({
                 ...lastProps,
                 defaultValue: ["abc"],
                 showFilteredDropdown: false
               })),
             5000
           )
         }, [])

        useEffect(()=>{
            fetchData();

        },[])
        
const createScoreBoard = (options, cardTypeObj) => {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem("token");
      if (token === null || token === "null" || token === '') {
        resolve(false);
        return;
      }

      let url = 'http://localhost:8080/api/cardTypes';
      axios
        .post(url, cardTypeObj, options)
        .then((response) => {
          console.log(response);
          if (response.data.status=='FAILED'){
            alert('validation failed:', response.data.validationMessages);
            console.log('validation failed', response.data.validationMessages);
          }
          if(response.data.status=='200 OK'){
            alert('Card Type created!');
          }

        })
        .catch((err) => {
          alert('Error details: ' + err);
          resolve(false);
        });
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardTypeData = {
      scoreCardName: name,
//       isChildType: isChildType,
      cardTypeId: cardTypeId,
      description: description,
    };

    try {
      let token = localStorage.getItem("token");
      if (token === null || token === "null" || token === '') {
        alert('login token not found!');
        return;
      }

      var options = {
        headers: { Authorization: "Bearer " + `${token}` },
      };

      console.log('Going to add card type');

      createScoreBoard(options, cardTypeData).then((response) => {
        console.log('after data creation:');
        console.log(response);
      }).catch((err) => {
        alert('Error details main: ' + err);
      });;

      // Clear form after successful submission
      setName('');
      setSelectedCardType('');
      setDescription('');
      //setChildType('');
    } catch (error) {
      console.error('Error adding card type:', error);
    }
  };

  return(
    <div className='w-full'>
      <section class="bg-white dark:bg-[#434343] rounded-lg">
        <div class="py-8 px-4 mx-auto max-w-6xl">
          <form onSubmit={handleSubmit}>
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 placeholder-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-2-primary-600 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500" placeholder="Name ..." required="" />

              </div>
              <div>
                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Type</label>
                <select
                                    class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg placeholder-gray-600 focus:ring-primary-600 focus:border-2-primary-600 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500"
                                    disabled={false} value={cardTypeId} onChange={(e) => setSelectedCardType(e.currentTarget.value)}>
                                    <option value="Null">N/A</option>
                                    {optionList.map((item) => (
                                        <option key={item} value={item.id}>
                                            {item.cardType}
                                        </option>
                                    ))}
                                </select>
{/*                 <select id="category" class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500"> */}
{/*                   <option selected="" disabled value=''>Select Type</option> */}
{/*                   <option value="TV">Option 1</option> */}
{/*                   <option value="PC">Option 2</option> */}
{/*                   <option value="GA">Option 3</option> */}
{/*                   <option value="PH">Option 4</option> */}
{/*                 </select> */}
              </div>
              <div>
                <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight</label>
                <input type="text" name="item-weight" id="item-weight" class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg placeholder-gray-600 focus:ring-primary-600 focus:border-2-primary-600 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500" placeholder="Set Weight..." required="" />
              </div>
              <div class="sm:col-span-2">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-2 border-2-gray-600 placeholder-gray-600 focus:ring-primary-500 focus:border-2-primary-500 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500 resize-none" placeholder="Your description here"></textarea>
              </div>
            </div>
            <div date-rangepicker='true' id='dateRangePickerId' className="grid gap-4 md:grid-cols-2 mt-6">
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
                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                            <div className="relative col-span-2">
                            <div>
                              <label for="tag" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tags</label>
                              <Tags
                                tagifyRef={tagifyRefDragSort}
                                settings={settings}
                                autoFocus={true}
                                {...tagifyProps}
                                onChange={onChange} />
                            </div>
                            </div>
                            </div>
            <div className="flex justify-center">
              <button type="button" class="inline-flex w-2/3 justify-center items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 dark:bg-gray-950 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Advancd Options
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default CreateScoreBoard