import { useState } from "react";
import { IoMdClose } from "react-icons/io";


import axios from 'axios';
import Swal from 'sweetalert2'



const Modal = ({ isModalOpen, setIsModalOpen, id, refetch }) => {

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [isUploading, setIsUploading] = useState(false);


    //Handle file selection 
    const handleFileSubmit = e => {
        const files = Array.from(e.target.files);
        const fileNamesWithExtension = files?.map(file => file.name);
        setSelectedFiles(fileNamesWithExtension);
    }


    //Handle attachment upload
    const handleAttachmentUpload = () => {
        setIsUploading(true);
        axios.post(`https://usermanagement-xi.vercel.app/api/users?id=${id}`, selectedFiles)
            .then(res => {
                if (res.data) {
                    refetch();  //Refetch the latest data after uploading
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Attachments uploaded successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setSelectedFiles([]);
                    setIsModalOpen(!isModalOpen);
                    setIsUploading(false);
                }

            })
    }




    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center ">
                    <div className="fixed inset-0 bg-black opacity-50 "></div>

                    <div className="z-50 bg-white  relative rounded-lg shadow-lg ">
                        {/* Modal close button */}
                        <span className="absolute top-4 right-4 cursor-pointer text-2xl text-gray-500" onClick={() => setIsModalOpen(!isModalOpen)}>
                            <IoMdClose />
                        </span>

                        <div className="mt-10 px-10 pb-5">
                            <h2 className="text-2xl font-bold mb-4">Pick Attachments</h2>
                            {/* Custom file input for selecting attachments */}
                            <div className="relative bg-gray-100 p-4 rounded-md border-dashed border-2 border-gray-400 w-80">
                                <label htmlFor="fileInput" className="cursor-pointer font-semibold bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300">
                                    Choose File
                                </label>
                                <input onChange={handleFileSubmit} multiple type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                            </div>

                            {/* Selected file names with extension */}
                            <ul>
                                {
                                    selectedFiles?.map((file, index) => <li className="font-semibold text-lg mt-2" key={index}>{index + 1}.{file}</li>)
                                }
                            </ul>

                            {/* Attachment upload button */}
                            {
                                selectedFiles?.length > 0 && <div className="mt-5">
                                    <button disabled={isUploading} onClick={handleAttachmentUpload} className="w-full py-3 bg-green-600 rounded-md font-semibold text-white">
                                        {
                                            isUploading ? "Uploading...." : "Upload"
                                        }
                                    </button>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
