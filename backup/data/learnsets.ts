/* eslint-disable max-len */

// Template
// name: ["1LX","2LX","3LX","4LX","5LX","6LX","7LX","8LX"],
// where 'x' is the level it is learned and 'name' is, obviously, its name.
export const Learnsets: {[speciesid: string]: LearnsetData} = {
	iderror: {
		learnset: {
			scratch: ["1L1"],
		},
	},
	chomp: {
		learnset: {
			snap: ["1L1","2L1","3L1","4L1","5L1","6L1","7L1","8L1"],
			intimidate: ["1L1","2L1","3L1","4L1","5L1","6L1","7L1","8L1"],
			vinelash: ["1L7","2L7","3L7","4L7","5L7","6L7","7L7","8L7"],
			devouringseed: ["1L14","2L14","3L14","4L14","5L14","6L14","7L14","8L14"],
			bite: ["1L21","2L21","3L21","4L21","5L21","6L21","7L21","8L21"],
			toxicpollen: ["1L28","2L28","3L28","4L28","5L28","6L28","7L28","8L28"],
			photosynthesis: ["1L35","2L35","3L35","4L35","5L35","6L35","7L35","8L35"],
			pacifyingpollen: ["1L42","2L42","3L42","4L42","5L42","6L42","7L42","8L42"],
			natureswrath: ["1L49","2L49","3L49","4L49","5L49","6L49","7L49","8L49"],
		},
		eventData: [
			{generation: 1, level: 5, isHidden: true, moves: ["snap", "junglefang"], pokeball: "cherishball"},
		],
		/*encounters: [
			{generation: 1, level: 5},
		],*/
	},
	zelckey: {
		learnset: {
			scratch: ["1L1","2L1","3L1","4L1","5L1","6L1","7L1","8L1"],
		},
		eventData: [
			{generation: 1, level: 5, isHidden: true, moves: ["snap", "tidalslash"], pokeball: "cherishball"},
		],
		/*encounters: [
			{generation: 1, level: 5},
		],*/
	},
	pyrex: {
		learnset: {
			tackle: ["1L1","2L1","3L1","4L1","5L1","6L1","7L1","8L1"],
		},
		eventData: [
			{generation: 1, level: 5, isHidden: true, moves: ["tackle", "volcanicpress"], pokeball: "cherishball"},
		],
		/*encounters: [
			{generation: 1, level: 5},
		],*/
	},
	spookaburra: {
		learnset: {
			peck: ["1L1","2L1","3L1","4L1","5L1","6L1","7L1","8L1"],
			leer: ["1L1","2L1","3L1","4L1","5L1","6L1","7L1","8L1"],
			haunt: ["1L7","2L7","3L7","4L7","5L7","6L7","7L7","8L7"],
			horridvisage: ["1L14","2L14","3L14","4L14","5L14","6L14","7L14","8L14"],
			astonish: ["1L21","2L21","3L21","4L21","5L21","6L21","7L21","8L21"],
			curse: ["1L28","2L28","3L28","4L28","5L28","6L28","7L28","8L28"],
			destinybind: ["1L35","2L35","3L35","4L35","5L35","6L35","7L35","8L35"],
			reaplife: ["1L42","2L42","3L42","4L42","5L42","6L42","7L42","8L42"],
			phantasmalforce: ["1L49","2L49","3L49","4L49","5L49","6L49","7L49","8L49"],
		},
		/*encounters: [
			{generation: 1, level: 5},
		],*/
	},
	trickadee: {
		learnset: {
			peck: ["1L1","2L1","3L1","4L1","5L1","6L1","7L1","8L1"],
			plot: ["1L1","2L1","3L1","4L1","5L1","6L1","7L1","8L1"],
			ghastlyscream: ["1L9"],
			suckerpunch: ["1L13"],
			sneakbeak: ["2L14","3L14","4L14","5L14","6L14","7L14","8L14"],
			feint: ["1L22","2L21","3L21","4L21","5L21","6L21","7L21","8L21"],
			sneakattack: ["1L29","2L28","3L28","4L28","5L28","6L28","7L28","8L28"],
			trap: ["1L36","2L7","3L7","4L7","5L7","6L7","7L7","8L7"],
			tripover: ["2L36","3L36","4L36","5L36","6L36","7L36","8L36"],
		},
		/*encounters: [
			{generation: 1, level: 5},
		],*/
	},
	magmalisk: {
		learnset: {
			snap: ["1L1","2L1","3L1","4L1","5L1","6L1","7L1","8L1"],
			snarl: ["1L1","2L1","3L1","4L1","5L1","6L1","7L1","8L1"],
			firelash: ["1L7","2L7","3L7","4L7","5L7","6L7","7L7","8L7"],
			burn: ["1L14","2L14","3L14","4L14","5L14","6L14","7L14","8L14"],
			pyroblast: ["1L21","2L21","3L21","4L21","5L21","6L21","7L21","8L21"],
			enflame: ["1L28","2L28","3L28","4L28","5L28","6L28","7L28","8L28"],
			heatwave: ["1L35","2L35","3L35","4L35","5L35","6L35","7L35","8L35"],
			magmaburst: ["1L42","2L42","3L42","4L42","5L42","6L42","7L42","8L42"],
			magmaplume: ["1L49","2L49","3L49","4L49","5L49","6L49","7L49","8L49"],
		},
		/*encounters: [
			{generation: 1, level: 5},
		],*/
	},
	conchimp: {
		learnset: {
			tackle: ["1L1","2L1","3L1","4L1","5L1","6L1","7L1","8L1"],
			leer: ["1L1","2L1","3L1","4L1","5L1","6L1","7L1","8L1"],
			waterlash: ["1L7","2L7","3L7","4L7","5L7","6L7","7L7","8L7"],
			soak: ["1L14","2L14","3L14","4L14","5L14","6L14","7L14","8L14"],
			aquablast: ["1L21","2L21","3L21","4L21","5L21","6L21","7L21","8L21"],
			drench: ["1L28","2L28","3L28","4L28","5L28","6L28","7L28","8L28"],
			humidify: ["1L35","2L35","3L35","4L35","5L35","6L35","7L35","8L35"],
			shellslash: ["1L42","2L42","3L42","4L42","5L42","6L42","7L42","8L42"],
			shellswipe: ["1L49","2L49","3L49","4L49","5L49","6L49","7L49","8L49"],
		},
		/*encounters: [
			{generation: 1, level: 5},
		],*/
	},
	saparrot: {
		learnset: {
			scratch: ["1L1","2L1","3L1","4L1","5L1","6L1","7L1","8L1"],
			leer: ["1L1","2L1","3L1","4L1","5L1","6L1","7L1","8L1"],
			vinelash: ["1L7","2L7","3L7","4L7","5L7","6L7","7L7","8L7"],
			pollen: ["1L14","2L14","3L14","4L14","5L14","6L14","7L14","8L14"],
			phytoblast: ["1L21","2L21","3L21","4L21","5L21","6L21","7L21","8L21"],
			pollenate: ["1L28","2L28","3L28","4L28","5L28","6L28","7L28","8L28"],
			naturalize: ["1L35","2L35","3L35","4L35","5L35","6L35","7L35","8L35"],
			sapspray: ["1L42","2L42","3L42","4L42","5L42","6L42","7L42","8L42"],
			sapstorm: ["1L49","2L49","3L49","4L49","5L49","6L49","7L49","8L49"],
		},
		/*encounters: [
			{generation: 1, level: 5},
		],*/
	},
};
