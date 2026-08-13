

const copper = [
	"minecraft:copper_block",
	"minecraft:chiseled_copper",
	"minecraft:copper_grate",
	"minecraft:cut_copper",
	"minecraft:cut_copper_stairs",
	"minecraft:cut_copper_slab",
	"minecraft:copper_door",
	"minecraft:copper_trapdoor",
	"minecraft:copper_bulb",
	"create:copper_shingles",
	"create:copper_shingle_slab",
	"create:copper_shingle_stairs",
	"create:copper_tiles",
	"create:copper_tile_slab",
	"create:copper_tile_stairs",
	"starcatcher:copper_hook",
	"dndecor:copper_floor"
]



const exposed_copper = [
	"minecraft:exposed_copper",
	"minecraft:exposed_chiseled_copper",
	"minecraft:exposed_copper_grate",
	"minecraft:exposed_cut_copper",
	"minecraft:exposed_cut_copper_stairs",
	"minecraft:exposed_cut_copper_slab",
	"minecraft:exposed_copper_door",
	"minecraft:exposed_copper_trapdoor",
	"minecraft:exposed_copper_bulb",
	"create:exposed_copper_shingles",
	"create:exposed_copper_shingle_slab",
	"create:exposed_copper_shingle_stairs",
	"create:exposed_copper_tiles",
	"create:exposed_copper_tile_slab",
	"create:exposed_copper_tile_stairs",
	"starcatcher:exposed_copper_hook",
	"dndecor:exposed_copper_floor"
]



const weathered_copper = [
	"minecraft:weathered_copper",
	"minecraft:weathered_chiseled_copper",
	"minecraft:weathered_copper_grate",
	"minecraft:weathered_cut_copper",
	"minecraft:weathered_cut_copper_stairs",
	"minecraft:weathered_cut_copper_slab",
	"minecraft:weathered_copper_door",
	"minecraft:weathered_copper_trapdoor",
	"minecraft:weathered_copper_bulb",
	"create:weathered_copper_shingles",
	"create:weathered_copper_shingle_slab",
	"create:weathered_copper_shingle_stairs",
	"create:weathered_copper_tiles",
	"create:weathered_copper_tile_slab",
	"create:weathered_copper_tile_stairs",
	"starcatcher:weathered_copper_hook",
	"dndecor:weathered_copper_floor"
]



const oxidized_copper = [
	"minecraft:oxidized_copper",
	"minecraft:oxidized_chiseled_copper",
	"minecraft:oxidized_copper_grate",
	"minecraft:oxidized_cut_copper",
	"minecraft:oxidized_cut_copper_stairs",
	"minecraft:oxidized_cut_copper_slab",
	"minecraft:oxidized_copper_door",
	"minecraft:oxidized_copper_trapdoor",
	"minecraft:oxidized_copper_bulb",
	"create:oxidized_copper_shingles",
	"create:oxidized_copper_shingle_slab",
	"create:oxidized_copper_shingle_stairs",
	"create:oxidized_copper_tiles",
	"create:oxidized_copper_tile_slab",
	"create:oxidized_copper_tile_stairs",
	"starcatcher:oxidised_copper_hook",
	"dndecor:oxidized_copper_floor"
]



copper.forEach((item, index) => {
	create_water_filling(item, exposed_copper[index]);
});



exposed_copper.forEach((item, index) => {
	create_water_filling(item, weathered_copper[index]);
});



weathered_copper.forEach((item, index) => {
	create_water_filling(item, oxidized_copper[index]);
});






function create_water_filling(input, output) {
	ServerEvents.recipes(event => {
		event.custom({
			"type": "create:filling",
			"ingredients": [
				{
					"item": `${input}`
				},
				{
					"type": "fluid_stack",
					"amount": 500,
					"fluid": "minecraft:water"
				}
			],
			"results": [
				{
					"item": {
						"id": `${output}`
					}
				}
			]
		});
	});
	return;
}