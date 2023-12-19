import React, {useEffect, useState} from 'react';
import { MdBlock } from "react-icons/md";


const ErrorPopUp = () => {

    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsOpen(false);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div
            className={`${
                isOpen ? 'translate-x-0' : 'translate-x-[120%]'
            } fixed bottom-10 right-5 transition-transform duration-500 ease-in-out`}
        >
            <div className="bg-red-300 p-4 border-[1.5px] border-red-500 rounded flex space-x-1 items-center">
                <MdBlock className="text-red-700 text-3xl mr-2"/>
                <p className="text-red-700"><strong>Kaut kas nogāja greizi! </strong> Lūdzu mēģiniet vēlreiz vēlāk!</p>
            </div>
        </div>
    );
};

export default ErrorPopUp;