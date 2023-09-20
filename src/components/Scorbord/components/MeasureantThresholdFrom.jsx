import React, { useState } from 'react'
import Icon from '../../icon'
const MeasureantThresholdFrom = () => {
    const [message, setMessage] = useState([]);
    const [comment, setComment] = useState('');
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };
    const addMessage = (msg) => {
        setMessage([...message, msg]);
        setComment('');
    }
    const removeMessage = (msg) => {
        setMessage(message.filter((m) => m !== msg));

    }
    return (
        <>
            <div className='w-full text-blue-900 dark:text-blue-200 px-1 py-4 px-2 bg-blue-500 bg-opacity-20 border-2 border-blue-500 rounded mb-4'><h3 className='flex justify-center items-center text-center'>To see more Measure Values Choose a larger calender period selector.</h3></div>
            <div>
                <div className='grid grid-flow-col gap-2 '>
                    <div className='flex justify-center items-center '>
                        August 2023
                    </div>
                    <div className='flex flex-col justify-center items-center mb-2'>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 mb-2">N/A</span>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <div>
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                            </div>
                        </label>
                    </div>
                    <div className='flex justify-center items-center '><div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Measure Values</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-[#292929] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    </div>
                    <div className='flex justify-center items-center '>
                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Worst</label>
                            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-[#292929] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                    </div>
                    <div className='flex justify-center items-center '>
                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Red</label>
                            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-[#292929] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>

                    </div>
                    <div className='flex justify-center items-center '>
                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Goal</label>

                            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-[#292929] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                    </div>
                    <div className='flex justify-center items-center '>
                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Best</label>
                            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-[#292929] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-6 px-2'>
                        {/* <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comment</label>
                            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-[#292929] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                        </div> */}
                        <button type="button" data-modal-target="addcomments" data-modal-toggle="addcomments">
                            <Icon icon="ic:baseline-message" width="28" className='fill-gray-700 text-gray-700 dark:fill-white dark:text-white' />
                        </button>
                    </div>
                </div>
            </div>
            <div id="addcomments" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[100] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-6xl max-h-full !shadow-lg">
                    {/* <!-- Modal content --> */}
                    <div className="relative p-4 rounded-lg shadow bg-white dark:bg-[#434343] sm:p-5">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between items-center pb-4 rounded-t border-b dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Comments</h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-target="addcomments" data-modal-toggle="addcomments">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className='grid justify-center items-center md:grid-cols-4'>
                            <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-300 dark:bg-gray-700 dark:border-gray-600 shadow-md">
                                <div class="px-4 py-2 bg-gray-200 rounded-t-lg dark:bg-gray-800">
                                    <label for="comment" class="sr-only">Your comment</label>
                                    <textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-gray-200 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 resize-none" placeholder="Write a comment..." required value={comment} onChange={handleCommentChange}></textarea>
                                </div>
                                <div class="flex items-center justify-between px-3 py-2 border-t border-gray-500 dark:border-gray-600">
                                    <button type="button" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" onClick={()=>addMessage(comment)}>
                                        Post comment
                                    </button>
                                </div>
                            </div>
                            <div className="md:col-span-3">
                                <div class="flex flex-col gap-2">
                                    {(message.length > 0) ? message.map((msg) => (
                                        <>
                                                    <blockquote class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                                                        <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">{msg}</p>
                                                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={removeMessage(msg)}>
                                                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="sr-only">Close modal</span>
                                                        </button>
                                                    </blockquote>
                                        </>
                                    )) : <div className='flex justify-center items-center text-center'>No Comments</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default MeasureantThresholdFrom