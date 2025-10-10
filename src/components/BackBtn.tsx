import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export const BackBtn = () => (
    <Link href="/" id="backBtn">
        <FaArrowLeft size={20} />
    </Link>
)