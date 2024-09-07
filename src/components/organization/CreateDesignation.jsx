import React, { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';




  const getAllOrganization = () => {
       let url1 = 'http://localhost:8080/api/organizations/all'
               var config = {
                 headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") }
               };

               axios.get(url1, config)
                 .then((response) => {

                    console.log(response.data)
                                     return response
                 })
                 .catch((err) => {
                   alert('err');

                 })

  }



const CreateDesignation = () => {
  const [name, setDesignationName] = useState('');
  const [orgTypeId, setOrgTypeId] = useState(1);
  const [organizationId, setOrganizationId] = useState(1);
  const [description, setDescription] = useState('');

  const [select, setSelected]  = useState('');
  const [organizationList,setOrganizationList] = useState([]);

  const fetchData = () => {
          let url1 = 'http://localhost:8080/api/organizations/all'
                         var config = {
                           headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") }
                         };

                         axios.get(url1, config)
            .then((response) => {
              const { data } = response;
               console.log(response.data)
              if(response.status === 200){
                  //check the api call is success by stats code 200,201 ...etc
                  setOrganizationList(data);
              }else{
                  //error handle section
              }
            })
            .catch((error) => console.log(error));
        };

      useEffect(() => {
          fetchData();
      },[])

  const createDesignation = (options, designationObj) => {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem("token");
      console.log(token);
      if (token === null || token === "null" || token === '') {
        resolve(false);
        return;
      }

      let url = 'http://localhost:8080/api/designations';
      axios
        .post(url, designationObj, options)
        .then((response) => {
          console.log(response);
          if (response.data.status=='FAILED'){
            alert('validation failed ');
          }
          if (response.data.status=='200 OK'){
            alert('Designation created!');
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
    
    const designationData = {
      designationName: name,
      organizationId: organizationId,
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

      console.log('Going to add designation');

      createDesignation(options, designationData).then((response) => {
        console.log('after data creation:');
        console.log(response);
      }).catch((err) => {
        alert('Error details main: ' + err);
      });

      // Clear form after successful submission
      setDesignationName('');
      setOrganizationId('');
      setDescription('');

    } catch (error) {
      console.error('Error adding designation:', error);
    }
  };

  return (
    <div className='w-full'>
      <section class="bg-white dark:bg-[#434343] rounded-lg">
        <div class="py-8 px-4 mx-auto max-w-6xl">
          <form onSubmit={handleSubmit}>
            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Organization</label>
                  <select name="organizationId"
                    class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg placeholder-gray-600 focus:ring-primary-600 focus:border-2-primary-600 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500"
                    disabled={false} value={select}
                    onChange={(e) => setSelected(e.currentTarget.value)}>
                          {organizationList.map((item) => (
                          <option key={item.orgName} value={item.orgName}>
                              {item.orgName}
                          </option>
                          ))}
                  </select>
              </div>
              <div class="sm:col-span-2">
                              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Designation Name</label>
                              <input type="text" name="name" id="name" value={name} onChange={(e) => setDesignationName(e.target.value)}
                                class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 placeholder-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-2-primary-600 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500" placeholder="Name ..." required="" />
                            </div>

              <div class="sm:col-span-2">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-2 border-2-gray-600 placeholder-gray-600 focus:ring-primary-500 focus:border-2-primary-500 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500 resize-none" placeholder="Your description here"></textarea>
              </div>
            </div>

            <div className="flex justify-center">
              <button type="submit" class="inline-flex w-2/3 justify-center items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 dark:bg-gray-950 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default CreateDesignation