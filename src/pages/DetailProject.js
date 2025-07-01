import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import LoadingCard from "../components/LoadingCard";
import {useParams} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function DetailProject() {
    const { id } = useParams();
    const projectId = id || '123';

    const defaultProject = {
        id: '',
        title: '',
        abstract: '',
        photo: '',
        technologies: [
            {
                id: '',
                name: '',
            }
        ],
        lecturers: [
            {
                id: '',
                name: '',
                nip: '',
            }
        ]
    };
    const [detail, setDetail] = useState({
        project: defaultProject,
        loadStatus: 0,
    });

    const mockAxiosDetail = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.5) {
                    resolve({
                        data: {
                            id: '123',
                            title: 'SISTEM INFORMASI PENYEWAAN GEDUNG PADA GEDUNG SERBAGUNA SUKO BERBASIS WEB',
                            abstract: "<div>\n" +
                                "                                    <p>\n" +
                                "                                        Gedung serbaguna merupakan sarana fasilitas yang dapat digunakan masyarakat sebagai tempat untuk menunjang\n" +
                                "                                    </p>\n" +
                                "                                    <p>\n" +
                                "                                        kegiatan masyarakat yang dapat\n" +
                                "                                        dihadiri banyak orang baik dalam melakukan kegiatan seni, olahraga, acara\n" +
                                "                                        adat dan lainya\n" +
                                "                                    </p>\n" +
                                "                                    <p>\n" +
                                "\n" +
                                "                                    </p>\n" +
                                "                                </div>",
                            photo: '/assets/mika-sewagedung.png',
                            technologies: [
                                { id: 4, name: "Mobile App" },
                                { id: 7, name: "Flutter" },
                                { id: 5, name: "Vuejs" },
                            ],
                            lecturers: [
                                {
                                    id: '11',
                                    name: "Mu'arifin, S.ST., M.T.",
                                    nip: '198812032020121001',
                                },
                                {
                                    id: '12',
                                    name: 'Rengga Asmara, S.Kom., M.T.',
                                    nip: '198105082005011002',
                                },
                            ]
                        }
                    });
                } else {
                    reject(new Error('Fetch failed'));
                }
            }, 2000);
        });
    };

    const loadProject = () => {
        setDetail(() => ({
            project: defaultProject,
            loadStatus: 0,
        }))

        // TODO: Change this using axios. And don't forget projectId defined in useParams :D
        mockAxiosDetail()
            .then(res => {
                setDetail(() => ({
                    project: res.data,
                    loadStatus: 1,
                }))
            })
            .catch(() => {
                setDetail(() => ({
                    project: defaultProject,
                    loadStatus: -1,
                }))
            });
    };

    useEffect(() => {
        loadProject();
    }, []);

    return (
        <MainLayout>
            <div className="">
                {detail.loadStatus === 0 && <LoadingCard />}

                {detail.loadStatus === -1 && (
                    <div className="text-center">
                        <p style={{ color: 'red' }}>Failed to load project.</p>
                        <button className="mt-2" onClick={() => loadProject()}>Retry</button>
                    </div>
                )}

                {detail.loadStatus === 1 && (
                    <div className="flex justify-center">
                        <div className="rounded-lg overflow-hidden shadow-lg glass">
                            <div className="grid grid-flow-row auto-rows-max justify-center gap-5">
                                <div className="text-2xl font-extrabold">{ detail.project.title }</div>
                                <div>
                                    <img src={detail.project.photo} alt="Sunset in the mountains" width="590" height="325"/>
                                </div>
                                <button className="text-blue-400 font-bold">See Live Demo</button>
                                <div className="grid justify-items-start">
                                    <div className="font-bold">Author :</div>
                                    <div>
                                        <a
                                            href="/profile"
                                            data-te-placement="right"
                                            className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                                            data-te-toggle="tooltip"
                                            title="You can click Author name for more information">
                                            Mika Handayani (3120550006)
                                        </a>
                                    </div>
                                    <div className="font-bold mt-2">Lecturers</div>
                                    {
                                        detail.project.lecturers.map((lecturer, index) => (
                                            <div key={index}>{lecturer.name} ({lecturer.nip})</div>
                                        ))
                                    }
                                    <div className="font-bold mt-2">Frameworks & Tools</div>
                                    <div className="flex justify-start">
                                        {
                                            detail.project.technologies.map((tech, index) => (
                                                <span key={index} className="inline-block bg-white rounded-full border-black border-2 px-3 py-1 text-sm font-semibold mr-2 mb-2">{tech.name}</span>
                                            ))
                                        }
                                    </div>
                                    <div className="font-bold mt-2">Description</div>
                                    <div className="grid justify-items-start">
                                        <div dangerouslySetInnerHTML={{ __html: detail.project.abstract }} />
                                    </div>
                                    <div className="font-bold mt-2">Attachments</div>
                                    <div className="mb-10">
                                        <a
                                            href="#"
                                            data-te-placement="right"
                                            className="text-blue-600 transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                                            data-te-toggle="tooltip"
                                            title="You can click Author name for more information">
                                            Buku PA
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    )
}
