<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Platos;
use Faker\Core\Number;

class PlatosController extends Controller
{
    public function index()
    {
        return Platos::all();
    }

    public function show(Platos $plato)
    {
        return $plato;
    }

    public function store(Request $request)
    {
        $plato = Platos::create($request->all());

        return response()->json($plato, 201);
    }

    public function update(Request $request, Platos $plato)
    {
        $plato->update($request->all());

        return response()->json($plato, 200);
    }

    public function delete(Platos $plato)
    {
        $plato->delete();

        return response()->json(null, 204);
    }

    public function allByCategoria(string $categoria)
    {
        $data = Platos::where('categoria', $categoria)

               ->get();
        return response()->json($data, 200);
    }
}
