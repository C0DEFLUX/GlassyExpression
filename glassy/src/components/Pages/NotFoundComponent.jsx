import React from 'react';
import {Link} from "react-router-dom";

function NotFoundComponent() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[100vh] gap-4">
            <h1 className="text-8xl text-cyan-500">404</h1>
            <h2 className="text-2xl">Whoops, no page here...</h2>
            <p>The page you looking has been removed or doesn't exist. <Link className="font-bold hover:underline" to="/">Go back to safety</Link></p>
        </section>
    );
}

export default NotFoundComponent;