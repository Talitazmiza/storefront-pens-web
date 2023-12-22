import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'

export default function addStudent() {
    return (
        <div>
            <button className="btn hover:bg-blue-400 rounded-full" onClick={()=>document.getElementById('my_modal_12').showModal()}>
                <FontAwesomeIcon icon={faUserPlus} /></button>
            <dialog id="my_modal_12" className="modal rounded-lg">
                <div>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Add Lecturer</h3>
                        {/*<p className="py-4">Press ESC key or click the button below to close</p>*/}
                        <div className="modal-action p-10">
                            <form method="dialog">
                                <div className="text-left">
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                Username
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="username" type="text" placeholder="username" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                E-mail
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="email" type="email" placeholder="email" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                Password
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="password" type="password" placeholder="password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <button className="btn bg-red-600 font-bold rounded-full">Cancel</button>
                                    <button className="btn bg-blue-300 font-bold rounded-full">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}