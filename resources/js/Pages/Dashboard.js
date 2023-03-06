import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Button from '@/Components/Button';
import { Head } from '@inertiajs/inertia-react';
import { format } from 'date-fns';

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight dark:text-white">Profile</h2>}
        >
            

            <div className="py-20 dark:bg-black bg-blue-500">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-slate-800 grid md:grid-cols-2 grid-cols-none gap-4">
                        <div className="p-6 bg-white prose  dark:bg-slate-800">
                            <img width="100" height="100" class="float-left mr-4 mb-1 w-4/12 h-4/12" src="https://lh4.googleusercontent.com/GLrCDAyt9grc4wiKmc_yOSnviLfP9zgLmyOgietyFG5osqoOY8jn1WSvCMFe3lkqO8c=w2400"></img>
                            <h1 className="dark:text-white ">Lailanie Almero</h1>
                            <h2 className="dark:text-white">Programmer and Developer</h2>
                            <p className="dark:text-white">I code, debug and create websites. I love to explore new trends in technology world.</p>
                        </div>
                        <div className="p-6 bg-white prose  dark:bg-slate-800">
                            <p className="dark:text-white">
                            Blk.72 Lot.58 Zone-5 A. Bonifacio
                            Ave. Upper Bicutan Taguig City
                            09260673512/09610130832
                            </p>
                            <a className="dark:text-white" href="https://lanialmero.wordpress.com/">https://lanialmero.wordpress.com/</a>
                            <br></br>
                            <a className="dark:text-white" href="https://github.com/YumiAlmero03">https://github.com/YumiAlmero03</a>
                            <br></br>
                            <a className="dark:text-white" href="mailto:lanialmero@gmail.com">lanialmero@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-20 bg-white dark:bg-slate-800">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="md:columns-3">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-slate-800">
                            <div className="p-6 bg-slate-300 dark:bg-black sm:mb-3 sm:width-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6/12 h-6/12 mx-auto text-black dark:text-white hover:text-blue-500">
                                  <path fill-rule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm18 3H3.75v9a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V9zm-15-3.75A.75.75 0 004.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H5.25zm1.5.75a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V6zm3-.75A.75.75 0 009 6v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H9.75z" clip-rule="evenodd" />
                                </svg>
                                <div className="prose">
                                    <h2 className="dark:text-white text-center">Frontend</h2>
                                    <p className="dark:text-white">I mostly do is psd to html implementation</p>
                                    <ul className="list-disc">
                                        <li className="dark:text-white">CSS</li>
                                        <li className="dark:text-white">SASS</li>
                                        <li className="dark:text-white">Bootstrap</li>
                                        <li className="dark:text-white">VueJs</li>
                                        <li className="dark:text-white">NodeJs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-slate-800">
                            <div className="p-6 bg-slate-300 dark:bg-black sm:mb-3 sm:width-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" class="w-6/12 h-6/12 mx-auto text-black dark:text-white hover:text-blue-500">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                                </svg>

                                <div className="prose">
                                    <h2 className="dark:text-white text-center">Backend</h2>
                                    <p className="dark:text-white">I code systems, web apps and websites</p>
                                    <ul className="list-disc">
                                        <li className="dark:text-white">PHP</li>
                                        <li className="dark:text-white">Laravel</li>
                                        <li className="dark:text-white">WordPress</li>
                                        <li className="dark:text-white">ECommerce</li>
                                        <li className="dark:text-white">Python</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-slate-800">
                            <div className="p-6 bg-slate-300 dark:bg-black sm:mb-3 sm:width-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6/12 h-6/12 mx-auto text-black dark:text-white hover:text-blue-500">
                                  <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
                                  <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
                                  <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
                                  <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
                                </svg>

                                <div className="prose">
                                    <h2 className="dark:text-white text-center">Cloud and Database</h2>
                                    <p className="dark:text-white">Where I have stored the Apps or datas</p>
                                    <ul className="list-disc">
                                        <li className="dark:text-white">MySQL</li>
                                        <li className="dark:text-white">AWS</li>
                                        <li className="dark:text-white">CPanel</li>
                                        <li className="dark:text-white">Git</li>
                                        <li className="dark:text-white">API</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="work" className="py-20 bg-blue-500 dark:bg-black">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-slate-800">
                        <div className="p-6 prose bg-white max-w-fit  dark:bg-slate-800 dark:bg-slate-800">
                            <h2 className="dark:text-white">WORK EXPERIENCE</h2>
                            <div className="grid md:grid-cols-2 grid-cols-none gap-4">
                            {
                                    Object.entries(props.careers).map(([key, value]) => (
                                        <div id={key} className="prose mt-5">
                                                <h3 className="dark:text-white">{value.name}</h3>
                                                <p className="dark:text-white">{format(new Date(value.reason_target_date), 'MMMM yyyy')} to {format(new Date(value.completed_date), 'MMMM yyyy')}</p>
                                                <p className="dark:text-white">{value.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="educ" className="py-20 bg-white dark:bg-slate-800">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-slate-300 overflow-hidden shadow-sm sm:rounded-lg dark:bg-black">
                        <div className="p-6 max-w-fit prose sm:mb-3 width-full">
                            <h2 className="dark:text-white">EDUCATIONAL BACKGROUND</h2>
                            {
                                    Object.entries(props.school).map(([key, value]) => (
                                        <div id={key} className="prose max-w-fit mt-5">
                                                <h3 className="dark:text-white">{value.name}</h3>
                                                <p className="dark:text-white">{format(new Date(value.reason_target_date), 'MMMM yyyy')} to {format(new Date(value.completed_date), 'MMMM yyyy')}</p>
                                                <p className="dark:text-white">{value.description}</p>
                                        </div>
                                    ))
                                }
                        </div>
                    </div>
                </div>
            </div>
            <div id="proj" className="py-20 bg-blue-500 dark:bg-black">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="">
                        <div className="p-6 prose max-w-fit">
                            <h2 className="text-white">Projects</h2>
                            <div className="grid md:grid-cols-4 grid-cols-none gap-4">
                            {
                                    Object.entries(props.projects).map(([key, value]) => (
                                        <div id={key} className="prose p-6 mt-5 bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-slate-800">
                                                <h3 className="dark:text-white">{value.name}</h3>
                                                <p className="dark:text-white">{format(new Date(value.reason_target_date), 'MMMM yyyy')}</p>
                                            <div className="dark:text-white" style={{whiteSpace: "pre-wrap"}}>
                                            {console.log(value)}
                                                {
                                                        
                                                    value.description.split("\\n").map(function(item, idx) {
                                                    return (
                                                        <span key={idx}>
                                                            {item}
                                                            <br/>
                                                        </span>
                                                     )
                                                }
                                            )}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12 bg-white dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <p className="dark:text-white">Created by: Lailanie Almero using <a href="https://laravel.com/docs/8.x/">Laravel</a>, <a href="https://tailwindcss.com/">Tailwind.css</a>, <a href="https://reactjs.org/">ReactJS</a></p>
                </div>
            </div>
        </Authenticated>
    );
}
