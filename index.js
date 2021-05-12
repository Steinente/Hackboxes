/// <reference types='../CTAutocomplete' />
/// <reference lib='es2015' />

import SkyblockUtilities from '../SkyblockUtilities/index';
import Utils from '../SkyblockUtilities/utils/Utils';
import MCEntity from '../SkyblockUtilities/enums/MCEntity';
import Area from '../SkyblockUtilities/enums/Area';
import Color from '../SkyblockUtilities/enums/Color';
import Settings from './configfile';
import FileUtilities from '../FileUtilities/main';
import request from '../requestV2/index';

const GL11 = Java.type('org.lwjgl.opengl.GL11');
const GlStateManager = Java.type('net.minecraft.client.renderer.GlStateManager');

const Keybind = new KeyBind('Toggle module', 35, 'Hackboxes');
const ModuleName = 'Hackboxes';
const Version = JSON.parse(FileLib.read(`${Config.modulesFolder}/${ModuleName}/metadata.json`)).version;
const StartSeparator = `${Color.YELLOW}---------- ${Color.GOLD}${ModuleName} ${Color.YELLOW}----------${Color.LINE_BREAK}`;
const EndSeparator = `${Color.YELLOW}---------------------------------------`;
const SummoningEyeSkullOwner = '00a702b9-7bad-3205-a04b-52478d8c0e7f';
const TrevorNames = ['Trackable', 'Untrackable', 'Undetected', 'Endangered', 'Elusive'];

let rgb = [1, 0, 0];
let boxes = [];
let strings = [];
let boxesnew = [];
let stringnew = [];
let lividList = [];
let isPowderGhast = false;
let AreaVisibility = {};

updateMessage();
checkForUpdates();

register('command', () => Settings.openGUI()).setName('hb');
register('command', () => Settings.openGUI()).setName('hackboxes');

// Certainly there are nicer solutions - suggestions to me
register('step', () => {
	if (!Settings.enabled) return;
	AreaVisibility[Area.HUB] = Settings.hubEnabled;
	AreaVisibility[Area.SPIDERS_DEN] = Settings.spidersDenEnabled;
	AreaVisibility[Area.THE_END] = Settings.endEnabled;
	AreaVisibility[Area.DWARVEN_MINES] = Settings.dwarvenMinesEnabled;
	AreaVisibility[Area.THE_FARMING_ISLANDS] = Settings.farmingIslandsEnabled;
	AreaVisibility[Area.DUNGEON] = Settings.dungeonEnabled;
}).setFps(1);

register('renderWorld', ticks => {
	if (!Settings.enabled) return;
	boxes.forEach(render => {
		drawBox(...render, ticks);
	});
	strings.forEach(render => {
		drawNameThroughWalls(...render, ticks);
	});
});

// TODO: String not through the wall
register('tick', () => {
	toggleModule();
	if (!Settings.enabled) return;
	let allEntities = [];
	rgbChange();
	if (Settings.everywhereEnabled) {
		allEntities = World.getAllEntities();
		allEntities.forEach(entity => {
			let mcEntity = entity.entity;
			let entityName = ChatLib.removeFormatting(entity.getName());
			if (mcEntity instanceof MCEntity.ARMOR_STAND) {
				if (Settings.giftEnabled && entityName.includes('CLICK TO OPEN')) {
					boxesnew.push([entity, Settings.giftColor, Settings.giftRGBEnabled, 2, 1, 1, 1, Settings.giftThroughWallEnabled]);
				}
			}
		});
	}
	if (AreaVisibility[SkyblockUtilities.getArea()]) {
		if (allEntities.length === 0) allEntities = World.getAllEntities();
		allEntities.forEach(entity => {
			let mcEntity = entity.entity;
			let entityName = ChatLib.removeFormatting(entity.getName());
			// Builds and invokes function
			this['render' + SkyblockUtilities.getArea().replace(/[\\' ]/g, '')](entity, mcEntity, entityName);
		});
	}
	boxes = boxesnew;
	strings = stringnew;
	boxesnew = [];
	stringnew = [];
	isPowderGhast = false;
	lividList = [];
});

function renderHub(entity, mcEntity, entityName) {
	if (mcEntity instanceof MCEntity.ARMOR_STAND) {
		if (Settings.ratEnabled && Utils.containsAll(entityName, 'Rat', '❤')) {
			boxesnew.push([entity, Settings.ratColor, Settings.ratRGBEnabled, 1, 1, -1, 0, Settings.ratThroughWallEnabled]);
		}
		if (Settings.inquisitorEnabled && entityName.includes('Inquisitor')) {
			boxesnew.push([entity, Settings.inquisitorColor, Settings.inquisitorRGBEnabled, 3, 1, -2, 0, Settings.inquisitorThroughWallEnabled]);
		}
	}
}

function renderSpidersDen(entity, mcEntity, entityName) {
	if (mcEntity instanceof MCEntity.ARMOR_STAND) {
		if (Settings.fatherEnabled && entityName.includes('Broodfather')) {
			stringnew.push([entity, 0.05]);
			boxesnew.push([entity, Settings.fatherColor, Settings.fatherRGBEnabled, 5, 2, -1, 0, Settings.fatherThroughWallEnabled]);
		} else if (Settings.mutantEnabled && entityName.includes('Mutant')) {
			stringnew.push([entity, 0.05]);
			boxesnew.push([entity, Settings.mutantColor, Settings.mutantRGBEnabled, 5, 2, -1, 0, Settings.mutantThroughWallEnabled]);
		} else if (Settings.keeperEnabled && entityName.includes('Keeper')) {
			stringnew.push([entity, 0.05]);
			boxesnew.push([entity, Settings.keeperColor, Settings.keeperRGBEnabled, 5, 2, -1, 0, Settings.keeperThroughWallEnabled]);
		} else if (Settings.motherEnabled && entityName.includes('Mother')) {
			stringnew.push([entity, 0.05]);
			boxesnew.push([entity, Settings.motherColor, Settings.motherRGBEnabled, 5, 2, -1, 0, Settings.motherThroughWallEnabled]);
		} else if (Settings.arachneEnabled && entityName.includes('Arachne') && !Utils.containsAll(entityName, 'Brood', 'Fragment')) {
			stringnew.push([entity, 0.05]);
			boxesnew.push([entity, Settings.arachneColor, Settings.arachneRGBEnabled, 5, 2, -1, 0, Settings.arachneThroughWallEnabled]);
		}
	}
}

function renderTheEnd(entity, mcEntity, entityName) {
	if (Settings.eyeEnabled && mcEntity instanceof MCEntity.ITEM && getSkullOwner(mcEntity) === SummoningEyeSkullOwner) {
		boxesnew.push([entity, Settings.eyeColor, Settings.eyeRGBEnabled, 5, 0.5, 4, 0, Settings.eyeThroughWallEnabled]);
	}
	if (mcEntity instanceof MCEntity.ARMOR_STAND) {
		if (Settings.zealotEnabled && Utils.containsAll(entityName, '2000/2000', 'Zealot')) {
			stringnew.push([entity, 0.1]);
			boxesnew.push([entity, Settings.zealotColor, Settings.zealotRGBEnabled, 5, 1.5, -3, 0, Settings.zealotThroughWallEnabled]);
		}
	}
	if (mcEntity instanceof MCEntity.DRAGON) {
		if (Settings.dragonEnabled) {
			boxesnew.push([entity, Settings.dragonColor, Settings.dragonRGBEnabled, 5, 15, 8, 0, Settings.dragonThroughWallEnabled]);
		}
	}
}

function renderDwarvenMines(entity, mcEntity, entityName) {
	if (mcEntity instanceof MCEntity.ARMOR_STAND) {
		if (Settings.powderGhastEnabled && entityName.includes('Powder Ghast')) {
			isPowderGhast = true;
			stringnew.push([entity, 0.1]);
			boxesnew.push([entity, Settings.powderGhastColor, Settings.powderGhastRGBEnabled, 2, 4, -4, 0, Settings.powderGhastThroughWallEnabled]);
		}
	}
	if (Settings.superprotectronEnabled && mcEntity instanceof MCEntity.IRON_GOLEM) {
		boxesnew.push([entity, Settings.superprotectronColor, Settings.superprotectronRGBEnabled, 4, 1.7, 2.7, 0, Settings.superprotectronThroughWallEnabled]);
	}
	if (Settings.arrowEnabled && mcEntity instanceof MCEntity.ARROW && isPowderGhast) {
		boxesnew.push([entity, Settings.arrowColor, Settings.arrowRGBEnabled, 0.5, 0.5, 0.5, 0, Settings.arrowThroughWallEnabled]);
	}
	if (Settings.ghostEnabled && Player.getY() <= 105 && mcEntity instanceof MCEntity.CREEPER) {
		boxesnew.push([entity, Settings.ghostColor, Settings.ghostRGBEnabled, 1, 1, 2, 0, Settings.ghostThroughWallEnabled]);
	}
}

function renderTheFarmingIslands(entity, mcEntity, entityName) {
	if (mcEntity instanceof MCEntity.ARMOR_STAND) {
		TrevorNames.forEach(trevor => {
			if (Settings.trevorEnabled && entityName.includes(trevor)) {
				boxesnew.push([entity, Settings.trevorColor, Settings.trevorRGBEnabled, 1, 1, -1, 0, Settings.trevorThroughWallEnabled]);
			}
		});
	}
}

function renderDungeon(entity, mcEntity, entityName) {
	if (Settings.batEnabled && mcEntity instanceof MCEntity.BAT) {
		boxesnew.push([entity, Settings.batColor, Settings.batRGBEnabled, 1, 0.5, 0.5, 0, Settings.batThroughWallEnabled]);
	}
	if (mcEntity instanceof MCEntity.ARMOR_STAND) {
		switch(SkyblockUtilities.getFloor()) {
			case 1:
				if (Settings.bonzoEnabled && entityName.includes('Bonzo')) {
					boxesnew.push([entity, Settings.bonzoColor, Settings.bonzoRGBEnabled, 3, 1, -2, 0, Settings.bonzoThroughWallEnabled]);
				}
				break;
			case 5:
				if (Settings.lividEnabled && entityName.includes('Livid') && entityName.length > 5 && entityName.charAt(1) === entityName.charAt(5) && !lividList.includes(entity)) {
					lividList.push(entity);
					if (lividList.length === 9) {
						boxesnew.push([lividList[0], Settings.lividColor, Settings.lividRGBEnabled, 3, 1, -2, 0, Settings.lividThroughWallEnabled]);
					}
				}
				break;
			default:
				break;
		}
	}
}

function toggleModule() {
	if (Keybind.isPressed()) {
        Settings.enabled = !Settings.enabled;
		ChatLib.chat(`${Color.GRAY}[${Color.GOLD}${ModuleName}${Color.GRAY}] ${Settings.enabled ? Color.GREEN + 'Enabled' : Color.RED + 'Disabled'} ${Color.GRAY}module!`);
	}
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

function getColor(color) {
	return [transformColor(color.getRed()), transformColor(color.getGreen()), transformColor(color.getBlue())];
}

function transformColor(color) {
	return (1 / 255 * color).toFixed(2);
}

function getSkullOwner(mcEntity) {
	const ItemStr = new Item(mcEntity.func_92059_d()); // getMCEntity.ITEM()
	const NbtData = ItemStr.getNBT();
	const NBTBase = NbtData.getCompoundTag('tag').getCompoundTag('SkullOwner').get('Id');
	const SkullOwner = NBTBase !== null ? NBTBase.toString() : '';
	return SkullOwner.replace(/"/g, '');
}

const drawBox = (entity, color, isRGB, lineWidth, width, height, expandY, throughWall, partialTicks) => {
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

	let colors = [];
	if (isRGB) {
		colors = [rgb[0], rgb[1], rgb[2]];
	} else {
		colors = getColor(color);
	}
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

const drawNameThroughWalls = (entity, scale) => {
  Tessellator.drawString(entity.getName(), entity.getX(), entity.getY() + entity.getHeight() + 0.75, entity.getZ(), Renderer.WHITE, false, scale, false);
}

function updateMessage() {
	const NewVersion = `${Config.modulesFolder}/${ModuleName}/updates/${Version}`;
	if (!FileUtilities.exists(NewVersion)) {
		FileUtilities.newFile(NewVersion);
		const MessageStr = new Message(
			StartSeparator,
			`${Color.DARK_GREEN}Changelog:${Color.LINE_BREAK}`,
			`${Color.GRAY}● ${Color.GREEN}added Minos Inquisitor${Color.LINE_BREAK}`,
			`${Color.GRAY}● ${Color.GREEN}fixed Rat not working${Color.LINE_BREAK}${Color.LINE_BREAK}`,
			`${Color.AQUA}Discord for suggestions, bug-reports, more modules and more:${Color.LINE_BREAK}`,
			new TextComponent(`${Color.BLUE}https://discord.gg/W64ZJJQQxy${Color.LINE_BREAK}`).setClick('open_url', 'https://discord.gg/W64ZJJQQxy'),
			EndSeparator
		);
		ChatLib.chat(MessageStr);
	}
}

function checkForUpdates() {
	if (Settings.update) {
		request({
			url: `https://raw.githubusercontent.com/Steinente/${ModuleName}/master/metadata.json`,
			json: true
		}).then(response => {
			if (JSON.parse(JSON.stringify(response)).version !== Version) {
				const Link = `https://github.com/Steinente/${ModuleName}/releases/latest`;
				const MessageStr = new Message(
					StartSeparator,
					`${Color.RED}New version available! Download at:`,
					new TextComponent(`${Color.BLUE}${Link}${Color.LINE_BREAK}`).setClick('open_url', `${Link}`),
					EndSeparator
				);
				ChatLib.chat(MessageStr);
			}
		});
	}
}