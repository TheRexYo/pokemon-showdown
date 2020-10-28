/*

List of flags and their descriptions:

authentic: Ignores a target's substitute.
bite: Power is multiplied by 1.5 when used by a Zelckeymon with the Bite-Force Ability.
bullet: Has no effect on Zelckeymon with the Bulletproof Ability.
charge: The user is unable to make a move between turns.
contact: Makes contact.
dance: When used by a Zelckeymon, other Zelckeymon with the Dancer Ability can attempt to execute the same move.
defrost: Thaws the user if executed successfully while the user is frozen.
distance: Can target a Zelckeymon positioned anywhere in a Triple Battle.
gravity: Prevented from being executed or selected during Gravity's effect.
heal: Prevented from being executed or selected during Heal Block's effect.
mirror: Can be copied by Mirror Move.
mystery: Unknown effect.
nonsky: Prevented from being executed or selected in a Sky Battle.
powder: Has no effect on Grass-type Zelckeymon, Zelckeymon with the Overcoat Ability, and Zelckeymon holding Safety Goggles.
protect: Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield.
pulse: Power is multiplied by 1.5 when used by a Zelckeymon with the Mega Launcher Ability.
punch: Power is multiplied by 1.2 when used by a Zelckeymon with the Iron Fist Ability.
recharge: If this move is successful, the user must recharge on the following turn and cannot make a move.
reflectable: Bounced back to the original user by Magic Coat or the Magic Bounce Ability.
snatch: Can be stolen from the original user and instead used by another Zelckeymon using Snatch.
sound: Has no effect on Zelckeymon with the Soundproof Ability.

*/

export const Moves: {[moveid: string]: MoveData} = {
	struggle: {
		num: 0,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		desc: "Deals typeless damage to a random opposing Zelckeymon. If this move was successful, the user loses 1/4 of its maximum HP, rounded half up. Nothing can prevent this damage. This move has a chance to be automatically used if none of the user's known moves can be selected.",
		shortDesc: "User loses 1/4 of its max HP.",
		name: "Struggle",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: {contact: 1, protect: 1},
		noSketch: true,
		onModifyMove(move, pokemon, target) {
			move.type = '???';
			this.add('-activate', pokemon, 'move: Struggle');
		},
		struggleRecoil: true,
		secondary: null,
		target: "randomNormal",
		type: "Normal",
		contestType: "Tough",
	},
/* 	wait: {
		num: 0,
		accuracy: 0,
		basePower: 0,
		category: "Status",
		shortDesc: "Has a 10% chance to increase the PP of a random move by 1.",
		id: "wait",
		name: "Wait",
		pp: 0,
		priority: 0,
		flags: {emergency: 1},
		secondary: null,
		target: "any",
		type: "Neutral",
		contestType: "Clever",
	}, */
	tackle: {
		num: 1,
		accuracy: 80,
		basePower: 50,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "tackle",
		name: "Tackle",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, body: 1, tackle: 1},
		secondary: null,
		target: "any",
		type: "Neutral",
		contestType: "Cool",
	},
	scratch: {
		num: 2,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "scratch",
		name: "Scratch",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, claw: 1, slash: 1},
		secondary: null,
		target: "any",
		type: "Neutral",
		contestType: "Clever",
	},
	snap: {
		num: 3,
		accuracy: 60,
		basePower: 60,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "snap",
		name: "Snap",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, jaw: 1, bite: 1},
		secondary: null,
		target: "any",
		type: "Neutral",
		contestType: "Tough",
	},
	junglefang: {
		num: 4,
		accuracy: 60,
		basePower: 120,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "junglefang",
		name: "Jungle Fang",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, jaw: 1, bite: 1},
		secondary: null,
		target: "any",
		type: "Grass",
		contestType: "Tough",
	},
	tidalslash: {
		num: 5,
		id: "tidalslash",
		name: "Tidal Slash",
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, claw: 1, slash: 1},
		secondary: null,
		target: "any",
		type: "Water",
		contestType: "Clever",
	},
	volcanicpress: {
		num: 6,
		id: "volcanicpress",
		name: "Volcanic Press",
		accuracy: 80,
		basePower: 100,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, body: 1, tackle: 1},
		secondary: null,
		target: "any",
		type: "Fire",
		contestType: "Cool",
	},
	leer: {
		num: 7,
		name: "Leer",
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Defense by 1 stage.",
		shortDesc: "Lowers the foe's Defense by 1.",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			def: -1,
		},
		zMove: {boost: {def: 1}},
		secondary: null,
		target: "normal",
		type: "Neutral",
		contestType: "Beautiful",
	},
	intimidate: {
		num: 8,
		name: "Intimidate",
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Attack by 1 stage.",
		shortDesc: "Lowers the foe(s) Attack by 1.",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			atk: -1,
		},
		zMove: {boost: {atk: 1}},
		secondary: null,
		target: "normal",
		type: "Neutral",
		contestType: "Cool",
	},
	snarl: {
		num: 9,
		name: "Snarl",
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Special Attack by 1 stage.",
		shortDesc: "Lowers the foe(s) Sp. Attack by 1.",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			spa: -1,
		},
		zMove: {boost: {spa: 1}},
		secondary: null,
		target: "normal",
		type: "Neutral",
		contestType: "Tough",
	},
	screech: {
		num: 10,
		name: "Screech",
		accuracy: 75,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Defense by 2 stages.",
		shortDesc: "Lowers the foe(s) Defense by 2.",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			def: -2,
		},
		zMove: {boost: {def: 1}},
		secondary: null,
		target: "normal",
		type: "Neutral",
		contestType: "Clever",
	},
	splash: {
		num: 11,
		name: "Splash",
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Special Defense by 1 stage.",
		shortDesc: "Lowers the foe(s) Sp. Defense by 1.",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			spd: -1,
		},
		zMove: {boost: {spd: 1}},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	energystrike: {
		num: 12,
		id: "energystrike",
		name: "Energy Strike",
		accuracy: 100,
		basePower: 150,
		category: "Physical",
		desc: "Deals damage to one adjacent target and lowers the user's Attack and Defense by 2 stages.",
		shortDesc: "Lowers the user's Attack and Defense by 2.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		self: {
			boosts: {
				atk: -2,
				def: -2
			}
		},
		secondary: false,
		target: "normal",
		type: "Neutral",
		contestType: "Tough",
	},
	energybeam: {
		num: 13,
		id: "energybeam",
		name: "Energy Beam",
		accuracy: 100,
		basePower: 150,
		category: "Special",
		desc: "Deals damage to one adjacent target and lowers the user's Special Attack and Special Defense by 2 stages.",
		shortDesc: "Lowers the user's Sp. Attack and Sp. Defense by 2.",
		pp: 5,
		priority: 0,
		isContact: true,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
				spd: -2
			}
		},
		secondary: false,
		target: "normal",
		type: "Neutral",
		contestType: "Beautiful",
	},
	pyroblast: {
		num: 14,
		id: "pyroblast",
		name: "Pyroblast",
		desc: "Takes 1 turn to charge.",
		shortDesc: "No additional effect.",
		category: "Special",
		accuracy: 100,
		basePower: 150,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, charge: 1},
		secondary: null,
		target: "any",
		type: "Fire",
		contestType: "Cool",
	},
	phytoblast: {
		num: 15,
		accuracy: 100,
		basePower: 150,
		category: "Special",
		desc: "Takes 1 turn to charge.",
		shortDesc: "No additional effect.",
		id: "phytoblast",
		name: "Phytoblast",
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, charge: 1},
		secondary: null,
		target: "any",
		type: "Grass",
		contestType: "Beautiful",
	},
	aquablast: {
		num: 16,
		accuracy: 100,
		basePower: 150,
		category: "Special",
		desc: "Takes 1 turn to charge.",
		shortDesc: "No additional effect.",
		id: "aquablast",
		name: "Aquablast",
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, charge: 1},
		secondary: null,
		target: "any",
		type: "Water",
		contestType: "Clever",
	},
	vinelash: {
		num: 17,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "vinelash",
		name: "Vine Lash",
		pp: 40,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "any",
		type: "Grass",
		contestType: "Tough",
	},
	devouringseed: {
		num: 18,
		accuracy: 80,
		basePower: 20,
		category: "Special",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. The Zelckeymon at the user's position steals 1/8 of the target's maximum HP, rounded down, at the end of each turn. If the target uses a replacement move, the replacement will continue being leeched. If the target switches out or uses an escape move successfully, the effect ends. Grass-type Zelckeymon are immune to this move on use, but not its effect.",
		shortDesc: "User recovers 50% of the damage dealt. 1/8 of target's HP is restored to user every turn.",
		id: "devouringseed",
		name: "Devouring Seed",
		pp: 10,
		priority: 0,
		flags: { reflectable: 1, protect: 1, mirror: 1 },
		drain: [1, 2],
		volatileStatus: 'devouringseed',
		condition: {
			onStart(target) {
				this.add('-start', target, 'move: Devouring Seed');
			},
			onResidualOrder: 8,
			onResidual(pokemon) {
				const target = this.effectData.source.side.active[pokemon.volatiles['devouringseed'].sourcePosition];
				if (!target || target.fainted || target.hp <= 0) {
					this.debug('Nothing to devour into');
					return;
				}
				const damage = this.damage(pokemon.baseMaxhp / 8, pokemon, target);
				if (damage) {
					this.heal(damage, target, pokemon);
				}
			},
		},
		onTryImmunity(target) {
			return !target.hasType('Grass');
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	bite: {
		num: 19,
		accuracy: 60,
		basePower: 80,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "bite",
		name: "Bite",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, jaw: 1, bite: 1},
		secondary: null,
		target: "any",
		type: "Neutral",
		contestType: "Tough",
	},
	toxicpollen: {
		num: 20,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		desc: "Poisons the target.",
		shortDesc: "Poisons the target.",
		id: "toxicpollen",
		name: "Toxic Pollen",
		pp: 40,
		priority: 0,
		status: 'psn',
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		zMove: {boost: {spa: 1}},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
	},
	photosynthesis: {
		num: 21,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down. Additionally, if the weather is Desolate Land or Sunny Day, raises the user's Attack and Special Attack by 1 stage.",
		shortDesc: "Heals the user by a weather-dependent amount. Depending on the weather, may boost Attack and Sp. Atk by 1.",
		name: "Photosynthesis",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sun':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'rain':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
				factor = 0.25;
				break;
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
		},
		boosts: {
			atk: 0,
			spa: 0,
		},
		onModifyMove(move, pokemon) {
			if (['sun', 'desolateland'].includes(pokemon.effectiveWeather())) move.boosts = {atk: 1, spa: 1};
		},
		zMove: {boost: {spe: 4}},
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	pacifyingpollen: {
		num: 22,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		desc: "Puts the target to sleep and lowers its attack by 1 stage.",
		shortDesc: "Puts the target to sleep. Lowers the target's Attack by 1.",
		id: "pacifyingpollen",
		name: "Pacifying Pollen",
		pp: 10,
		priority: 0,
		boosts: {
			atk: -1,
		},
		status: 'slp',
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		zMove: {boost: {spd: 3}},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
	},
	natureswrath: {
		num: 23,
		accuracy: 100,
		basePower: 300,
		category: "Special",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move. This move is unaffected by protective moves.",
		shortDesc: "User cannot move next turn. Ignores 'protect' moves.",
		id: "natureswrath",
		name: "Nature's Wrath",
		pp: 1,
		priority: 0,
		flags: {recharge: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "any",
		type: "Grass",
		contestType: "Tough",
	},
	peck: {
		num: 24,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "peck",
		name: "Peck",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, claw: 1, slash: 1},
		secondary: null,
		target: "any",
		type: "Wind",
		contestType: "Clever",
	},
	haunt: {
		num: 25,
		accuracy: 50,
		basePower: 40,
		category: "Special",
		desc: "Causes the target to become cursed.",
		shortDesc: "Curses the target.",
		name: "Haunt",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'curse',
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	horridvisage: {
		num: 26,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Lowers the target's Speed by 2 stages.",
		shortDesc: "Lowers the target's Speed by 2.",
		name: "Horrid Visage",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			spe: -2,
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Tough",
	},
	astonish: {
		num: 27,
		name: "Astonish",
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Attack by 3 stages.",
		shortDesc: "Lowers the foe(s) Attack by 3.",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			atk: -3,
		},
		zMove: {boost: {spa: 2}},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	curse: {
		num: 28,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		desc: "Causes the target to become cursed.",
		shortDesc: "Curses the target.",
		name: "Curse",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'curse',
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	destinybind: {
		num: 29,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Until the user's next move, if an opposing Zelckeymon's attack knocks the user out, that Zelckeymon faints as well, unless the attack was Doom Desire or Future Sight. Fails if the user used this move successfully as its last move, disregarding moves used through the Dancer Ability.",
		shortDesc: "If an opponent knocks out the user, it also faints.",
		name: "Destiny Bind",
		pp: 5,
		priority: 0,
		flags: {authentic: 1},
		volatileStatus: 'destinybind',
		onPrepareHit(pokemon) {
			return !pokemon.removeVolatile('destinybind');
		},
		effect: {
			onStart(pokemon) {
				this.add('-singlemove', pokemon, 'Destiny Bind');
			},
			onFaint(target, source, effect) {
				if (!source || !effect || target.side === source.side) return;
				if (effect.effectType === 'Move' && !effect.isFutureMove) {
					if (source.volatiles['dynamax']) {
						this.add('-hint', "Dynamaxed Pokémon are immune to Destiny Bind.");
						return;
					}
					this.add('-activate', target, 'move: Destiny Bind');
					source.faint();
				}
			},
			onBeforeMovePriority: -1,
			onBeforeMove(pokemon, target, move) {
				if (move.id === 'destinybind') return;
				this.debug('removing Destiny Bind before attack');
				pokemon.removeVolatile('destinybind');
			},
			onMoveAborted(pokemon, target, move) {
				pokemon.removeVolatile('destinybind');
			},
		},
		secondary: null,
		target: "self",
		type: "Ghost",
		zMove: {effect: 'redirect'},
		contestType: "Clever",
	},
	phantasmalforce: {
		num: 30,
		accuracy: 100,
		basePower: 300,
		category: "Special",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move. This move is unaffected by protective moves.",
		shortDesc: "User cannot move next turn. Ignores 'protect' moves.",
		id: "phantasmalforce",
		name: "Phantasmal Force",
		pp: 1,
		priority: 0,
		flags: {recharge: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "any",
		type: "Ghost",
		contestType: "Clever",
	},
	reaplife: {
		num: 31,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up.",
		shortDesc: "User recovers 50% of the damage dealt.",
		id: "reaplife",
		name: "Reap Life",
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		pp: 20,
		priority: 0,
		flags: {protect: 1, charge: 1},
		secondary: null,
		target: "any",
		type: "Ghost",
		contestType: "Clever",
	},
	firelash: {
		num: 32,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "firelash",
		name: "Fire Lash",
		pp: 40,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "any",
		type: "Fire",
		contestType: "Cool",
	},
	burn: {
		num: 33,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "burn",
		name: "Burn",
		pp: 40,
		priority: 0,
		zMove: {boost: {spa: 1}},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		status: 'brn',
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},
	enflame: {
		num: 34,
		accuracy: 80,
		basePower: 20,
		category: "Special",
		desc: "Burns the target. Causes the target's move to become Fire type this turn. Among effects that can change a move's type, this effect happens last. Fails if the target already moved this turn.",
		shortDesc: "Burns the target. Changes the target's move-type to Fire this turn.",
		id: "enflame",
		name: "Enflame",
		pp: 10,
		priority: 0,
		volatileStatus: 'enflame',
		onTryHit(target) {
			if (!this.queue.willMove(target) && target.activeTurns) return false;
		},
		effect: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Enflame');
			},
			onModifyTypePriority: -2,
			onModifyType(move) {
				if (move.id !== 'struggle') {
					this.debug('Enflame making move type fire');
					move.type = 'Fire';
				}
			},
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		status: 'brn',
		target: "normal",
		type: "Fire",
		contestType: "Tough",
	},
	heatwave: {
		num: 35,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Causes Normal-type moves to become Fire type this turn. The effect happens after other effects that change a move's type. Also changes the weather to Sunny Day.",
		shortDesc: "Weather becomes Sunny Day. Normal moves become Fire type this turn.",
		name: "Heat Wave",
		pp: 20,
		priority: 1,
		flags: {},
		weather: 'sun',
		pseudoWeather: 'heatwave',
		effect: {
			duration: 1,
			onStart(target) {
				this.add('-fieldactivate', 'move: Heat Wave');
			},
			onModifyTypePriority: -2,
			onModifyType(move) {
				if (move.type === 'Normal') {
					move.type = 'Fire';
					this.debug(move.name + "'s type changed to Fire");
				}
			},
		},
		secondary: null,
		target: "all",
		type: "Fire",
		zMove: {boost: {spa: 2}},
		contestType: "Cool",
	},
	magmaburst: {
		num: 36,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Hits all adjacent targets. Has a 50% chance to burn the target(s).",
		shortDesc: "50% chance to burn target(s).",
		id: "magmaburst",
		name: "Magma Burst",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			status: 'brn',
		},
		target: "allAdjacent",
		type: "Fire",
		contestType: "Tough",
	},
	magmaplume: {
		num: 37,
		accuracy: 75,
		basePower: 100,
		category: "Special",
		desc: "Hits all adjacent foes. Has a 50% chance to burn the target(s).",
		shortDesc: "50% chance to burn targets(s).",
		id: "magmaburst",
		name: "Magma Burst",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			status: 'brn',
		},
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Beautiful",
	},
	waterlash: {
		num: 38,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "waterlash",
		name: "Water Lash",
		pp: 40,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "any",
		type: "Water",
		contestType: "Beautiful",
	},
	drench: {
		num: 39,
		accuracy: 80,
		basePower: 20,
		category: "Special",
		desc: "Lowers the target's Speed by 2 stages. Causes the target's move to become Water type this turn. Among effects that can change a move's type, this effect happens last. Fails if the target already moved this turn.",
		shortDesc: "Lowers the target's Speed by 2. Changes the target's move-type to Water this turn.",
		id: "drench",
		name: "Drench",
		pp: 10,
		priority: 0,
		volatileStatus: 'drench',
		onTryHit(target) {
			if (!this.queue.willMove(target) && target.activeTurns) return false;
		},
		effect: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Drench');
			},
			onModifyTypePriority: -2,
			onModifyType(move) {
				if (move.id !== 'struggle') {
					this.debug('Drench making move type water');
					move.type = 'Water';
				}
			},
		},
		boosts: {
			spe: -2,
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Clever",
	},
	soak: {
		num: 40,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Speed by 2 stages.",
		shortDesc: "Lowers the target's Speed by 2.",
		id: "soak",
		name: "Soak",
		pp: 40,
		priority: 0,
		boosts: {
			spe: -2,
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Clever",
	},
	humidify: {
		num: 41,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Causes Normal-type moves to become Water type this turn. The effect happens after other effects that change a move's type. Also changes the weather to Rain.",
		shortDesc: "Weather becomes Rain. Normal moves become Water type this turn.",
		name: "Humidify",
		pp: 20,
		priority: 1,
		flags: {},
		weather: 'rain',
		pseudoWeather: 'humidify',
		effect: {
			duration: 1,
			onStart(target) {
				this.add('-fieldactivate', 'move: Humidify');
			},
			onModifyTypePriority: -2,
			onModifyType(move) {
				if (move.type === 'Normal') {
					move.type = 'Water';
					this.debug(move.name + "'s type changed to Water");
				}
			},
		},
		secondary: null,
		target: "all",
		type: "Water",
		zMove: {boost: {spd: 2}},
		contestType: "Clever",
	},
	shellslash: {
		num: 41,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "Hits 2 times. Has a 50% chance to confuse the target(s).",
		shortDesc: "Hits twice. 50% chance to confuse target(s).",
		id: "shellslash",
		name: "Shell Slash",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			volatileStatus: 'confusion',
		},
		target: "any",
		type: "Water",
		contestType: "Tough",
	},
	shellswipe: {
		num: 42,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "Hits all adjacent foes. Has a 50% chance to confuse the target(s).",
		shortDesc: "50% chance to confuse target(s).",
		id: "shellswipe",
		name: "Shell Swipe",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			volatileStatus: 'confusion',
		},
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Cool",
	},
	pollen: {
		num: 43,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Evasion and Accuracy by 1 stage.",
		shortDesc: "Lowers the target's Evasion and Accuracy by 1.",
		id: "pollen",
		name: "Pollen",
		pp: 40,
		priority: 0,
		boosts: {
			evasion: -1,
			accuracy: -1
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
	},
	pollenate: {
		num: 44,
		accuracy: 80,
		basePower: 20,
		category: "Special",
		desc: "Lowers the target's Evasion and Accuracy by 1 stage. Causes the target's move to become Grass type this turn. Among effects that can change a move's type, this effect happens last. Fails if the target already moved this turn.",
		shortDesc: "Lowers the target's Evasion and Accuracy by 1. Changes the target's move-type to Grass this turn.",
		id: "pollenate",
		name: "Pollenate",
		pp: 10,
		priority: 0,
		volatileStatus: 'pollenate',
		onTryHit(target) {
			if (!this.queue.willMove(target) && target.activeTurns) return false;
		},
		effect: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Pollenate');
			},
			onModifyTypePriority: -2,
			onModifyType(move) {
				if (move.id !== 'struggle') {
					this.debug('Pollenate making move type grass');
					move.type = 'Grass';
				}
			},
		},
		boosts: {
			evasion: -1,
			accuracy: -1
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
	},
	naturalize: {
		num: 45,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Causes Normal-type moves to become Grass type this turn. The effect happens after other effects that change a move's type. Also changes the weather to Verdant.",
		shortDesc: "Weather becomes Verdant. Normal moves become Grass type this turn.",
		name: "Naturalize",
		pp: 20,
		priority: 1,
		flags: {},
		weather: 'verdant',
		pseudoWeather: 'naturalize',
		effect: {
			duration: 1,
			onStart(target) {
				this.add('-fieldactivate', 'move: Naturalize');
			},
			onModifyTypePriority: -2,
			onModifyType(move) {
				if (move.type === 'Normal') {
					move.type = 'Grass';
					this.debug(move.name + "'s type changed to Grass");
				}
			},
		},
		secondary: null,
		target: "all",
		type: "Grass",
		zMove: {boost: {spe: 2}},
		contestType: "Beautiful",
	},
	sapspray: {
		num: 46,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "Hits all adjacent foes. Has a 50% chance to paralyze the target(s).",
		shortDesc: "50% chance to paralyze target(s).",
		id: "sapspray",
		name: "Sap Spray",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			status: 'par',
		},
		target: "allAdjacentFoes",
		type: "Grass",
		contestType: "Tough",
	},
	sapstorm: {
		num: 47,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "Hits all adjacent foes. Has a 50% chance to paralyze the target(s).",
		shortDesc: "50% chance to paralyze target(s).",
		id: "sapstorm",
		name: "Sap Storm",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			status: 'par',
		},
		target: "allAdjacentFoes",
		type: "Grass",
		contestType: "Beautiful",
	},
	plot: {
		num: 48,
		name: "Plot",
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Sp. Attack by 1 stage.",
		shortDesc: "Raises the users's Sp. Attack by 1.",
		pp: 40,
		priority: 0,
		flags: {mirror: 1},
		self: {
			boosts: {
				spa: 1
			}
		},
		zMove: {boost: {spa: 1}},
		secondary: null,
		target: "self",
		type: "Dark",
		contestType: "Clever",
	},
	ghastlyscream: {
		num: 49,
		name: "Ghastly Scream",
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Sp. Defense by 6 stages.",
		shortDesc: "Lowers the foe's Sp. Defense by 6.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			spd: -6,
		},
		zMove: {boost: {spa: 3}},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	suckerpunch: {
		num: 50,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		desc: "Fails if the target did not select a physical attack or special attack for use this turn, or if the target moves before the user.",
		shortDesc: "Usually goes first. Fails if target is not attacking.",
		name: "Sucker Punch",
		pp: 20,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry(source, target) {
			const action = this.queue.willMove(target);
			const move = action?.choice === 'move' ? action.move : null;
			if (!move || (move.category === 'Status' && move.id !== 'mefirst') || target.volatiles.mustrecharge) {
				this.add('-fail', source);
				this.attrLastMove('[still]');
				return null;
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	tripover: {
		num: 51,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Lowers the target's Speed by 2 stages.",
		shortDesc: "Lowers the target's Speed by 2.",
		name: "Trip Over",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			spe: -2,
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	sneakbeak: {
		num: 52,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "This move combines Flying in its type effectiveness against the target. Fails if the target did not select a physical attack or special attack for use this turn, or if the target moves before the user.",
		shortDesc: "Combines Flying in its type effectiveness. Usually goes first. Fails if target is not attacking.",
		name: "Sneak Beak",
		pp: 5,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Flying', type);
		},
		onTry(source, target) {
			const action = this.queue.willMove(target);
			const move = action?.choice === 'move' ? action.move : null;
			if (!move || (move.category === 'Status' && move.id !== 'mefirst') || target.volatiles.mustrecharge) {
				this.add('-fail', source);
				this.attrLastMove('[still]');
				return null;
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	feint: {
		num: 53,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Until the end of the next turn, the target cannot avoid the user's moves, even if the target is in the middle of a two-turn move. The effect ends if either the user or the target leaves the field. Fails if this effect is active for the user.",
		shortDesc: "User's next move will not miss the target.",
		name: "Feint",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryHit(target, source) {
			if (source.volatiles['feint']) return false;
		},
		onHit(target, source) {
			source.addVolatile('feint', target);
			this.add('-activate', source, 'move: Feint', '[of] ' + target);
		},
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			duration: 2,
			onSourceInvulnerabilityPriority: 1,
			onSourceInvulnerability(target, source, move) {
				if (move && source === this.effectData.target && target === this.effectData.source) return 0;
			},
			onSourceAccuracy(accuracy, target, source, move) {
				if (move && source === this.effectData.target && target === this.effectData.source) return true;
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {atk: 1}},
		contestType: "Clever",
	},
	sneakattack: {
		num: 54,
		accuracy: true,
		basePower: 60,
		category: "Physical",
		desc: "Does not check accuracy. Priority is increased by 1.",
		shortDesc: "Usually goes first. Almost never misses.",
		name: "Shadow Sneak",
		pp: 10,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	trap: {
		num: 55,
		name: "Trap",
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Traps the target for 4-5 turns. Does not check accuracy.",
		shortDesc: "Traps the target for 4-5 turns.",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		zMove: {boost: {spa: 2}},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
};
