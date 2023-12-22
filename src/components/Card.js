export default function Card() {
    return (
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
    );
}