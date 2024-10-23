import { useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

export default function Token({address="LoL1RDQiUfifC2 *********** BX28xaef6r2G8"}) {
    const token = address;
    const [copied, setCopied] = useState(false);
    const copyHandle = () => {
        navigator.clipboard.writeText(token);
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }
    return (
        <div className="token relative z-[1] flex items-center">
            <p>{token}</p>
            <button onClick={() => copyHandle()} className="bg-transparent p-0 border-0 btn">
                {copied ? "COPYED" :"COPY"}
            </button>
        </div>
    )
}
