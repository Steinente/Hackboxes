/// <reference types='../CTAutocomplete' />
/// <reference lib='es2015' />

import SkyblockUtilities from '../SkyblockUtilities/index';
import Utils from '../SkyblockUtilities/utils/Utils';
import MCEntity from '../SkyblockUtilities/enums/MCEntity';
import Area from '../SkyblockUtilities/enums/Area';
import Location from '../SkyblockUtilities/enums/Location';
import Color from '../SkyblockUtilities/enums/Color';
import SBSymbol from '../SkyblockUtilities/enums/SBSymbol';
import FileUtilities from '../FileUtilities/main';
import request from '../requestV2/index';

import General from './configfiles/General';
import Everywhere from './configfiles/Everywhere';
import Hub from './configfiles/Hub';
import ThePark from './configfiles/ThePark';
import SpidersDen from './configfiles/SpidersDen';
import TheEnd from './configfiles/TheEnd';
import DeepCaverns from './configfiles/DeepCaverns';
import DwarvenMines from './configfiles/DwarvenMines';
import TheFarmingIslands from './configfiles/TheFarmingIslands';
import Dungeon from './configfiles/Dungeon';

const GL11 = Java.type('org.lwjgl.opengl.GL11');
const GlStateManager = Java.type('net.minecraft.client.renderer.GlStateManager');
const AxisAlignedBB = Java.type('net.minecraft.util.AxisAlignedBB');

const ModuleName = 'Hackboxes';
const Version = JSON.parse(FileLib.read(`${Config.modulesFolder}/${ModuleName}/metadata.json`)).version;
const Latest = `https://github.com/Steinente/${ModuleName}/releases/latest`;
const ClickableLatest = new TextComponent(`${Color.BLUE}${Latest}`).setClick('open_url', `${Latest}`);
const ToggleModuleKeybind = new KeyBind('Toggle module', 35, ModuleName);
const ToggleRequiredMobsKeybind = new KeyBind('Toggle required dungeon mobs', 19, ModuleName);
const UsedAreas = [Area.HUB, Area.THE_PARK, Area.SPIDERS_DEN, Area.THE_END, Area.DEEP_CAVERNS, Area.DWARVEN_MINES, Area.THE_FARMING_ISLANDS, Area.DUNGEON];
const StartSeparator = `${Color.YELLOW}-------------- ${Color.GOLD}${ModuleName} ${Color.YELLOW}--------------${Color.LINE_BREAK}`;
const EndSeparator = `${Color.YELLOW}--------------------------------------`;
const SummoningEyeSkullOwner = '00a702b9-7bad-3205-a04b-52478d8c0e7f';
const WeirdHeadTexture = 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZWIwNzU5NGUyZGYyNzM5MjFhNzdjMTAxZDBiZmRmYTExMTVhYmVkNWI5YjIwMjllYjQ5NmNlYmE5YmRiYjRiMyJ9fX0=';
const TrevorNames = ['Trackable', 'Untrackable', 'Undetected', 'Endangered', 'Elusive'];
const GlyphPlacePitch = 0.4920634925365448;
const GlyphRemovePitch = 0.4920634925365448;

let firstTimeSB = false;
let rgb = [1, 0, 0];
let boxes = [];
let strings = [];
let blocks = [];
let boxesnew = [];
let stringnew = [];
let isPowderGhast = false;
let AreaVisibility = {};

register('command', ...args => command(args)).setName('hb');
register('command', ...args => command(args)).setName('hackboxes');

register('step', () => {
	if (!General.enabled) return;
	UsedAreas.forEach(area => {
		AreaVisibility[area] = this[getValidArea(area)].enabled;
	});
}).setFps(1);

register('step', () => {
	if (SkyblockUtilities.isSkyblock() && !firstTimeSB) {
		firstTimeSB = true;
		updateMessage();
		checkForUpdates();
	}
}).setDelay(3);

register('renderWorld', ticks => {
	if (!General.enabled) return;
	boxes.forEach(render => drawBoxAroundEntity(...render, ticks));
	strings.forEach(render => drawNameThroughWalls(...render));
	blocks.forEach(render => drawBoxAroundBlock(...render));
});

register('worldUnload', () => {
	boxesnew = [];
	stringnew = [];
	blocks = [];
	isPowderGhast = false;
	lividList = [];
});

register('tick', () => {
	checkKeybinds();
	if (!General.enabled) return;
	let allEntities = [];
	rgbChange();
	if (Everywhere.enabled) {
		allEntities = World.getWorld().func_72872_a(MCEntity.ENTITY.class, getScanArea('Everywhere')); // getEntitiesWithinAABB()
		allEntities.forEach(mcEntity => {
			let entity = new Entity(mcEntity);
			let entityName = ChatLib.removeFormatting(entity.getName());
			if (mcEntity instanceof MCEntity.ARMOR_STAND) {
				if (Everywhere.giftEnabled && entityName.includes('CLICK TO OPEN')) {
					boxesnew.push([entity, Everywhere.giftColor, Everywhere.giftRGBEnabled, 2, 1, 1, 1, Everywhere.giftThroughWallEnabled]);
				}
				if (Everywhere.jerryEnabled && Utils.containsAll(entityName, 'Jerry', 'Hit')) {
					boxesnew.push([entity, Everywhere.jerryColor, Everywhere.jerryRGBEnabled, 2, 1, -2, 0, Everywhere.jerryThroughWallEnabled]);
				}
			}
		});
	}
	if (AreaVisibility[SkyblockUtilities.getArea()]) {
		const area = getValidArea(SkyblockUtilities.getArea());
		if (allEntities.length === 0) allEntities = World.getWorld().func_72872_a(MCEntity.ENTITY.class, getScanArea(area)); // getEntitiesWithinAABB()
		allEntities.forEach(mcEntity => {
			let entity = new Entity(mcEntity);
			let entityName = ChatLib.removeFormatting(entity.getName());
			// Builds and invokes function
			this['render' + area](entity, mcEntity, entityName);
		});
	}
	boxes = boxesnew;
	strings = stringnew;
	boxesnew = [];
	stringnew = [];
	isPowderGhast = false;
	lividList = [];
});

register('soundPlay', (pos, name, vol, pitch, cat, event) => {
	if (SkyblockUtilities.getArea() !== Area.THE_END && AreaVisibility[Area.THE_END] && !TheEnd.glyphEnabled) return;
	const mcPitch = event.sound.func_147655_f(); // getPitch()
	if (name.includes('game.neutral.hurt') && mcPitch === GlyphPlacePitch) {
		blocks.push([[pos.getX(), pos.getY(), pos.getZ()], TheEnd.glyphColor, TheEnd.glyphRGBEnabled, 5, 1, 3, 0, TheEnd.glyphThroughWallEnabled]);
		setTimeout(() => removeBlock(pos), 10000);
	}
	if (name.includes('random.break') && mcPitch === GlyphRemovePitch) {
		removeBlock(pos);
	}
});

function getValidArea(area) {
	return area.replace(/[\\' ]/g, '');
}

function getScanArea(area) {
	const horizontal = this[area].horizontal;
	const vertical = this[area].vertical;
	return new AxisAlignedBB(
		Player.getX() + horizontal,
		Player.getY() + vertical >= 255 ? 255 : Player.getY() + vertical,
		Player.getZ() + horizontal,
		Player.getX() - horizontal,
		Player.getY() - vertical <= 0 ? 0 : Player.getY() - vertical,
		Player.getZ() - horizontal
	);
}

function removeBlock(position) {
	const blocksnew = blocks.filter(e => e[0][0] !== position.getX() && e[0][1] !== position.getY() && e[0][2] !== position.getZ());
	blocks = blocksnew;
}

function command(args) {
	if (args[0] === undefined) {
		General.openGUI();
	} else if (args.length === 1) {
		const arg = args[0].toLowerCase();
		switch (arg) {
			case 'everywhere':
				Everywhere.openGUI();
				break;
			case 'hub':
				Hub.openGUI();
				break;
			case 'park':
				ThePark.openGUI();
				break;
			case 'den':
				SpidersDen.openGUI();
				break;
			case 'end':
				TheEnd.openGUI();
				break;
			case 'caverns':
				DeepCaverns.openGUI();
				break;
			case 'mines':
				DwarvenMines.openGUI();
				break;
			case 'farming':
				TheFarmingIslands.openGUI();
				break;
			case 'dungeon':
				Dungeon.openGUI();
				break;
			case 'changelog':
				sendChangelog();
				break;
			case 'download':
				ClickableLatest.chat();
				break;
			case 'help':
			default:
				const Areas = 
					`${Color.GRAY}● ${Color.GOLD}Everywhere${Color.LINE_BREAK}` + 
					`${Color.GRAY}● ${Color.GOLD}Hub${Color.LINE_BREAK}` +
					`${Color.GRAY}● ${Color.GOLD}Park${Color.LINE_BREAK}` +
					`${Color.GRAY}● ${Color.GOLD}Den${Color.LINE_BREAK}` +
					`${Color.GRAY}● ${Color.GOLD}End${Color.LINE_BREAK}` +
					`${Color.GRAY}● ${Color.GOLD}Caverns${Color.LINE_BREAK}` +
					`${Color.GRAY}● ${Color.GOLD}Mines${Color.LINE_BREAK}` +
					`${Color.GRAY}● ${Color.GOLD}Farming${Color.LINE_BREAK}` +
					`${Color.GRAY}● ${Color.GOLD}Dungeon`;
				const MessageStr = new Message(
					StartSeparator,
					`${Color.AQUA}/hackboxes ${Color.GRAY + Color.ITALIC}- Opens the settings${Color.LINE_BREAK}`,
					`${Color.AQUA}/hb ${Color.GRAY + Color.ITALIC}- Alias for /hackboxes${Color.LINE_BREAK}`,
					`${Color.AQUA}/hackboxes `, new TextComponent(`${Color.AQUA + Color.ITALIC}[AREA]`).setHoverValue(Areas), ` - ${Color.GRAY + Color.ITALIC}Opens the settings in specific area${Color.LINE_BREAK}`,
					`${Color.AQUA}/hackboxes changelog ${Color.GRAY + Color.ITALIC}- Shows last changelog${Color.LINE_BREAK}`,
					`${Color.AQUA}/hackboxes download ${Color.GRAY + Color.ITALIC}- Link to latest download${Color.LINE_BREAK}`,
					`${Color.AQUA}/hackboxes help ${Color.GRAY + Color.ITALIC}- Displays this help dialog`,
					EndSeparator
				);
				ChatLib.chat(MessageStr);
				break;
		}
	}
}

function renderHub(entity, mcEntity, entityName) {
	if (mcEntity instanceof MCEntity.ARMOR_STAND) {
		if (Hub.revenantEnabled && Utils.containsAll(entityName, SBSymbol.SLAYER, 'Horror')) {
			stringnew.push([entity, 0.05, Hub.revenantThroughWallEnabled]);
			boxesnew.push([entity, Hub.revenantColor, Hub.revenantRGBEnabled, 5, 1, -2, 0, Hub.revenantThroughWallEnabled]);
		} else if (Hub.atonedRevEnabled && entityName.includes('Atoned Revenant')) {
			stringnew.push([entity, 0.05, Hub.atonedRevThroughWallEnabled]);
			boxesnew.push([entity, Hub.atonedRevColor, Hub.atonedRevRGBEnabled, 5, 1, -2, 0, Hub.atonedRevThroughWallEnabled]);
		} else if (Hub.atonedChampEnabled && entityName.includes('Atoned Champion')) {
			stringnew.push([entity, 0.05, Hub.atonedChampThroughWallEnabled]);
			boxesnew.push([entity, Hub.atonedChampColor, Hub.atonedChampRGBEnabled, 5, 1, -2, 0, Hub.atonedChampThroughWallEnabled]);
		} else if (Hub.deformedEnabled && entityName.includes('Deformed')) {
			stringnew.push([entity, 0.05, Hub.deformedThroughWallEnabled]);
			boxesnew.push([entity, Hub.deformedColor, Hub.deformedRGBEnabled, 5, 1, -2, 0, Hub.deformedThroughWallEnabled]);
		} else if (Hub.champEnabled && entityName.includes('Revenant Champion')) {
			stringnew.push([entity, 0.05, Hub.champThroughWallEnabled]);
			boxesnew.push([entity, Hub.champColor, Hub.champRGBEnabled, 5, 1, -2, 0, Hub.champThroughWallEnabled]);
		} else if (Hub.sycophantEnabled && entityName.includes('Sycophant')) {
			stringnew.push([entity, 0.05, Hub.sycophantThroughWallEnabled]);
			boxesnew.push([entity, Hub.sycophantColor, Hub.sycophantRGBEnabled, 5, 1, -2, 0, Hub.sycophantThroughWallEnabled]);
		} else if (Hub.ratEnabled && Utils.containsAll(entityName, 'Rat', '❤')) {
			boxesnew.push([entity, Hub.ratColor, Hub.ratRGBEnabled, 1, 1, -1, 0, Hub.ratThroughWallEnabled]);
		} else if (Hub.inquisitorEnabled && entityName.includes('Inquisitor')) {
			stringnew.push([entity, 0.05, Hub.inquisitorThroughWallEnabled]);
			boxesnew.push([entity, Hub.inquisitorColor, Hub.inquisitorRGBEnabled, 5, 1, -2, 0, Hub.inquisitorThroughWallEnabled]);
		}
	}
	if (!Hub.parkEnabled) return;
	renderThePark(entity, mcEntity, entityName);
}

function renderThePark(entity, mcEntity, entityName) {
	if (mcEntity instanceof MCEntity.ARMOR_STAND) {
		if (ThePark.packmasterEnabled && Utils.containsAll(entityName, SBSymbol.SLAYER, 'Sven') && !entityName.includes('Pup')) {
			stringnew.push([entity, 0.05, ThePark.packmasterThroughWallEnabled]);
			boxesnew.push([entity, ThePark.packmasterColor, ThePark.packmasterRGBEnabled, 5, 0.6, -0.75, -0.25, ThePark.packmasterThroughWallEnabled]);
		} else if (ThePark.alphaEnabled && entityName.includes('Alpha') && !entityName.includes('Soul')) {
			stringnew.push([entity, 0.05, ThePark.alphaThroughWallEnabled]);
			boxesnew.push([entity, ThePark.alphaColor, ThePark.alphaRGBEnabled, 5, 0.6, -0.75, -0.25, ThePark.alphaThroughWallEnabled]);
		} else if (ThePark.followerEnabled && entityName.includes('Follower')) {
			stringnew.push([entity, 0.05, ThePark.followerThroughWallEnabled]);
			boxesnew.push([entity, ThePark.followerColor, ThePark.followerRGBEnabled, 5, 0.6, -0.75, -0.25, ThePark.followerThroughWallEnabled]);
		} else if (ThePark.enforcerEnabled && entityName.includes('Enforcer')) {
			stringnew.push([entity, 0.05, ThePark.enforcerThroughWallEnabled]);
			boxesnew.push([entity, ThePark.enforcerColor, ThePark.enforcerRGBEnabled, 5, 0.6, -0.75, -0.25, ThePark.enforcerThroughWallEnabled]);
		}
	}
}

function renderSpidersDen(entity, mcEntity, entityName) {
	if (mcEntity instanceof MCEntity.ARMOR_STAND) {
		if (SpidersDen.fatherEnabled && entityName.includes(SBSymbol.SLAYER)) {
			stringnew.push([entity, 0.05, SpidersDen.fatherThroughWallEnabled]);
			boxesnew.push([entity, SpidersDen.fatherColor, SpidersDen.fatherRGBEnabled, 5, 1.5, -1, -0.25, SpidersDen.fatherThroughWallEnabled]);
		} else if (SpidersDen.mutantEnabled && entityName.includes('Mutant')) {
			stringnew.push([entity, 0.05, SpidersDen.mutantThroughWallEnabled]);
			boxesnew.push([entity, SpidersDen.mutantColor, SpidersDen.mutantRGBEnabled, 5, 1.5, -1, -0.25, SpidersDen.mutantThroughWallEnabled]);
		} else if (SpidersDen.beastEnabled && entityName.includes('Beast') && !entityName.includes('Bramass')) {
			stringnew.push([entity, 0.05, SpidersDen.beastThroughWallEnabled]);
			boxesnew.push([entity, SpidersDen.beastColor, SpidersDen.beastRGBEnabled, 5, 1.5, -1, -0.25, SpidersDen.beastThroughWallEnabled]);
		} else if (SpidersDen.verminEnabled && entityName.includes('Vermin')) {
			stringnew.push([entity, 0.05, SpidersDen.verminThroughWallEnabled]);
			boxesnew.push([entity, SpidersDen.verminColor, SpidersDen.verminRGBEnabled, 5, 1.5, -1, -0.25, SpidersDen.verminThroughWallEnabled]);
		} else if (SpidersDen.keeperEnabled && entityName.includes('Keeper')) {
			stringnew.push([entity, 0.05, SpidersDen.keeperThroughWallEnabled]);
			boxesnew.push([entity, SpidersDen.keeperColor, SpidersDen.keeperRGBEnabled, 5, 0.75, -0.5, -0.3, SpidersDen.keeperThroughWallEnabled]);
		} else if (SpidersDen.motherEnabled && entityName.includes('Mother')) {
			stringnew.push([entity, 0.05, SpidersDen.motherThroughWallEnabled]);
			boxesnew.push([entity, SpidersDen.motherColor, SpidersDen.motherRGBEnabled, 5, 1.5, -1, -0.25, SpidersDen.motherThroughWallEnabled]);
		} else if (SpidersDen.broodEnabled && entityName.includes('Brood')) {
			boxesnew.push([entity, SpidersDen.broodColor, SpidersDen.broodRGBEnabled, 5, 0.75, -0.5, -0.3, SpidersDen.broodThroughWallEnabled]);
		} else if (SpidersDen.arachneEnabled && entityName.includes('Arachne') && Utils.containsNone(entityName, 'Brood', 'Fragment', 'Keeper')) {
			stringnew.push([entity, 0.05, SpidersDen.arachneThroughWallEnabled]);
			boxesnew.push([entity, SpidersDen.arachneColor, SpidersDen.arachneRGBEnabled, 5, 1.5, -1, -0.25, SpidersDen.arachneThroughWallEnabled]);
		}
	}
}

function renderTheEnd(entity, mcEntity, entityName) {
	if (SkyblockUtilities.getLocation() === Location.DRAGONS_NEST) {
		if (mcEntity instanceof MCEntity.ITEM) {
			if (TheEnd.eyeEnabled && getSkullOwner(mcEntity.func_92059_d()) === SummoningEyeSkullOwner) { // getEntityItem()
				boxesnew.push([entity, TheEnd.eyeColor, TheEnd.eyeRGBEnabled, 5, 0.5, 4, 0, TheEnd.eyeThroughWallEnabled]);
			}
		} else if (mcEntity instanceof MCEntity.ARMOR_STAND) {
			if (TheEnd.zealotEnabled && Utils.containsAll(entityName, '2000/2000', 'Zealot')) {
				stringnew.push([entity, 0.05, TheEnd.zealotThroughWallEnabled]);
				boxesnew.push([entity, TheEnd.zealotColor, TheEnd.zealotRGBEnabled, 5, 1, -3, 0, TheEnd.zealotThroughWallEnabled]);
			}
		} else if (mcEntity instanceof MCEntity.DRAGON) {
			if (TheEnd.dragonEnabled) {
				boxesnew.push([entity, TheEnd.dragonColor, TheEnd.dragonRGBEnabled, 5, 15, 8, 0, TheEnd.dragonThroughWallEnabled]);
			}
		} else if (mcEntity instanceof MCEntity.ENDER_CRYSTAL) {
			if (TheEnd.crystalEnabled) {
				boxesnew.push([entity, TheEnd.crystalColor, TheEnd.crystalRGBEnabled, 5, 1, 2, 0, TheEnd.crystalThroughWallEnabled]);
			}
		} else if (mcEntity instanceof MCEntity.IRON_GOLEM) {
			if (TheEnd.protectorEnabled) {
				boxesnew.push([entity, TheEnd.protectorColor, TheEnd.protectorRGBEnabled, 4, 1.7, 2.7, 0, TheEnd.protectorThroughWallEnabled]);
			}
		}
	}
	if (mcEntity instanceof MCEntity.ARMOR_STAND) {
		if (TheEnd.seraphEnabled && entityName.includes(SBSymbol.SLAYER)) {
			stringnew.push([entity, 0.05, TheEnd.seraphThroughWallEnabled]);
			boxesnew.push([entity, TheEnd.seraphColor, TheEnd.seraphRGBEnabled, 5, 1, -3, 0, TheEnd.seraphThroughWallEnabled]);
		} else if (TheEnd.devoteeEnabled && entityName.includes('Devotee')) {
			stringnew.push([entity, 0.05, TheEnd.devoteeThroughWallEnabled]);
			boxesnew.push([entity, TheEnd.devoteeColor, TheEnd.devoteeRGBEnabled, 5, 1, -3, 0, TheEnd.devoteeThroughWallEnabled]);
		} else if (TheEnd.radicalEnabled && entityName.includes('Radical')) {
			stringnew.push([entity, 0.05, TheEnd.radicalThroughWallEnabled]);
			boxesnew.push([entity, TheEnd.radicalColor, TheEnd.radicalRGBEnabled, 5, 1, -3, 0, TheEnd.radicalThroughWallEnabled]);
		} else if (TheEnd.maniacEnabled && entityName.includes('Maniac')) {
			stringnew.push([entity, 0.05, TheEnd.maniacThroughWallEnabled]);
			boxesnew.push([entity, TheEnd.maniacColor, TheEnd.maniacRGBEnabled, 5, 1, -3, 0, TheEnd.maniacThroughWallEnabled]);
		} else if (TheEnd.weirdEnabled && getSkullTexture(mcEntity.func_71124_b(4)) === WeirdHeadTexture) { // getEquipmentInSlot()
			boxesnew.push([entity, TheEnd.weirdColor, TheEnd.weirdRGBEnabled, 5, 1, 1, 0.5, TheEnd.weirdThroughWallEnabled]);
		}
	}
}

function renderDeepCaverns(entity, mcEntity, entityName) {
	if (SkyblockUtilities.getLocation() === Location.GUNPOWDER_MINES) {
		if (mcEntity instanceof MCEntity.CREEPER) {
			if (DeepCaverns.creeperEnabled) {
				boxesnew.push([entity, DeepCaverns.creeperColor, DeepCaverns.creeperRGBEnabled, 1, 1, 2, 0, DeepCaverns.creeperThroughWallEnabled]);
			}
		}
	}
}

function renderDwarvenMines(entity, mcEntity, entityName) {
	if (mcEntity instanceof MCEntity.ARMOR_STAND) {
		if (DwarvenMines.powderGhastEnabled && entityName.includes('Powder Ghast')) {
			isPowderGhast = true;
			stringnew.push([entity, 0.1, DwarvenMines.powderGhastThroughWallEnabled]);
			boxesnew.push([entity, DwarvenMines.powderGhastColor, DwarvenMines.powderGhastRGBEnabled, 2, 4, -4, 0, DwarvenMines.powderGhastThroughWallEnabled]);
		}
	} else if (mcEntity instanceof MCEntity.IRON_GOLEM) {
		if (DwarvenMines.superprotectronEnabled) {
			boxesnew.push([entity, DwarvenMines.superprotectronColor, DwarvenMines.superprotectronRGBEnabled, 4, 1.7, 2.7, 0, DwarvenMines.superprotectronThroughWallEnabled]);
		}
	} else if (mcEntity instanceof MCEntity.ARROW) {
		if (DwarvenMines.arrowEnabled && isPowderGhast) {
			boxesnew.push([entity, DwarvenMines.arrowColor, DwarvenMines.arrowRGBEnabled, 0.5, 0.5, 0.5, 0, DwarvenMines.arrowThroughWallEnabled]);
		}
	}
	if (SkyblockUtilities.getLocation() === Location.THE_MIST) {
		if (mcEntity instanceof MCEntity.CREEPER) {
			if (DwarvenMines.ghostEnabled) {
				boxesnew.push([entity, DwarvenMines.ghostColor, DwarvenMines.ghostRGBEnabled, 1, 1, 2, 0, DwarvenMines.ghostThroughWallEnabled]);
			}
		}
	}
}

function renderTheFarmingIslands(entity, mcEntity, entityName) {
	if (mcEntity instanceof MCEntity.ARMOR_STAND) {
		TrevorNames.forEach(trevor => {
			if (TheFarmingIslands.trevorEnabled && entityName.includes(trevor)) {
				boxesnew.push([entity, TheFarmingIslands.trevorColor, TheFarmingIslands.trevorRGBEnabled, 1, 1, -1, 0, TheFarmingIslands.trevorThroughWallEnabled]);
			}
		});
	}
}

function renderDungeon(entity, mcEntity, entityName) {
	if (mcEntity instanceof MCEntity.BAT) {
		if (Dungeon.batEnabled) {
			boxesnew.push([entity, Dungeon.batColor, Dungeon.batRGBEnabled, 1, 0.5, 0.5, 0, Dungeon.batThroughWallEnabled]);
		}
	} else if (mcEntity instanceof MCEntity.ARMOR_STAND) {
		if (Dungeon.felsEnabled && Utils.containsAll(entityName, 'Fels', SBSymbol.REQUIRE_STAR)) {
			boxesnew.push([entity, Dungeon.felsColor, Dungeon.felsRGBEnabled, 3, 1, -3, 0, Dungeon.felsThroughWallEnabled]);
		} else if (Dungeon.requiredEnabled && Utils.containsOne(entityName, SBSymbol.REQUIRE_STAR, 'Shadow Assassin', 'Lost Adventurer', 'Angry Archeologist')) {
			boxesnew.push([entity, Dungeon.requiredColor, Dungeon.requiredRGBEnabled, 2, 1, -2, 0, Dungeon.requiredThroughWallEnabled]);
		}
		switch(SkyblockUtilities.getFloor()) {
			case 1:
				if (Dungeon.bonzoEnabled && entityName.includes('Bonzo')) {
					boxesnew.push([entity, Dungeon.bonzoColor, Dungeon.bonzoRGBEnabled, 3, 1, -2, 0, Dungeon.bonzoThroughWallEnabled]);
				}
				break;
			case 5:
				if (Dungeon.lividEnabled && entityName.includes('Livid')) {
					if (entity.getName().charAt(1) === getLividColor().charAt(1)) {
						boxesnew.push([entity, Dungeon.lividColor, Dungeon.lividRGBEnabled, 3, 1, -2, 0, Dungeon.lividThroughWallEnabled]);
					}
				}
				break;
			default:
				break;
		}
	}
}

function getLividColor() {
	switch(World.getBlockAt(205, 108, 242).getMetadata()) {
		case 0:
			return Color.WHITE;
		case 4:
			return Color.YELLOW;
		case 5:
			return Color.GREEN;
		case 6:
			return Color.LIGHT_PURPLE;
		case 7:
			return Color.GRAY;
		case 10:
			return Color.DARK_PURPLE;
		case 11:
			return Color.BLUE;
		case 13:
			return Color.DARK_GREEN;
		case 14:
			return Color.RED;
		default:
			return Color.MAGIC;
	}
}

function checkKeybinds() {
	if (ToggleModuleKeybind.isPressed()) {
		General.enabled = !General.enabled;
		sendToggleMessage('module', General.enabled);
	} else if (ToggleRequiredMobsKeybind.isPressed()) {
		Dungeon.requiredEnabled = !Dungeon.requiredEnabled;
		sendToggleMessage('required mobs', Dungeon.requiredEnabled);
	}
}

function sendToggleMessage(setting, bool) {
	ChatLib.chat(`${Color.GRAY}[${Color.GOLD}${ModuleName}${Color.GRAY}] ${bool ? Color.GREEN + 'Enabled' : Color.RED + 'Disabled'} ${Color.GRAY + setting}!`);
}

function rgbChange() {
    if (rgb[0] >= 1.0) {
        if (rgb[2] > 0.0) {
            rgb[2] = rgb[2] - 0.05;
        } else {
            rgb[1] = rgb[1] + 0.05;
        }
        if (rgb[1] >= 1) {
            rgb[1] = 1;
            rgb[0] = rgb[0] - 0.05;
        }
    } else if (rgb[1] >= 1.0) {
        if (rgb[0] > 0.0) {
            rgb[0] = rgb[0] - 0.05;
        } else {
            rgb[2] = rgb[2] + 0.05;
        }
        if (rgb[2] >= 1) {
            rgb[2] = 1;
            rgb[1] = rgb[1] - 0.05;
        }
    } else if (rgb[2] >= 1.0) {
        if (rgb[1] > 0.0) {
            rgb[1] = rgb[1] - 0.05;
        } else {
            rgb[0] = rgb[0] + 0.05;
        }
        if (rgb[0] >= 1) {
            rgb[0] = 1;
            rgb[2] = rgb[2] - 0.05;
        }
    }
}

function transformColor(color) {
	return (1 / 255 * color).toFixed(2);
}

function getSkullOwner(itemstack) {
	if (itemstack === null) return '';
	const NBTBase = new Item(itemstack).getNBT().getCompoundTag('tag').getCompoundTag('SkullOwner').get('Id');
	if (NBTBase === null) return '';
	return NBTBase.toString().replace(/"/g, '');
}

function getSkullTexture(itemstack) {
	if (itemstack === null) return '';
	const NbtData = new Item(itemstack).getNBT();
	const NBTBase = NbtData.getCompoundTag('tag').getCompoundTag('SkullOwner').getCompoundTag('Properties').getTag('textures');
	if (NBTBase === null) return '';
	return NBTBase.toString().match(/Value:".*"/)[0].replace(/Value:"/, '').replace('"', '');
}

function drawBoxAroundEntity(entity, color, isRGB, lineWidth, width, height, expandY, throughWall, partialTicks) {
	GL11.glBlendFunc(770, 771);
	GL11.glEnable(GL11.GL_BLEND);
	GL11.glLineWidth(lineWidth);
	GL11.glDisable(GL11.GL_TEXTURE_2D);
	if (throughWall) GL11.glDisable(GL11.GL_DEPTH_TEST);
	GL11.glDepthMask(false);
	GlStateManager.func_179094_E(); // pushMatrix()

	let positions = [
		[0.5, 0.0, 0.5],
		[0.5, 1.0, 0.5],
		[-0.5, 0.0, -0.5],
		[-0.5, 1.0, -0.5],
		[0.5, 0.0, -0.5],
		[0.5, 1.0, -0.5],
		[-0.5, 0.0, 0.5],
		[-0.5, 1.0, 0.5],
		[0.5, 1.0, -0.5],
		[0.5, 1.0, 0.5],
		[-0.5, 1.0, 0.5],
		[0.5, 1.0, 0.5],
		[-0.5, 1.0, -0.5],
		[0.5, 1.0, -0.5],
		[-0.5, 1.0, -0.5],
		[-0.5, 1.0, 0.5],
		[0.5, 0.0, -0.5],
		[0.5, 0.0, 0.5],
		[-0.5, 0.0, 0.5],
		[0.5, 0.0, 0.5],
		[-0.5, 0.0, -0.5],
		[0.5, 0.0, -0.5],
		[-0.5, 0.0, -0.5],
		[-0.5, 0.0, 0.5]
	];

	const colors = isRGB ? [rgb[0], rgb[1], rgb[2]] : [transformColor(color.getRed()), transformColor(color.getGreen()), transformColor(color.getBlue())];
	let counter = 0;
	Tessellator.begin(3).colorize(colors[0], colors[1], colors[2]);
	positions.forEach(pos => {
		Tessellator.pos(
			entity.getX() + (entity.getX() - entity.getLastX()) * partialTicks + pos[0] * width,
			entity.getY() + expandY + (entity.getY() - entity.getLastY()) * partialTicks + pos[1] * height,
			entity.getZ() + (entity.getZ() - entity.getLastZ()) * partialTicks + pos[2] * width
		).tex(0, 0);

		counter++;
		if (counter % 2 === 0) {
			Tessellator.draw();
			if (counter !== 24) {
				Tessellator.begin(3).colorize(colors[0], colors[1], colors[2]);
			}
		}
	});

	GlStateManager.func_179121_F(); // popMatrix()
	GL11.glEnable(GL11.GL_TEXTURE_2D);
	if (throughWall) GL11.glEnable(GL11.GL_DEPTH_TEST);
	GL11.glDepthMask(true);
	GL11.glDisable(GL11.GL_BLEND);
}

function drawBoxAroundBlock(position, color, isRGB, lineWidth, width, height, expandY, throughWall) {
	GL11.glBlendFunc(770, 771);
	GL11.glEnable(GL11.GL_BLEND);
	GL11.glLineWidth(lineWidth);
	GL11.glDisable(GL11.GL_TEXTURE_2D);
	if (throughWall) GL11.glDisable(GL11.GL_DEPTH_TEST);
	GL11.glDepthMask(false);
	GlStateManager.func_179094_E(); // pushMatrix()

	let positions = [
		[0.5, 0.0, 0.5],
		[0.5, 1.0, 0.5],
		[-0.5, 0.0, -0.5],
		[-0.5, 1.0, -0.5],
		[0.5, 0.0, -0.5],
		[0.5, 1.0, -0.5],
		[-0.5, 0.0, 0.5],
		[-0.5, 1.0, 0.5],
		[0.5, 1.0, -0.5],
		[0.5, 1.0, 0.5],
		[-0.5, 1.0, 0.5],
		[0.5, 1.0, 0.5],
		[-0.5, 1.0, -0.5],
		[0.5, 1.0, -0.5],
		[-0.5, 1.0, -0.5],
		[-0.5, 1.0, 0.5],
		[0.5, 0.0, -0.5],
		[0.5, 0.0, 0.5],
		[-0.5, 0.0, 0.5],
		[0.5, 0.0, 0.5],
		[-0.5, 0.0, -0.5],
		[0.5, 0.0, -0.5],
		[-0.5, 0.0, -0.5],
		[-0.5, 0.0, 0.5]
	];

	const colors = isRGB ? [rgb[0], rgb[1], rgb[2]] : [transformColor(color.getRed()), transformColor(color.getGreen()), transformColor(color.getBlue())];
	let counter = 0;
	Tessellator.begin(3).colorize(colors[0], colors[1], colors[2]);
	positions.forEach(pos => {
		Tessellator.pos(
			position[0] + 0.5 + pos[0] * width,
			position[1] + expandY + pos[1] * height,
			position[2] + 0.5 + pos[2] * width
		).tex(0, 0);

		counter++;
		if (counter % 2 === 0) {
			Tessellator.draw();
			if (counter !== 24) {
				Tessellator.begin(3).colorize(colors[0], colors[1], colors[2]);
			}
		}
	});

	GlStateManager.func_179121_F(); // popMatrix()
	GL11.glEnable(GL11.GL_TEXTURE_2D);
	if (throughWall) GL11.glEnable(GL11.GL_DEPTH_TEST);
	GL11.glDepthMask(true);
	GL11.glDisable(GL11.GL_BLEND);
}

function drawNameThroughWalls(entity, scale, throughWall) {
	Utils.drawString(entity.getName(), entity.getX(), entity.getY() + entity.getHeight() + 0.75, entity.getZ(), Renderer.WHITE, false, scale, false, throughWall);
	entity.entity.func_174805_g(false); // setAlwaysRenderNameTag()
}

function updateMessage() {
	const NewVersion = `${Config.modulesFolder}/${ModuleName}/updates/${Version}`;
	if (FileUtilities.exists(NewVersion)) return;
	FileUtilities.newFile(NewVersion);
	sendChangelog();
}

function checkForUpdates() {
	if (!General.update) return;
	request({
		url: `https://raw.githubusercontent.com/Steinente/${ModuleName}/master/metadata.json`,
		json: true
	}).then(response => {
		if (JSON.parse(JSON.stringify(response)).version !== Version) {
			const MessageStr = new Message(
				StartSeparator,
				`${Color.RED}New version available! Download at:${Color.LINE_BREAK}`,
				ClickableLatest, Color.LINE_BREAK,
				EndSeparator
			);
			ChatLib.chat(MessageStr);
		}
	});
}

function sendChangelog() {
	const MessageStr = new Message(
		StartSeparator,
		`${Color.DARK_GREEN}Changelog:${Color.LINE_BREAK}`,
		`${Color.GRAY}● ${Color.GREEN}added Endstone Protector${Color.LINE_BREAK}`,
		`${Color.GRAY}● ${Color.GREEN}fixed an error${Color.LINE_BREAK}${Color.LINE_BREAK}`,
		`${Color.AQUA}Discord for suggestions, bug-reports, more modules and more:${Color.LINE_BREAK}`,
		new TextComponent(`${Color.BLUE}https://discord.gg/W64ZJJQQxy${Color.LINE_BREAK}`).setClick('open_url', 'https://discord.gg/W64ZJJQQxy'),
		EndSeparator
	);
	ChatLib.chat(MessageStr);
}