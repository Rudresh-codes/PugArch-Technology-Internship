import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-around px-8 py-4 bg-gray-900 text-white">
            <div className="flex items-center gap-3">
                <span className="font-bold text-2xl">EventHub</span>
            </div>
            <ul className="flex gap-6 m-0 p-0 list-none">
                <li>
                    <Link href="/" className="text-white no-underline text-base hover:text-gray-300">Home</Link>
                </li>
                <li>
                    <Link href="/events/create" className="text-white no-underline text-base hover:text-gray-300">Creat an Event</Link>
                </li>
                <li>
                    <Link href="/about" className="text-white no-underline text-base hover:text-gray-300">About</Link>
                </li>
                <li>
                    <Link href="/contact" className="text-white no-underline text-base hover:text-gray-300">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
