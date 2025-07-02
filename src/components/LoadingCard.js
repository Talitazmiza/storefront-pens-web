import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons";

export default function LoadingCard() {
    return (
        <div className="rounded-lg p-4 w-full flex items-center justify-center">
            <div className="text-center">
                <FontAwesomeIcon icon={faCog} spin size="2x" />
                <p className="mt-2 text-lg font-extrabold">Memuat...</p>
            </div>
        </div>
    )
}
