import { @Vigilant, @SwitchProperty, @ColorProperty, @ButtonProperty, @SliderProperty } from 'Vigilance';
import Setting from '../utils/Setting';
const Color = Java.type('java.awt.Color');

@Vigilant(Setting.ModuleName, Setting.CrystalHollows)
class CrystalHollows {

    @ButtonProperty({
        name: Setting.General,
        placeholder: Setting.Open,
        category: Setting.CrystalHollows,
        subcategory: Setting.SubGeneral
    })
    openGeneral() {
        ChatLib.command('hb', true);
    }

    @SwitchProperty({
        name: Setting.Enabled,
        description: Setting.SpecificPlaceDescription,
        category: Setting.CrystalHollows,
        subcategory: Setting.CrystalHollows
    })
    enabled = true;

    @SliderProperty({
        name: Setting.Horizontal,
        min: 10,
        max: 60,
        category: Setting.CrystalHollows,
        subcategory: Setting.CrystalHollows
    })
    horizontal = 60;

    @SliderProperty({
        name: Setting.Vertical,
        min: 1,
        max: 200,
        category: Setting.CrystalHollows,
        subcategory: Setting.CrystalHollows
    })
    vertical = 200;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Boss Giovanni',
        category: Setting.Boss,
        subcategory: Setting.Corleone
    })
    corleoneEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Boss,
        subcategory: Setting.Corleone
    })
    corleoneThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Boss,
        subcategory: Setting.Corleone,
        allowAlpha: false
    })
    corleoneColor = new Color(1, 0, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Boss,
        subcategory: Setting.Corleone
    })
    corleoneRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Drops Jungle Keys',
        category: Setting.Misc,
        subcategory: Setting.KeyGuardian
    })
    keyGuardianEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Misc,
        subcategory: Setting.KeyGuardian
    })
    keyGuardianThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Misc,
        subcategory: Setting.KeyGuardian,
        allowAlpha: false
    })
    keyGuardianColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Misc,
        subcategory: Setting.KeyGuardian
    })
    keyGuardianRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Drops Scatha Pet',
        category: Setting.Misc,
        subcategory: Setting.Worm
    })
    wormEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Misc,
        subcategory: Setting.Worm
    })
    wormThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Misc,
        subcategory: Setting.Worm,
        allowAlpha: false
    })
    wormColor = new Color(0, 1, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Misc,
        subcategory: Setting.Worm
    })
    wormRGBEnabled = true;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription(Setting.CrystalHollows, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Boss, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Misc, Setting.CategoryDescription);
    }
}
export default new CrystalHollows;