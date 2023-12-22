import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DetailProject() {
    return (
        <div className="background h-screen">
            <div className="mb-10">
                <Header />
                <div className="flex justify-center">
                    <div className="w-3/4 rounded-lg overflow-hidden shadow-lg my-5">
                        <div className="grid grid-flow-row auto-rows-max justify-center gap-5">
                            <div className="text-2xl font-extrabold">SISTEM INFORMASI PENYEWAAN GEDUNG PADA
                                GEDUNG SERBAGUNA SUKO BERBASIS WEB</div>
                            <div>
                                <img src="/assets/mika-sewagedung.png" alt="Sunset in the mountains" width="590" height="325"/>
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
                                <div>Mu'arifin, S.ST., M.T. (198812032020121001)</div>
                                <div>Rengga Asmara, S.Kom., M.T. (198105082005011002)</div>
                                <div className="font-bold mt-2">Frameworks & Tools</div>
                                <div className="flex justify-start">
                                    <span className="inline-block bg-white rounded-full border-black border-2 px-3 py-1 text-sm font-semibold mr-2 mb-2">React Js</span>
                                    <span className="inline-block bg-white rounded-full border-black border-2 px-3 py-1 text-sm font-semibold mr-2 mb-2">Node Js</span>
                                    <span  className="inline-block bg-white rounded-full border-black border-2 px-3 py-1 text-sm font-semibold mr-2 mb-2">Docker</span>
                                </div>
                                <div className="font-bold mt-2">Description</div>
                                <div className="grid justify-items-start">
                                    <p>
                                        Gedung serbaguna merupakan sarana fasilitas yang dapat digunakan masyarakat sebagai tempat untuk menunjang
                                    </p>
                                    <p>
                                        kegiatan masyarakat yang dapat
                                        dihadiri banyak orang baik dalam melakukan kegiatan seni, olahraga, acara
                                        adat dan lainya
                                    </p>
                                    <p>

                                    </p>
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
                <Footer />
            </div>
        </div>
    )
}