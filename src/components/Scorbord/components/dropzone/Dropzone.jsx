import React, { useState, useEffect } from 'react'
const acceptedFileList = {
    image: ['image/png', 'image/jpeg', 'image/svg+xml'],
    pdf: ['application/pdf'],
    excel: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'],
    doc: ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    text: ["text/plain"]
}
const Dropzone = ({ accept = 'image' }) => {
    const [files, setFiles] = useState();
    const [acceptedFiles, setAcceptedFiles] = useState({
        name: '',
        type: '',
    });
    useEffect(() => {
        switch (accept) {
            case 'image':
                setAcceptedFiles(
                    {
                        name: 'image',
                        type: acceptedFileList.image,
                    });
                break;
            case 'pdf':
                setAcceptedFiles(
                    {
                        name: 'pdf',
                        type: acceptedFileList.pdf,
                    });
                break;
            case 'excel':
                setAcceptedFiles(
                    {
                        name: 'excel',
                        type: acceptedFileList.excel,
                    });
                break;
            default:
                setAcceptedFiles(
                    {
                        name: 'text',
                        type: acceptedFileList.text,
                    });
                break;
        }
    }, [accept, acceptedFileList])
    const verifyFile = (files) => {
        if (files && files.length > 0) {
            const currentFile = files[0];
            const currentFileType = currentFile.type;
            const currentFileSize = currentFile.size;
            const types = currentFileType.split('/');
            if (currentFileSize > 10485760) {
                alert("This file is not allowed. " + currentFileSize + " bytes is too large");
                return false;
            }
            if (types[0] === '' || acceptedFiles.name !== types[0]) {
                alert("This file is not allowed. Only " + acceptedFiles.name.toUpperCase() + " is allowed");
                return false;
            }
            return true;
        }
        return false;
    }
    const uploadFile = (event) => {
        const inputFile = event.target;
        const files = event.target.files;
        if (files && files.length > 0) {
            const isVerified = verifyFile(files);
            if (isVerified) {
                setFiles(files[0].name);

            }
            else {
                inputFile.value = '';
            }
        }
    }
    return (
        <div className="flex items-center justify-center w-full flex-col">
            <label for="file-input" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-[#292929] hover:bg-gray-100 dark:border-gray-600 dark:hover:border-[#393939] dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6" id='imagefile'>
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-base text-gray-500 dark:text-gray-400">Only {(acceptedFiles.name).toUpperCase()} File Allowed</p>
                </div>
                <input id="file-input" type="file" className="hidden" accept={acceptedFiles.type} onChange={uploadFile} />
            </label>
            <ul id="gallery" className="flex flex-1 flex-wrap">
                <li id="empty" className="h-full w-full text-center flex flex-col items-center justify-start">
                    <span className="text-base text-black dark:text-white mt-2">{(files != '' && files != null && files != undefined) ? `Selected File Name: ${files}` : "No File Selected"}</span>
                </li>
            </ul>
        </div>
    )
}

export default Dropzone