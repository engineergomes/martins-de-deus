import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Loading() {
    return (
        <div className=" w-6 h-6 flex items-center justify-center overflow-hidden">
            <FontAwesomeIcon
                icon={faCircleNotch}
                className="w-4 h-4 animate-spin font-bold"
            />
        </div>
    );
}

export default Loading;
