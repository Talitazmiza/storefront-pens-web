import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function deleteStudent() {
    return (
        <div>
            <button className="btn hover:bg-red-400 rounded-full" onClick={()=>document.getElementById('my_modal_6').showModal()}>
                <FontAwesomeIcon icon={faTrash} /></button>
            <dialog id="my_modal_6" className="modal rounded-lg">
                <div>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg p-10">You Sure Want Delete This Student?</h3>
                        {/*<p className="py-4">Press ESC key or click the button below to close</p>*/}
                        <div className="modal-action p-10">
                            <form method="dialog">
                                <div className="flex justify-between gap-5">
                                    <button className="btn bg-red-600 font-bold rounded-full">No</button>
                                    <button className="btn bg-blue-300 font-bold rounded-full">Yes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}