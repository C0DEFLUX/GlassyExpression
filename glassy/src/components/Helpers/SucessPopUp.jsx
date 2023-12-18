import React, {useEffect, useState} from 'react';
import {MdBlock} from "react-icons/md";

const SucessPopUp = ({message}) => {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsOpen(false);
        }, 4000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div
            className={`${
                isOpen ? 'translate-x-0' : 'translate-x-[120%]'
            } fixed bottom-10 right-5 transition-transform duration-500 ease-in-out`}
        >
            <div className="bg-green-300 p-4 border-[1.5px] border-green-500 rounded flex space-x-1 items-center">
                <MdBlock className="text-green-700 text-3xl mr-2"/>
                <p className="text-green-700"><strong>Darbība bija veiksmīga!</strong>{message}</p>
            </div>
        </div>
    );
};

export default SucessPopUp;