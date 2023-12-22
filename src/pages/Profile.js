import Header from "../components/Header";
import Footer from "../components/Footer";
import AddProject from "../components/add-project";
import EditProfile from "../components/edit-profile";
import EditProject from "../components/edit-project";

export default function Profile() {
    return (
        <div className="background h-screen">
            <div className="mb-10">
                <Header />
                <div className="flex justify-center">
                    <div className="w-3/4 rounded-lg overflow-hidden shadow-lg my-5">
                        <div className="flex flex-row justify-center">
                            <div className="basis-1/4 mt-20">
                                {/*profile pict*/}
                                <div className="flex justify-center">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3106/3106921.png" alt="Sunset in the mountains" width="200" height="200"/>
                                </div>
                            </div>
                            <div className="basis-1/2 mt-20">
                                {/*profile desc*/}
                                <div className="grid justify-items-start">
                                    <div className="font-bold">Author :</div>
                                    <div>
                                        <a
                                            href="#"
                                            data-te-placement="right"
                                            className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                                            data-te-toggle="tooltip"
                                            title="You can click Author name for more information">
                                            Mika Handayani
                                        </a>
                                    </div>
                                    <div className="font-bold mt-2">NRP :</div>
                                        <p>
                                            (3120550006)
                                        </p>
                                    <div className="font-bold mt-2">Bio :</div>
                                    <div className="grid justify-items-start mb-10">
                                        <p>
                                            "Jangan malu dengan kegagalanmu, belajarlah darinya dan mulai lagi."
                                        </p>
                                    </div>
                                    <EditProfile />
                                </div>
                            </div>
                        </div>
                        {/*buat projects*/}
                        <div className="grid grid-flow-row auto-rows-max justify-center gap-5">
                            <div className="flex flex-col">
                                <div className="flex justify-between mt-20">
                                   <h1 className="text-lg font-bold">Projects</h1>
                                   <h1 className="text-lg font-bold"><AddProject /></h1>
                                </div>
                                <div className="flex flex-row mt-5 mb-10 gap-4">
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                        <a href="/detailproject">
                                            <img className="w-full" src='/assets/mika-sewagedung.png' alt="Sunset in the mountains" />
                                        </a>
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2 ">SISTEM INFORMASI PENYEWAAN GEDUNG PADA
                                                GEDUNG SERBAGUNA SUKO BERBASIS WEB
                                            </div>
                                            <p className="text-gray-700 text-base">
                                                Gedung serbaguna merupakan sarana fasilitas yang dapat digunakan
                                                masyarakat sebagai tempat untuk menunjang kegiatan masyarakat yang dapat
                                                dihadiri banyak orang baik dalam melakukan kegiatan seni, olahraga, acara
                                                adat dan lainya.
                                            </p>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mobile App</span>
                                            <span
                                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Flutter</span>
                                            <span
                                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Vuejs</span>
                                        </div>
                                    </div>
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                        <a href="/detailproject">
                                            <img className="w-full" src='/assets/toimul-survey.png' alt="Sunset in the mountains" />
                                        </a>
                                        <div><EditProject /></div>
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2 ">APLIKASI SURVEY ONLINE MENGGUNAKAN METODE COLLABORATIVE FILTERING
                                            </div>
                                            <p className="text-gray-700 text-base">
                                                Aplikasi Aplikasi Survey Menggunakan Metode Rekomendasi
                                                Collaborative Filtering adalah aplikasi yang memanfaatkan teknologi
                                                android dan web .
                                            </p>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Web App</span>
                                            <span
                                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MySQL</span>
                                            <span
                                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Codeigniter</span>
                                        </div>
                                    </div>
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                        <a href="/detailproject">
                                            <img className="w-full" src='/assets/sally-jnresto2.png' alt="Sunset in the mountains" />
                                        </a>
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2 ">SISTEM E-CATERING (STUDI KASUS DI JN RESTO)</div>
                                            <p className="text-gray-700 text-base">
                                                JN Resto adalah suatu badan usaha bisnis catering yang bergerak dibidang penyedia makanan pada tahun 2022.
                                            </p>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mobile</span>
                                            <span
                                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Web App</span>
                                            <span
                                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Codeigniter</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}