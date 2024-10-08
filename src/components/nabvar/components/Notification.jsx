import React from 'react'
import { Link } from 'react-router-dom';
import profile from '../../../img/profile.jpg';
const Notification = () => {
  return (
    <>
          <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" class="inline-flex items-center text-sm font-medium text-center focus:outline-none hover:text-[#7e7e7e] text-white" type="button">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                  <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
              </svg>
              <div class="relative flex">
                  <div class="relative inline-flex w-3 h-3 bg-[#959595] border-2 rounded-full -top-2 right-3 border-gray-900"></div>
              </div>
          </button>
          <div id="dropdownNotification" class="z-20 hidden w-full max-w-sm  divide-y  rounded-lg shadow bg-[#303030] divide-gray-700" aria-labelledby="dropdownNotificationButton">
              <div class="block px-4 py-2 font-medium text-center  rounded-t-lg bg-[#1c1c1c] text-white">
                  Notifications
              </div>
              <div class="divide-y  divide-[#707070]">
                  <Link to="#" class="flex px-4 py-3  hover:bg-[#404040]">
                      <div class="flex-shrink-0">
                          <img class="rounded-full w-11 h-11" src={profile} alt="Jese" />
                          <div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-blue-600 border rounded-full border-gray-800">
                              <svg class="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                  <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                                  <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
                              </svg>
                          </div>
                      </div>
                      <div class="w-full pl-3">
                          <div class=" text-sm mb-1.5 text-gray-400">New message from <span class="font-semibold  text-white">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</div>
                          <div class="text-xs text-blue-500">a few moments ago</div>
                      </div>
                  </Link>
                  <Link to="#" class="flex px-4 py-3  hover:bg-[#404040]">
                      <div class="flex-shrink-0">
                          <img class="rounded-full w-11 h-11" src={profile} alt="Joseph" />
                          <div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border rounded-full border-gray-800">
                              <svg class="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                  <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                              </svg>
                          </div>
                      </div>
                      <div class="w-full pl-3">
                          <div class=" text-sm mb-1.5 text-gray-400"><span class="font-semibold  text-white">Joseph Mcfall</span> and <span class="font-medium  text-white">5 others</span> started following you.</div>
                          <div class="text-xs text-blue-500">10 minutes ago</div>
                      </div>
                  </Link>
                  <Link to="#" class="flex px-4 py-3  hover:bg-[#404040]">
                      <div class="flex-shrink-0">
                          <img class="rounded-full w-11 h-11" src={profile} alt="Bonnie" />
                          <div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-blue-900 border rounded-full border-gray-800">
                              <svg class="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                  <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                              </svg>
                          </div>
                      </div>
                      <div class="w-full pl-3">
                          <div class=" text-sm mb-1.5 text-gray-400"><span class="font-semibold  text-white">Bonnie Green</span> and <span class="font-medium  text-white">141 others</span> love your story. See it and view more stories.</div>
                          <div class="text-xs text-blue-500">44 minutes ago</div>
                      </div>
                  </Link>
                  <Link to="#" class="flex px-4 py-3  hover:bg-[#404040]">
                      <div class="flex-shrink-0">
                          <img class="rounded-full w-11 h-11" src={profile} alt="Leslie" />
                          <div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-400 border rounded-full border-gray-800">
                              <svg class="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                  <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                              </svg>
                          </div>
                      </div>
                      <div class="w-full pl-3">
                          <div class=" text-sm mb-1.5 text-gray-400"><span class="font-semibold  text-white">Leslie Livingston</span> mentioned you in a comment: <span class="font-medium text-blue-500" href="#">@bonnie.green</span> what do you say?</div>
                          <div class="text-xs text-blue-500">1 hour ago</div>
                      </div>
                  </Link>
                  <Link to="#" class="flex px-4 py-3  hover:bg-[#404040]">
                      <div class="flex-shrink-0">
                          <img class="rounded-full w-11 h-11" src={profile} alt="Robert" />
                          <div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 border rounded-full border-gray-800">
                              <svg class="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                  <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                              </svg>
                          </div>
                      </div>
                      <div class="w-full pl-3">
                          <div class=" text-sm mb-1.5 text-gray-400"><span class="font-semibold  text-white">Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend.</div>
                          <div class="text-xs text-blue-500">3 hours ago</div>
                      </div>
                  </Link>
              </div>
              <Link to="#" class="block py-2 text-sm font-medium text-center  rounded-b-lg  bg-[#1c1c1c] hover:bg-gray-700 text-white">
                  <div class="inline-flex items-center ">
                      <svg class="w-4 h-4 mr-2  text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                          <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                      </svg>
                      View all
                  </div>
              </Link>
          </div></>
  )
}

export default Notification