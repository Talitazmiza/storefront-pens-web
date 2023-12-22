import Sidebar from "../../../components/Sidebar"
import AddLecturer from "./add-lecturer";
import EditLecturer from "./edit-lecturer";
import DeleteLecturer from "./delete-lecturer";
import React from "react";


export default function dashboardLecturer() {
    return (
        <div className="flex flex-row">
            <div className="w-auto bg-blue-400">
                <Sidebar />
            </div>
            <div className="w-full h-screen bg-gray-100">
                <div className="p-20">
                    <div
                        className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 ml-40">
                        <div className="flex justify-between">
                            <h4 className="mb-6 text-xl font-bold text-black">
                                Dashboard Lecturer
                            </h4>
                            <h1><AddLecturer /></h1>
                        </div>
                        <div className="flex flex-col">
                            <div className="grid grid-cols-3 rounded-sm bg-gray-300 dark:bg-meta-4 sm:grid-cols-4">
                                <div className="p-2.5 xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">Name</h5>
                                </div>
                                <div className="p-2.5 text-center xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">NIP</h5>
                                </div>
                                <div className="p-2.5 text-center xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">Email</h5>
                                </div>
                                <div className="hidden p-2.5 text-center sm:block xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">Action</h5>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-01.svg" alt="Brand"/>*/}
                                        {/*foto?*/}
                                    </div>
                                    <p className="hidden font-medium text-black sm:block">
                                        Rengga Asmara, S.Kom, M.T
                                    </p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">198105082005011002</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-meta-3">email@gmail.com</p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <EditLecturer />
                                    <DeleteLecturer />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-02.svg" alt="Brand"/>*/}
                                    </div>
                                    <p className="font-medium hidden text-black sm:block">Irma Wulandari, S.Si, M.Sc</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">198010032015042001</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-meta-3">email@gmail.com</p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <EditLecturer />
                                    <DeleteLecturer />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-03.svg" alt="Brand"/>*/}
                                    </div>
                                    <p className="hidden font-medium text-black sm:block">Hero Yudo Martono, ST, MT</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">197811032005011002</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-meta-3">email@gmail.com</p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <EditLecturer />
                                    <DeleteLecturer />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-04.svg" alt="Brand"/>*/}
                                    </div>
                                    <p className="hidden font-medium text-black sm:block">Weny Mistarika Rahmawati, S.Kom, M.Kom, M.Sc.</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">199104032022032008</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-meta-3">email@gmail.com</p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <EditLecturer />
                                    <DeleteLecturer />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 sm:grid-cols-4">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-05.svg" alt="Brand"/>*/}
                                    </div>
                                    <p className="hidden font-medium text-black sm:block">Ira Prasetyaningrum, S.Si., M.T.</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">198005292008122005</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-meta-3">email@gmail.com</p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <EditLecturer />
                                    <DeleteLecturer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}