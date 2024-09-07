import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MeasureDetailsForm = () => {
const [name, setName] = useState('');
  //const [isChildType, setChildType] = useState('');
  const [description, setDescription] = useState('');

   const [cardTypeId, setSelectedCardType]  = useState('');
   const [optionList,setOptionList] = useState([]);

        const fetchData = () => {
            let url1 = 'http://localhost:8080/api/scoreTypes/all'
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

           const [designationId, setDesignationSelected]  = useState('');
           const [designationList, setDesignationList] = useState([]);

                const getAllDesignation = () => {
                          let url1 = 'http://localhost:8080/api/aggregationTypes/all'
                                         var config = {
                                           headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") }
                                         };

                          axios.get(url1, config)
                            .then((response) => {
                                  const { data } = response;
                                  console.log("aggregation: " + response.data)
                                  if (response.status === 200){
                                  //check the api call is success by stats code 200,201 ...etc
                                      setDesignationList(data);
                                  } else {
                                  //error handle section
                                  }
                          }).catch((error) => console.log(error));
                };

        useEffect(()=>{
            fetchData();
                getAllDesignation();
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


return (
    <div className='w-full'>
        <section class="bg-white dark:bg-[#434343] rounded-lg">
            <div class="py-8 px-4 mx-auto max-w-6xl">
                <form action="#">
                    <h1 className='text-gray-900 dark:text-white text-3xl mb-4'>Measure Details</h1>
                    <div class="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Scoring Type</label>
                            <select
                                                                class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg placeholder-gray-600 focus:ring-primary-600 focus:border-2-primary-600 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500"
                                                                disabled={false} value={cardTypeId} onChange={(e) => setSelectedCardType(e.currentTarget.value)}>
                                                                <option value="Null">N/A</option>
                                                                {optionList.map((item) => (
                                                                    <option key={item} value={item.id}>
                                                                        {item.scoreType}
                                                                    </option>
                                                                ))}
                                                            </select>

{/*                             <select id="category" class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500"> */}
{/*                                 <option selected="" disabled value=''>Select Type</option> */}
{/*                                 <option value="TV">Option 1</option> */}
{/*                                 <option value="PC">Option 2</option> */}
{/*                                 <option value="GA">Option 3</option> */}
{/*                                 <option value="PH">Option 4</option> */}
{/*                             </select> */}
                        </div>
                        <div>
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Calender</label>
                            <select id="category" class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                                <option selected="" disabled value=''>Select Type</option>
                                <option value="TV">Option 1</option>
                                <option value="PC">Option 2</option>
                                <option value="GA">Option 3</option>
                                <option value="PH">Option 4</option>
                            </select>
                        </div>
                        <div>
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data Type</label>
                            <select id="category" class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                                <option selected="" disabled value=''>Select Type</option>
                                <option value="TV"># Number</option>
                                <option value="PC">% Percentage</option>
                                <option value="GA">Currency</option>
                                <option value="PH">Option 4</option>
                            </select>
                        </div>
                        <div>
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Manual Aggregation Type</label>
                            <select name="designationId"
                                                    class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg placeholder-gray-600 focus:ring-primary-600 focus:border-2-primary-600 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500"
                                                    disabled={false}
                                                    value={designationId}
                                                    onChange={(e) => setDesignationSelected(e.currentTarget.value)}>
                                                        {designationList.map((item) => (
                                                            <option key={item} value={item.id}>
                                                                {item.aggregationName}
                                                            </option>
                                                        ))}
                                              </select>

{/*                             <select id="category" class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500"> */}
{/*                                 <option selected="" disabled value=''>Select Type</option> */}
{/*                                 <option value="TV">Option 1</option> */}
{/*                                 <option value="PC">Option 2</option> */}
{/*                                 <option value="GA">Option 3</option> */}
{/*                                 <option value="PH">Option 4</option> */}
{/*                             </select> */}
                        </div>
{/*                         <div> */}
{/*                             <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Calculated Aggregation Type</label> */}
{/*                             <select id="category" class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500"> */}
{/*                                 <option selected="" disabled value=''>Select Type</option> */}
{/*                                 <option value="TV">Option 1</option> */}
{/*                                 <option value="PC">Option 2</option> */}
{/*                                 <option value="GA">Option 3</option> */}
{/*                                 <option value="PH">Option 4</option> */}
{/*                             </select> */}
{/*                         </div> */}
                        <div>
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Decimal Precision</label>
                            <select id="category" class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                                <option selected="" disabled value=''>Decimal Type</option>
                                <option value="TV">Option 1</option>
                                <option value="PC">Option 2</option>
                                <option value="GA">Option 3</option>
                                <option value="PH">Option 4</option>
                            </select>
                        </div>
                        <div>
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Units</label>
                            <select id="category" class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 placeholder-gray-600 focus:border-2-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500">
                                <option selected="" disabled value=''>Select Unit Type</option>
                                <option value="TV">Day</option>
                                <option value="PC">Hour</option>
                                <option value="GA">Minutes</option>
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