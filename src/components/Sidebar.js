import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserTie, faUserGroup, faServer, faComputer, faHouse, faDoorOpen} from '@fortawesome/free-solid-svg-icons'
import React from "react";

export default function Sidebar() {
    return (
        <div className="bg-black">
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
                    type="button"
                    className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd"
                          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="logo-sidebar"
                   className="fixed top-0 left-0 z-40 w-48 h-screen transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-white shadow-2xl">
                    <a href="/" className="flex items-center pl-2.5 mb-5">
                        <img src="https://upload.wikimedia.org/wikipedia/id/4/44/Logo_PENS.png" alt="logo" className="object-cover h-10 w-10"/>
                        <span
                            className="ml-1 self-center text-xl font-semibold whitespace-nowrap dark:text-black">SIM ETAPENS</span>
                    </a>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="/dashboard"
                               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-400 group">
                                <FontAwesomeIcon icon={faHouse} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard-student"
                               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-400 group">
                                <FontAwesomeIcon icon={faUserGroup} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Students</span>
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard-lecturers"
                               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-400 group">
                                <FontAwesomeIcon icon={faUserTie} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Lecturers</span>
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard-project"
                               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-400 group">
                                <FontAwesomeIcon icon={faComputer} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard-technology"
                               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-400 group">
                                <FontAwesomeIcon icon={faServer} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Technologies</span>
                            </a>
                        </li>
                        <li>
                            <a href="/"
                               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-red-400 group">
                                <FontAwesomeIcon icon={faDoorOpen} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}