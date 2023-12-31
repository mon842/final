"use client"
import Nav from '../../components/Navbar'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const Page = ({ searchParams }) => {
    const user = searchParams;
    const router = useRouter();
    const [gender, setGender] = useState(user.gender);
    const [username, setName] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [city, setCity] = useState(user.city);
    const [heardAbout, setHeardAbout] = useState(user.heardAbout);
    const stateSuggestions = ['Gujarat', 'Maharashtra', 'Karnataka'];

    const [selectedState, setSelectedState] = useState(user.selectedState);
    const handleInputChange = (event) => {
        setSelectedState(event.target.value);
    };
    const handleSuggestionClick = (state) => {
        setSelectedState(state);
    };
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setHeardAbout([...heardAbout, value]);
        } else {
            setHeardAbout(heardAbout.filter((option) => option !== value));
        }
    };
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };



    const onSave = async () => {


        try {
            const user = {
                id: searchParams._id,
                username: username,
                email: email,
                gender: gender,
                phone: phone,
                city: city,
                heardAbout: heardAbout,
                selectedState: selectedState
            };
            // console.log(user);
            const response= await axios.post(`/api/users/edit`, user);

            console.log(response.data);
            router.push('/users');


        } catch (error) {
            // console.log(error);
            toast.error(error.message);
        }
    }
    return (
        <div className='bg-[#071e34] h-full'>
            <Nav />

            <div className=' py-10 px-12'>

                <div className="mb-4">
                    <label className='block text-gray-100 text-sm font-bold mb-2' htmlFor="username">username</label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 bg-slate-600 text-gray-100 leading-tight focus:outline-none focus:shadow-outline'
                        type="text"
                        name="name"
                        onChange={(e) => { setName(e.target.value) }}
                        id=""
                        placeholder='username'
                        value={username}
                    />
                </div>

                <div className="mb-4">
                    <label className='block text-gray-100 text-sm font-bold mb-2' htmlFor="email">email</label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 bg-slate-600 text-gray-100 leading-tight focus:outline-none focus:shadow-outline'
                        type="text"
                        name="email"
                        onChange={(e) => { setEmail(e.target.value) }}
                        id=""
                        placeholder='email'
                        value={email}
                    />
                </div>

                <div className="mb-4">
                    <label className='block text-gray-100 text-sm font-bold mb-2' htmlFor="number">Phone</label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 bg-slate-600 text-gray-100 leading-tight focus:outline-none focus:shadow-outline'
                        type="text"
                        name="phone"
                        onChange={(e) => { setPhone(e.target.value) }}
                        id=""
                        placeholder='phone'
                        value={phone}
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-gray-100 text-sm font-bold mb-2">
                        Select Gender:
                    </label>
                    <div className="mt-2">
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                value="male"
                                checked={gender === 'male'}
                                onChange={handleGenderChange}
                                className="form-radio h-5 w-5 text-blue-600"
                            />
                            <span className="ml-2 text-gray-100">Male</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                value="female"
                                checked={gender === 'female'}
                                onChange={handleGenderChange}
                                className="form-radio h-5 w-5 text-pink-600"
                            />
                            <span className="ml-2 text-gray-100">Female</span>
                        </label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-100 text-sm font-bold mb-2">
                        Select City:
                    </label>
                    <div className="relative">
                        <select
                            value={city}
                            onChange={handleCityChange}
                            className="block appearance-none w-full text-gray-100 bg-slate-600 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select a city</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.293 14.707a1 1 0 001.414 0L15 10.414V11a1 1 0 102 0V8a1 1 0 00-1-1h-3a1 1 0 100 2h1.586l-4.293 4.293a1 1 0 000 1.414zM5 9a1 1 0 011-1h3a1 1 0 110 2H6a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-100 text-sm font-bold mb-2">
                        How did you hear about this?
                    </label>
                    <div>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="checkbox"
                                value="LinkedIn"
                                checked={heardAbout.includes('LinkedIn')}
                                onChange={handleCheckboxChange}
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span className="ml-2 text-gray-100">LinkedIn</span>
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="checkbox"
                                value="Friends"
                                checked={heardAbout.includes('Friends')}
                                onChange={handleCheckboxChange}
                                className="form-checkbox h-5 w-5 text-green-600"
                            />
                            <span className="ml-2 text-gray-100">Friends</span>
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="checkbox"
                                value="Job Portal"
                                checked={heardAbout.includes('Job Portal')}
                                onChange={handleCheckboxChange}
                                className="form-checkbox h-5 w-5 text-indigo-600"
                            />
                            <span className="ml-2 text-gray-100">Job Portal</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                value="Others"
                                checked={heardAbout.includes('Others')}
                                onChange={handleCheckboxChange}
                                className="form-checkbox h-5 w-5 text-red-600"
                            />
                            <span className="ml-2 text-gray-100">Others</span>
                        </label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-100 text-sm font-bold mb-2">
                        State:
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            value={selectedState}
                            onChange={handleInputChange}
                            placeholder="Enter state..."
                            className="block w-full text-white bg-slate-600 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {selectedState && (
                            <ul className="absolute z-10 left-0 mt-2 py-1 w-full bg-white border border-gray-300 rounded-b shadow-md">
                                {stateSuggestions
                                    .filter((state) =>
                                        state.toLowerCase().includes(selectedState.toLowerCase())
                                    )
                                    .map((state, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleSuggestionClick(state)}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-500"
                                        >
                                            {state}
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </div>

                </div>
                <button onClick={onSave} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-10 text-xl'>Save CHanges</button>

            </div>
        </div>
    )
}

export default Page