/*

Ratings and how they work:

-1: Detrimental
	  An ability that severely harms the user. Zelckeymon with these abilities tend to have much higher stats to make up for it.
	ex. Cumbersome, Mini

 0: Useless
	  An ability with no overall benefit in a singles battle. Zelckeymon with these abilities tend to have higher stats to make up for it.
	ex. Adaptability, Pack Tactics

 1: Ineffective
	  An ability that has minimal effect or is only useful in niche situations. Zelckeymon with these abilities tend to have slightly higher stats to make up for it.
	ex. Resilient, Barricade

 2: Useful
	  An ability that can be generally useful.
	ex. Mega-Force, Evolutionary

 3: Effective
	  An ability with a strong effect on the user or foe.
	ex. Elemental Boost, Elemental Force

 4: Very useful
	  One of the more popular abilities. It requires minimal support to be effective.
	ex. Full Armor, Diametric

 5: Essential
	  The sort of ability that defines metagames.
	ex. Speed Demon, Hulking

*/

export const Abilities: {[abilityid: string]: AbilityData} = {
	//#00 - No Ability
	noability: {
		num: 0,
		name: "No Ability",
		rating: 0,
	},
	//#01 - Elemental Boost
	elementalboost: {
		num: 1,
		name: "Elemental Boost",
		onModifyMove(move) {
			move.stab = 1.75;
		},
		rating: 3,
	},
	//#02 - Elemental Force
	elementalforce: {
		num: 2,
		name: "Elemental Force",
		onModifyDamage(damage, source, target, move) {
			const type = move.type;
			if (target.getMoveHitData(move).typeMod < 0 && source.hasType(type)) {
				this.debug('Elemental Force Boost');
				return this.chainModify(2);
			}
		},
		rating: 3,
	},
	//#03 - Bite Force
	biteforce: {
		num: 3,
		name: "Bite Force",
		rating: 1,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['bite']) {
				return basePower * 1.5;
			}
		},
	},
	//#04 - Mega-Force
	megaforce: {
		num: 4,
		name: "Mega-Force",
		rating: 5,
		onBasePower(basePower, attacker, defender, move) {
			return basePower * 1.25;
		},
	},
	//#05 - Hulking
	hulking: {
		num: 5,
		name: "Hulking",
		rating: 5,
		onBasePower(basePower, attacker, defender, move) {
			return basePower * 3;
		},
		onModifyPriority(priority, pokemon, target, move) {
			return priority - 1;
		},
	},
	//#06 - Generalist
	generalist: {
		num: 6,
		name: "Generalist",
		rating: 3,
		onModifyMove(move) {
			move.stab = 1;
		},
		onBasePower(basePower, attacker, defender, move) {
			return basePower * 1.25;
		},
	},
	//#07 - Specialist
	specialist: {
		num: 7,
		name: "Specialist",
		rating: 3,
		onModifyMove(move) {
			move.stab = 3;
		},
		onBasePower(basePower, attacker, defender, move) {
			return basePower * 0.75;
		},
	},
	//#08 - Speed Demon
	speeddemon: {
		num: 8,
		name: "Speed Demon",
		onModifyPriority(priority, pokemon, target, move) {
			return priority + 1;
		},
		rating: 5,
	},
	//#09 - Resilient
	resilient: {
		num: 9,
		name: "Resilient",
		onCriticalHit: false,
		rating: 1,
	},
	//#10 - Full Armor
	fullarmor: {
		num: 10,
		name: "Full Armor",
		onCriticalHit: false,
		rating: 4,
		onSourceModifyDamage(damage, source, target, move) {
			if (move.category === 'Physical') {
				this.debug('Full Armor resistance');
				return this.chainModify(0.75);
			}
		},
	},
	//#11 - Pack Tactics
	packtactics: {
		num: 11,
		name: "Pack Tactics",
		rating: 0,
		onAllyBasePowerPriority: 22,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (attacker !== this.effectData.target) {
				this.debug('Pack Tactics boost');
				return this.chainModify(1.5);
			}
		},
	},
	//#12 - Adaptability
	adaptability: {
		num: 12,
		name: "Adaptability",
		onAfterMoveSecondary(target, source, move) {
			if (!target.hp) return;
			const type = move.type;
			if (
				target.isActive && move.effectType === 'Move' && move.category !== 'Status' &&
				type !== '???' && !target.hasType(type)
			) {
				if (!target.setType(type)) return false;
				this.add('-start', target, 'typechange', type, '[from] ability: Adaptability');

				if (target.side.active.length === 2 && target.position === 1) {
					// Curse Glitch
					const action = this.queue.willMove(target);
					if (action && action.move.id === 'curse') {
						action.targetLoc = -1;
					}
				}
			}
		},
		rating: 0,
	},
	//#13 - Cumbersome
	cumbersome: {
		num: 13,
		name: "Cumbersome",
		rating: -1,
		onModifyPriority(priority, pokemon, target, move) {
			return priority - 1;
		},
	},
	//#14 - Mini
	mini: {
		num: 14,
		name: "Mini",
		rating: -1,
		onBasePower(basePower, attacker, defender, move) {
			return basePower * 0.5;
		},
	},
	//#15 - Evolutionary
	evolutionary: {
		num: 15,
		name: "Evolutionary",
		rating: 2, //Considered to have a rating of 2 due to STAB, despite the ability being effectively useless without that.
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = ['wait','struggle'];
			let type = pokemon.types[0];
			if (move.type === 'Neutral' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = type;
			}
		},
	},
	//#16 - Barricade
	barricade: {
		num: 16,
		name: "Barricade",
		rating: 1,
		onResidualOrder: 1,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({def: -1, spd: -1});
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			this.debug('Barricade resistance');
			return this.chainModify(0.5);
		},
	},
	//#17 - Mega-Armor
	megaarmor: {
		num: 17,
		name: "Mega-Armor",
		rating: 5,
		onSourceModifyDamage(damage, source, target, move) {
			this.debug('Mega-Armor resistance');
			return this.chainModify(0.75);
		},
	},
	//#18 - Incorporeal
	incorporeal: {
		num: 18,
		rating: 5,
		name: "Incorporeal",
		onSourceModifyDamage(damage, source, target, move) {
			if (move.category === 'Physical') {
				this.debug('Incorporeal immunity');
				return this.chainModify(0.0);
			}
		},
	},
	//#19 - Metaphysical
	metaphysical: {
		num: 19,
		name: "Metaphysical",
		rating: 5,
		onSourceModifyDamage(damage, source, target, move) {
			if (move.category === 'Special') {
				this.debug('Metaphysical immunity');
				return this.chainModify(0.0);
			}
		},
	},
	//#20 - Magmabolism
	magmabolism: {
		num: 20,
		name: "Magmabolism",
		rating: 3,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Magmabolism');
				}
				return null;
			}
		},
	},
	//#21 - Living Fire
	livingfire: {
		num: 21,
		name: "Living Fire",
		rating: 2,
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
					source.trySetStatus('brn', target);
			}
		},
	},
	//#22 - Diametric
	diametric: {
		num: 22,
		name: "Diametric",
		rating: 0,
		onBoost(boost, target, source, effect) {
			if (effect && effect.id === 'zpower') return;
			let i: BoostName;
			for (i in boost) {
				boost[i]! *= -1;
			}
		},
	},
	//#23 - Evaporating
	evaporating: {
		num: 23,
		name: "Evaporating",
		rating: 3,
		desc: "This Zelckeymon's moves are forcibly made super effective against Water-Types no matter what type the moves are.",
		shortDesc: "This Zelckeymon's moves are super effective against Water-Types.",
		onEffectiveness(typeMod, target, type) {
			if (type === 'Water') return 1;
		},
	},
	//#24 - Extinguishing
	extinguishing: {
		num: 24,
		name: "Extinguishing",
		rating: 3,
		desc: "This Zelckeymon's moves are forcibly made super effective against Fire-Types no matter what type the moves are.",
		shortDesc: "This Zelckeymon's moves are super effective against Fire-Types.",
		onEffectiveness(typeMod, target, type) {
			if (type === 'Fire') return 1;
		},
	},
	//#25- Withering
	withering: {
		num: 25,
		name: "Withering",
		rating: 3,
		desc: "This Zelckeymon's moves are forcibly made super effective against Grass-Types no matter what type the moves are.",
		shortDesc: "This Zelckeymon's moves are super effective against Grass-Types.",
		onEffectiveness(typeMod, target, type) {
			if (type === 'Grass') return 1;
		},
	},
	//#26 - Killer
	killer: {
		num: 26,
		name: "Killer",
		rating: 3,
		desc: "This Zelckeymon has its critical hit ratio raised by 1 stage.",
		shortDesc: "This Zelckeymon's crit. ratio is raised by 1.",
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
	},
	//#27 - Cold-Blooded
	coldblooded: {
		num: 27,
		name: "Cold-Blooded",
		rating: 0,
		desc: "This Zelckeymon has 2x speed when either 'Sunny Day' or 'Desolate Land' is active and 0.5x speed when 'Hail' or 'Ice Age' is active.",
		shortDesc: "This Zelckeymon's speed is halved in cold weather and doubled in hot weather.",
		onModifySpe(spe, pokemon) {
			if (['sun', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
			if (['hail', 'iceage'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(0.5);
			}
		},
	},
	//#28 - Mystical
	mystical: {
		num: 28,
		name: "Mystical",
		rating: 4,
		desc: "This Zelckeymon can only be damaged by direct damage and attacks. Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage are considered direct damage.",
		shortDesc: "This Zelckeymon can only be damaged by attacks.",
		onDamage(damage, target, source, effect) {
			if (effect.effectType !== 'Move') {
				if (effect.effectType === 'Ability') this.add('-activate', source, 'ability: ' + effect.name);
				return false;
			}
		},
	},
	//#29 - Riddler
	riddler: {
		num: 29,
		name: "Riddler",
		rating: 3,
		desc: "On switch-in, for each adjacent foe, this Zelckeymon has a 30% chance to confuse that foe.",
		shortDesc: "Each adjacent foe has a 30% chance to be confused at start.",
		onStart(pokemon) {
			let activated = false;
			let source = pokemon;
			for (const target of pokemon.side.foe.active) {
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Riddler', 'confusion');
					activated = true;
				}
				if (this.randomChance(3, 10)) {
					source.addVolatile('confusion', target);
				}
			}
		},
	},
	//#30 - Aeon Force
	aeonforce: {
		num: 30,
		name: "Aeon Force",
		rating: 5,
		desc: "On switch-in, this Zelckeymon gets +6 Attack stages and +6 Sp. Attack stages. It has -3 Attack stages and -3 Sp. Attack stages each turn it remains active.",
		shortDesc: "This Zelckeymon has +6 Attack and Sp. Attack stages at start. It has -3 Attack and Sp. Attack stat stages each turn while active.",
		onResidualOrder: 1,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({atk: -3, spa: -3});
			}
		},
		onStart(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({atk: 6, spa: 6});
			}
		},
	},
	//#31 - Blitz Rush
	blitzrush: {
		num: 31,
		name: "Blitz Rush",
		rating: 5,
		desc: "On switch-in, this Zelckeymon gets +3 Attack stages, +3 Special Attack stages, and +3 Speed stages. It has -1 Attack stages, -1 Special Attack stages, and -1 Speed stages each turn it remains active.",
		shortDesc: "This Zelckeymon has +3 Atk, Sp. Atk, and Speed stages at start. It has -1 Atk, Sp. Atk, and Speed stages each turn while active.",
		onResidualOrder: 1,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({atk: -1, spa: -1, spe: -1});
			}
		},
		onStart(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({atk: 3, spa: 3, spe: 3});
			}
		},
	},
	//#32 - Momentum
	momentum: {
		num: 32,
		desc: "This Zelckeymon's physical attacking moves use Speed instead of Attack.",
		shortDesc: "This Zelckeymon's physical attacks use Speed instead of Atk.",
		onModifyMove(move) {
			move.useSourceSpeedAsOffensive = true;
		},
		id: "momentum",
		name: "Momentum",
		rating: 3,
	},
	//#33 - Vigor
	vigor: {
		num: 33,
		desc: "When this Zelckeymon uses a charge move for the first time in a battle, it executes in one turn instead of two.",
		shortDesc: "This Zelckeymon's first charge move executes immediately.",
		onChargeMove(pokemon, target, move) {
			this.debug('vigor - remove charge turn for ' + move.id);
			this.attrLastMove('[still]');
			if (!activated) {
				this.add('-ability', pokemon, 'Vigor', 'used');
				activated = true;
			}
			this.addMove('-anim', pokemon, move.name, target);
			return false; // skip charge turn
		},
		id: "vigor",
		name: "Vigor",
		rating: 5,
	},
	//#34 - Impatient
	impatient: {
		num: 34,
		desc: "This Zelckeymon's charged moves execute in one turn but have 0.5x power.",
		shortDesc: "This Zelckeymon's charged moves take 1 turn and have 0.5x power.",
		onChargeMove(pokemon, target, move) {
			this.debug('impatient - remove charge turn for ' + move.id);
			this.attrLastMove('[still]');
			this.addMove('-anim', pokemon, move.name, target);
			return false; // skip charge turn
		},
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['charge']) {
				return basePower * 0.5;
			}
		},
		id: "impatient",
		name: "Impatient",
		rating: 1,
	},
	//#35 - Frighten
	frighten: {
		num: 35,
		id: "frighten",
		name: "Frighten",
		desc: "On switch-in, this Zelckeymon lowers the Attack of adjacent opposing Zelckeymon by 1 stage. Inner Focus, Oblivious, Own Tempo, Scrappy, and Zelckeymon behind a substitute are immune.",
		shortDesc: "On switch-in, this Zelckeymon lowers the Attack of adjacent opponents by 1 stage.",
		onStart(pokemon) {
			let activated = false;
			let source = pokemon;
			for (const target of pokemon.side.foe.active) {
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Frighten', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({atk: -1}, target, pokemon, null, true);
				}
			}
		},
		rating: 3.5,
	},
	//#36 - Final Haunt
	finalhaunt: {
		num: 36,
		id: "finalhaunt",
		name: "Final Haunt",
		rating: 2,
		desc: "If this Zelckeymon is knocked out with a move, that move's user is cursed.",
		shortDesc: "If this Zelckeymon is KOed with a move, that move's user is cursed.",
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (!target.hp) {
				source.addVolatile('curse', target);
			}
		},
	},
	//#37 - Haunting
	haunting: {
		num: 37,
		name: "Haunting",
		rating: 3,
		desc: "On switch-in, for each adjacent foe, this Zelckeymon has a 30% chance to curse that foe.",
		shortDesc: "Each adjacent foe has a 30% chance to be cursed at start.",
		onStart(pokemon) {
			let activated = false;
			let source = pokemon;
			for (const target of pokemon.side.foe.active) {
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Haunting', 'curse');
					activated = true;
				}
				if (this.randomChance(3, 10)) {
					source.addVolatile('curse', target);
				}
			}
		},
	},
	//#38 - Hydrophyllic
	hydrophyllic: {
		num: 38,
		name: "Hydrophyllic",
		rating: 3,
		desc: "This Zelckeymon is immune to Water-type moves and raises its Special Attack by 1 stage when hit by a Water-type move.",
		shortDesc: "This Zelckeymon absorbs Water attacks that hit it to raise Sp. Atk by 1; Water immunity.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Hydrophyllic');
				}
				return null;
			}
		},
	},
	//#39 - Herbivore
	herbivore: {
		num: 39,
		name: "Herbivore",
		rating: 3,
		desc: "This Zelckeymon is immune to Grass-type moves and raises its Special Attack by 1 stage when hit by a Grass-type move.",
		shortDesc: "This Zelckeymon absorbs Grass attacks that hit it to raise Sp. Atk by 1; Grass immunity.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Grass') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Herbivore');
				}
				return null;
			}
		},
	},
	//#40 - Defiant Roar
	defiantroar: {
		desc: "When this Pokemon has more than 1/8 its maximum HP and takes damage from an attack bringing it to 1/8 or less of its maximum HP, its Attack, Sp. Attack, and Speed are each raised by 3 stages. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.",
		shortDesc: "This Pokemon's Atk, Sp. Atk, and Spe are raised by 3 when it reaches 1/8 or less of its max HP.",
		onAfterMoveSecondary(target, source, move) {
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 8 && target.hp + damage > target.maxhp / 8) {
				this.boost({spa: 3, atk:3, spe: 3});
			}
		},
		name: "Defiant Roar",
		rating: 4,
		num: 40,
	},
	//#41 - Noble Roar
	nobleroar: {
		desc: "If this Pokemon, but not its substitute, is struck by a critical hit, its Attack, Sp. Attack, and Speed are each raised by 3 stages.",
		shortDesc: "If this Pokemon (not its substitute) takes a critical hit, its Atk, Sp. Atk, and Spe are raised 3 stages.",
		onHit(target, source, move) {
			if (!target.hp) return;
			if (move?.effectType === 'Move' && target.getMoveHitData(move).crit) {
				this.boost({spa: 3, atk:3, spe: 3});
			}
		},
		name: "Noble Roar",
		rating: 2,
		num: 41,
	},
	//#42 - Gender Rivalry
	genderrivalry: {
		desc: "This Pokemon's attacks have their power multiplied by 1.5 against targets of the same gender. There is no modifier if either this Pokemon or the target is genderless or the same gender.",
		shortDesc: "This Pokemon's attacks do 1.5x on same gender targets.",
		onBasePowerPriority: 24,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker.gender && defender.gender) {
				if (attacker.gender === defender.gender) {
					this.debug('Gender Rivalry boost');
					return this.chainModify(1.5);
				}
			}
		},
		name: "Gender Rivalry",
		rating: 1,
		num: 42,
	},
	//#43 - Horror
	horror: {
		num: 43,
		id: "horror",
		name: "Horror",
		rating: 2,
		desc: "If this Zelckeymon is knocked out with a move, that move's user has its Attack lowered by 3 stages.",
		shortDesc: "If this Zelckeymon is KOed with a move, that move's user has its Atk lowered by 3.",
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (!target.hp) {
				this.boost({atk: -3}, source, target, null, true);
			}
		},
	},
	//#44 - Surprise Attack
	surpriseattack: {
		num: 44,
		rating: 5,
		name: "Surprise Attack",
		desc: "This Zelckeymon has its Attack and Speed doubled for 2 turns when it switches in.",
		shortDesc: "This Zelckeymon's Atk and Spe are doubled for 2 turns on switch-in.",
		onStart(pokemon) {
			pokemon.addVolatile('surpriseattack');
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['surpriseattack'];
			this.add('-end', pokemon, 'Suprise Attack', '[silent]');
		},
		condition: {
			duration: 2,
			onStart(target) {
				this.add('-start', target, 'ability: Surprise Attack');
			},
			onModifyAtkPriority: 1,
			onModifyAtk(atk, pokemon) {
				return this.chainModify(2);
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(2);
			},
			onEnd(target) {
				this.add('-end', target, 'Surprise Attack');
			},
		},
	},
	//#45 - Prankster
	prankster: {
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.category === 'Status') {
				move.pranksterBoosted = true;
				return priority + 1;
			}
		},
		name: "Prankster",
		desc: "This Zelckeymon's priority is increased by 1 when using status moves.",
		shortDesc: "+1 Priority to status moves.",
		rating: 4,
		num: 45,
	},
	//#46 - Trapper
	trapper: {
		//Effect is hard-coded in 'conditions.ts' / 'conditions.js'
		name: "Trapper",
		desc: "This Zelckeymon's partially-trapping moves always trap the target for 8 turns.",
		shortDesc: "This Zelckeymon's moves always trap for the maximum duration.",
		rating: 1,
		num: 46,
	},
	//#47 - Dark Body
	darkbody: {
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness(type, 'Dark');
		},
		name: "Dark Body",
		desc: "This Zelckeymon includes Dark-Type in it's type-effectiveness.",
		shortDesc: "This Zelckeymon adds Dark to its typing.",
		rating: 0,
		num: 47,
	},
};
