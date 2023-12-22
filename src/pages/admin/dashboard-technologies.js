import Sidebar from "../../components/Sidebar";
import React from "react";
import AddTechnology from "./dashboard-technology/add-technology";
import EditTechnology from "./dashboard-technology/edit-technology";
import DeleteTechnology from "./dashboard-technology/delete-technology";

export default function DashboardTechnology() {
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
                                Dashboard Technologies
                            </h4>
                            <h1><AddTechnology /></h1>
                        </div>

                        <div className="flex flex-col">
                            <div className="grid grid-cols-3 rounded-sm bg-gray-300 dark:bg-meta-4 sm:grid-cols-4">
                                <div className="p-2.5 xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">Code</h5>
                                </div>
                                <div className="p-2.5 text-center xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">Technology</h5>
                                </div>
                                <div className="p-2.5 text-center xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">Cluster</h5>
                                </div>
                                <div className="hidden p-2.5 text-center sm:block xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">Action</h5>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-01.svg" alt="Brand"/>*/}
                                    </div>
                                    <p className="hidden font-medium text-black sm:block">
                                        1
                                    </p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">VueJS</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-meta-3">FrontEnd</p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <EditTechnology />
                                    <DeleteTechnology />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-02.svg" alt="Brand"/>*/}
                                    </div>
                                    <p className="font-medium hidden text-black sm:block">2</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">NodeJS</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-meta-3">Backend</p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <EditTechnology />
                                    <DeleteTechnology />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-03.svg" alt="Brand"/>*/}
                                    </div>
                                    <p className="hidden font-medium text-black sm:block">3</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">ExpressJS</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-meta-3">Backend</p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <EditTechnology />
                                    <DeleteTechnology />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-04.svg" alt="Brand"/>*/}
                                    </div>
                                    <p className="hidden font-medium text-black sm:block">4</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">ReactJS</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-meta-3">Frontend</p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <EditTechnology />
                                    <DeleteTechnology />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 sm:grid-cols-4">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-05.svg" alt="Brand"/>*/}
                                    </div>
                                    <p className="hidden font-medium text-black sm:block">5</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">NuxtJS</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-meta-3">Frontend</p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <EditTechnology />
                                    <DeleteTechnology />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    )
}