export const Pokedex: {[speciesid: string]: SpeciesData} = {
	/* TODO List:
		- Correct ID numbers.
		- Add all existing Zelckeymon before making new ones.
		- Properly add Zelckey and Chomp morphs.
	*/
	/* Egg Group Rules:
		- Gene-based groups (such as 'Reptile' and 'Arthropod') are organized into archetypes based on genetic relation. Each family / order has its own number assigned to it.
		- Element-based groups (such as 'Water' and 'Electric') are organized into archetypes based on taxonomic class (crustacean, reptilian, etc). Each archetype has a number assigned to it.
	*/
	/* Egg Group Notes:
		- Because Gene-based groups are limited to closely related species, they serve as the primary means of limiting moves to certain archetypes.
		- Because Element-based groups allow Zelckeymon of different families (but the same class) to breed, they are the primary means of allowing moves between archetypes.
		- Unique "Special Egg-Groups" also exist. These egg-groups are used to categorize Zelckeymon together, often to bridge gaps between archetypes. However, they can also be used to limit the breeding of certain species by removing the more standard archetypes in favor of special ones.
	*/
	/*Egg Group Archetypes (Gene-Based):
		- Reptile
			- 1 -> Chomposaurian (Chomps, Zelckeys, and many other Dinosaur-like species)
			- 2 -> Saurian (Lizards)
			- 3 -> Serpentine (Snakes)
			- 4 -> Pre-Birds
		- Bird
			- 1 -> Primitive Birds & Protobirds
			- 2 -> Parrots & Kookaburras
			- 3 -> Songbirds
		- Arthropod
			- 1 -> Crustaceans
			- 2 -> Bees, Wasps, & Ants
			- 3 -> True Bugs (Aphids, Toe-Biters, etc.)
		- Amphibian
			- 1 -> Salamander
		- Mammal
			- 1 -> Carnivorid (Feline, Canine, etc.)
	*/
	/*Egg Group Archetypes (Element-Based):
		- Generic*
			- 1 -> Reptile
			- 2 -> Arthropod
			- 3 -> Amphibian
			- 4 -> Mammal
			- 5 -> Bird
		*Archetype numbers in this category apply to all other elemental categories that don't have that number specified as something else.
	*/
	//#01 - Chomp
	chomp: {
		gen: 1,
		num: 1,
		name: "Chomp",
		//species: "chomp",
		types: ["Grass"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 35, atk: 30, def: 30, spa: 30, spd: 30, spe: 25}, //TODO: Add common variant with spe and def swapped, hp reduced, and atk increased.
		abilities: {0: "Elemental Force", 1: "Elemental Boost", H: "Bite-Force"},
		heightm: 0.6,
		weightkg: 4.5,
		color: "Green",
		//evos: ["ivysaur"],
		eggGroups: ["Reptile 1", "Grass 1"],
	},
	//#04 - Pyrex
	pyrex: {
		gen: 1,
		num: 4,
		name: "Pyrex",
		//species: "pyrex",
		types: ["Fire"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 30, atk: 35, def: 10, spa: 60, spd: 20, spe: 25}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Elemental Force", 1: "Elemental Boost", H: "Living Fire"},
		heightm: 0.5,
		weightkg: 6.5,
		color: "Red", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Reptile 1", "Fire 1"],
	},
	//#07 - Zelckey
	zelckey: {
		gen: 1,
		num: 7,
		name: "Zelckey",
		//species: "zelckey",
		types: ["Water"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 10, atk: 10, def: 10, spa: 30, spd: 20, spe: 100}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Elemental Force", 1: "Elemental Boost", H: "Momentum"},
		heightm: 0.4,
		weightkg: 2.5,
		color: "Blue", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Reptile 1", "Water 1"],
	},
	//#15 - Spookaburra
	spookaburra: {
		gen: 1,
		num: 15,
		name: "Spookaburra",
		//species: "spookaburra",
		types: ["Ghost", "Flying"],
		genderRatio: {M: 0.55, F: 0.45},
		baseStats: {hp: 75, atk: 30, def: 10, spa: 30, spd: 20, spe: 35}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Frighten", 1: "Surprise Attack", H: "Final Haunt"},
		heightm: 0.4,
		weightkg: 2.5,
		color: "Blue", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Bird 2", "Ghost 5"],
	},
	//#16 - Trickadee
	trickadee: {
		gen: 1,
		num: 16,
		name: "Trickadee",
		//species: "spookaburra",
		types: ["Dark", "Flying"],
		genderRatio: {M: 0.45, F: 0.55},
		baseStats: {hp: 20, atk: 50, def: 10, spa: 50, spd: 10, spe: 40}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Prankster", 1: "Surprise Attack", H: "Trapper"},
		heightm: 0.1,
		weightkg: 0.75,
		color: "Blue", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Bird 3", "Dark 5"],
	},
	//#17 - Crowpse
	crowpse: {
		gen: 1,
		num: 17,
		name: "Crowpse",
		//species: "spookaburra",
		types: ["Ghost", "Flying"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 40, atk: 40, def: 10, spa: 60, spd: 40, spe: 10}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Horror", 1: "Dark Body", H: "Haunting"},
		heightm: 0.1,
		weightkg: 0.75,
		color: "Blue", //Not sure if this will work.
		evos: ["graven"],
		eggGroups: ["Bird 1", "Ghost 5"],
	},
	//#18 - Graven
	graven: {
		gen: 1,
		num: 18,
		name: "Graven",
		//species: "spookaburra",
		types: ["Ghost", "Flying"],//(Gen 1): Flying -> Ghost
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 40, atk: 40, def: 10, spa: 60, spd: 40, spe: 10}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Horror", 1: "Dark Body", H: "Final Haunt"},
		heightm: 0.1,
		weightkg: 0.75,
		color: "Blue", //Not sure if this will work.
		prevo: "Graven",
		evoLevel: 40,
		eggGroups: ["Bird 1", "Ghost 5"],
	},
	//#19 - Kinghals
	kinghals: {
		gen: 1,
		num: 19,
		name: "Kinghals",
		//species: "spookaburra",
		types: ["Poison", "Fighting"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 40, atk: 80, def: 10, spa: 80, spd: 10, spe: 60}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Regal Glare", 1: "Spitter", H: "Intimidate"},
		heightm: 2.4,
		weightkg: 8.5,
		color: "Blue", //Not sure if this will work.
		evos: ["constrictator"],
		eggGroups: ["Poison 1", "Fighting 1"],
	},
	//#20 - Constrictator
	constrictator: {
		gen: 1,
		num: 20,
		name: "Constrictator",
		//species: "spookaburra",
		types: ["Steel", "Fighting"], //(Gen 1): Steel -> Poison
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 130, atk: 150, def: 50, spa: 150, spd: 50, spe: 50}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Regal Glare", 1: "Constrictor", H: "Frighten"},
		heightm: 6.7,
		weightkg: 158.0,
		color: "Blue", //Not sure if this will work.
		prevo: "Kinghals",
		evoLevel: 25,
		eggGroups: ["Steel 1", "Fighting 1"],//(Gen 1): Steel 1 -> Poison 1
	},
	//#21 - Larvenom
	larvenom: {
		gen: 1,
		num: 21,
		name: "Larvenom",
		//species: "spookaburra",
		types: ["Bug", "Poison"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 10, atk: 30, def: 10, spa: 30, spd: 10, spe: 10}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Incendiary Cloud", 1: "Potent Poison", H: "Smog Cloud"},//(Gen 1): Incendiary Cloud -> Smog Cloud, Smog Cloud -> Incendiary Cloud
		heightm: 0.05,
		weightkg: 0.025,
		color: "Blue", //Not sure if this will work.
		evos: ["pupoison"],
		eggGroups: ["Bug 2", "Poison 2"],
	},
	//#22 - Pupoison
	pupoison: {
		gen: 1,
		num: 22,
		name: "Pupoison",
		//species: "spookaburra",
		types: ["Bug", "Poison"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 30, atk: 40, def: 60, spa: 70, spd: 60, spe: 10}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Incendiary Cloud", 1: "Toxic Defense", H: "Smog Cloud"},//(Gen 1): Incendiary Cloud -> Smog Cloud, Smog Cloud -> Incendiary Cloud
		heightm: 0.1,
		weightkg: 0.15,
		color: "Blue", //Not sure if this will work.
		evos: ["toxinsect"],
		prevo: "Larvenom",
		evoLevel: 6,
		eggGroups: ["Bug 2", "Poison 2"],
	},
	//#23 - Toxinsect
	toxinsect: {
		gen: 1,
		num: 22,
		name: "Toxinsect",
		//species: "spookaburra",
		types: ["Bug", "Poison"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 30, atk: 200, def: 50, spa: 200, spd: 50, spe: 50}, //(Gen 1): ATK 200 -> 250, SPA 200 -> 150
		abilities: {0: "Incendiary Cloud", 1: "Poison Shock", H: "Poison Boost"},//(Gen 1): Incendiary Cloud -> Smog Cloud, Smog Cloud -> Incendiary Cloud
		heightm: 0.1,
		weightkg: 0.15,
		color: "Blue", //Not sure if this will work.
		prevo: "Pupoison",
		evoLevel: 12,//(Gen 1): 10
		eggGroups: ["Bug 2", "Poison 2"],
	},
	//#24 - Cattertiller
	cattertiller: {
		gen: 1,
		num: 24,
		name: "Cattertiller",
		//species: "spookaburra",
		types: ["Bug", "Earth"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 20, atk: 20, def: 20, spa: 10, spd: 10, spe: 10}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Grass Growth", 1: "Potent Paralysis", H: "Dust Bowl"},
		heightm: 0.05,
		weightkg: 0.025,
		color: "Blue", //Not sure if this will work.
		evos: ["chrysoilis"],
		eggGroups: ["Bug 2", "Earth 2"],
	},
	//#25 - Chrysoilis
	chrysoilis: {
		gen: 1,
		num: 25,
		name: "Chrysoilis",
		//species: "spookaburra",
		types: ["Bug", "Earth"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 40, atk: 25, def: 75, spa: 25, spd: 75, spe: 10}, //(Gen 1): ATK 25 -> 20, SPA 25 -> 30
		abilities: {0: "Grass Growth", 1: "Soil Defense", H: "Dust Bowl"},
		heightm: 0.05,
		weightkg: 0.025,
		color: "Blue", //Not sure if this will work.
		evos: ["tremorfly"],
		prevo: "Cattertiller",
		evoLevel: 6,
		eggGroups: ["Bug 2", "Earth 2"],
	},
	//#25 - Tremorfly
	tremorfly: {
		gen: 1,
		num: 25,
		name: "Tremorfly",
		//species: "spookaburra",
		types: ["Bug", "Earth"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 30, atk: 125, def: 125, spa: 125, spd: 125, spe: 50}, //(Gen 1): ATK 125 -> 75, DEF 125 -> 50, SPA 125 -> 225, SPD 125 -> 150
		abilities: {0: "Grass Growth", 1: "Paralysis Shock", H: "Dust Bowl"}, //(Gen 1): Paralysis Shock -> Flier
		heightm: 0.05,
		weightkg: 0.025,
		color: "Blue", //Not sure if this will work.
		prevo: "Chrysoilis",
		evoLevel: 12,//(Gen 1): 10
		eggGroups: ["Bug 2", "Earth 2"],
	},	
	//#86 - Barridor
	barridor: {
		gen: 1,
		num: 86,
		name: "Barridor",
		//species: "barridor",
		types: ["Steel"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 45, atk: 15, def: 45, spa: 15, spd: 45, spe: 15}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Barricade", H: "Mega-Armor"},
		heightm: 1.4,
		weightkg: 90.7,
		color: "Black", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Inorganic 1"],
	},
	//#89 - Magmalisk
	magmalisk: {
		gen: 1,
		num: 89,
		name: "Magmalisk",
		//species: "magmalisk",
		types: ["Fire", "Rock"],
		genderRatio: {M: 0.45, F: 0.55},
		baseStats: {hp: 30, atk: 15, def: 45, spa: 45, spd: 15, spe: 30}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Magmabolism", 1: "Living Fire", H: "Specialist"},
		heightm: 1.4,
		weightkg: 45.4,
		color: "Black", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Fire 1", "Fire 3"], //This Zelckeymon acts as a mediator between amphibians and reptiles due to being both a Salamander and a Snake. Only breeds with Fire Zelckeymon, though.
	},
	//#92 - Conchimp
	conchimp: {
		gen: 1,
		num: 92,
		name: "Conchimp",
		//species: "blitzphinx",
		types: ["Water", "Fighting"],
		genderRatio: {M: 0.55, F: 0.45},
		baseStats: {hp: 30, atk: 45, def: 15, spa: 15, spd: 45, spe: 30}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Hydrophyllic", 1: "Impatient", H: "Specialist"},
		heightm: 1.2,
		weightkg: 31.7,
		color: "Brown", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Water 4", "Fighting 4"], //This Zelckeymon acts as a mediator between Water mammals and Fighting mammals.
	},
	//#95 - Saparrot
	saparrot: {
		gen: 1,
		num: 95,
		name: "Saparrot",
		//species: "blitzphinx",
		types: ["Grass", "Flying"],
		genderRatio: {M: 0.45, F: 0.45},
		baseStats: {hp: 10, atk: 35, def: 35, spa: 35, spd: 35, spe: 30}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Herbivore", 1: "Vigor", H: "Generalist"},
		heightm: 1.1,
		weightkg: 4.0,
		color: "Brown", //Not sure if this will work.
		//evos: ["ivysaur"],
		eggGroups: ["Bird 2", "Grass 5"],
	},
	//#97 - Cubrawler
	cubrawler: {
		gen: 1,
		num: 97,
		name: "Cubrawler",
		//species: "blitzphinx",
		types: ["Fighting"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 25, atk: 45, def: 10, spa: 45, spd: 10, spe: 45}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Defiant Roar", 1: "Pack Tactics", H: "Gender Rivalry"},
		heightm: 2.1,
		weightkg: 163.3,
		color: "Brown", //Not sure if this will work.
		evos: ["brawleo"],
		eggGroups: ["Fighting 4"],
	},	
	//#98 - Brawleo
	brawleo: {
		gen: 1,
		num: 98,
		name: "Brawleo",
		//species: "blitzphinx",
		types: ["Fighting"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 50, atk: 90, def: 20, spa: 90, spd: 20, spe: 90}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Noble Roar", 1: "Gender Rivalry", H: "Pack Tactics"},
		heightm: 2.1,
		weightkg: 163.3,
		color: "Brown", //Not sure if this will work.
		evos: ["blitzphinx"],
		prevo: "Cubrawler",
		evoLevel: 32,
		eggGroups: ["Fighting 4"],
	},
	//#99 - Blitzphinx
	blitzphinx: {
		gen: 1,
		num: 99,
		name: "Blitzphinx",
		//species: "blitzphinx",
		types: ["Flying", "Fighting"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 75, atk: 135, def: 30, spa: 135, spd: 30, spe: 135}, //TODO: Multiply Z-Mon stats by 10 to get P-Mon stats (for now).
		abilities: {0: "Blitz Rush", H: "Riddler"},
		heightm: 2.1,
		weightkg: 163.3,
		color: "Brown", //Not sure if this will work.
		prevo: "Brawleo",
		evoLevel: 64,
		eggGroups: ["Fighting 4", "Wind 4"], //This Zelckeymon acts as a mediator between Flying mammals and Fighting mammals.
	},
};
