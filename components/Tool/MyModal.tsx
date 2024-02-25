'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ModalProps {
    modalId: string;
    modalDetails: {
        src: string;
        rooms: number;
        baths: number;
        m2: number;
        price: string;
        length: string;
        label: string;
    };
    onClose: () => void;
}

const MyModal = ({ modalId, modalDetails, onClose }: ModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        onClose();
    };

    return (
        <>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={openModal}
            >
                Open Modal Tool
            </button>

            {isModalOpen && (
                <div
                    id={modalId}
                    tabIndex={-1}
                    className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-3xl bg-gray/30 bg-opacity-100"
                >
                    <div className="relative w-full max-w-7xl max-h-full overflow-auto bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-xl font-medium text-gray-900">
                                {modalDetails.label}
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex items-center justify-center"
                                onClick={closeModal}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4 text-black">
                            <Image
                                src={modalDetails.src}
                                width={600}
                                height={200}
                                alt=""
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex font-medium text-gray-900 items-center p-4 md:p-5 space-x-3 border-t">
                            <p>Price: {modalDetails.price}</p>
                            <p>Length: {modalDetails.length}</p>
                            <p>Rooms: {modalDetails.rooms}</p>
                            <p>Baths: {modalDetails.baths}</p>
                            <p>Square Meters: {modalDetails.m2}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MyModal;
