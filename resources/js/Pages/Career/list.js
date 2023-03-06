import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Button from '@/Components/Button';
import { Head, usePage } from '@inertiajs/inertia-react';

export default function Career(props) {

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h1 className="font-semibold text-xl text-gray-800 leading-tight dark:text-white border-b border-gray-200">Career</h1>}
        >
            

            <div className="py-12 dark:bg-slate-800">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white  dark:bg-black">
                            <a href={route('career.create')} className="float-right">
                                <button className="inline-flex items-center px-4 py-2 bg-gray-900  rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                                    </svg>
                                </button>
                            </a>
                                {
                                    Object.entries(props.careers).map(([key, value]) => (
                                        <div id={key} className="prose max-w-fit mt-5">
                                            
                                                <h3>
                                                    <a href={route('career.delete', value.id)}>
                                                        <button className="inline-flex items-center mr-5 bg-red-900  rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </a>
                                                    <a className="dark:text-white" href={route('career.edit', value.id)}>
                                                        {value.name} - {value.category}
                                                    </a>
                                                </h3>
                                                <p className="dark:text-white">{value.description}</p>
                                            
                                        </div>
                                    ))
                                }
                        </div>
                    </div>
                </div>
            </div>
            
        </Authenticated>
    );
}
