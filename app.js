const express = require("express");
let pokemons = require('./mock-pokemon');
const app = express();
const port = 8080;

app.get('/', (req,res) => res.send("hellhthrjtyjtjhro"));
app.get('/api/pokemon/:id', (req, res) => 
{	
	const id = parseInt(req.params.id);
	const pokemon = pokemons.find(pokemon => pokemon.id === id);
	res.json(pokemon);
});
app.listen(8080, () => console.log(`app is started : http://localhost:${port}`));