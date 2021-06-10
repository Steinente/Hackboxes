import { @Vigilant, @SwitchProperty, @ColorProperty, @ButtonProperty, @SliderProperty } from 'Vigilance';
import Setting from '../utils/Setting';
const Color = Java.type('java.awt.Color');

@Vigilant(Setting.ModuleName, Setting.DeepCaverns)
class DeepCaverns {

    @ButtonProperty({
        name: Setting.General,
        placeholder: Setting.Open,
        category: Setting.DeepCaverns,
        subcategory: Setting.SubGeneral
    })
    openGeneral() {
        ChatLib.command('hb', true);
    }

    @SwitchProperty({
        name: Setting.Enabled,
        description: Setting.SpecificPlaceDescription,
        category: Setting.DeepCaverns,
        subcategory: Setting.DeepCaverns
    })
    enabled = true;

    @SliderProperty({
        name: Setting.Horizontal,
        min: 10,
        max: 60,
        category: Setting.DeepCaverns,
        subcategory: Setting.DeepCaverns
    })
    horizontal = 60;

    @SliderProperty({
        name: Setting.Vertical,
        min: 1,
        max: 200,
        category: Setting.DeepCaverns,
        subcategory: Setting.DeepCaverns
    })
    vertical = 200;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Is invisible',
        category: Setting.Misc,
        subcategory: Setting.Creeper
    })
    creeperEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Misc,
        subcategory: Setting.Creeper
    })
    creeperThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Misc,
        subcategory: Setting.Creeper,
        allowAlpha: false
    })
    creeperColor = new Color(1, 0, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Misc,
        subcategory: Setting.Creeper
    })
    creeperRGBEnabled = false;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription(Setting.DeepCaverns, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Misc, Setting.CategoryDescription);
    }
}
export default new DeepCaverns;