import { @Vigilant, @SwitchProperty, @ColorProperty, @ButtonProperty } from 'Vigilance';
import Setting from '../utils/Setting';
import SBSymbol from '../../SkyblockUtilities/enums/SBSymbol';
const Color = Java.type('java.awt.Color');

@Vigilant(Setting.ModuleName, Setting.Dungeon)
class Dungeon {

    @ButtonProperty({
        name: Setting.General,
        placeholder: Setting.Open,
        category: Setting.Dungeon,
        subcategory: Setting.SubGeneral
    })
    openGeneral() {
        ChatLib.command('hb', true);
    }

    @SwitchProperty({
        name: Setting.Enabled,
        description: Setting.SpecificPlaceDescription,
        category: Setting.Dungeon,
        subcategory: Setting.Dungeon
    })
    enabled = true;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Boss in Floor 1',
        category: Setting.Boss,
        subcategory: Setting.Bonzo
    })
    bonzoEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Boss,
        subcategory: Setting.Bonzo
    })
    bonzoThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Boss,
        subcategory: Setting.Bonzo,
        allowAlpha: false
    })
    bonzoColor = new Color(0, 0, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Boss,
        subcategory: Setting.Bonzo
    })
    bonzoRGBEnabled = true;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Boss in Floor 5',
        category: Setting.Boss,
        subcategory: Setting.Livid
    })
    lividEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Boss,
        subcategory: Setting.Livid
    })
    lividThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Boss,
        subcategory: Setting.Livid,
        allowAlpha: false
    })
    lividColor = new Color(0, 0, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Boss,
        subcategory: Setting.Livid
    })
    lividRGBEnabled = true;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Counts as a secret',
        category: Setting.Misc,
        subcategory: Setting.Bat
    })
    batEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Misc,
        subcategory: Setting.Bat
    })
    batThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Misc,
        subcategory: Setting.Bat,
        allowAlpha: false
    })
    batColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Misc,
        subcategory: Setting.Bat
    })
    batRGBEnabled = true;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Can be invisible',
        category: Setting.Misc,
        subcategory: Setting.Fels
    })
    felsEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Misc,
        subcategory: Setting.Fels
    })
    felsThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Misc,
        subcategory: Setting.Fels,
        allowAlpha: false
    })
    felsColor = new Color(1, 0, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Misc,
        subcategory: Setting.Fels
    })
    felsRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: `Mobs with ${SBSymbol.REQUIRE_STAR} in name`,
        category: Setting.Special,
        subcategory: Setting.RequiredMobs
    })
    requiredEnabled = false;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Special,
        subcategory: Setting.RequiredMobs
    })
    requiredThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Special,
        subcategory: Setting.RequiredMobs,
        allowAlpha: false
    })
    requiredColor = new Color(0, 0, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Special,
        subcategory: Setting.RequiredMobs
    })
    requiredRGBEnabled = false;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription(Setting.Dungeon, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Boss, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Misc, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Special, Setting.CategoryDescription);
    }
}
export default new Dungeon;