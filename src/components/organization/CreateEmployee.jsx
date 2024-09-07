import React, { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';


const CreateEmployee = () => {
      const [name, setName] = useState('');
      const [lastName, setLastName] = useState('');
      const [description, setDescription] = useState('');
      const [mobileNo, setMobileNo] = useState('');
      const [email, setEmail] = useState('');
      const [joiningDate, setJoiningDate] = useState('');
      const [organizationId, setOrganizationSelected]  = useState('');
      const [organizationList, setOrganizationList] = useState([]);

      const getAllOrganization = () => {
            let url1 = 'http://localhost:8080/api/organizations/all'
            var config = {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") }
            };

            axios.get(url1, config)
                .then((response) => {
                    const { data } = response;
                    console.log(response.data)

                    if (response.status === 200) {
                      //check the api call is success by stats code 200,201 ...etc
                      setOrganizationList(data);
                    } else {
                      //error handle section
                }
            }).catch((error) => console.log(error));
      };

      const [designationId, setDesignationSelected]  = useState('');
      const [designationList, setDesignationList] = useState([]);

      const getAllDesignation = () => {
                let url1 = 'http://localhost:8080/api/designations/all'
                               var config = {
                                 headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") }
                               };

                axios.get(url1, config)
                  .then((response) => {
                        const { data } = response;
                        console.log(response.data)
                        if (response.status === 200){
                        //check the api call is success by stats code 200,201 ...etc
                            setDesignationList(data);
                        } else {
                        //error handle section
                        }
                }).catch((error) => console.log(error));
      };

      useEffect(()=>{
        getAllOrganization();
        getAllDesignation();
      },[])

      const createEmployee = (options, employeeObj) => {
        return new Promise((resolve, reject) => {
          let token = localStorage.getItem("token");
          if (token === null || token === "null" || token === '') {
            resolve(false);
            return;
          }

          let url = 'http://localhost:8080/api/employees';
          axios
            .post(url, employeeObj, options)
            .then((response) => {
              console.log(response);
              if(response.data.status=='FAILED' && response.data.validationMessages){
                alert('validation failed');
              }
              if(response.data.status=='200 OK'){
                alert('Employee created!');
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
        const employeeData = {
          firstName: name,
          lastName: lastName,
          mobileNo: mobileNo,
          email: email,
          joiningDate: joiningDate,
          organizationId, organizationId,
          designationId, designationId,
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

          console.log('Going to add Employee');

          createEmployee(options, employeeData).then((response) => {
            console.log('after data creation:');
            console.log(response);
          }).catch((err) => {
            alert('Error details main: ' + err);
          });;

          // Clear form after successful submission
          setName('');
          setLastName('');
          setDescription('');

        } catch (error) {
          console.error('Error adding employee:', error);
        }
  };

  return (
    <div className='w-full'>
      <section class="bg-white dark:bg-[#434343] rounded-lg">
        <div class="py-8 px-4 mx-auto max-w-6xl">
          <form onSubmit={handleSubmit}>
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employee First Name</label>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}
                  class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 placeholder-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-2-primary-600 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500" placeholder="Name ..." required="" />
              </div>
              <div class="sm:col-span-2">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                <input type="text" name="lastName" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}
                    class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 placeholder-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-2-primary-600 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500"
                    placeholder="Last Name ..." required="" />
              </div>
              <div class="sm:col-span-2">
                <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile</label>
                <input type="text" name="mobileNo" id="mobileNo" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)}
                    class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 placeholder-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-2-primary-600 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500"
                    placeholder="Mobile ..." required="" />
              </div>
              <div class="sm:col-span-2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="text" name="email" id="name" value={email} onChange={(e) => setEmail(e.target.value)}
                    class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 placeholder-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-2-primary-600 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500"
                    placeholder="Email ..." required="" />
              </div>
              <div class="sm:col-span-2">
                <label for="joiningDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Joining Date</label>
                <input type="date" name="joiningDate" id="joiningDate" value={joiningDate} onChange={(e) => setJoiningDate(e.target.value)}
                    class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 placeholder-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-2-primary-600 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500"
                    placeholder="Joining Date ..." required="" />
             </div>

              <div>
                  <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization</label>
                  <select name="organizationId"
                    class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg placeholder-gray-600 focus:ring-primary-600 focus:border-2-primary-600 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500"
                              disabled={false}
                              value={organizationId}
                              onChange={(e) => setOrganizationSelected(e.currentTarget.value)}>
                                  {organizationList.map((item) => (
                                  <option key={item} value={item.id}>
                                      {item.orgName}
                                  </option>
                              ))}
                  </select>
              </div>

              <div>
                  <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Designation</label>
                  <select name="designationId"
                        class="bg-gray-100 border-2 border-2-gray-600 text-gray-900 text-sm rounded-lg placeholder-gray-600 focus:ring-primary-600 focus:border-2-primary-600 block w-full p-2.5 dark:bg-[#292929] dark:border-2-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-2-primary-500"
                        disabled={false}
                        value={designationId}
                        onChange={(e) => setDesignationSelected(e.currentTarget.value)}>
                            {designationList.map((item) => (
                                <option key={item} value={item.id}>
                                    {item.designationName}
                                </option>
                            ))}
                  </select>
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

export default CreateEmployee