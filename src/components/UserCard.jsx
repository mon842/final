"use client"
import Link from 'next/link'

const HorizontalCard = ({ user }) => {
    
    return (
        <div className="bg-gray-800 text-white shadow-md rounded-lg p-4 flex items-center justify-between my-7 mx-10">
            <div>
                <h2 className="text-xl font-semibold">{user.username}</h2>
                <p className="text-gray-300">{user.email}</p>
            </div>
            <Link href={{
                pathname: '/view',
                query: user // the data
            }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Details
            </Link>
        </div>
    );
};

export default HorizontalCard;