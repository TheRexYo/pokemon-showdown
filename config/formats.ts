// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [

	// Sw/Sh Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Singles",
	},
	{
		name: "[Gen 8] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656537/">Random Battle Suggestions</a>`,
		],

		mod: 'gen8',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Unrated Random Battle",

		mod: 'gen8',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672210/">OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666247/">OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666340/">OU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 8] OU (Blitz)",

		mod: 'gen8',
		ruleset: ['[Gen 8] OU', 'Blitz'],
	},
	{
		name: "[Gen 8] OU (DLC 1)",

		mod: 'gen8dlc1',
		searchShow: false,
		ruleset: ['Standard', 'Dynamax Clause'],
		/*banlist: [
			'Cinderace', 'Darmanitan-Galar', 'Dracovish', 'Eternatus', 'Kyurem-Black', 'Kyurem-White', 'Lunala', 'Magearna', 'Marshadow',
			'Melmetal', 'Mewtwo', 'Necrozma-Dusk-Mane', 'Necrozma-Dawn-Wings', 'Reshiram', 'Solgaleo', 'Zacian', 'Zamazenta', 'Zekrom',
			'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass',
		],*/
	},
	{
		name: "[Gen 8] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672182/">Ubers Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658364/">Ubers Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3668107/">Ubers Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard'],
		//banlist: ['Baton Pass'],
	},
	{
		name: "[Gen 8] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3670407/">UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659681/">UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3668357/">UU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 8] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666733/">RU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661013/">RU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3669026/">RU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: "[Gen 8] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3669764/">NU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3662169/">NU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] RU'],
		banlist: ['RU', 'NUBL'],
	},
	{
		name: "[Gen 8] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666714/">PU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3662231/">PU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 8] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656348/">LC Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661419/">LC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657374/">LC Viability Rankings</a>`,
		],

		mod: 'gen8',
		maxLevel: 5,
		/*ruleset: ['Little Cup', 'Standard', 'Dynamax Clause'],
		banlist: [
			'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Gastly', 'Gothita', 'Rufflet', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Vulpix-Alola',
			'Chlorophyll', 'Moody', 'Baton Pass',
		],*/
	},
	{
		name: "[Gen 8] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672167/">Monotype Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658745/">Monotype Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660603">Monotype Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Same Type Clause', 'Standard', 'Dynamax Clause'],
		/*banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Eternatus', 'Genesect', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White',
			'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram',
			'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom', 'Zygarde-Base',
			'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],*/
	},
	{
		name: "[Gen 8] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656364/">1v1 Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3664157/">1v1 Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657779/">1v1 Viability Rankings</a>`,
		],

		mod: 'gen8',
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Endless Battle Clause'],
		/*banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Dialga', 'Dragonite', 'Eternatus', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White',
			'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mew', 'Mewtwo', 'Mimikyu', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza',
			'Reshiram', 'Sableye', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom',
			'Focus Sash', 'Moody', 'Perish Song',
		],*/
	},
	{
		name: "[Gen 8] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672172/">Anything Goes</a>`,
		],

		mod: 'gen8',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 8] ZU",
		desc: `The unofficial usage-based tier below PU.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661968/">ZU Metagame Discussion</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] PU'],
		banlist: ['PU'],
	},
	{
		name: "[Gen 8] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656824/">CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3671157/">CAP Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658514/">CAP Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] OU', '+CAP'],
		//banlist: ['Crucibelle-Mega'],
	},
	{
		name: "[Gen 8] Battle Stadium Singles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656336/">BSS Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658806/">BSS Viability Rankings</a>`,
		],

		mod: 'gen8',
		forcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Standard GBU'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] Tundra Tourney",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672230/">Tundra Tourney</a>`,
		],

		mod: 'gen8',
		forcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Standard GBU', 'Crown Tundra Pokedex'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] Custom Game",

		mod: 'gen8',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// Sw/Sh Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Doubles",
	},
	{
		name: "[Gen 8] Random Doubles Battle",

		mod: 'gen8',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672010/">Doubles OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658826/">Doubles OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658242/">Doubles OU Viability Rankings</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Dynamax Clause', 'Swagger Clause'],
		banlist: ['DUber'],
	},
	{
		name: "[Gen 8] Doubles Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661142/">Doubles Ubers</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause'],
		banlist: [],
	},
	{
		name: "[Gen 8] Doubles UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658504/">Doubles UU</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['[Gen 8] Doubles OU'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 8] VGC 2021",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672129/">VGC 2021 Metagame Discussion & Resources</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU', 'VGC Timer'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] VGC 2020",
		threads: [
			`&bullet; <a href="https://www.pokemon.com/us/pokemon-news/2020-pokemon-video-game-championships-vgc-format-rules/">VGC 2020 Rules</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657818/">VGC 2020 Sample Teams</a>`,
		],

		mod: 'gen8dlc1',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU', 'VGC Timer'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] 2v2 Doubles",
		desc: `Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656321/">2v2 Doubles</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		teamLength: {
			validate: [2, 4],
			battle: 2,
		},
		ruleset: ['Standard Doubles', 'Accuracy Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
	},
	{
		name: '[Gen 8] Metronome Battle',
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3632075/">Metronome Battle</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		// rated: false,
		teamLength: {
			validate: [2, 2],
			battle: 2,
		},
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		onValidateSet(set) {
			const species = this.dex.getSpecies(set.species);
			if (species.types.includes('Steel')) {
				return [`${species.name} is a Steel-type, which is banned from Metronome Battle.`];
			}
			if (species.bst > 625) {
				return [`${species.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`];
			}
			const item = this.dex.getItem(set.item);
			if (set.item && item.megaStone) {
				const megaSpecies = this.dex.getSpecies(item.megaStone);
				if (species.baseSpecies === item.megaEvolves && megaSpecies.bst > 625) {
					return [
						`${set.name || set.species}'s item ${item.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`,
					];
				}
			}
			if (set.moves.length !== 1 || this.dex.getMove(set.moves[0]).id !== 'metronome') {
				return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
			}
		},
	},
	{
		name: "[Gen 8] Doubles Custom Game",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		debug: true,
		teamLength: {
			validate: [2, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// National Dex
	///////////////////////////////////////////////////////////////////

	{
		section: "National Dex",
	},
	{
		name: "[Gen 8] National Dex",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666135/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666572/">National Dex Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] National Dex UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660920/">National Dex UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3668687/">National Dex UU Resources</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] National Dex'],
	},
	{
		name: "[Gen 8] National Dex Monotype",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8376523/">National Dex Monotype</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard NatDex', 'Same Type Clause', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] National Dex AG",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656779/">AG Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659562/">AG Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658581/">AG Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex'],
	},
	{
		name: "[Gen 8] National Dex BH",
		desc: `Balanced Hackmons with National Dex elements mixed in.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658587/">More Balanced Hackmons</a>`,
		],

		mod: 'gen8',
		ruleset: ['-Nonexistent', 'Standard NatDex', 'Forme Clause', 'Sleep Clause Mod', '2 Ability Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'CFZ Clause', '!Obtainable'],
		onValidateSet(set) {
			if (this.dex.toID(set.ability) === 'intrepidsword' &&
				!this.dex.toID(set.species).startsWith('zacian') && this.dex.toID(set.item) !== 'rustedsword') {
				return [`${set.ability} is banned.`];
			}
			if (set.species === 'Zacian-Crowned' &&
				(this.dex.toID(set.item) !== 'rustedsword' || this.dex.toID(set.ability) !== 'intrepidsword')) {
				return [set.species + " is banned."];
			}
		},
		onChangeSet(set) {
			const item = this.dex.toID(set.item);
			if (set.species === 'Zacian' && item === 'rustedsword') {
				set.species = 'Zacian-Crowned';
				set.ability = 'Intrepid Sword';
				const ironHead = set.moves.indexOf('ironhead');
				if (ironHead >= 0) {
					set.moves[ironHead] = 'behemothblade';
				}
			}
			if (set.species === 'Zamazenta' && item === 'rustedshield') {
				set.species = 'Zamazenta-Crowned';
				set.ability = 'Dauntless Shield';
				const ironHead = set.moves.indexOf('ironhead');
				if (ironHead >= 0) {
					set.moves[ironHead] = 'behemothbash';
				}
			}
		},
		onValidateTeam(team) {
			let arceus = 0;
			for (const set of team) {
				const species = this.dex.getSpecies(set.species);
				if (species.baseSpecies === "Arceus") arceus++;
			}
			if (arceus > 1) {
				return [`You are limited to one Arceus forme.`, `(You have ${arceus} Arceus formes.)`];
			}
		},
	},
];
