import Sidebar from "../../components/Sidebar";
import AddStudent from "./dashboard-student/add-student";
import EditStudent from "./dashboard-student/edit-student";
import DeleteStudent from "./dashboard-student/delete-student";
import React from "react";

export default function DashboardStudent() {
    return (
        <div className="flex flex-row">
            <div className="w-auto bg-blue-400">
                <Sidebar />
            </div>
            <div className="w-full h-screen bg-gray-100">
                <div className="p-20">
                    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 ml-40">
                        <div className="flex justify-between">
                            <h4 className="mb-6 text-xl font-bold text-black">
                                Dashboard Student
                            </h4>
                            <h1><AddStudent /></h1>
                        </div>
                        <div className="flex flex-col">
                            <div className="grid grid-cols-3 rounded-sm bg-gray-300 dark:bg-meta-4 sm:grid-cols-6">
                                <div className="p-2.5 xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">Name</h5>
                                </div>
                                <div className="p-2.5 text-center xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">NRP</h5>
                                </div>
                                <div className="p-2.5 text-center xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">Email</h5>
                                </div>
                                <div className="hidden p-2.5 text-center sm:block xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">Title</h5>
                                </div>
                                <div className="hidden p-2.5 text-center sm:block xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">Status</h5>
                                </div>
                                <div className="hidden p-2.5 text-center sm:block xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base">Action</h5>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-6">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-01.svg" alt="Brand"/>*/}
                                        {/*foto?*/}
                                    </div>
                                    <p className="hidden font-medium text-black sm:block">
                                        Sally Kartika Sari
                                    </p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">3120550010</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-meta-3">sally@gmail.com</p>
                                </div>

                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                    <p className="font-medium text-black">SISTEM E-CATERING (STUDI KASUS DI JN RESTO)</p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                    <p className="font-medium text-green-400"> Active
                                    </p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <EditStudent />
                                    <DeleteStudent />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-6">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-02.svg" alt="Brand"/>*/}
                                    </div>
                                    <p className="font-medium hidden text-black sm:block">Shofi Widuri</p>
                                </div>
                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">2103197016</p>
                                </div>
                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-meta-3">shofi@gmail.com</p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                    <p className="font-medium text-black">APLIKASI KOMUNITAS YUK NGAJI MOJOKERTO
                                        BERBASIS WEB DAN MOBILE
                                    </p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                    <p className="font-medium text-green-400"> Active
                                    </p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <EditStudent />
                                    <DeleteStudent />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-6">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-03.svg" alt="Brand"/>*/}
                                    </div>
                                    <p className="hidden font-medium text-black sm:block">Alhamdi Ferdiawan Bahri</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">3120550056</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-meta-3">alhamdi@gmail.com</p>
                                </div>

                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                    <p className="font-medium text-black">APLIKASI PENCATATAN KEUANGAN
                                        DI SWALAYAN EL-MALIK SUMENEP
                                    </p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                    <p className="font-medium text-red-600"> Inactive
                                    </p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <EditStudent />
                                    <DeleteStudent />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-6">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-04.svg" alt="Brand"/>*/}
                                    </div>
                                    <p className="hidden font-medium text-black sm:block">Mika Handayani</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">3120550006</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-meta-3">mika@gmail.com</p>
                                </div>

                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                    <p className="font-medium text-black">SISTEM INFORMASI PENYEWAAN GEDUNG PADA
                                        GEDUNG SERBAGUNA SUKO BERBASIS WEB
                                    </p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                    <p className="font-medium text-green-400"> Active
                                    </p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <EditStudent />
                                    <DeleteStudent />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 sm:grid-cols-6">
                                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <div className="flex-shrink-0">
                                        {/*<img src="./images/brand/brand-05.svg" alt="Brand"/>*/}
                                    </div>
                                    <p className="hidden font-medium text-black sm:block">Toimul Setyo Andri</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-black">2103197141</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="font-medium text-meta-3">toimulsetyo@gmail.com</p>
                                </div>

                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                    <p className="font-medium text-black">APLIKASI SURVEY ONLINE MENGGUNAKAN
                                        METODE COLLABORATIVE FILTERING
                                    </p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                    <p className="font-medium text-red-700"> Inactive
                                    </p>
                                </div>
                                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                    <EditStudent />
                                    <DeleteStudent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}