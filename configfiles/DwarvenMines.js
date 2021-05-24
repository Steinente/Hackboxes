import { @Vigilant, @SwitchProperty, @ColorProperty, @ButtonProperty } from 'Vigilance';
import Setting from '../utils/Setting';
const Color = Java.type('java.awt.Color');

@Vigilant(Setting.ModuleName, Setting.DwarvenMines)
class DwarvenMines {

    @ButtonProperty({
        name: Setting.General,
        placeholder: Setting.Open,
        category: Setting.DwarvenMines,
        subcategory: Setting.SubGeneral
    })
    openGeneral() {
        ChatLib.command('hb', true);
    }

    @SwitchProperty({
        name: Setting.Enabled,
        description: Setting.SpecificPlaceDescription,
        category: Setting.DwarvenMines,
        subcategory: Setting.DwarvenMines
    })
    enabled = true;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Drops 60 Mithril Powder per hit',
        category: Setting.Misc,
        subcategory: Setting.PowderGhast
    })
    powderGhastEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Misc,
        subcategory: Setting.PowderGhast
    })
    powderGhastThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Misc,
        subcategory: Setting.PowderGhast,
        allowAlpha: false
    })
    powderGhastColor = new Color(1, 0, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Misc,
        subcategory: Setting.PowderGhast
    })
    powderGhastRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Spawns during Goblin Raid',
        category: Setting.Event,
        subcategory: Setting.Superprotectron
    })
    superprotectronEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Event,
        subcategory: Setting.Superprotectron
    })
    superprotectronThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Event,
        subcategory: Setting.Superprotectron,
        allowAlpha: false
    })
    superprotectronColor = new Color(1, 0, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Event,
        subcategory: Setting.Superprotectron
    })
    superprotectronRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Shot arrows as long as the Powder Ghast lives',
        category: Setting.Misc,
        subcategory: Setting.Arrow
    })
    arrowEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Misc,
        subcategory: Setting.Arrow
    })
    arrowThroughWallEnabled = false;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Misc,
        subcategory: Setting.Arrow,
        allowAlpha: false
    })
    arrowColor = new Color(1, 1, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Misc,
        subcategory: Setting.Arrow
    })
    arrowRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Drops Sorrow',
        category: Setting.Misc,
        subcategory: Setting.Ghost
    })
    ghostEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Misc,
        subcategory: Setting.Ghost
    })
    ghostThroughWallEnabled = false;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Misc,
        subcategory: Setting.Ghost,
        allowAlpha: false
    })
    ghostColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Misc,
        subcategory: Setting.Ghost
    })
    ghostRGBEnabled = false;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription(Setting.DwarvenMines, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Event, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Misc, Setting.CategoryDescription);
    }
}
export default new DwarvenMines;