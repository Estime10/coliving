'use client';
import { useEffect, useRef } from 'react';
import { Modal } from 'flowbite';
import { ModalOptions } from 'flowbite';
import { InstanceOptions } from 'flowbite';
import ModalImages from '../Section/PropertiesSection/UI/ModalImages';

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
}

const MyModal = ({ modalId, modalDetails }: ModalProps) => {
	const modalElementRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const modalElement = modalElementRef.current;
		if (modalElement) {
			const modalOptions: ModalOptions = {
				placement: 'center',
				backdrop: 'dynamic',
				backdropClasses:
					'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
				closable: true,
				onHide: () => {
					console.log('modal is hidden');
				},
				onShow: () => {
					console.log('modal is shown');
				},
				onToggle: () => {
					console.log('modal has been toggled');
				},
			};

			// instance options object
			const instanceOptions: InstanceOptions = {
				id: 'modalEl',
				override: true,
			};

			const modal = new Modal(modalElement, modalOptions, instanceOptions);
			modal.show();
		}
	}, []);

	return (
		<div>
			<section
				className="max-container padding-container 
		flex flex-col gap-20 py-10
		md:gap-28  
		xl:flex-row cursor-default"
			>
				<div className="block space-y-4 md:flex md:space-y-0 md:space-x-4 rtl:space-x-reverse">
					{/* <!-- Modal toggle --> */}

					<button
						data-modal-target={modalId}
						data-modal-toggle={modalId}
						className="block w-full md:w-auto text-white bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-gray-400 dark:focus:ring-blue-800"
					>
						Extra large modal
					</button>
				</div>

				<div
					id={modalId}
					tabIndex={-1}
					className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
				>
					<div className="relative w-full max-w-7xl max-h-full">
						{/* <!-- Modal content --> */}
						<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
							{/* <!-- Modal header --> */}
							<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
								<h3 className="text-xl font-medium text-gray-900 dark:text-white">
									{modalDetails.label}
								</h3>
								<button
									className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
									data-modal-hide={modalId}
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
							{/* <!-- Modal body --> */}
							<div className="p-4 md:p-5 space-y-4 cursor-pointer">
								<ModalImages />
							</div>
							{/* <!-- Modal footer --> */}
							<div
								className="grid grid-cols-1 gap-1 p-4 md:p-5 border-t rounded-b dark:border-gray-600
								lg:grid-cols-5 "
							>
								<button
									className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none
								 bg-white rounded-lg border 
								border-gray-200 cursor-default "
								>
									Price: {modalDetails.price}
								</button>
								<button
									className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none
								 bg-white rounded-lg border 
								border-gray-200 cursor-default "
								>
									Length: {modalDetails.length}
								</button>
								<button
									className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none
								 bg-white rounded-lg border 
								border-gray-200 cursor-default "
								>
									Rooms: {modalDetails.rooms}
								</button>
								<button
									className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none
								 bg-white rounded-lg border 
								border-gray-200 cursor-default "
								>
									Baths: {modalDetails.baths}
								</button>
								<button
									className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none
								 bg-white rounded-lg border 
								border-gray-200 cursor-default "
								>
									Square Meters: {modalDetails.m2}
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default MyModal;
