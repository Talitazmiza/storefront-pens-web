import Search from "./Search";

export default function BigCard() {
    return (
        <div className="">
            <div className="p-40 rounded-lg shadow-lg">
                <div className="flex flex-grow">
                    <div className="basis-3/4">
                        <div className="mb-3">
                            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                                <input
                                    type="search"
                                    className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="button-addon3"/>

                                <button
                                    className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                                    type="button"
                                    id="button-addon3">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/4">
                        <div className="space-y-2">
                            {/*Button trigger vertically centered scrollable modal*/}
                            <Search />
                        </div>

                        {/*Verically centered scrollable modal*/}
                        <div
                            data-te-modal-init=""
                            className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                            id="exampleModalCenteredScrollable"
                            tabIndex="-1"
                            aria-labelledby="exampleModalCenteredScrollable"
                            aria-modal="true"
                            role="dialog">
                            <div
                                data-te-modal-dialog-ref=""
                                className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                                <div
                                    className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                                    <div
                                        className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                                        {/*modal title*/}
                                        <h5
                                            className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                            id="exampleModalCenteredScrollableLabel">
                                            Modal title
                                        </h5>
                                       {/*close button*/}
                                        <button
                                            type="button"
                                            className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                            data-te-modal-dismiss=""
                                            aria-label="Close">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-6 w-6">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"/>
                                            </svg>
                                        </button>
                                    </div>

                                    {/*Modal body*/}
                                    <div className="relative p-4">
                                        <p>
                                            This is some placeholder content to show a vertically centered
                                            modal. We've added some extra copy here to show how vertically
                                            centering the modal works when combined with scrollable modals.
                                            We also use some repeated line breaks to quickly extend the
                                            height of the content, thereby triggering the scrolling. When
                                            content becomes longer than the predefined max-height of modal,
                                            content will be cropped and scrollable within the modal.
                                        </p>
                                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                        <p>Just like that.</p>
                                    </div>

                                    {/*modal footer*/}
                                    <div
                                        className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                                        <button
                                            type="button"
                                            className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                                            data-te-modal-dismiss=""
                                            data-te-ripple-init=""
                                            data-te-ripple-color="light">
                                            Close
                                        </button>
                                        <button
                                            type="button"
                                            className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                            data-te-ripple-init=""
                                            data-te-ripple-color="light">
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-grow  mt-10">
                    <div className="basis-3/5">
                        <div className="grid text-left p-20">
                            <h1 className="text-black text-3xl font-extrabold">
                                Today's research, <br /> tomorrow's innovation.
                            </h1>
                            <h2 className="mt-5">
                                "Libraries store the energy that fuels the imagination. They open up windows to the world and inspire us to explore and achieve, and contribute to improving our quality of life."
                            </h2>
                            <h3 className="mt-2 text-sm">
                                Sidney Sheldon <br/>
                                (1917-2007. American writer and producer)
                            </h3>
                        </div>
                    </div>
                    <div className="basis-2/5">
                        <div className=" grid place-items-center">
                            <img className="shadow-2xl rounded-2xl origin-top-left rotate-12" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" width="300" height="300" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-32">
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
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <a href="/detailproject">
                            <img className="w-full" src='/assets/shofi-yukngaji.png' alt="Sunset in the mountains" />
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 ">APLIKASI KOMUNITAS YUK NGAJI MOJOKERTO BERBASIS WEB DAN MOBILE</div>
                            <p className="text-gray-700 text-base">
                                Yuk Ngaji Mojokerto adalah komunitas dari Yuk Ngaji yang
                                menghimpun potensi lintas generasi dan profesi untuk berbagi ilmu dan
                                inspirasi kebaikan.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Web App</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mobile App</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Vuejs</span>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <a href="/detailproject">
                            <img className="w-full" src='/assets/alhamdi-swalayan.png' alt="Sunset in the mountains" />
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 ">APLIKASI PENCATATAN KEUANGAN DI SWALAYAN EL-MALIK SUMENEP</div>
                            <p className="text-gray-700 text-base">
                                Aplikasi Pencatatan Keuangan ini merupakan sebuah sistem yang
                                digunakan untuk mempermudah karyawan swalayan dalam melakukan
                                pencatatan keuangan transaksi baik pemasukan maupun pengeluaran.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Laravel</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Web App</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Vuejs</span>
                        </div>
                    </div>
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
                            <img className="w-full" src='/assets/siti-pemesanan.png' alt="Sunset in the mountains" />
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 ">APLIKASI PEMESANAN PRODUK ONLINE BERBASIS WEBSITE DAN  ANDROID ORGANISASI KARANG TARUNA PERRENG BHIRU DESA KASENGAN
                                KEC. MANDING KAB. SUMENEP
                            </div>
                            <p className="text-gray-700 text-base">
                                Karang Taruna adalah organisasi sosial wadah pengembangan generasi muda yang tumbuh dan berkembang atas dasar kesadaran dan tanggung jawab sosial dari, oleh dan untuk masyarakat.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Framework</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mobile App</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MySQL</span>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <a href="/detailproject">
                            <img className="w-full" src='/assets/shofi-yukngaji.png' alt="Sunset in the mountains" />
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 ">APLIKASI KOMUNITAS YUK NGAJI MOJOKERTO BERBASIS WEB DAN MOBILE</div>
                            <p className="text-gray-700 text-base">
                                Yuk Ngaji Mojokerto adalah komunitas dari Yuk Ngaji yang
                                menghimpun potensi lintas generasi dan profesi untuk berbagi ilmu dan
                                inspirasi kebaikan.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Web App</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mobile App</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Vuejs</span>
                        </div>
                    </div>
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
    );
}