import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Register() {
    return (
        <div className="h-screen grid grid-cols-3 gap-4">
            <div className=""></div>
            <div className="grid place-items-center">
                <div className="w-full max-w-xs">
                    <form className="bg-white shadow-2xl rounded-3xl px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <h4 className="black text-3xl font-bold mb-6 ">Register</h4>
                            <div className="divide-y divide-gray-400 hover:divide-y-8"></div>
                            <div className="mb-4">
                                <button className="shadow appearance-none border border-black rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    <FontAwesomeIcon icon={faEnvelope} /> Sign in With Google
                                </button>
                            </div>
                            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-start" htmlFor="email">
                                E-mail
                            </label>
                            <input
                                className="shadow appearance-none border border-black rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" type="email" placeholder="E-mail"/>
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-start" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border border-black rounded-2xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="Username"/>
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-start" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border border-black rounded-2xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="text" placeholder="******************"/>
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-start" htmlFor="role">
                                Role
                            </label>
                            <input
                                className="shadow appearance-none border border-black rounded-2xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="role" type="text" placeholder="Role"/>
                        </div>
                        <div className="mb-7">
                            <h1 className="inline-block align-baseline text-xs text-black"> Already have account? <Link to="/" className="text-black hover:text-blue-200 underline">Log in</Link>
                            </h1>
                        </div>
                        <div className="grid grid-rows-2 gap-4">
                            <button className="bg-blue-900 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline">
                                <Link to="/">Register</Link>
                            </button>
                            <button className="text-gray-400 font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline underline">
                                <Link to="/">Back to Login</Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}