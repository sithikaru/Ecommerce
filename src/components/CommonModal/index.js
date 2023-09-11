"use client"

import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"

export default function CommonModal({ modalTitle, mainContent, showButton, buttonComponent, show, setShow, showModalTitle }) {
    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className={"relative z-10"} onClose={setShow}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-900"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="inset-y-0 right-0 pl-10 max-w-full flex fixed">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-900"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-500"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0">
                                <Dialog.Panel className="w-screen max-w-md">
                                    <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            {
                                                showModalTitle ?
                                                <div className="flex items-start justify-between">
                                                <Dialog.Title>{modalTitle}
                                                </Dialog.Title>
                                            </div> : null
                                            }
                                            <div className="mt-8">
                                                {mainContent}
                                            </div>
                                        </div>
                                        {
                                            showButton ?
                                                <div className="border-t border-gray-300 px-4 py-6 sm:px-6">
                                                    {buttonComponent}
                                                </div> : null
                                        }
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}