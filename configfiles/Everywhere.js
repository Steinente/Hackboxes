import { @Vigilant, @SwitchProperty, @ColorProperty, @ButtonProperty, @SliderProperty } from 'Vigilance';
import Setting from '../utils/Setting';
const Color = Java.type('java.awt.Color');

@Vigilant(Setting.ModuleName, Setting.Everywhere)
class Everywhere {

    @ButtonProperty({
        name: Setting.General,
        placeholder: Setting.Open,
        category: Setting.Everywhere,
        subcategory: Setting.SubGeneral
    })
    openGeneral() {
        ChatLib.command('hb', true);
    }

    @SwitchProperty({
        name: Setting.Enabled,
        description: Setting.SpecificPlaceDescription,
        category: Setting.Everywhere,
        subcategory: Setting.Everywhere
    })
    enabled = false;

    @SliderProperty({
        name: Setting.Horizontal,
        min: 10,
        max: 60,
        category: Setting.Everywhere,
        subcategory: Setting.Everywhere
    })
    horizontal = 25;

    @SliderProperty({
        name: Setting.Vertical,
        min: 1,
        max: 200,
        category: Setting.Everywhere,
        subcategory: Setting.Everywhere
    })
    vertical = 10;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Gifts!',
        category: Setting.Misc,
        subcategory: Setting.Gift
    })
    giftEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Misc,
        subcategory: Setting.Gift
    })
    giftThroughWallEnabled = false;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Misc,
        subcategory: Setting.Gift,
        allowAlpha: false
    })
    giftColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Misc,
        subcategory: Setting.Gift
    })
    giftRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Drops Jerry Box',
        category: Setting.Misc,
        subcategory: Setting.Jerry
    })
    jerryEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Misc,
        subcategory: Setting.Jerry
    })
    jerryThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Misc,
        subcategory: Setting.Jerry,
        allowAlpha: false
    })
    jerryColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Misc,
        subcategory: Setting.Jerry
    })
    jerryRGBEnabled = false;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription(Setting.Everywhere, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Misc, Setting.CategoryDescription);
    }
}
export default new Everywhere;