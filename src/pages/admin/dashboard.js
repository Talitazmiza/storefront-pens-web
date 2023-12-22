import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
    return (
        <div className="flex flex-row">
            <div className="w-auto bg-blue-400">
                <Sidebar />
            </div>
            <div className="w-full bg-green-300">
                
            </div>
        </div>
    )
}