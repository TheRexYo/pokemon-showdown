'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe('Neutralizing Gas', function () {
	afterEach(function () {
		battle.destroy();
	});

	it('should prevent switch-in abilities from activating', function () {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [{species: "Gyarados", ability: 'intimidate', moves: ['splash']}]});
		battle.setPlayer('p2', {team: [{species: "Weezing", ability: 'neutralizinggas', moves: ['toxicspikes']}]});
		assert.statStage(battle.p2.active[0], 'atk', 0);
	});

	it('should ignore damage-reducing abilities', function () {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [{species: "Weezing", ability: 'neutralizinggas', item: 'expertbelt', moves: ['sludgebomb']}]});
		battle.setPlayer('p2', {team: [{species: "Mr. Mime", ability: 'filter', item: 'laggingtail', moves: ['substitute']}]});
		battle.makeChoices('move sludgebomb', 'move substitute');
		assert(!battle.p1.active[0].volatiles['substitute']);
	});

	it('should negate self-healing abilities', function () {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [{species: "Weezing", ability: 'neutralizinggas', moves: ['toxic']}]});
		battle.setPlayer('p2', {team: [{species: "Breloom", ability: 'poisonheal', moves: ['swordsdance']}]});
		battle.makeChoices('move toxic', 'move swordsdance');
		assert.false.fullHP(battle.p2.active[0]);
	});

	it('should negate abilities that suppress item effects', function () {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [{species: "Weezing", ability: 'neutralizinggas', moves: ['reflect']}]});
		battle.setPlayer('p2', {team: [{species: "Reuniclus", ability: 'magicguard', item: 'lifeorb', moves: ['shadowball']}]});
		battle.makeChoices('move reflect', 'move shadowball');
		assert.false.fullHP(battle.p2.active[0]);
	});

	it('should negate abilities that modify boosts', function () {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [{species: "Weezing", ability: 'neutralizinggas', moves: ['spore']}]});
		battle.setPlayer('p2', {team: [{species: "Shuckle", ability: 'contrary', moves: ['sleeptalk', 'superpower']}]});
		battle.makeChoices('move spore', 'move sleeptalk');
		assert.statStage(battle.p2.active[0], 'atk', -1);
	});

	it(`should negate abilites that activate on switch-out`, function () {
		battle = common.createBattle([
			[{species: "Weezing", ability: 'neutralizinggas', moves: ['toxic']},
				{species: "Type: Null", ability: 'battlearmor', moves: ['facade']}],
			[{species: "Corsola", ability: 'naturalcure', moves: ['uturn']},
				{species: "Magikarp", ability: 'rattled', moves: ['splash']}],
		]);
		battle.makeChoices('move toxic', 'move uturn');
		battle.makeChoices('', 'switch 2');
		battle.makeChoices('switch 2', 'switch 2');
		assert.equal(battle.p2.active[0].status, 'tox');
	});

	it('should negate abilities that modify move type', function () {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [{species: "Gengar", ability: 'neutralizinggas', moves: ['laserfocus']}]});
		battle.setPlayer('p2', {team: [{species: "Sylveon", ability: 'pixilate', moves: ['hypervoice']}]});
		battle.makeChoices('move laserfocus', 'move hypervoice');
		assert.fullHP(battle.p1.active[0]);
	});

	it("should negate abilities that damage the attacker", function () {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [
			{species: 'Weezing-Galar', ability: 'neutralizinggas', moves: ['payback']},
		]});
		battle.setPlayer('p2', {team: [
			{species: 'Ferrothorn', ability: 'ironbarbs', moves: ['rockpolish']},
		]});
		battle.makeChoices();
		assert.fullHP(battle.p1.active[0]);
	});

	it('should not activate Imposter if Neutralizing Gas leaves the field', function () {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [
			{species: "Weezing", ability: 'neutralizinggas', moves: ['snore']},
			{species: "Greninja", ability: 'torrent', moves: ['teleport']},
		]});
		battle.setPlayer('p2', {team: [
			{species: "Ditto", ability: 'imposter', moves: ['sleeptalk']},
		]});
		assert.notEqual(battle.p1.active[0].species, battle.p2.active[0].species);
		battle.makeChoices('switch greninja', 'move sleeptalk');
		assert.notEqual(battle.p1.active[0].species, battle.p2.active[0].species);
		assert.notEqual(battle.p1.pokemon[1].species, battle.p2.active[0].species);
	});

	it(`should prevent Unburden's activation when it is active on the field`, function () {
		battle = common.createBattle([[
			{species: "Wynaut", ability: 'unburden', item: 'sitrusberry', evs: {hp: 4}, moves: ['bellydrum']},
		], [
			{species: "Pancham", ability: 'neutralizinggas', moves: ['sleeptalk']},
			{species: "Whismur", moves: ['sleeptalk']},
		]]);

		const wynaut = battle.p1.active[0];
		const originalSpeed = wynaut.getStat('spe');
		battle.makeChoices();
		assert.equal(wynaut.getStat('spe'), originalSpeed);

		//The chance to trigger Unburden is gone, so it missed the timing and doesn't gain the speed post-NGas removal
		battle.makeChoices('auto', 'switch 2');
		assert.equal(wynaut.getStat('spe'), originalSpeed);
	});

	it.skip(`should negate Unburden when Neutralizing Gas enters the field`, function () {
		battle = common.createBattle([[
			{species: "Wynaut", ability: 'unburden', item: 'sitrusberry', evs: {hp: 4}, moves: ['bellydrum']},
		], [
			{species: "Whismur", moves: ['sleeptalk']},
			{species: "Pancham", ability: 'neutralizinggas', moves: ['sleeptalk']},
		]]);

		const wynaut = battle.p1.active[0];
		const originalSpeed = wynaut.getStat('spe');
		battle.makeChoices();
		assert.equal(wynaut.getStat('spe'), originalSpeed * 2);

		battle.makeChoices('auto', 'switch 2');
		assert.equal(wynaut.getStat('spe'), originalSpeed);

		battle.makeChoices('auto', 'switch 2');
		assert.equal(wynaut.getStat('spe'), originalSpeed * 2);
	});

	it.skip(`should cause Illusion to instantly wear off when Neutralizing Gas enters the field`, function () {
		battle = common.createBattle([[
			{species: "Zoroark", ability: 'illusion', moves: ['sleeptalk']},
			{species: "Eternatus", moves: ['sleeptalk']},
		], [
			{species: "Wynaut", moves: ['sleeptalk']},
			{species: "Weezing", ability: 'neutralizinggas', moves: ['sleeptalk']},
		]]);

		battle.makeChoices('auto', 'switch 2');
		assert(battle.log.some(line => line.includes('|-end|p1a: Zoroark|Illusion')));
	});

	it.skip(`should cause Slow Start to instantly wear off/restart when Neutralizing Gas leaves/enters the field`, function () {
		battle = common.createBattle([[
			{species: "Regigigas", ability: 'slowstart', moves: ['sleeptalk']},
			{species: "Eternatus", moves: ['sleeptalk']},
		], [
			{species: "Wynaut", moves: ['sleeptalk']},
			{species: "Weezing", ability: 'neutralizinggas', moves: ['sleeptalk']},
		]]);

		const regigigas = battle.p1.active[0];
		const slowStartSpeed = regigigas.getStat('spe');

		// Slow Start should be negated, so it should have its original, non-Slow Start speed
		battle.makeChoices('auto', 'switch 2');
		assert.equal(regigigas.getStat('spe'), slowStartSpeed * 2);

		// Slow Start should be turned back on, so it should have its Slow Start speed again
		battle.makeChoices('auto', 'switch 2');
		assert.equal(regigigas.getStat('spe'), slowStartSpeed);
	});

	it.skip(`should not cause Gluttony to instantly eat Berries when Neutralizing Gas leaves the field`, function () {
		battle = common.createBattle([[
			{species: "Wynaut", ability: 'gluttony', item: 'aguavberry', evs: {hp: 4}, moves: ['bellydrum']},
		], [
			{species: "Pancham", ability: 'neutralizinggas', moves: ['sleeptalk']},
			{species: "Whismur", level: 1, moves: ['seismictoss']},
		]]);

		const wynaut = battle.p1.active[0];
		battle.makeChoices();
		assert.equal(wynaut.hp, Math.floor(wynaut.maxhp / 2));

		// Gluttony doesn't activate because it missed the timing
		battle.makeChoices('auto', 'switch 2');
		assert.equal(wynaut.hp, Math.floor(wynaut.maxhp / 2));

		// Gluttony now has the opportunity to activate the Aguav Berry again on taking damage
		battle.makeChoices();
		assert.equal(wynaut.hp, Math.floor(wynaut.maxhp / 2) - 1 + Math.floor(wynaut.maxhp * 0.33));
	});

	it.skip(`should not trigger twice if negated then replaced`, function () {
		battle = common.createBattle([[
			{species: "Weezing", ability: 'neutralizinggas', moves: ['sleeptalk']},
		], [
			{species: "Wynaut", ability: 'intrepidsword', moves: ['gastroacid', 'simplebeam']},
		]]);

		const wynaut = battle.p2.active[0];
		battle.makeChoices();
		assert.statStage(wynaut, 'atk', 1);

		// We already negated NGas, so it shouldn't run other abilities again
		battle.makeChoices('auto', 'move simplebeam');
		assert.statStage(wynaut, 'atk', 1);
	});
});
