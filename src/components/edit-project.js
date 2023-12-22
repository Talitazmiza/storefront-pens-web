import React from "react";

export default function EditProject() {
    return (
        <div>
            <button className="btn text-sm hover:text-blue-300" onClick={()=>document.getElementById('my_modal_3').showModal()}>Edit Project</button>
            <dialog id="my_modal_3" className="modal rounded-lg">
                <div>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Edit Project</h3>
                        {/*<p className="py-4">Press ESC key or click the button below to close</p>*/}
                        <div className="modal-action p-10">
                            <form method="dialog">
                                <div className="text-left">
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                Title
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-password" type="password" placeholder="Title" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-state">
                                            Lecturers
                                        </label>
                                        <div className="relative mt-5">
                                            <select
                                                className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-state">
                                                <option>Hero Yudo Martono, ST, MT. </option>
                                                <option>Weny Mistarika Rahmawati, S.Kom, M.Kom, M.Sc. </option>
                                                <option>Rengga Asmara, S.Kom., M.T.</option>
                                                <option>Yanuar Risah Prayogi, S.Kom., M.Kom.</option>
                                                <option>Dr. Idris Winarno,S.ST, M.Kom</option>
                                            </select>
                                            <div
                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 20 20">
                                                    <path
                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-state">
                                            Tech Stack
                                        </label>
                                        <div className="relative mt-5">
                                            <select
                                                className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-state">
                                                <option>ReactJS</option>
                                                <option>VueJS</option>
                                                <option>NodeJS Express</option>
                                                <option>HapiJS</option>
                                                <option>NextJS</option>
                                            </select>
                                            <div
                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 20 20">
                                                    <path
                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                Abtract
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-password" type="text" placeholder="abstract" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                URL GitHub
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-password" type="text" placeholder="paste url GitHub" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                URL YouTube
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-password" type="text" placeholder="paste url YouTube" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                Image (.PNG/JPEG/JPG)
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-password" type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                Attachment (.PDF)
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-password" type="text" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <button className="btn bg-red-600 font-bold rounded-full">Cancel</button>
                                    <button className="btn bg-blue-300 font-bold rounded-full">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}