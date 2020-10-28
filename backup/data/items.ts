export const Items: {[itemid: string]: ItemData} = {
	bronzebell: {
		num: 1,
		gen: 1,
		id: "bronzebell",
		name: "Bronze Bell",
		spritenum: 1,
		fling: {
			basePower: 15,
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Fire') {
				target.useItem();
			}
		},
		boosts: {
			spa: 3,
			atk: 3,
		},
		desc: "Raises holder's Sp. Atk and Atk by 3 stages if hit by a Fire-type attack. Single use.",
	},
	greendust: {
		num: 2,
		gen: 1,
		id: "greendust",
		name: "Greendust",
		spritenum: 2,
		fling: {
			basePower: 15,
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Grass') {
				target.useItem();
			}
		},
		boosts: {
			spa: 3,
			atk: 3,
		},
		desc: "Raises holder's Sp. Atk and Atk by 3 stages if hit by a Grass-type attack. Single use.",
	},
	shellrock: {
		num: 3,
		gen: 1,
		id: "shellrock",
		name: "Shell Rock",
		spritenum: 3,
		fling: {
			basePower: 15,
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Water') {
				target.useItem();
			}
		},
		boosts: {
			spa: 3,
			atk: 3,
		},
		desc: "Raises holder's Sp. Atk and Atk by 3 stages if hit by a Water-type attack. Single use.",
	},
	redfern: {
		num: 4,
		gen: 1,
		id: "redfern",
		name: "Red Fern",
		spritenum: 4,
		fling: {
			basePower: 15,
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Dark') {
				target.useItem();
			}
		},
		boosts: {
			spa: 3,
			atk: 3,
		},
		desc: "Raises holder's Sp. Atk and Atk by 3 stages if hit by a Dark-type attack. Single use.",
	},
	voidorb: {
		num: 5,
		gen: 1,
		id: "voidorb",
		name: "Void Orb",
		spritenum: 5,
		fling: {
			basePower: 15,
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Light') {
				target.useItem();
			}
		},
		boosts: {
			spa: 3,
			atk: 3,
		},
		desc: "Raises holder's Sp. Atk and Atk by 3 stages if hit by a Light-type attack. Single use.",
	},
};
