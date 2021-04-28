import { @Vigilant, @SwitchProperty, @SelectorProperty } from 'Vigilance';

// Strings
const categoryDescription = '&cHackboxes &7v0.0.1 by &6Steinente &7/ &6EnteStein';
const general = 'General';
const updates = 'Updates';
const spidersDen = 'Spider\'s Den';
const dwarvenMines = 'Dwarven Mines';
const dungeon = 'Dungeon';
const end = 'The End';
const theFarmingIslands = 'The Farming Islands';
const hub = 'Hub';
const enabled = 'Enabled';
const throughWall = 'Through Wall';
const color = 'Color';
const broodfather = 'Broodfather';
const mutant = 'Mutant Tarantula';
const keeper = 'Arachne\'s Keeper';
const mother = 'Brood Mother';
const arachne = 'Arachne';
const powderGhast = 'Powder Ghast';
const superprotectron = 'Superprotectron';
const arrow = 'Arrow';
const ghost = 'Ghost';
const bat = 'Bat';
const bonzo = 'Bonzo';
const livid = 'Livid';
const eye = 'Summoning Eye';
const zealot = 'Special Zealot';
const trevor = 'Trevor Animal';
const rat = 'Rat';

// Variables
const colorOptions = [
    'Black',
    'Blue',
    'Green',
    'Cyan',
    'Red',
    'Magenta',
    'Yellow',
    'White'
];

@Vigilant('Hackboxes')
class Settings {

    // General start
    @SwitchProperty({
        name: enabled,
        description: 'Creates borders around significant entities',
        category: general,
        subcategory: general
    })
    enabled = true;

    @SwitchProperty({
        name: 'Notify when update',
        category: general,
        subcategory: updates
    })
    update = true;
    // General end

    // Spider's Den start
    @SwitchProperty({
        name: enabled,
        description: 'Slayer Boss',
        category: spidersDen,
        subcategory: broodfather
    })
    broodfatherEnabled = true;

    @SwitchProperty({
        name: throughWall,
        category: spidersDen,
        subcategory: broodfather
    })
    broodfatherThroughWallEnabled = true;

    @SelectorProperty({
        name: color,
        category: spidersDen,
        subcategory: broodfather,
        options: colorOptions,
    })
    broodfatherColor = 4;

    // --------------------------------------

    @SwitchProperty({
        name: enabled,
        description: 'Slayer Mini-Boss',
        category: spidersDen,
        subcategory: mutant
    })
    mutantEnabled = true;

    @SwitchProperty({
        name: throughWall,
        category: spidersDen,
        subcategory: mutant
    })
    mutantThroughWallEnabled = true;

    @SelectorProperty({
        name: color,
        category: spidersDen,
        subcategory: mutant,
        options: colorOptions,
    })
    mutantColor = 5;

    // --------------------------------------

    @SwitchProperty({
        name: enabled,
        description: 'Drops Arachne Keeper Fragment',
        category: spidersDen,
        subcategory: keeper
    })
    keeperEnabled = true;

    @SwitchProperty({
        name: throughWall,
        category: spidersDen,
        subcategory: keeper
    })
    keeperThroughWallEnabled = true;

    @SelectorProperty({
        name: color,
        category: spidersDen,
        subcategory: keeper,
        options: colorOptions,
    })
    keeperColor = 2;

    // --------------------------------------

    @SwitchProperty({
        name: enabled,
        description: 'Drops Spider Talisman',
        category: spidersDen,
        subcategory: mother
    })
    motherEnabled = true;

    @SwitchProperty({
        name: throughWall,
        category: spidersDen,
        subcategory: mother
    })
    motherThroughWallEnabled = true;

    @SelectorProperty({
        name: color,
        category: spidersDen,
        subcategory: mother,
        options: colorOptions,
    })
    motherColor = 2;

    // --------------------------------------

    @SwitchProperty({
        name: enabled,
        description: 'Summoned Boss',
        category: spidersDen,
        subcategory: arachne
    })
    arachneEnabled = true;

    @SwitchProperty({
        name: throughWall,
        category: spidersDen,
        subcategory: arachne
    })
    arachneThroughWallEnabled = true;

    @SelectorProperty({
        name: color,
        category: spidersDen,
        subcategory: arachne,
        options: colorOptions,
    })
    arachneColor = 6;
    // Spider's Den end

    // Dwarven Mines start
    @SwitchProperty({
        name: enabled,
        description: 'Drops 60 Mithril Powder per hit',
        category: dwarvenMines,
        subcategory: powderGhast
    })
    powderGhastEnabled = true;

    @SwitchProperty({
        name: throughWall,
        category: dwarvenMines,
        subcategory: powderGhast
    })
    powderGhastThroughWallEnabled = true;

    @SelectorProperty({
        name: color,
        category: dwarvenMines,
        subcategory: powderGhast,
        options: colorOptions,
    })
    powderGhastColor = 4;

    // --------------------------------------

    @SwitchProperty({
        name: enabled,
        description: 'Spawns during Goblin Raid',
        category: dwarvenMines,
        subcategory: superprotectron
    })
    superprotectronEnabled = true;

    @SwitchProperty({
        name: throughWall,
        category: dwarvenMines,
        subcategory: superprotectron
    })
    superprotectronThroughWallEnabled = true;

    @SelectorProperty({
        name: color,
        category: dwarvenMines,
        subcategory: superprotectron,
        options: colorOptions,
    })
    superprotectronColor = 4;

    // --------------------------------------

    @SwitchProperty({
        name: enabled,
        description: 'Shot arrows as long as the Powder Ghast lives',
        category: dwarvenMines,
        subcategory: arrow
    })
    arrowEnabled = true;

    @SwitchProperty({
        name: throughWall,
        category: dwarvenMines,
        subcategory: arrow
    })
    arrowThroughWallEnabled = false;

    @SelectorProperty({
        name: color,
        category: dwarvenMines,
        subcategory: arrow,
        options: colorOptions,
    })
    arrowColor = 7;

    // --------------------------------------

    @SwitchProperty({
        name: enabled,
        description: 'Drops Sorrow',
        category: dwarvenMines,
        subcategory: ghost
    })
    ghostEnabled = true;

    @SwitchProperty({
        name: throughWall,
        category: dwarvenMines,
        subcategory: ghost
    })
    ghostThroughWallEnabled = false;

    @SelectorProperty({
        name: color,
        category: dwarvenMines,
        subcategory: ghost,
        options: colorOptions,
    })
    ghostColor = 2;
    // Dwarven Mines end

    // Dungeon start
    @SwitchProperty({
        name: enabled,
        description: 'Counts as a secret',
        category: dungeon,
        subcategory: bat
    })
    batEnabled = true;

    @SwitchProperty({
        name: throughWall,
        category: dungeon,
        subcategory: bat
    })
    batThroughWallEnabled = true;

    @SelectorProperty({
        name: color,
        category: dungeon,
        subcategory: bat,
        options: colorOptions,
    })
    batColor = 2;

    // --------------------------------------

    @SwitchProperty({
        name: enabled,
        description: 'Boss in Floor 1',
        category: dungeon,
        subcategory: bonzo
    })
    bonzoEnabled = true;

    @SwitchProperty({
        name: throughWall,
        category: dungeon,
        subcategory: bonzo
    })
    bonzoThroughWallEnabled = true;

    @SelectorProperty({
        name: color,
        category: dungeon,
        subcategory: bonzo,
        options: colorOptions,
    })
    bonzoColor = 1;

    // --------------------------------------

    @SwitchProperty({
        name: enabled,
        description: 'Boss in Floor 5',
        category: dungeon,
        subcategory: livid
    })
    lividEnabled = true;

    @SwitchProperty({
        name: throughWall,
        category: dungeon,
        subcategory: livid
    })
    lividThroughWallEnabled = true;

    @SelectorProperty({
        name: color,
        category: dungeon,
        subcategory: livid,
        options: colorOptions,
    })
    lividColor = 1;
    // Dungeon end

    // The End start
    @SwitchProperty({
        name: enabled,
        description: 'Used for summoning the Ender Dragon',
        category: end,
        subcategory: eye
    })
    eyeEnabled = true;

    @SwitchProperty({
        name: throughWall,
        category: end,
        subcategory: eye
    })
    eyeThroughWallEnabled = true;

    @SelectorProperty({
        name: color,
        category: end,
        subcategory: eye,
        options: colorOptions,
    })
    eyeColor = 5;

    // --------------------------------------

    @SwitchProperty({
        name: enabled,
        description: 'Drops Summoning Eye',
        category: end,
        subcategory: zealot
    })
    zealotEnabled = true;

    @SwitchProperty({
        name: throughWall,
        category: end,
        subcategory: zealot
    })
    zealotThroughWallEnabled = true;

    @SelectorProperty({
        name: color,
        category: end,
        subcategory: zealot,
        options: colorOptions,
    })
    zealotColor = 2;
    // The End end

    // The Farming Islands start
    @SwitchProperty({
        name: enabled,
        description: 'Must be killed to complete Trevor The Trapper quests',
        category: theFarmingIslands,
        subcategory: trevor
    })
    trevorEnabled = true;

    @SwitchProperty({
        name: throughWall,
        category: theFarmingIslands,
        subcategory: trevor
    })
    trevorThroughWallEnabled = true;

    @SelectorProperty({
        name: color,
        category: theFarmingIslands,
        subcategory: trevor,
        options: colorOptions,
    })
    trevorColor = 2;
    // The Farming Islands end

    // Hub start
    @SwitchProperty({
        name: enabled,
        description: 'Drops Rat Pet',
        category: hub,
        subcategory: rat
    })
    ratEnabled = true;

    @SwitchProperty({
        name: throughWall,
        category: hub,
        subcategory: rat
    })
    ratThroughWallEnabled = true;

    @SelectorProperty({
        name: color,
        category: hub,
        subcategory: rat,
        options: colorOptions,
    })
    ratColor = 2;
    // Hub end

    constructor() {
        this.initialize(this);
        this.setCategoryDescription(general, categoryDescription);
        this.setSubcategoryDescription(general, general, 'May cause lags - especially in the lobby.');
        this.setCategoryDescription(spidersDen, categoryDescription);
        this.setCategoryDescription(dwarvenMines, categoryDescription);
        this.setCategoryDescription(dungeon, categoryDescription);
        this.setCategoryDescription(end, categoryDescription);
        this.setCategoryDescription(theFarmingIslands, categoryDescription);
        this.setCategoryDescription(hub, categoryDescription);
    }
}

export default new Settings;
