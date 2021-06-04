import { @Vigilant, @SwitchProperty, @ColorProperty, @ButtonProperty, @SliderProperty } from 'Vigilance';
import Setting from '../utils/Setting';
const Color = Java.type('java.awt.Color');

@Vigilant(Setting.ModuleName, Setting.FarmingIslands)
class TheFarmingIslands {

    @ButtonProperty({
        name: Setting.General,
        placeholder: Setting.Open,
        category: Setting.FarmingIslands,
        subcategory: Setting.SubGeneral
    })
    openGeneral() {
        ChatLib.command('hb', true);
    }

    @SwitchProperty({
        name: Setting.Enabled,
        description: Setting.SpecificPlaceDescription,
        category: Setting.FarmingIslands,
        subcategory: Setting.FarmingIslands
    })
    enabled = true;

    @SliderProperty({
        name: Setting.Horizontal,
        min: 10,
        max: 60,
        category: Setting.FarmingIslands,
        subcategory: Setting.FarmingIslands
    })
    horizontal = 60;

    @SliderProperty({
        name: Setting.Vertical,
        min: 1,
        max: 200,
        category: Setting.FarmingIslands,
        subcategory: Setting.FarmingIslands
    })
    vertical = 200;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Must be killed to complete Trevor The Trapper quests',
        category: Setting.Trevor,
        subcategory: Setting.Trevor
    })
    trevorEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Trevor,
        subcategory: Setting.Trevor
    })
    trevorThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Trevor,
        subcategory: Setting.Trevor,
        allowAlpha: false
    })
    trevorColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Trevor,
        subcategory: Setting.Trevor
    })
    trevorRGBEnabled = false;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription(Setting.FarmingIslands, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Trevor, Setting.CategoryDescription);
    }
}
export default new TheFarmingIslands;