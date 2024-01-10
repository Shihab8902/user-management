import { useState } from "react";

import { BsStack } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { GrAttachment } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";

import client from '../assets/images/client.jpg';
import manager from '../assets/images/manager.jpg';
import connectionPrimary from '../assets/images/connectionPrimary.jpg';
import connectionSecondary from '../assets/images/connectionSecondary.jpg';
import Modal from '../components/Modal';


const UserCard = ({ user, refetch }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    return <div className="bg-white w-full mt-5 p-2 rounded">

        {/* Client image with manager */}
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-1'>
                <img className='w-6 h-6 rounded-full' src={client} alt="" />
                <p className='text-xs font-bold'>Client Name</p>
            </div>

            <div className='flex items-center gap-1'>
                <img className='w-6 h-6 rounded-full ' src={manager} alt="" />
                <p className='text-xs font-bold'>Sadik Istiak</p>
            </div>
        </div>

        {/* Middle description section */}
        <div className="my-3 flex justify-between items-center">
            <p className="text-xs flex items-center gap-1"><BsStack /> Lorem ipsum dolor sit amet cons...</p>

            <p className="text-xs font-semibold flex items-center gap-1 p-1 rounded bg-gray-100"> <FaClipboardList /> 1/2</p>
        </div>

        {/* Lower status section */}
        <div className="flex items-center justify-between">
            <img className='w-6 h-6 rounded-full' src={connectionPrimary} alt="" />
            <img className='w-6 h-6 rounded-full' src={connectionSecondary} alt="" />
            <p className="bg-gray-100 p-1 rounded-full text-xs font-semibold">12+</p>
            <p className="flex items-center gap-1 font-semibold text-xs"><IoChatbubblesOutline />15</p>
            <p onClick={() => setIsModalOpen(!isModalOpen)} className="flex items-center gap-1 font-semibold text-xs cursor-pointer"><GrAttachment />{user?.attachments?.length}</p>
            <p className="flex items-center gap-1 font-semibold text-xs"><SlCalender />30-12-2022</p>
        </div>

        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} id={user?._id} />

    </div>



}

export default UserCard