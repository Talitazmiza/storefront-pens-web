import Sidebar from "../components/Sidebar";
import React from "react";

export default function AdminLayout({ children }) {
    return (
        <div className="flex flex-row">
            <div className="w-auto bg-blue-400">
                <Sidebar />
            </div>
            <div className="w-full h-screen bg-gray-100">
                <div className="p-20">
                    {children}
                </div>
            </div>
        </div>
    );
}
