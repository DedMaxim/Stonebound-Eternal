/*
const wood_types = [
	"acacia",
	"birch",
	"crimson",
	"dark_oak",
	"jungle",
	"oak",
	"spruce",
	"warped",
	"mangrove",
	"cherry",
	"bamboo"
]
*/

/*
ServerEvents.tradeList(event => {
	event.removeTrader({
		type: "minecraft:wandering_trader",
		sell: "irons_spellbooks:hither_thither_wand"
	})
})
*/






ServerEvents.recipes(event => {
	
	// Removing recipes
	event.remove({ output: 'shrink:shrinking_device' })
	event.remove({ output: 'irons_spellbooks:portal_frame' })
	event.remove({ output: 'create:goggles' })
	event.remove({ output: 'torchmaster:megatorch' })
	event.remove({ output: 'minecraft:spawner' })
	
	
	
	event.remove({ output: 'spectrum:bedrock_pickaxe' })
	event.remove({ output: 'spectrum:bedrock_axe' })
	event.remove({ output: 'spectrum:bedrock_shovel' })
	event.remove({ output: 'spectrum:bedrock_sword' })
	event.remove({ output: 'spectrum:bedrock_hoe' })
	event.remove({ output: 'spectrum:bedrock_bow' })
	event.remove({ output: 'spectrum:bedrock_crossbow' })
	event.remove({ output: 'spectrum:bedrock_shears' })
	event.remove({ output: 'spectrum:bedrock_fishing_rod' })
	event.remove({ output: 'spectrum:bedrock_helmet' })
	event.remove({ output: 'spectrum:bedrock_chestplate' })
	event.remove({ output: 'spectrum:bedrock_leggings' })
	event.remove({ output: 'spectrum:bedrock_boots' })
	event.remove({ output: 'spectrum:ender_hopper' })
	event.remove({ output: 'spectrum:ender_dropper' })
	event.remove({ output: 'spectrum:perturbed_eye' })
	event.remove({ output: 'spectrum:bottomless_bundle' })
	event.remove({ output: 'spectrum:ender_splice' })
	event.remove({ output: 'spectrum:universe_spyhole' })
	event.remove({ output: 'spectrum:lesser_potion_pendant' })
	event.remove({ output: 'spectrum:greater_potion_pendant' })
	event.remove({ id: 'spectrum:anvil_crushing/crystallarieum_growables/netherite_scrap_from_cluster' })
	event.remove({ id: 'spectrum:anvil_crushing/crystallarieum_growables/iron_from_cluster' })
	event.remove({ id: 'spectrum:anvil_crushing/crystallarieum_growables/gold_from_cluster' })
	event.remove({ id: 'spectrum:anvil_crushing/crystallarieum_growables/diamond_from_cluster' })
	event.remove({ id: 'spectrum:anvil_crushing/crystallarieum_growables/emerald_from_cluster' })
	event.remove({ id: 'spectrum:anvil_crushing/crystallarieum_growables/echo_shard_from_cluster' })
	event.remove({ id: 'spectrum:mod_integration/create/anvil_crushing/zinc_from_cluster' })
	event.remove({ output: 'spectrum:enchanter' })
	event.remove({ type: 'spectrum:enchanter' })
	event.remove({ type: 'spectrum:enchantment_upgrade' })
	event.remove({ output: 'spectrum:enchantment_canvas' })
	event.remove({ output: 'spectrum:connection_node' })
	event.remove({ output: 'spectrum:provider_node' })
	event.remove({ output: 'spectrum:sender_node' })
	event.remove({ output: 'spectrum:storage_node' })
	event.remove({ output: 'spectrum:gather_node' })
	event.remove({ id: 'spectrum:pedestal/tier4/vanilla/elytra' })
	event.remove({ id: 'spectrum:pedestal/tier2/vanilla/elytra' })
	
	
	/*event.remove({ output: 'sophisticatedstorage:chest' })
	event.remove({ output: 'sophisticatedstorage:copper_chest' })
	event.remove({ output: 'sophisticatedstorage:iron_chest' })
	event.remove({ output: 'sophisticatedstorage:gold_chest' })
	event.remove({ output: 'sophisticatedstorage:diamond_chest' })
	event.remove({ output: 'sophisticatedstorage:netherite_chest' })
	event.remove({ output: 'sophisticatedstorage:netherite_shulker_box' })*/
	event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_1' })
	event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_1_plus' })
	event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_2' })
	event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_3' })
	event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_4' })
	event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_5' })
	event.remove({ output: 'sophisticatedstorage:stack_upgrade_omega_tier' })
	
	event.remove({ output: 'sophisticatedbackpacks:diamond_backpack' })
	event.remove({ output: 'sophisticatedbackpacks:netherite_backpack' })
	event.remove({ output: 'sophisticatedbackpacks:magnet_upgrade' })
	event.remove({ output: 'sophisticatedbackpacks:advanced_magnet_upgrade' })
	event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_starter_tier' })
	event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_1' })
	event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_2' })
	event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_3' })
	event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_4' })
	event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_omega_tier' })
	event.remove({ output: 'sophisticatedbackpacks:mob_catcher_upgrade' })
	event.remove({ output: 'sophisticatedbackpacks:advanced_mob_catcher_upgrade' })
	
	
	/*
	event.remove({ output: 'storagedrawers:remote_upgrade' })
	event.remove({ output: 'storagedrawers:remote_group_upgrade' })
	event.remove({ output: 'storagedrawers:obsidian_storage_upgrade' })
	event.remove({ output: 'storagedrawers:copper_storage_upgrade' })
	event.remove({ output: 'storagedrawers:iron_storage_upgrade' })
	event.remove({ output: 'storagedrawers:gold_storage_upgrade' })
	event.remove({ output: 'storagedrawers:emerald_storage_upgrade' })
	event.remove({ output: 'storagedrawers:diamond_storage_upgrade' })
	event.remove({ output: 'storagedrawers:netherite_storage_upgrade' })
	*/
	
	
	event.remove({ output: 'createdeco:netherite_coin' })
	event.remove({ output: 'createdeco:netherite_coinstack' })
	event.remove({ output: 'createdeco:gold_coin' })
	event.remove({ output: 'createdeco:gold_coinstack' })
	event.remove({ output: 'createdeco:brass_coin' })
	event.remove({ output: 'createdeco:brass_coinstack' })
	event.remove({ output: 'createdeco:iron_coin' })
	event.remove({ output: 'createdeco:iron_coinstack' })
	event.remove({ output: 'createdeco:copper_coin' })
	event.remove({ output: 'createdeco:copper_coinstack' })
	event.remove({ output: 'createdeco:industrial_iron_coin' })
	event.remove({ output: 'createdeco:industrial_iron_coinstack' })
	event.remove({ output: 'createdeco:zinc_coin' })
	event.remove({ output: 'createdeco:zinc_coinstack' })
	
	
	
	event.remove({ output: 'waystones:waystone' })
	event.remove({ output: 'waystones:mossy_waystone' })
	event.remove({ output: 'waystones:sandy_waystone' })
	event.remove({ output: 'waystones:deepslate_waystone' })
	event.remove({ output: 'waystones:blackstone_waystone' })
	event.remove({ output: 'waystones:end_stone_waystone' })
	event.remove({ output: 'waystones:red_nether_bricks_waystone' })
	event.remove({ output: 'waystones:purpur_waystone' })
	event.remove({ output: 'waystones:prismarine_waystone' })
	event.remove({ output: 'waystones:mud_bricks_waystone' })
	event.remove({ output: 'waystones:warp_plate' })
	
	event.remove({ output: 'waystones:white_portstone' })
	event.remove({ output: 'waystones:orange_portstone' })
	event.remove({ output: 'waystones:magenta_portstone' })
	event.remove({ output: 'waystones:light_blue_portstone' })
	event.remove({ output: 'waystones:yellow_portstone' })
	event.remove({ output: 'waystones:lime_portstone' })
	event.remove({ output: 'waystones:pink_portstone' })
	event.remove({ output: 'waystones:gray_portstone' })
	event.remove({ output: 'waystones:light_gray_portstone' })
	event.remove({ output: 'waystones:cyan_portstone' })
	event.remove({ output: 'waystones:purple_portstone' })
	event.remove({ output: 'waystones:blue_portstone' })
	event.remove({ output: 'waystones:brown_portstone' })
	event.remove({ output: 'waystones:green_portstone' })
	event.remove({ output: 'waystones:red_portstone' })
	event.remove({ output: 'waystones:black_portstone' })
	
	event.remove({ output: 'waystones:orange_sharestone' })
	event.remove({ output: 'waystones:magenta_sharestone' })
	event.remove({ output: 'waystones:light_blue_sharestone' })
	event.remove({ output: 'waystones:yellow_sharestone' })
	event.remove({ output: 'waystones:lime_sharestone' })
	event.remove({ output: 'waystones:pink_sharestone' })
	event.remove({ output: 'waystones:gray_sharestone' })
	event.remove({ output: 'waystones:light_gray_sharestone' })
	event.remove({ output: 'waystones:cyan_sharestone' })
	event.remove({ output: 'waystones:purple_sharestone' })
	event.remove({ output: 'waystones:blue_sharestone' })
	event.remove({ output: 'waystones:brown_sharestone' })
	event.remove({ output: 'waystones:green_sharestone' })
	event.remove({ output: 'waystones:red_sharestone' })
	event.remove({ output: 'waystones:black_sharestone' })
	
	event.remove({ output: 'waystones:return_scroll' })
	event.remove({ output: 'waystones:blank_scroll' })
	event.remove({ output: 'waystones:warp_scroll' })
	event.remove({ output: 'waystones:portal_scroll' })
	event.remove({ output: 'waystones:warp_stone' })
	event.remove({ output: 'waystones:warp_dust' })
	event.remove({ output: 'waystones:dormant_shard' })
	event.remove({ output: 'waystones:twinbound_feather' })
	event.remove({ output: 'waystones:epitaph' })
	
	
	
	
	
	
	
	
	
	// Adding custom shaped recipes
	
	event.shapeless(
		Item.of('createdeco:netherite_coinstack', 1),
		[
			'8x createdeco:netherite_coin'
		]
	)
	
	
	
	event.shapeless(
		Item.of('createdeco:netherite_coin', 8),
		[
			'createdeco:netherite_coinstack'
		]
	)
	
	
	
	event.shaped(
		Item.of('create:goggles', 1),
		[
			'   ',
			'ABA',
			'CDC'
		],
		{
			A: 'minecraft:string',
			B: 'createdeco:netherite_coin',
			C: '#c:glass_blocks',
			D: 'create:golden_sheet'
		}
	)
	
	
	
	event.shaped(
		Item.of('torchmaster:megatorch', 1),
		[
			'ABA',
			'DCD',
			'ECE'
		],
		{
			A: 'createdeco:netherite_coin',
			B: 'minecraft:campfire',
			C: '#minecraft:logs',
			D: 'minecraft:diamond',
			E: 'minecraft:gold_block'
		}
	)
	
	
	
	
	
	
	
	
	
    event.custom({
        type: "spectrum:fusion_shrine",
        group: "bedrock_tools",
        start_crafting_effect: "spectrum:nothing",
        copy_components: true,
        fluid: {
            fluid: "spectrum:midnight_solution"
        },
        time: 1200,
        ingredients: [
            { item: "minecraft:golden_pickaxe" },
            { item: "minecraft:netherite_ingot" },
            { item: "spectrum:bedrock_dust", count: 3 },
            { item: "spectrum:black_pigment", count: 3 },
            { item: "spectrum:onyx_powder", count: 3 },
            { item: "spectrum:stratine_gem" },
			{ item: "createdeco:netherite_coin" }
        ],
        experience: 16.0,
        result: {
            id: "spectrum:bedrock_pickaxe",
            count: 1,
            components: {
                "minecraft:enchantments": {
                    levels: {
                        "minecraft:silk_touch": 1
                    }
                }
            }
        },
        required_advancement: "spectrum:unlocks/equipment/bedrock_tools",
        finish_crafting_effect: "spectrum:single_visual_explosion_on_shrine"
    }).id("spectrum:fusion_shrine/bedrock/pickaxe");
	
	
	
    event.custom({
        type: "spectrum:fusion_shrine",
        group: "bedrock_tools",
        start_crafting_effect: "spectrum:nothing",
        copy_components: true,
        fluid: {
            fluid: "spectrum:midnight_solution"
        },
        time: 1200,
        ingredients: [
            { item: "minecraft:golden_axe" },
            { item: "minecraft:netherite_ingot" },
            { item: "spectrum:bedrock_dust", count: 3 },
            { item: "spectrum:black_pigment", count: 3 },
            { item: "spectrum:onyx_powder", count: 3 },
            { item: "spectrum:stratine_gem" },
			{ item: "createdeco:netherite_coin" }
        ],
        experience: 16.0,
        result: {
            id: "spectrum:bedrock_axe",
            count: 1,
            components: {
                "minecraft:enchantments": {
                    levels: {
                        "minecraft:efficiency": 6
                    }
                }
            }
        },
        required_advancement: "spectrum:unlocks/equipment/bedrock_tools",
        finish_crafting_effect: "spectrum:single_visual_explosion_on_shrine"
    }).id("spectrum:fusion_shrine/bedrock/axe");
	
	
	
    event.custom({
        type: "spectrum:fusion_shrine",
        group: "bedrock_tools",
        start_crafting_effect: "spectrum:nothing",
        copy_components: true,
        fluid: {
            fluid: "spectrum:midnight_solution"
        },
        time: 1200,
        ingredients: [
            { item: "minecraft:golden_shovel" },
            { item: "minecraft:netherite_ingot" },
            { item: "spectrum:bedrock_dust" },
            { item: "spectrum:black_pigment" },
            { item: "spectrum:onyx_powder" },
            { item: "spectrum:stratine_gem" },
			{ item: "createdeco:netherite_coin" }
        ],
        experience: 16.0,
        result: {
            id: "spectrum:bedrock_shovel",
            count: 1,
            components: {
                "minecraft:enchantments": {
                    levels: {
                        "minecraft:efficiency": 6
                    }
                }
            }
        },
        required_advancement: "spectrum:unlocks/equipment/bedrock_tools",
        finish_crafting_effect: "spectrum:single_visual_explosion_on_shrine"
    }).id("spectrum:fusion_shrine/bedrock/shovel");
	
	
	
    event.custom({
        type: "spectrum:fusion_shrine",
        group: "bedrock_tools",
        start_crafting_effect: "spectrum:nothing",
        copy_components: true,
        fluid: {
            fluid: "spectrum:midnight_solution"
        },
        time: 1200,
        ingredients: [
            { item: "minecraft:golden_sword" },
            { item: "minecraft:netherite_ingot" },
            { item: "spectrum:bedrock_dust", count: 2 },
            { item: "spectrum:black_pigment", count: 2 },
            { item: "spectrum:onyx_powder", count: 2 },
            { item: "spectrum:stratine_gem" },
			{ item: "createdeco:netherite_coin" }
        ],
        experience: 16.0,
        result: {
            id: "spectrum:bedrock_sword",
            count: 1,
            components: {
                "minecraft:enchantments": {
                    levels: {
                        "minecraft:sharpness": 6
                    }
                }
            }
        },
        required_advancement: "spectrum:unlocks/equipment/bedrock_tools",
        finish_crafting_effect: "spectrum:single_visual_explosion_on_shrine"
    }).id("spectrum:fusion_shrine/bedrock/sword");
	
	
	
    event.custom({
        type: "spectrum:fusion_shrine",
        group: "bedrock_tools",
        start_crafting_effect: "spectrum:nothing",
        copy_components: true,
        fluid: {
            fluid: "spectrum:midnight_solution"
        },
        time: 1200,
        ingredients: [
            { item: "minecraft:golden_hoe" },
            { item: "minecraft:netherite_ingot" },
            { item: "spectrum:bedrock_dust", count: 2 },
            { item: "spectrum:black_pigment", count: 2 },
            { item: "spectrum:onyx_powder", count: 2 },
            { item: "spectrum:stratine_gem" },
			{ item: "createdeco:netherite_coin" }
        ],
        experience: 16.0,
        result: {
            id: "spectrum:bedrock_hoe",
            count: 1,
            components: {
                "minecraft:enchantments": {
                    levels: {
                        "minecraft:fortune": 4
                    }
                }
            }
        },
        required_advancement: "spectrum:unlocks/equipment/bedrock_tools",
        finish_crafting_effect: "spectrum:single_visual_explosion_on_shrine"
    }).id("spectrum:fusion_shrine/bedrock/hoe");
	
	
	
    event.custom({
        type: "spectrum:fusion_shrine",
        group: "bedrock_tools",
        start_crafting_effect: "spectrum:nothing",
        copy_components: true,
        fluid: {
            fluid: "spectrum:midnight_solution"
        },
        time: 1200,
        ingredients: [
            { item: "minecraft:bow" },
            { item: "minecraft:netherite_ingot" },
            { item: "spectrum:bedrock_dust", count: 4 },
            { item: "spectrum:black_pigment", count: 4 },
            { item: "spectrum:onyx_powder", count: 4 },
            { item: "spectrum:stratine_gem" },
			{ item: "createdeco:netherite_coin" }
        ],
        experience: 16.0,
        result: {
            id: "spectrum:bedrock_bow",
            count: 1,
            components: {
                "minecraft:enchantments": {
                    levels: {
                        "minecraft:power": 6
                    }
                }
            }
        },
        required_advancement: "spectrum:unlocks/equipment/bedrock_tools",
        finish_crafting_effect: "spectrum:single_visual_explosion_on_shrine"
    }).id("spectrum:fusion_shrine/bedrock/bow");
	
	
	
    event.custom({
        type: "spectrum:fusion_shrine",
        group: "bedrock_tools",
        start_crafting_effect: "spectrum:nothing",
        copy_components: true,
        fluid: {
            fluid: "spectrum:midnight_solution"
        },
        time: 1200,
        ingredients: [
            { item: "minecraft:crossbow" },
            { item: "minecraft:netherite_ingot" },
            { item: "spectrum:bedrock_dust", count: 4 },
            { item: "spectrum:black_pigment", count: 4 },
            { item: "spectrum:onyx_powder", count: 4 },
            { item: "spectrum:stratine_gem" },
			{ item: "createdeco:netherite_coin" }
        ],
        experience: 16.0,
        result: {
            id: "spectrum:bedrock_crossbow",
            count: 1,
            components: {
                "minecraft:enchantments": {
                    levels: {
                        "minecraft:quick_charge": 4
                    }
                }
            }
        },
        required_advancement: "spectrum:unlocks/equipment/bedrock_tools",
        finish_crafting_effect: "spectrum:single_visual_explosion_on_shrine"
    }).id("spectrum:fusion_shrine/bedrock/crossbow");
	
	
	
    event.custom({
        type: "spectrum:fusion_shrine",
        group: "bedrock_tools",
        start_crafting_effect: "spectrum:nothing",
        copy_components: true,
        fluid: {
            fluid: "spectrum:midnight_solution"
        },
        time: 1200,
        ingredients: [
            { item: "minecraft:shears" },
            { item: "minecraft:netherite_ingot" },
            { item: "spectrum:bedrock_dust", count: 2 },
            { item: "spectrum:black_pigment", count: 2 },
            { item: "spectrum:onyx_powder", count: 2 },
            { item: "spectrum:stratine_gem" },
			{ item: "createdeco:netherite_coin" }
        ],
        experience: 16.0,
        result: {
            id: "spectrum:bedrock_shears",
            count: 1,
            components: {
                "minecraft:enchantments": {
                    levels: {
                        "minecraft:efficiency": 6
                    }
                }
            }
        },
        required_advancement: "spectrum:unlocks/equipment/bedrock_tools",
        finish_crafting_effect: "spectrum:single_visual_explosion_on_shrine"
    }).id("spectrum:fusion_shrine/bedrock/shears");
	
	
	
    event.custom({
        type: "spectrum:fusion_shrine",
        group: "bedrock_tools",
        start_crafting_effect: "spectrum:nothing",
        copy_components: true,
        fluid: {
            fluid: "spectrum:midnight_solution"
        },
        time: 1200,
        ingredients: [
            { item: "minecraft:fishing_rod" },
            { item: "minecraft:netherite_ingot" },
            { item: "spectrum:bedrock_dust", count: 3 },
            { item: "spectrum:black_pigment", count: 3 },
            { item: "spectrum:onyx_powder", count: 3 },
            { item: "spectrum:stratine_gem" },
			{ item: "createdeco:netherite_coin" }
        ],
        experience: 16.0,
        result: {
            id: "spectrum:bedrock_fishing_rod",
            count: 1,
            components: {
                "minecraft:enchantments": {
                    levels: {
                        "minecraft:luck_of_the_sea": 4
                    }
                }
            }
        },
        required_advancement: "spectrum:unlocks/equipment/bedrock_tools",
        finish_crafting_effect: "spectrum:single_visual_explosion_on_shrine"
    }).id("spectrum:fusion_shrine/bedrock/fishing_rod");
	
	
	
    event.custom({
        type: "spectrum:fusion_shrine",
        group: "bedrock_tools",
        start_crafting_effect: "spectrum:nothing",
        copy_components: true,
        fluid: {
            fluid: "spectrum:midnight_solution"
        },
        time: 1200,
        ingredients: [
            { item: "minecraft:golden_helmet" },
            { item: "minecraft:netherite_ingot" },
            { item: "spectrum:bedrock_dust", count: 5 },
            { item: "spectrum:black_pigment", count: 5 },
            { item: "spectrum:onyx_powder", count: 5 },
            { item: "spectrum:stratine_gem" },
			{ item: "createdeco:netherite_coin" }
        ],
        experience: 16.0,
        result: {
            id: "spectrum:bedrock_helmet",
            count: 1,
            components: {
                "minecraft:enchantments": {
                    levels: {
                        "minecraft:projectile_protection": 5
                    }
                }
            }
        },
        required_advancement: "spectrum:unlocks/equipment/bedrock_tools",
        finish_crafting_effect: "spectrum:single_visual_explosion_on_shrine"
    }).id("spectrum:fusion_shrine/bedrock/helmet");
	
	
	
    event.custom({
        type: "spectrum:fusion_shrine",
        group: "bedrock_tools",
        start_crafting_effect: "spectrum:nothing",
        copy_components: true,
        fluid: {
            fluid: "spectrum:midnight_solution"
        },
        time: 1200,
        ingredients: [
            { item: "minecraft:golden_chestplate" },
            { item: "minecraft:netherite_ingot" },
            { item: "spectrum:bedrock_dust", count: 8 },
            { item: "spectrum:black_pigment", count: 8 },
            { item: "spectrum:onyx_powder", count: 8 },
            { item: "spectrum:stratine_gem" },
			{ item: "createdeco:netherite_coin" }
        ],
        experience: 16.0,
        result: {
            id: "spectrum:bedrock_chestplate",
            count: 1,
            components: {
                "minecraft:enchantments": {
                    levels: {
                        "minecraft:protection": 5
                    }
                }
            }
        },
        required_advancement: "spectrum:unlocks/equipment/bedrock_tools",
        finish_crafting_effect: "spectrum:single_visual_explosion_on_shrine"
    }).id("spectrum:fusion_shrine/bedrock/chestplate");
	
	
	
    event.custom({
        type: "spectrum:fusion_shrine",
        group: "bedrock_tools",
        start_crafting_effect: "spectrum:nothing",
        copy_components: true,
        fluid: {
            fluid: "spectrum:midnight_solution"
        },
        time: 1200,
        ingredients: [
            { item: "minecraft:golden_leggings" },
            { item: "minecraft:netherite_ingot" },
            { item: "spectrum:bedrock_dust", count: 7 },
            { item: "spectrum:black_pigment", count: 7 },
            { item: "spectrum:onyx_powder", count: 7 },
            { item: "spectrum:stratine_gem" },
			{ item: "createdeco:netherite_coin" }
        ],
        experience: 16.0,
        result: {
            id: "spectrum:bedrock_leggings",
            count: 1,
            components: {
                "minecraft:enchantments": {
                    levels: {
                        "minecraft:blast_protection": 5
                    }
                }
            }
        },
        required_advancement: "spectrum:unlocks/equipment/bedrock_tools",
        finish_crafting_effect: "spectrum:single_visual_explosion_on_shrine"
    }).id("spectrum:fusion_shrine/bedrock/leggings");
	
	
	
    event.custom({
        type: "spectrum:fusion_shrine",
        group: "bedrock_tools",
        start_crafting_effect: "spectrum:nothing",
        copy_components: true,
        fluid: {
            fluid: "spectrum:midnight_solution"
        },
        time: 1200,
        ingredients: [
            { item: "minecraft:golden_boots" },
            { item: "minecraft:netherite_ingot" },
            { item: "spectrum:bedrock_dust", count: 4 },
            { item: "spectrum:black_pigment", count: 4 },
            { item: "spectrum:onyx_powder", count: 4 },
            { item: "spectrum:stratine_gem" },
			{ item: "createdeco:netherite_coin" }
        ],
        experience: 16.0,
        result: {
            id: "spectrum:bedrock_boots",
            count: 1,
            components: {
                "minecraft:enchantments": {
                    levels: {
                        "minecraft:fire_protection": 5
                    }
                }
            }
        },
        required_advancement: "spectrum:unlocks/equipment/bedrock_tools",
        finish_crafting_effect: "spectrum:single_visual_explosion_on_shrine"
    }).id("spectrum:fusion_shrine/bedrock/boots");
	
	
	
    event.custom({
        type: "spectrum:anvil_crushing",
        ingredient: {
            item: "spectrum:iron_cluster"
        },
        soundEventIdentifier: "minecraft:block.amethyst_cluster.break",
        particleEffectIdentifier: "minecraft:explosion",
        crushedItemsPerPointOfDamage: 1.0,
        group: "crystallarieum_growable_crushing",
        experience: 3.0,
        required_advancement: "spectrum:unlocks/blocks/crystallarieum",
        result: {
            id: "minecraft:iron_ingot",
            count: 3
        }
    }).id("spectrum:anvil_crushing/crystallarieum_growables/iron_from_cluster");
	
	
	
    event.custom({
        type: "spectrum:anvil_crushing",
        ingredient: {
            item: "spectrum:gold_cluster"
        },
        soundEventIdentifier: "minecraft:block.amethyst_cluster.break",
        particleEffectIdentifier: "minecraft:explosion",
        crushedItemsPerPointOfDamage: 1.0,
        group: "crystallarieum_growable_crushing",
        experience: 3.0,
        required_advancement: "spectrum:unlocks/blocks/crystallarieum",
        result: {
            id: "minecraft:gold_ingot",
            count: 3
        }
    }).id("spectrum:anvil_crushing/crystallarieum_growables/gold_from_cluster");
	
	
	
    event.custom({
        type: "spectrum:anvil_crushing",
        ingredient: {
            item: "spectrum:echo_cluster"
        },
        soundEventIdentifier: "minecraft:block.amethyst_cluster.break",
        particleEffectIdentifier: "minecraft:explosion",
        crushedItemsPerPointOfDamage: 1.0,
        group: "crystallarieum_growable_crushing",
        experience: 3.0,
        required_advancement: "spectrum:unlocks/blocks/crystallarieum",
        result: {
            id: "minecraft:echo_shard",
            count: 2
        }
    }).id("spectrum:anvil_crushing/crystallarieum_growables/echo_shard_from_cluster");
	
	
	
    event.custom({
        type: "spectrum:anvil_crushing",
        ingredient: {
            item: "spectrum:zinc_cluster"
        },
        soundEventIdentifier: "minecraft:block.amethyst_cluster.break",
        particleEffectIdentifier: "minecraft:explosion",
        crushedItemsPerPointOfDamage: 1.0,
        group: "crystallarieum_growable_crushing",
        experience: 3.0,
        required_advancement: "spectrum:unlocks/blocks/crystallarieum",
        result: {
            id: "create:zinc_ingot",
            count: 3
        }
    }).id("spectrum:anvil_crushing/crystallarieum_growables/zinc_from_cluster");
	
	
	
	
	
	
	
	
	
	/*
	event.shaped(
		Item.of('sophisticatedstorage:netherite_shulker_box', 1),
		[
			' A ',
			' B ',
			' A '
		],
		{
			A: 'minecraft:shulker_shell',
			B: '#stonebound:netherite_barrel'
		}
	)
	
	
	event.shapeless(
		Item.of('sophisticatedstorage:netherite_shulker_box', 1),
		[
			'sophisticatedstorage:diamond_shulker_box',
			'minecraft:netherite_ingot'
		]
	)
	*/
	
	
	event.shaped(
		Item.of('sophisticatedbackpacks:diamond_backpack', 1),
		[
			'ACA',
			'ABA',
			'AAA'
		],
		{
			A: 'minecraft:diamond',
			B: 'sophisticatedbackpacks:gold_backpack',
			C: 'createdeco:netherite_coin'
		}
	)
	
	
	
	event.shaped(
		Item.of('sophisticatedbackpacks:netherite_backpack', 1),
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: 'createdeco:netherite_coin',
			B: '#stonebound:diamond_backpack'
		}
	)
	
	
	
	event.shaped(
		Item.of('sophisticatedbackpacks:magnet_upgrade', 1),
		[
			'ABA',
			'DCD',
			'ADA'
		],
		{
			A: 'minecraft:string',
			B: 'sophisticatedstorage:magnet_upgrade',
			C: 'minecraft:leather',
			D: 'createdeco:netherite_coin'
		}
	)
	
	
	
	event.shaped(
		Item.of('sophisticatedbackpacks:magnet_upgrade', 1),
		[
			'ABA',
			'BCB',
			'D E'
		],
		{
			A: 'minecraft:ender_pearl',
			B: 'createdeco:netherite_coin',
			C: 'sophisticatedbackpacks:pickup_upgrade',
			D: 'minecraft:redstone',
			E: 'minecraft:lapis_lazuli'
		}
	)
	
	
	
	event.shaped(
		Item.of('sophisticatedbackpacks:advanced_magnet_upgrade', 1),
		[
			'ABA',
			'DCD',
			'ADA'
		],
		{
			A: 'minecraft:string',
			B: 'sophisticatedstorage:advanced_magnet_upgrade',
			C: 'minecraft:leather',
			D: 'createdeco:netherite_coin'
		}
	)
	
	
	
	event.shaped(
		Item.of('sophisticatedbackpacks:advanced_magnet_upgrade', 1),
		[
			' A ',
			'BCB',
			'DDD'
		],
		{
			A: 'minecraft:diamond',
			B: 'minecraft:gold_ingot',
			C: 'sophisticatedbackpacks:magnet_upgrade',
			D: 'minecraft:redstone'
		}
	)
	
	
	
	event.shaped(
		Item.of('sophisticatedbackpacks:advanced_magnet_upgrade', 1),
		[
			'ABA',
			'BCB',
			'D E'
		],
		{
			A: 'minecraft:ender_pearl',
			B: 'createdeco:netherite_coin',
			C: 'sophisticatedbackpacks:advanced_pickup_upgrade',
			D: 'minecraft:redstone',
			E: 'minecraft:lapis_lazuli'
		}
	)
	
	
	
	
	
	
	
	
	
	/*
	event.shaped(
		Item.of('storagedrawers:obsidian_storage_upgrade', 1),
		[
			'AAA',
			'CBC',
			'AAA'
		],
		{
			A: 'minecraft:stick',
			B: 'storagedrawers:upgrade_template',
			C: 'minecraft:coal'
		}
	)
	
	
	
	event.shaped(
		Item.of('storagedrawers:copper_storage_upgrade', 1),
		[
			'AAA',
			'CBC',
			'AAA'
		],
		{
			A: 'minecraft:stick',
			B: 'storagedrawers:obsidian_storage_upgrade',
			C: 'minecraft:copper_ingot'
		}
	)
	
	
	
	event.shaped(
		Item.of('storagedrawers:iron_storage_upgrade', 1),
		[
			'AAA',
			'CBC',
			'AAA'
		],
		{
			A: 'minecraft:stick',
			B: 'storagedrawers:copper_storage_upgrade',
			C: 'minecraft:iron_ingot'
		}
	)
	
	
	
	event.shaped(
		Item.of('storagedrawers:gold_storage_upgrade', 1),
		[
			'AAA',
			'CBC',
			'AAA'
		],
		{
			A: 'minecraft:stick',
			B: 'storagedrawers:iron_storage_upgrade',
			C: 'minecraft:gold_ingot'
		}
	)
	
	
	
	event.shaped(
		Item.of('storagedrawers:emerald_storage_upgrade', 1),
		[
			'AAA',
			'CBC',
			'AAA'
		],
		{
			A: 'minecraft:stick',
			B: 'storagedrawers:gold_storage_upgrade',
			C: 'minecraft:emerald'
		}
	)
	
	
	
	event.shaped(
		Item.of('storagedrawers:diamond_storage_upgrade', 1),
		[
			'AAA',
			'CBC',
			'AAA'
		],
		{
			A: 'minecraft:stick',
			B: 'storagedrawers:emerald_storage_upgrade',
			C: 'minecraft:diamond'
		}
	)
	
	
	
	event.shaped(
		Item.of('storagedrawers:netherite_storage_upgrade', 1),
		[
			'AAA',
			'CBC',
			'AAA'
		],
		{
			A: 'minecraft:stick',
			B: 'storagedrawers:diamond_storage_upgrade',
			C: 'minecraft:netherite_ingot'
		}
	)
	*/
	
	
	
	
	
	
	
	
	event.shaped(
		Item.of('waystones:waystone', 1),
		[
			' A ',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:mossy_waystone', 1),
		[
			' A ',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:mossy_stone_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:sandy_waystone', 1),
		[
			' A ',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:chiseled_sandstone',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:deepslate_waystone', 1),
		[
			' A ',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:deepslate',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:blackstone_waystone', 1),
		[
			' A ',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:blackstone',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:end_stone_waystone', 1),
		[
			' A ',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:end_stone_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:red_nether_bricks_waystone', 1),
		[
			' A ',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:red_nether_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:purpur_waystone', 1),
		[
			' A ',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:purpur_block',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:prismarine_waystone', 1),
		[
			' A ',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:prismarine',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:mud_bricks_waystone', 1),
		[
			' A ',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:mud_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:warp_plate', 2),
		[
			'ABA',
			'CDC',
			'ABA'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:ender_pearl',
			C: 'minecraft:amethyst_shard',
			D: 'waystones:dormant_shard'
		}
	)
	
	
	
	
	
	
	
	
	
	event.shaped(
		Item.of('waystones:white_portstone', 1),
		[
			'DAD',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:polished_andesite',
			C: 'waystones:warp_dust',
			D: 'minecraft:white_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:orange_portstone', 1),
		[
			'DAD',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:polished_andesite',
			C: 'waystones:warp_dust',
			D: 'minecraft:orange_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:magenta_portstone', 1),
		[
			'DAD',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:polished_andesite',
			C: 'waystones:warp_dust',
			D: 'minecraft:magenta_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:light_blue_portstone', 1),
		[
			'DAD',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:polished_andesite',
			C: 'waystones:warp_dust',
			D: 'minecraft:light_blue_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:yellow_portstone', 1),
		[
			'DAD',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:polished_andesite',
			C: 'waystones:warp_dust',
			D: 'minecraft:yellow_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:lime_portstone', 1),
		[
			'DAD',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:polished_andesite',
			C: 'waystones:warp_dust',
			D: 'minecraft:lime_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:pink_portstone', 1),
		[
			'DAD',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:polished_andesite',
			C: 'waystones:warp_dust',
			D: 'minecraft:pink_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:gray_portstone', 1),
		[
			'DAD',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:polished_andesite',
			C: 'waystones:warp_dust',
			D: 'minecraft:gray_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:light_gray_portstone', 1),
		[
			'DAD',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:polished_andesite',
			C: 'waystones:warp_dust',
			D: 'minecraft:light_gray_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:cyan_portstone', 1),
		[
			'DAD',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:polished_andesite',
			C: 'waystones:warp_dust',
			D: 'minecraft:cyan_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:purple_portstone', 1),
		[
			'DAD',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:polished_andesite',
			C: 'waystones:warp_dust',
			D: 'minecraft:purple_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:blue_portstone', 1),
		[
			'DAD',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:polished_andesite',
			C: 'waystones:warp_dust',
			D: 'minecraft:blue_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:brown_portstone', 1),
		[
			'DAD',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:polished_andesite',
			C: 'waystones:warp_dust',
			D: 'minecraft:brown_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:green_portstone', 1),
		[
			'DAD',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:polished_andesite',
			C: 'waystones:warp_dust',
			D: 'minecraft:green_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:red_portstone', 1),
		[
			'DAD',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:polished_andesite',
			C: 'waystones:warp_dust',
			D: 'minecraft:red_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:black_portstone', 1),
		[
			'DAD',
			'ACA',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:polished_andesite',
			C: 'waystones:warp_dust',
			D: 'minecraft:black_dye'
		}
	)
	
	
	
	
	
	
	
	
	
	event.shaped(
		Item.of('waystones:orange_sharestone', 1),
		[
			'AAA',
			'DCD',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust',
			D: 'minecraft:orange_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:magenta_sharestone', 1),
		[
			'AAA',
			'DCD',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust',
			D: 'minecraft:magenta_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:light_blue_sharestone', 1),
		[
			'AAA',
			'DCD',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust',
			D: 'minecraft:light_blue_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:yellow_sharestone', 1),
		[
			'AAA',
			'DCD',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust',
			D: 'minecraft:yellow_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:lime_sharestone', 1),
		[
			'AAA',
			'DCD',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust',
			D: 'minecraft:lime_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:pink_sharestone', 1),
		[
			'AAA',
			'DCD',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust',
			D: 'minecraft:pink_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:gray_sharestone', 1),
		[
			'AAA',
			'DCD',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust',
			D: 'minecraft:gray_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:light_gray_sharestone', 1),
		[
			'AAA',
			'DCD',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust',
			D: 'minecraft:light_gray_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:cyan_sharestone', 1),
		[
			'AAA',
			'DCD',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust',
			D: 'minecraft:cyan_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:purple_sharestone', 1),
		[
			'AAA',
			'DCD',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust',
			D: 'minecraft:purple_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:blue_sharestone', 1),
		[
			'AAA',
			'DCD',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust',
			D: 'minecraft:blue_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:brown_sharestone', 1),
		[
			'AAA',
			'DCD',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust',
			D: 'minecraft:brown_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:green_sharestone', 1),
		[
			'AAA',
			'DCD',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust',
			D: 'minecraft:green_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:red_sharestone', 1),
		[
			'AAA',
			'DCD',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust',
			D: 'minecraft:red_dye'
		}
	)
	
	
	
	event.shaped(
		Item.of('waystones:black_sharestone', 1),
		[
			'AAA',
			'DCD',
			'BBB'
		],
		{
			A: 'minecraft:stone_bricks',
			B: 'minecraft:obsidian',
			C: 'waystones:warp_dust',
			D: 'minecraft:black_dye'
		}
	)
	
	
	
	
	
	
	
	
	
	event.shapeless(
		Item.of('waystones:dormant_shard', 1),
		[
			'minecraft:flint',
			'waystones:warp_dust'
		]
	)
	
	
	
})


