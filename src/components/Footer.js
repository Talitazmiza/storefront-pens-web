export default function Footer() {
    return (
       // footer container
        <footer
            className="bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
            <div className="container p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4">
                    {/*1st links*/}
                    <div className="mb-6">
                        <h5
                            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                            Project Categories
                        </h5>

                        <ul className="mb-0 list-none">
                            <li>
                                <a href="#" className="text-neutral-800 dark:text-neutral-200"
                                >E-Health</a
                                >
                            </li>
                            <li>
                                <a href="#" className="text-neutral-800 dark:text-neutral-200"
                                >E-Learning</a
                                >
                            </li>
                            <li>
                                <a href="#" className="text-neutral-800 dark:text-neutral-200"
                                >E-commerce</a
                                >
                            </li>
                            <li>
                                <a href="#" className="text-neutral-800 dark:text-neutral-200"
                                >E-Goverment</a
                                >
                            </li>
                        </ul>
                    </div>

                    {/*2nd links*/}
                    <div className="mb-6">
                        <h5
                            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                            Links
                        </h5>

                        <ul className="mb-0 list-none">
                            <li>
                                <a href="#" className="text-neutral-800 dark:text-neutral-200"
                                >Link 1</a
                                >
                            </li>
                            <li>
                                <a href="#" className="text-neutral-800 dark:text-neutral-200"
                                >Link 2</a
                                >
                            </li>
                            <li>
                                <a href="#" className="text-neutral-800 dark:text-neutral-200"
                                >Link 3</a
                                >
                            </li>
                            <li>
                                <a href="#" className="text-neutral-800 dark:text-neutral-200"
                                >Link 4</a
                                >
                            </li>
                        </ul>
                    </div>

                    {/*3rd links*/}
                    <div className="mb-6">
                        <h5
                            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                            Links
                        </h5>

                        <ul className="mb-0 list-none">
                            <li>
                                <a href="#" className="text-neutral-800 dark:text-neutral-200"
                                >Link 1</a
                                >
                            </li>
                            <li>
                                <a href="#" className="text-neutral-800 dark:text-neutral-200"
                                >Link 2</a
                                >
                            </li>
                            <li>
                                <a href="#" className="text-neutral-800 dark:text-neutral-200"
                                >Link 3</a
                                >
                            </li>
                            <li>
                                <a href="#" className="text-neutral-800 dark:text-neutral-200"
                                >Link 4</a
                                >
                            </li>
                        </ul>
                    </div>

                    {/*4th links*/}
                    <div className="mb-6">
                        <h5
                            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                            Links
                        </h5>

                        <ul className="mb-0 list-none">
                            <li>
                                <a href="#" className="text-neutral-800 dark:text-neutral-200"
                                >Link 1</a
                                >
                            </li>
                            <li>
                                <a href="#" className="text-neutral-800 dark:text-neutral-200"
                                >Link 2</a
                                >
                            </li>
                            <li>
                                <a href="#" className="text-neutral-800 dark:text-neutral-200"
                                >Link 3</a
                                >
                            </li>
                            <li>
                                <a href="#" className="text-neutral-800 dark:text-neutral-200"
                                >Link 4</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*copyright section*/}
            <div
                className="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
                © 2023 Copyright:
                <a
                    className="text-neutral-800 dark:text-neutral-400"
                    href="https://tailwind-elements.com/"
                >Tailwind Elements</a
                >
            </div>
        </footer>
    );
}