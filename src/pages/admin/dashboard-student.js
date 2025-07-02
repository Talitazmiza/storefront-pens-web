import Sidebar from "../../components/Sidebar";
import AddStudent from "./dashboard-student/add-student";
import EditStudent from "./dashboard-student/edit-student";
import DeleteStudent from "./dashboard-student/delete-student";
import React, {useEffect, useState} from "react";
import LoadingCard from "../../components/LoadingCard";
import AdminLayout from "../../layouts/AdminLayout";

export default function DashboardStudent() {
    const [students, setStudent] = useState({
        students: [
            {
                name: 'Toimul Setyo Andri',
                nrp: '2103197141',
                email: 'toimulsetyo@gmail.com',
                title: 'APLIKASI SURVEY ONLINE MENGGUNAKAN METODE COLLABORATIVE FILTERING',
                status: 'Inactive',
            },
        ],
        loadStatus: 0,
    });

    const mockGetStudents = () => {
        const temp = [
            {
                name: 'Sally Kartika Sari',
                nrp: '3120550010',
                email: 'sally@gmail.com',
                title: 'SISTEM E-CATERING (STUDI KASUS DI JN RESTO)',
                status: 'Active',
            },
            {
                name: 'Shofi Widuri',
                nrp: '2103197016',
                email: 'shofi@gmail.com',
                title: 'APLIKASI KOMUNITAS YUK NGAJI MOJOKERTO BERBASIS WEB DAN MOBILE',
                status: 'Active',
            },
            {
                name: 'Alhamdi Ferdiawan Bahri',
                nrp: '3120550056',
                email: 'alhamdi@gmail.com',
                title: 'APLIKASI PENCATATAN KEUANGAN DI SWALAYAN EL-MALIK SUMENEP',
                status: 'Inactive',
            },
            {
                name: 'Mika Handayani',
                nrp: '3120550006',
                email: 'mika@gmail.com',
                title: 'SISTEM INFORMASI PENYEWAAN GEDUNG PADA GEDUNG SERBAGUNA SUKO BERBASIS WEB',
                status: 'Active',
            },
            {
                name: 'Toimul Setyo Andri',
                nrp: '2103197141',
                email: 'toimulsetyo@gmail.com',
                title: 'APLIKASI SURVEY ONLINE MENGGUNAKAN METODE COLLABORATIVE FILTERING',
                status: 'Inactive',
            },
        ];
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.8) {
                    resolve({
                        data: temp
                    });
                } else {
                    reject(new Error('Fetch failed'));
                }
            }, 2000);
        });
    }

    const loadStudents = () => {
        setStudent(() => ({
            students: [],
            loadStatus: 0,
        }));
        mockGetStudents()
            .then(res => {
                setStudent(() => ({
                    students: res.data,
                    loadStatus: 1,
                }));
            })
            .catch(() => {
                setStudent(() => ({
                    students: [],
                    loadStatus: -1,
                }));
            })
    }

    useEffect(() => {
        loadStudents();
    }, [])

    return (
        <AdminLayout>
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 ml-40">
                <div className="flex justify-between">
                    <h4 className="mb-6 text-xl font-bold text-black">
                        Dashboard Student
                    </h4>
                    <h1><AddStudent /></h1>
                </div>
                <div className="overflow-x-auto">
                    { students.loadStatus === 0 && <LoadingCard /> }
                    { students.loadStatus === -1 && (
                        <div className="text-center">
                            <p style={{ color: 'red' }}>Failed to load students.</p>
                            <button className="mt-2" onClick={() => loadStudents()}>Retry</button>
                        </div>
                    )}
                    { students.loadStatus === 1 && (
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-300 dark:bg-meta-4">
                            <tr>
                                <th className="p-2.5 xl:p-5 text-sm font-medium uppercase text-center">Name</th>
                                <th className="p-2.5 xl:p-5 text-sm font-medium uppercase text-center">NRP</th>
                                <th className="p-2.5 xl:p-5 text-sm font-medium uppercase text-center">Email</th>
                                <th className="p-2.5 xl:p-5 text-sm font-medium uppercase text-center">Title</th>
                                <th className="p-2.5 xl:p-5 text-sm font-medium uppercase text-center">Status</th>
                                <th className="p-2.5 xl:p-5 text-sm font-medium uppercase text-center">Action</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-stroke dark:divide-strokedark">
                            {
                                students.students.map((d, i) => (
                                    <tr key={i}>
                                        <td className="p-2.5 xl:p-5">{d.name}</td>
                                        <td className="p-2.5 xl:p-5">{d.nrp}</td>
                                        <td className="p-2.5 xl:p-5">{d.email}</td>
                                        <td className="p-2.5 xl:p-5">{d.title}</td>
                                        <td className={"p-2.5 xl:p-5 " + (d.status === 'Inactive' ? 'text-red-600' : '')}>{d.status}</td>
                                        <td className="p-2.5 xl:p-5">
                                            <EditStudent />
                                            <DeleteStudent />
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </AdminLayout>
    )
}
