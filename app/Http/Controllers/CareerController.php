<?php

namespace App\Http\Controllers;

use App\Models\Career;
use App\Http\Requests\StoreCareerRequest;
use App\Http\Requests\UpdateCareerRequest;
use App\Providers\RouteServiceProvider;
use Inertia\Inertia;

class CareerController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Dashboard', [
            'careers' => Career::where('category', 'Work Exp')->get(),
            'school' => Career::where('category', 'Education')->get(),
            'projects' => Career::where('category', 'Projects')->get(),
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Career/list', [
            'careers' => Career::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Career/form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCareerRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCareerRequest $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'reason_target_date' => 'date|max:255',
            'completed_date' => 'date|max:255',
            'category' => 'string|max:255',
        ]);

        $career = Career::create([
            'name' => $request->name,
            'description' => $request->description,
            'reason_target_date' => $request->reason_target_date,
            'completed_date' => $request->completed_date,
            'category' => $request->category,
        ]);

        return redirect(RouteServiceProvider::HOME);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Career  $career
     * @return \Illuminate\Http\Response
     */
    public function show(Career $career)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Career  $career
     * @return \Illuminate\Http\Response
     */
    public function edit(Career $career, $id)
    {
        return Inertia::render('Career/form', [
            'career' => Career::find($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCareerRequest  $request
     * @param  \App\Models\Career  $career
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCareerRequest $request, Career $career)
    {
        //
        $flight = Career::find($request->id);
        $flight->name = $request->name;
        $flight->description = $request->description;
        $flight->reason_target_date = $request->reason_target_date;
        $flight->completed_date = $request->completed_date;
        $flight->category = $request->category;
         
        $flight->save();
        return back()->withInput();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Career  $career
     * @return \Illuminate\Http\Response
     */
    public function destroy(Career $career, $id)
    {
        User::findOrFail($id)->delete();
    }
}
