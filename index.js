/// <reference types='../CTAutocomplete' />
/// <reference lib='es2015' />

import SkyblockUtilities from "../SkyblockUtilities/index";
import Area from "../SkyblockUtilities/enums/Area";
import Color from "../SkyblockUtilities/enums/Color";
import Settings from './configfile';
import Utils from "../SkyblockUtilities/utils/Utils";
import FileUtilities from '../FileUtilities/main';
import request from '../requestV2/index';

const EntityArmorStand = Java.type('net.minecraft.entity.item.EntityArmorStand');
const EntityIronGolem = Java.type('net.minecraft.entity.monster.EntityIronGolem');
const EntityCreeper = Java.type('net.minecraft.entity.monster.EntityCreeper');
const EntityBat = Java.type('net.minecraft.entity.passive.EntityBat');
const EntityItem = Java.type('net.minecraft.entity.item.EntityItem');
const EntityArrow = Java.type('net.minecraft.entity.projectile.EntityArrow');
const GL11 = Java.type('org.lwjgl.opengl.GL11');
const GlStateManager = Java.type('net.minecraft.client.renderer.GlStateManager');

const moduleName = 'Hackboxes';
const version = JSON.parse(FileLib.read(`${Config.modulesFolder}/${moduleName}/metadata.json`)).version;
const breakLine = '\n';
const startSeparator = `${Color.YELLOW}---------- ${Color.GOLD}${moduleName} ${Color.YELLOW}----------${breakLine}`;
const endSeparator = `${Color.YELLOW}---------------------------------------`;
const SummoningEyeSkullOwner = '00a702b9-7bad-3205-a04b-52478d8c0e7f';
const TrevorNames = ['Elusive', 'Endangered', 'Trackable', 'Undetected', 'Untrackable'];

let boxes = [];
let strings = [];

updateMessage();
checkForUpdates();

register('command', () => Settings.openGUI()).setName('hb');
register('command', () => Settings.openGUI()).setName('hackboxes');

register('renderWorld', ticks => {
	if (isDisabled()) return;
	boxes.forEach(render => {
		drawBox(...render, ticks);
	})
	strings.forEach(render => {
		drawNameThroughWalls(...render, ticks);
	})
})

// TODO: String not through the wall
register('tick', () => {
	if (isDisabled()) return;
	let boxesnew = [];
	let stringnew = [];
	let lividList = [];
	let isPowderGhast = false;
	World.getAllEntities().forEach(entity => {
		let mcEntity = entity.entity;
		let entityName = ChatLib.removeFormatting(entity.getName());
		switch(SkyblockUtilities.getArea()) {
			case Area.SPIDERS_DEN:
				if (mcEntity instanceof EntityArmorStand) {
					if (Settings.broodfatherEnabled && entityName.includes('Broodfather')) {
						stringnew.push([entity, 0.05]);
						boxesnew.push([entity, Settings.broodfatherColor, 5, 2, -1, Settings.broodfatherThroughWallEnabled]);
					} else if (Settings.mutantEnabled && entityName.includes('Mutant')) {
						stringnew.push([entity, 0.05]);
						boxesnew.push([entity, Settings.mutantColor, 5, 2, -1, Settings.mutantThroughWallEnabled]);
					} else if (Settings.keeperEnabled && entityName.includes('Keeper')) {
						stringnew.push([entity, 0.05]);
						boxesnew.push([entity, Settings.keeperColor, 5, 2, -1, Settings.keeperThroughWallEnabled]);
					} else if (Settings.motherEnabled && entityName.includes('Mother')) {
						stringnew.push([entity, 0.05]);
						boxesnew.push([entity, Settings.motherColor, 5, 2, -1, Settings.motherThroughWallEnabled]);
					} else if (Settings.arachneEnabled && entityName.includes('Arachne') && !entityName.includes('Brood') && !entityName.includes('Fragment')) {
						stringnew.push([entity, 0.05]);
						boxesnew.push([entity, Settings.arachneColor, 5, 2, -1, Settings.arachneThroughWallEnabled]);
					}
				}
				break;
			case Area.DWARVEN_MINES:
				if (mcEntity instanceof EntityArmorStand) {
					if (Settings.powderGhastEnabled && entityName.includes('Powder Ghast')) {
						isPowderGhast = true;
						stringnew.push([entity, 0.1]);
						boxesnew.push([entity, Settings.powderGhastColor, 2, 4, -4, Settings.powderGhastThroughWallEnabled]);
					}
				}
				if (Settings.superprotectronEnabled && mcEntity instanceof EntityIronGolem) {
					boxesnew.push([entity, Settings.superprotectronColor, 4, 1.7, 2.7, Settings.superprotectronThroughWallEnabled]);
				}
				if (Settings.arrowEnabled && mcEntity instanceof EntityArrow && isPowderGhast) {
					boxesnew.push([entity, Settings.arrowColor, 0.5, 0.5, 0.5, Settings.arrowThroughWallEnabled]);
				}
				if (Settings.ghostEnabled && Player.getY() <= 105 && mcEntity instanceof EntityCreeper) {
					boxesnew.push([entity, Settings.ghostColor, 1, 1, 2, Settings.ghostThroughWallEnabled]);
				}
				break;
			case Area.DUNGEON:
				if (Settings.batEnabled && mcEntity instanceof EntityBat) {
					boxesnew.push([entity, Settings.batColor, 1, 0.5, 0.5, Settings.batThroughWallEnabled]);
				}
				if (mcEntity instanceof EntityArmorStand) {
					switch(SkyblockUtilities.getFloor()) {
						case 1:
							if (Settings.bonzoEnabled && entityName.includes('Bonzo')) {
								boxesnew.push([entity, Settings.bonzoColor, 3, 1, -2, Settings.bonzoThroughWallEnabled]);
							}
							break;
						case 5:
							if (Settings.lividEnabled && entityName.includes('Livid') && entityName.length > 5 && entityName.charAt(1) === entityName.charAt(5) && !lividList.includes(entity)) {
								lividList.push(entity);
								if (lividList.length === 9) {
									boxesnew.push([lividList[0], Settings.lividColor, 3, 1, -2, Settings.lividThroughWallEnabled]);
								}
							}
							break;
						default:
							break;
					}
				}
				break;
			case Area.THE_END:
				if (Settings.eyeEnabled && mcEntity instanceof EntityItem && getSkullOwner(mcEntity) === SummoningEyeSkullOwner) {
					boxesnew.push([entity, Settings.eyeColor, 5, 0.5, 4, Settings.eyeThroughWallEnabled]);
				}
				if (mcEntity instanceof EntityArmorStand) {
					if (Settings.zealotEnabled && Utils.containsAll(entityName, '2000/2000', 'Zealot')) {
						stringnew.push([entity, 0.1]);
						boxesnew.push([entity, Settings.zealotColor, 5, 1.5, -3, Settings.zealotThroughWallEnabled]);
					}
				}
				break;
			case Area.THE_FARMING_ISLANDS:
				if (mcEntity instanceof EntityArmorStand) {
					TrevorNames.forEach(trevor => {
						if (Settings.trevorEnabled && entityName.includes(trevor)) {
							boxesnew.push([entity, Settings.trevorColor, 1, 1, -1, Settings.trevorThroughWallEnabled]);
						}
					});
				}
				break;
			case Area.HUB:
				if (mcEntity instanceof EntityArmorStand) {
					if (Settings.ratEnabled && Utils.containsAll(entityName, 'Rat', '❤')) {
						boxesnew.push([entity, Settings.ratColor, 1, 1, -1, Settings.ratThroughWallEnabled]);
					}
				}
				break;
			default:
				break;
		}
	});
	boxes = boxesnew;
	strings = stringnew;
});

function isDisabled() {
	return !Settings.enabled || ![Area.SPIDERS_DEN, Area.DWARVEN_MINES, Area.DUNGEON, Area.THE_END, Area.THE_FARMING_ISLANDS, Area.HUB].includes(SkyblockUtilities.getArea());
}

function getColor(index) {
	switch(index) {
		case 0:
			return [0, 0, 0]; // black
		case 1:
			return [0, 0, 1]; // blue
		case 2:
			return [0, 1, 0]; // green
		case 3:
			return [0, 1, 1]; // cyan
		case 4:
			return [1, 0, 0]; // red
		case 5:
			return [1, 0, 1]; // magenta
		case 6:
			return [1, 1, 0]; // yellow
		default:
			return [1, 1, 1]; // white
	}
}

function getSkullOwner(mcEntity) {
	const item = new Item(mcEntity.func_92059_d()); // getEntityItem()
	const nbtData = item.getNBT();
	const skullOwner = nbtData.getCompoundTag('tag').getCompoundTag('SkullOwner').get('Id').toString();
	return skullOwner.replace(/"/g, '');
}

const drawBox = (entity, color, lineWidth, width, height, throughWall, partialTicks) => {
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

	const colors = getColor(color);
	let counter = 0;
	Tessellator.begin(3).colorize(colors[0], colors[1], colors[2]);
	positions.forEach(pos => {
		Tessellator.pos(
			entity.getX() + (entity.getX() - entity.getLastX()) * partialTicks + pos[0] * width,
			entity.getY() + (entity.getY() - entity.getLastY()) * partialTicks + pos[1] * height,
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
	const newVersion = `${Config.modulesFolder}/${moduleName}/updates/${version}`;
	if (!FileUtilities.exists(newVersion)) {
		FileUtilities.newFile(newVersion);
		const message = new Message(
			startSeparator,
			`${Color.DARK_GREEN}Changelog:${breakLine}`,
			`${Color.GRAY}● ${Color.GREEN}added this changelog functionality${breakLine}`,
      		`${Color.GRAY}● ${Color.GREEN}added update info${breakLine}`,
			`${Color.GRAY}● ${Color.GREEN}added Trevor Animals${breakLine}`,
			`${Color.GRAY}● ${Color.GREEN}added Rats${breakLine}${breakLine}`,
			`${Color.AQUA}Discord for suggestions, bug-reports, more modules and more:${breakLine}`,
			new TextComponent(`${Color.BLUE}https://discord.gg/W64ZJJQQxy${breakLine}`).setClick('open_url', 'https://discord.gg/W64ZJJQQxy'),
			endSeparator
		);
		ChatLib.chat(message);
	}
}

function checkForUpdates() {
	if (Settings.update) {
		request({
			url: `https://raw.githubusercontent.com/Steinente/${moduleName}/master/metadata.json`,
			json: true
		}).then(response => {
			if (JSON.parse(JSON.stringify(response)).version !== version) {
				const link = `https://github.com/Steinente/${moduleName}/releases/latest`;
				const message = new Message(
					startSeparator,
					`${Color.RED}New version available! Download at:`,
					new TextComponent(`${Color.BLUE}${link}${breakLine}`).setClick('open_url', `${link}`),
					endSeparator
				);
				ChatLib.chat(message);
			}
		});
	}
}