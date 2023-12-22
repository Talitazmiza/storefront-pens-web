import React from "react";

export default function Search() {
    return (
        <div>
            <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Advanced Search</button>
            <dialog id="my_modal_1" className="modal rounded-lg">
                <div>
                    <div className="modal-box">
                        <div className="modal-action p-10">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <div>
                                    <input
                                        className="shadow appearance-none border border-black rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4 mb-4"
                                        id="email" type="text" placeholder="Judul"/>
                                    <input
                                        className="shadow appearance-none border border-black rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                                        id="email" type="text" placeholder="Tema"/>
                                    <input
                                        className="shadow appearance-none border border-black rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                                        id="email" type="text" placeholder="Kata Kunci"/>
                                    <input
                                        className="shadow appearance-none border border-black rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                                        id="email" type="text" placeholder="Metode"/>
                                </div>
                                <div className="flex justify-between">
                                    <button className="btn bg-red-600 font-bold rounded-full">Cancel</button>
                                    <button className="btn bg-blue-300 font-bold rounded-full">Go</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}