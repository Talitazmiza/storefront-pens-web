import AddLecturer from "./dashboard-lecturer/add-lecturer";
import EditLecturer from "./dashboard-lecturer/edit-lecturer";
import DeleteLecturer from "./dashboard-lecturer/delete-lecturer";
import React, {useEffect, useState} from "react";
import AdminLayout from "../../layouts/AdminLayout";
import LoadingCard from "../../components/LoadingCard";
import EditStudent from "./dashboard-student/edit-student";
import DeleteStudent from "./dashboard-student/delete-student";

export default function DashboardLecturer() {
    const [lecturers, setLecturers] = useState({
        lecturers: [],
        loadStatus: 0,
    });

    const mockGetLecturers = () => {
        const temp = [
            {
                name: 'Rengga Asmara, S.Kom, M.T',
                nip: '198105082005011002',
                email: 'email@email.com'
            },
            {
                name: 'Irma Wulandari, S.Si, M.Sc',
                nip: '198010032015042001',
                email: 'email@email.com'
            },
            {
                name: 'Hero Yudo Martono, ST, MT',
                nip: '197811032005011002',
                email: 'email@email.com'
            },
            {
                name: 'Weny Mistarika Rahmawati, S.Kom, M.Kom, M.Sc.',
                nip: '199104032022032008',
                email: 'email@email.com'
            },
            {
                name: 'Ira Prasetyaningrum, S.Si., M.T.',
                nip: '198005292008122005',
                email: 'email@email.com'
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

    const loadLecturers = () => {
        setLecturers(() => ({
            lecturers: [],
            loadStatus: 0,
        }));
        mockGetLecturers()
            .then(res => {
                setLecturers(() => ({
                    lecturers: res.data,
                    loadStatus: 1,
                }));
            })
            .catch(() => {
                setLecturers(() => ({
                    lecturers: [],
                    loadStatus: -1,
                }));
            })
    }

    useEffect(() => {
        loadLecturers();
    }, [])

    return (
        <AdminLayout>
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 ml-40">
                <div className="flex justify-between">
                    <h4 className="mb-6 text-xl font-bold text-black">
                        Dashboard Lecturer
                    </h4>
                    <h1><AddLecturer /></h1>
                </div>
                <div className="overflow-x-auto">
                    { lecturers.loadStatus === 0 && <LoadingCard /> }
                    { lecturers.loadStatus === -1 && (
                        <div className="text-center">
                            <p style={{ color: 'red' }}>Failed to load lecturers.</p>
                            <button className="mt-2" onClick={() => loadLecturers()}>Retry</button>
                        </div>
                    )}
                    { lecturers.loadStatus === 1 && (
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-300 dark:bg-meta-4">
                            <tr>
                                <th className="p-2.5 xl:p-5 text-sm font-medium uppercase text-center">Name</th>
                                <th className="p-2.5 xl:p-5 text-sm font-medium uppercase text-center">NIP</th>
                                <th className="p-2.5 xl:p-5 text-sm font-medium uppercase text-center">Email</th>
                                <th className="p-2.5 xl:p-5 text-sm font-medium uppercase text-center">Action</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-stroke dark:divide-strokedark">
                            {
                                lecturers.lecturers.map((d, i) => (
                                    <tr key={i}>
                                        <td className="p-2.5 xl:p-5">{d.name}</td>
                                        <td className="p-2.5 xl:p-5">{d.nip}</td>
                                        <td className="p-2.5 xl:p-5">{d.email}</td>
                                        <td className="p-2.5 xl:p-5">
                                            <EditLecturer />
                                            <DeleteLecturer />
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
