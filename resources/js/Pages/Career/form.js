import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import Checkbox from '@/Components/Checkbox';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';

export default function Dashboard(props, {id, name, description, reason_target_date, completed_date, category}) {
    if(props.career){
        id = props.career.id;
        name = props.career.name;
        description = props.career.description;
        reason_target_date = props.career.reason_target_date;
        completed_date = props.career.completed_date;
        category = props.career.category;
    }
    const { data, setData, post, processing, errors, reset } = useForm({
        id: id,
        name: name,
        description: description,
        reason_target_date: reason_target_date,
        completed_date: completed_date,
        category: category,
    });
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };
    const submit = (e) => {
        e.preventDefault();
        if(props.career){
            post(route('career.update', props.career.id));
        } else {
            post(route('career.store'));
        }

    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight dark:text-white border-b border-gray-200">Career</h2>}
        >
            
            <div className="py-12 dark:bg-slate-800">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-black overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white dark:bg-black">
                            <ValidationErrors errors={errors} />
                            <form className="mt-7" onSubmit={submit}>
                                <div>
                                    <Label className="dark:text-white" forInput="name" value="Title" />
                                    <Input
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>
                                <div className="mt-3">
                                    <Label className="dark:text-white" forInput="description" value="Description" />
                                    <Input
                                        type="text"
                                        name="description"
                                        value={data.description}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>
                                <div className="mt-3 grid grid-cols-4 gap-4">
                                    <div>
                                        <Label className="dark:text-white" forInput="reason_target_date" value="Ta" />
                                        <Input
                                            type="date"
                                            name="reason_target_date"
                                            value={data.reason_target_date}
                                            className="mt-1 block w-full"
                                            handleChange={onHandleChange}
                                        />
                                    </div>
                                    <div>
                                        <Label className="dark:text-white" forInput="completed_date" value="Name" />
                                        <Input
                                            type="date"
                                            name="completed_date"
                                            value={data.completed_date}
                                            className="mt-1 block w-full"
                                            handleChange={onHandleChange}
                                        />
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <Label className="dark:text-white" forInput="category" value="Category" />
                                    <select name="category" className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" value={data.category} onChange={onHandleChange}>
                                        <option>Education</option>
                                        <option>Work Exp</option>
                                        <option>Projects</option>
                                    </select>
                                </div>
                                <div>
                                    <Button className="mb-4 float-right" processing={processing}>
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </Authenticated>
    );
}
