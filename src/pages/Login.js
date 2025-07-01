import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../redux/userSlice";

export default function Login() {
    const [login, setLogin] = useState({
        username: '',
        password: ''
    });
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const doLogin = (e) => {
        console.log(user);
        e.preventDefault();
        // TODO: Axios login here and then set the token

        dispatch(setUser({
            id: 123,
            username: 'bulbblubbulb',
            name: 'Hello World',
        }));

        navigate('/home');
    };


    return (
        <div className="h-screen grid grid-cols-3 gap-4">
            <div className=""></div>
            <div className="grid place-items-center">
                <div className="w-full max-w-xs">
                    <form className="shadow-2xl rounded-3xl px-8 pt-6 pb-8 mb-4" onSubmit={doLogin}>
                        <div className="mb-4">
                            <h4 className="black text-3xl font-bold mb-6">Login</h4>
                            <div className="mb-4">
                                <button className="shadow appearance-none border border-black rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    <FontAwesomeIcon icon={faEnvelope} /> Log in With Google
                                </button>
                            </div>
                            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-start" htmlFor="email">
                                E-mail
                            </label>
                            <input
                                className="shadow appearance-none border border-black rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                placeholder="E-mail"
                                onChange={e =>
                                    setLogin(prev => ({ ...prev, username: e.target.value }))
                                }
                            />
                        </div>
                        <div className="">
                            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-start" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border border-black rounded-2xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                                onChange={e =>
                                    setLogin(prev => ({ ...prev, password: e.target.value }))
                                }
                            />
                        </div>
                        <div className="mb-7">
                            <h1 className="inline-block align-baseline text-xs text-black"> Did not have an account <Link to="/register" className="text-black hover:text-blue-200 underline">Sign in</Link>
                            </h1>
                            <h1 className="inline-block align-baseline text-xs text-black"> Or maybe you are <Link to="/dashboard" className="text-black hover:text-blue-200 underline">Admin?</Link>
                            </h1>
                        </div>
                        <div className="grid grid-rows-2 gap-4">
                            <button type="submit" className="bg-blue-900 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline">
                                <Link to="/home">Login</Link>
                            </button>
                            <button type="button" className="bg-gray-400 hover:bg-black text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline">
                                <Link to="/home">Continue as Guest</Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
