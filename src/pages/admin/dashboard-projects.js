import Sidebar from "../../components/Sidebar";
import React from "react";
import ValidationProject from "./dashboard-project/validation-project";
import DeleteProject from "./dashboard-project/delete-project";

export default function DashboardProjects() {
    return (
        <div className="flex flex-row">
            <div className="w-auto bg-blue-400">
                <Sidebar />
            </div>
            <div className="w-full h-screen bg-gray-100">
                <div className="p-20">
                    <div
                        className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 ml-40">
                        <h4 className="mb-6 text-xl font-bold text-black">
                            Dashboard Project
                        </h4>

                        <div className="flex flex-col">
                            <div className="grid grid-cols-3 rounded-sm bg-gray-300 dark:bg-meta-4 sm:grid-cols-4">
                                <div className="p-2.5 xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">Name</h5>
                                </div>
                                <div className="p-2.5 text-center xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">Student</h5>
                                </div>
                                <div className="p-2.5 text-center xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">Status</h5>
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
                                        SISTEM E-CATERING (STUDI KASUS DI JN RESTO)
                                    </p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">Sally Kartika Sari</p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                    <p className="font-medium text-green-400"> Active
                                    </p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <ValidationProject />
                                    <DeleteProject />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-02.svg" alt="Brand"/>*/}
                                    </div>
                                    <p className="font-medium hidden text-black sm:block">APLIKASI KOMUNITAS YUK NGAJI MOJOKERTO BERBASIS WEB DAN MOBILE</p>
                                </div>
                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">Shofi Widuri</p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                    <p className="font-medium text-green-400"> Active
                                    </p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <ValidationProject />
                                    <DeleteProject />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-03.svg" alt="Brand"/>*/}
                                    </div>
                                    <p className="hidden font-medium text-black sm:block">APLIKASI PENCATATAN KEUANGAN DI SWALAYAN EL-MALIK SUMENEP</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">Alhamdi Ferdiawan Bahri</p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                    <p className="font-medium text-red-600"> Inactive
                                    </p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <ValidationProject />
                                    <DeleteProject />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-04.svg" alt="Brand"/>*/}
                                    </div>
                                    <p className="hidden font-medium text-black sm:block">SISTEM INFORMASI PENYEWAAN GEDUNG PADA GEDUNG SERBAGUNA SUKO BERBASIS WEB</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">Mika Handayani</p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                    <p className="font-medium text-green-400"> Active
                                    </p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <ValidationProject />
                                    <DeleteProject />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 sm:grid-cols-4">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-05.svg" alt="Brand"/>*/}
                                    </div>
                                    <p className="hidden font-medium text-black sm:block">APLIKASI SURVEY ONLINE MENGGUNAKAN METODE COLLABORATIVE FILTERING</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">Toimul Setyo Andri</p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                    <p className="font-medium text-red-600"> Inactive
                                    </p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <ValidationProject />
                                    <DeleteProject />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}