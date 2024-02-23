'use client';
import { useEffect } from 'react';
import {
  Modal,
  ModalOptions,
  ModalInterface,
  InstanceOptions,
  modalPlacement,
} from 'flowbite';
import Image from 'next/image';
import PropertiesGallery from '../UI/PropertiesGallery';
import { MODALGALLERY1DETAILS } from '@/constants';

const MyModal = () => {
  useEffect(() => {
    const modalElement = document.querySelector<HTMLElement>('#modalEl');

    if (modalElement) {
      const modalOptions: ModalOptions = {
        placement: 'bottom-right' as modalPlacement,
        backdrop: 'dynamic',
        backdropClasses:
          'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
        closable: true,
        onHide: () => {
          console.log('La modal est masquée');
        },
        onShow: () => {
          console.log('La modal est affichée');
        },
        onToggle: () => {
          console.log('La modal a été basculée');
        },
      };

      const instanceOptions: InstanceOptions = {
        id: 'modalEl',
        override: true,
      };

      const modal: ModalInterface = new Modal(
        modalElement,
        modalOptions,
        instanceOptions
      );

      modal.show();
    }
  }, []);

  return (
    <section>
      <div>
        <button
          data-modal-target="extralarge-modal"
          data-modal-toggle="extralarge-modal"
          className="block w-full md:w-auto "
          type="button"
        >
          {' '}
          <img
            src="/svg/view.svg"
            className="w-6 h-6 lg:w-10 lg:h-10 md:w-8 md:h-8 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
            alt="View Icon"
          />
        </button>
      </div>

      <div
        id="extralarge-modal"
        tabIndex={-1}
        className="fixed top-[10%] left-0 right-0 z-50 hidden w-full
        lg:w-[39%] lg:left-[30%] lg:top-0
        p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full"
      >
        <div className="relative w-full max-w-7xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {MODALGALLERY1DETAILS[0].label}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 h-8 ms-auto
                     inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="extralarge-modal"
              >
                <Image
                  src="/svg/close.svg"
                  alt="Close"
                  width={40}
                  height={24}
                  className="cursor-pointer 
                  rounded-full bg-gray-400 
                  p-1 transition-all hover:bg-gray-600"
                />
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5 space-y-4">
              <PropertiesGallery />
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <div>
                {MODALGALLERY1DETAILS.map((detail, index) => (
                  <div key={index}>
                    <div className="text-xl font-medium text-gray-900 dark:text-white">
                      <p>
                        Price: <span>{detail.price}</span>
                      </p>
                      <p>
                        Min stay: <span>{detail.length}</span>
                      </p>
                      <p>
                        Rooms: <span>{detail.rooms}</span>
                      </p>
                      <p>
                        Baths: <span>{detail.baths}</span>
                      </p>
                      <p>
                        Area: <span>{detail.m2}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyModal;
