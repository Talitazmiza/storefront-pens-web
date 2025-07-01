import {useState} from 'react';
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {useSelector} from "react-redux";

export default function Header() {
    const [dialogOpen, setDialogOpen] = useState(false);

    const toggleDialog = () => {
        setDialogOpen(!dialogOpen);
    }

    const user = useSelector(state => state.user);

    return (
        <nav className="flex justify-between flex-wrap bg-gray-100 p-6">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <img src="https://upload.wikimedia.org/wikipedia/id/4/44/Logo_PENS.png" width="50" height="50" alt=""/>
                <a href="/home"><span className="text-2xl font-sans">-Etalase</span></a>
            </div>
            <div>
                <div className="relative inline-block text-left">
                    <div>
                        <Menu>
                            <MenuButton
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                {user.name}
                                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                     aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                          clipRule="evenodd"/>
                                </svg>
                            </MenuButton>

                            <MenuItems
                                transition
                                anchor="bottom end"
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                <MenuItem>
                                    <div className="py-1" role="none">
                                        <a href="/" className="text-gray-700 block px-4 py-2 text-sm " role="menuitem"
                                           tabIndex="1"
                                           id="menu-item-0">Login</a>
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    <div className="py-1" role="none">
                                        <a href="/profile" className="text-gray-700 block px-4 py-2 text-sm "
                                           role="menuitem" tabIndex="1"
                                           id="menu-item-0">Profile</a>
                                    </div>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>
        </nav>
    );
}
