import { FaExclamationTriangle } from "react-icons/fa"
import Button from "../components/ui-kit/Button"

const NotFound = () => {
    return (
        <div className="px-3 mx-auto mt-10 flex flex-col items-center gap-y-4">
            <FaExclamationTriangle className="text-warning--bg text-8xl" />

            <div className="text-4xl font-bold text-raised--txt">404 not found!</div>

            <Button content="Go Back" tag="anchor" href="/" />
        </div>
    )
}

export default NotFound