import { @Vigilant, @SwitchProperty, @ColorProperty } from 'Vigilance';
const Color = Java.type('java.awt.Color');

const ModuleName = 'Hackboxes';
const Version = JSON.parse(FileLib.read(`${Config.modulesFolder}/${ModuleName}/metadata.json`)).version;

const CategoryDescription = `&c${ModuleName} &7v${Version} by &6Steinente &7/ &6EnteStein`;
const SpecificPlaceDescription = 'Creates borders around significant entities at the specific place';
const General = 'General';
const SubGeneral = ' General ';
const Updates = 'Updates';
const Everywhere = 'Everywhere';
const Hub = 'Hub';
const SpidersDen = 'Spider\'s Den';
const End = 'The End';
const DwarvenMines = 'Dwarven Mines';
const FarmingIslands = 'The Farming Islands';
const Dungeon = 'Dungeon';
const Enabled = 'Enabled';
const ThroughWall = 'Through Wall';
const ColorStr = 'Color';
const RGB = 'RGB';
const Gift = 'Gift';
const Rat = 'Rat';
const Father = 'Broodfather';
const Mutant = 'Mutant Tarantula';
const Keeper = 'Arachne\'s Keeper';
const Mother = 'Brood Mother';
const Arachne = 'Arachne';
const Eye = 'Summoning Eye';
const Zealot = 'Special Zealot';
const Dragon = 'Ender Dragon';
const PowderGhast = 'Powder Ghast';
const Superprotectron = 'Superprotectron';
const Arrow = 'Arrow';
const Ghost = 'Ghost';
const Trevor = 'Trevor Animal';
const Bat = 'Bat';
const Bonzo = 'Bonzo';
const Livid = 'Livid';

@Vigilant('Hackboxes')
class Settings {

    // General start
    @SwitchProperty({
        name: Enabled,
        description: 'Creates borders around significant entities',
        category: General,
        subcategory: SubGeneral
    })
    enabled = true;

    @SwitchProperty({
        name: 'Notify when update',
        category: General,
        subcategory: Updates
    })
    update = true;
    // General end

    // Everywhere start
    @SwitchProperty({
        name: Enabled,
        description: SpecificPlaceDescription,
        category: Everywhere,
        subcategory: SubGeneral
    })
    everywhereEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Enabled,
        description: 'Gifts!',
        category: Everywhere,
        subcategory: Gift
    })
    giftEnabled = true;

    @SwitchProperty({
        name: ThroughWall,
        category: Everywhere,
        subcategory: Gift
    })
    giftThroughWallEnabled = false;

    @ColorProperty({
        name: ColorStr,
        category: Everywhere,
        subcategory: Gift,
        allowAlpha: false
    })
    giftColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: RGB,
        category: Everywhere,
        subcategory: Gift
    })
    giftRGBEnabled = false;
    // Everywhere end

    // Hub start
    @SwitchProperty({
        name: Enabled,
        description: SpecificPlaceDescription,
        category: Hub,
        subcategory: SubGeneral
    })
    hubEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Enabled,
        description: 'Drops Rat Pet',
        category: Hub,
        subcategory: Rat
    })
    ratEnabled = true;

    @SwitchProperty({
        name: ThroughWall,
        category: Hub,
        subcategory: Rat
    })
    ratThroughWallEnabled = true;

    @ColorProperty({
        name: ColorStr,
        category: Hub,
        subcategory: Rat,
        allowAlpha: false
    })
    ratColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: RGB,
        category: Hub,
        subcategory: Rat
    })
    ratRGBEnabled = false;
    // Hub end

    // Spider's Den start
    @SwitchProperty({
        name: Enabled,
        description: SpecificPlaceDescription,
        category: SpidersDen,
        subcategory: SubGeneral
    })
    spidersDenEnabled = true;

    // --------------------------------------

    @SwitchProperty({
        name: Enabled,
        description: 'Slayer Boss',
        category: SpidersDen,
        subcategory: Father
    })
    fatherEnabled = true;

    @SwitchProperty({
        name: ThroughWall,
        category: SpidersDen,
        subcategory: Father
    })
    fatherThroughWallEnabled = true;

    @ColorProperty({
        name: ColorStr,
        category: SpidersDen,
        subcategory: Father,
        allowAlpha: false
    })
    fatherColor = new Color(1, 0, 0);

    @SwitchProperty({
        name: RGB,
        category: SpidersDen,
        subcategory: Father
    })
    fatherRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Enabled,
        description: 'Slayer Mini-Boss',
        category: SpidersDen,
        subcategory: Mutant
    })
    mutantEnabled = true;

    @SwitchProperty({
        name: ThroughWall,
        category: SpidersDen,
        subcategory: Mutant
    })
    mutantThroughWallEnabled = true;

    @ColorProperty({
        name: ColorStr,
        category: SpidersDen,
        subcategory: Mutant,
        allowAlpha: false
    })
    mutantColor = new Color(1, 0, 1);

    @SwitchProperty({
        name: RGB,
        category: SpidersDen,
        subcategory: Mutant
    })
    mutantRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Enabled,
        description: 'Drops Arachne Keeper Fragment',
        category: SpidersDen,
        subcategory: Keeper
    })
    keeperEnabled = true;

    @SwitchProperty({
        name: ThroughWall,
        category: SpidersDen,
        subcategory: Keeper
    })
    keeperThroughWallEnabled = true;

    @ColorProperty({
        name: ColorStr,
        category: SpidersDen,
        subcategory: Keeper,
        allowAlpha: false
    })
    keeperColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: RGB,
        category: SpidersDen,
        subcategory: Keeper
    })
    keeperRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Enabled,
        description: 'Drops Spider Talisman',
        category: SpidersDen,
        subcategory: Mother
    })
    motherEnabled = true;

    @SwitchProperty({
        name: ThroughWall,
        category: SpidersDen,
        subcategory: Mother
    })
    motherThroughWallEnabled = true;

    @ColorProperty({
        name: ColorStr,
        category: SpidersDen,
        subcategory: Mother,
        allowAlpha: false
    })
    motherColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: RGB,
        category: SpidersDen,
        subcategory: Mother
    })
    motherRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Enabled,
        description: 'Summoned Boss',
        category: SpidersDen,
        subcategory: Arachne
    })
    arachneEnabled = true;

    @SwitchProperty({
        name: ThroughWall,
        category: SpidersDen,
        subcategory: Arachne
    })
    arachneThroughWallEnabled = true;

    @ColorProperty({
        name: ColorStr,
        category: SpidersDen,
        subcategory: Arachne,
        allowAlpha: false
    })
    arachneColor = new Color(1, 1, 0);

    @SwitchProperty({
        name: RGB,
        category: SpidersDen,
        subcategory: Arachne
    })
    arachneRGBEnabled = false;
    // Spider's Den end

    // The End start
    @SwitchProperty({
        name: Enabled,
        description: SpecificPlaceDescription,
        category: End,
        subcategory: SubGeneral
    })
    endEnabled = true;

    // --------------------------------------

    @SwitchProperty({
        name: Enabled,
        description: 'Used for summoning the Ender Dragon',
        category: End,
        subcategory: Eye
    })
    eyeEnabled = true;

    @SwitchProperty({
        name: ThroughWall,
        category: End,
        subcategory: Eye
    })
    eyeThroughWallEnabled = true;

    @ColorProperty({
        name: ColorStr,
        category: End,
        subcategory: Eye,
        allowAlpha: false
    })
    eyeColor = new Color(1, 0, 1);

    @SwitchProperty({
        name: RGB,
        category: End,
        subcategory: Eye
    })
    eyeRGBEnabled = true;

    // --------------------------------------

    @SwitchProperty({
        name: Enabled,
        description: 'Drops Summoning Eye',
        category: End,
        subcategory: Zealot
    })
    zealotEnabled = true;

    @SwitchProperty({
        name: ThroughWall,
        category: End,
        subcategory: Zealot
    })
    zealotThroughWallEnabled = true;

    @ColorProperty({
        name: ColorStr,
        category: End,
        subcategory: Zealot,
        allowAlpha: false
    })
    zealotColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: RGB,
        category: End,
        subcategory: Zealot
    })
    zealotRGBEnabled = true;

    // --------------------------------------

    @SwitchProperty({
        name: Enabled,
        description: 'Summoned Boss',
        category: End,
        subcategory: Dragon
    })
    dragonEnabled = true;

    @SwitchProperty({
        name: ThroughWall,
        category: End,
        subcategory: Dragon
    })
    dragonThroughWallEnabled = true;

    @ColorProperty({
        name: ColorStr,
        category: End,
        subcategory: Dragon,
        allowAlpha: false
    })
    dragonColor = new Color(1, 1, 1);

    @SwitchProperty({
        name: RGB,
        category: End,
        subcategory: Dragon
    })
    dragonRGBEnabled = false;
    // The End end

    // Dwarven Mines start
    @SwitchProperty({
        name: Enabled,
        description: SpecificPlaceDescription,
        category: DwarvenMines,
        subcategory: SubGeneral
    })
    dwarvenMinesEnabled = true;

    // --------------------------------------

    @SwitchProperty({
        name: Enabled,
        description: 'Drops 60 Mithril Powder per hit',
        category: DwarvenMines,
        subcategory: PowderGhast
    })
    powderGhastEnabled = true;

    @SwitchProperty({
        name: ThroughWall,
        category: DwarvenMines,
        subcategory: PowderGhast
    })
    powderGhastThroughWallEnabled = true;

    @ColorProperty({
        name: ColorStr,
        category: DwarvenMines,
        subcategory: PowderGhast,
        allowAlpha: false
    })
    powderGhastColor = new Color(1, 0, 0);

    @SwitchProperty({
        name: RGB,
        category: DwarvenMines,
        subcategory: PowderGhast
    })
    powderGhastRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Enabled,
        description: 'Spawns during Goblin Raid',
        category: DwarvenMines,
        subcategory: Superprotectron
    })
    superprotectronEnabled = true;

    @SwitchProperty({
        name: ThroughWall,
        category: DwarvenMines,
        subcategory: Superprotectron
    })
    superprotectronThroughWallEnabled = true;

    @ColorProperty({
        name: ColorStr,
        category: DwarvenMines,
        subcategory: Superprotectron,
        allowAlpha: false
    })
    superprotectronColor = new Color(1, 0, 0);

    @SwitchProperty({
        name: RGB,
        category: DwarvenMines,
        subcategory: Superprotectron
    })
    superprotectronRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Enabled,
        description: 'Shot arrows as long as the Powder Ghast lives',
        category: DwarvenMines,
        subcategory: Arrow
    })
    arrowEnabled = true;

    @SwitchProperty({
        name: ThroughWall,
        category: DwarvenMines,
        subcategory: Arrow
    })
    arrowThroughWallEnabled = false;

    @ColorProperty({
        name: ColorStr,
        category: DwarvenMines,
        subcategory: Arrow,
        allowAlpha: false
    })
    arrowColor = new Color(1, 1, 1);

    @SwitchProperty({
        name: RGB,
        category: DwarvenMines,
        subcategory: Arrow
    })
    arrowRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Enabled,
        description: 'Drops Sorrow',
        category: DwarvenMines,
        subcategory: Ghost
    })
    ghostEnabled = true;

    @SwitchProperty({
        name: ThroughWall,
        category: DwarvenMines,
        subcategory: Ghost
    })
    ghostThroughWallEnabled = false;

    @ColorProperty({
        name: ColorStr,
        category: DwarvenMines,
        subcategory: Ghost,
        allowAlpha: false
    })
    ghostColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: RGB,
        category: DwarvenMines,
        subcategory: Ghost
    })
    ghostRGBEnabled = false;
    // Dwarven Mines end

    // The Farming Islands start
    @SwitchProperty({
        name: Enabled,
        description: SpecificPlaceDescription,
        category: FarmingIslands,
        subcategory: SubGeneral
    })
    farmingIslandsEnabled = true;

    // --------------------------------------

    @SwitchProperty({
        name: Enabled,
        description: 'Must be killed to complete Trevor The Trapper quests',
        category: FarmingIslands,
        subcategory: Trevor
    })
    trevorEnabled = true;

    @SwitchProperty({
        name: ThroughWall,
        category: FarmingIslands,
        subcategory: Trevor
    })
    trevorThroughWallEnabled = true;

    @ColorProperty({
        name: ColorStr,
        category: FarmingIslands,
        subcategory: Trevor,
        allowAlpha: false
    })
    trevorColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: RGB,
        category: FarmingIslands,
        subcategory: Trevor
    })
    trevorRGBEnabled = false;
    // The Farming Islands end

    // Dungeon start
    @SwitchProperty({
        name: Enabled,
        description: SpecificPlaceDescription,
        category: Dungeon,
        subcategory: SubGeneral
    })
    dungeonEnabled = true;

    // --------------------------------------

    @SwitchProperty({
        name: Enabled,
        description: 'Counts as a secret',
        category: Dungeon,
        subcategory: Bat
    })
    batEnabled = true;

    @SwitchProperty({
        name: ThroughWall,
        category: Dungeon,
        subcategory: Bat
    })
    batThroughWallEnabled = true;

    @ColorProperty({
        name: ColorStr,
        category: Dungeon,
        subcategory: Bat,
        allowAlpha: false
    })
    batColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: RGB,
        category: Dungeon,
        subcategory: Bat
    })
    batRGBEnabled = true;

    // --------------------------------------

    @SwitchProperty({
        name: Enabled,
        description: 'Boss in Floor 1',
        category: Dungeon,
        subcategory: Bonzo
    })
    bonzoEnabled = true;

    @SwitchProperty({
        name: ThroughWall,
        category: Dungeon,
        subcategory: Bonzo
    })
    bonzoThroughWallEnabled = true;

    @ColorProperty({
        name: ColorStr,
        category: Dungeon,
        subcategory: Bonzo,
        allowAlpha: false
    })
    bonzoColor = new Color(0, 0, 1);

    @SwitchProperty({
        name: RGB,
        category: Dungeon,
        subcategory: Bonzo
    })
    bonzoRGBEnabled = true;

    // --------------------------------------

    @SwitchProperty({
        name: Enabled,
        description: 'Boss in Floor 5',
        category: Dungeon,
        subcategory: Livid
    })
    lividEnabled = true;

    @SwitchProperty({
        name: ThroughWall,
        category: Dungeon,
        subcategory: Livid
    })
    lividThroughWallEnabled = true;

    @ColorProperty({
        name: ColorStr,
        category: Dungeon,
        subcategory: Livid,
        allowAlpha: false
    })
    lividColor = new Color(0, 0, 1);

    @SwitchProperty({
        name: RGB,
        category: Dungeon,
        subcategory: Livid
    })
    lividRGBEnabled = true;
    // Dungeon end

    constructor() {
        this.initialize(this);
        this.setCategoryDescription(General, CategoryDescription);
        this.setSubcategoryDescription(General, General, 'May cause lags - especially in the Hub.');
        this.setCategoryDescription(Everywhere, CategoryDescription);
        this.setCategoryDescription(Hub, CategoryDescription);
        this.setCategoryDescription(SpidersDen, CategoryDescription);
        this.setCategoryDescription(End, CategoryDescription);
        this.setCategoryDescription(DwarvenMines, CategoryDescription);
        this.setCategoryDescription(FarmingIslands, CategoryDescription);
        this.setCategoryDescription(Dungeon, CategoryDescription);
    }
}

export default new Settings;
