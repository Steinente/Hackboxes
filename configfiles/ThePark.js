import { @Vigilant, @SwitchProperty, @ColorProperty, @ButtonProperty, @SliderProperty } from 'Vigilance';
import Setting from '../utils/Setting';
const Color = Java.type('java.awt.Color');

@Vigilant(Setting.ModuleName, Setting.Park)
class ThePark {

    @ButtonProperty({
        name: Setting.General,
        placeholder: Setting.Open,
        category: Setting.Park,
        subcategory: Setting.SubGeneral
    })
    openGeneral() {
        ChatLib.command('hb', true);
    }

    @SwitchProperty({
        name: Setting.Enabled,
        description: Setting.SpecificPlaceDescription,
        category: Setting.Park,
        subcategory: Setting.Park
    })
    enabled = true;

    @SliderProperty({
        name: Setting.Horizontal,
        min: 10,
        max: 60,
        category: Setting.Park,
        subcategory: Setting.Park
    })
    horizontal = 60;

    @SliderProperty({
        name: Setting.Vertical,
        min: 1,
        max: 200,
        category: Setting.Park,
        subcategory: Setting.Park
    })
    vertical = 200;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Slayer Boss',
        category: Setting.Slayer,
        subcategory: Setting.Packmaster
    })
    packmasterEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Packmaster
    })
    packmasterThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Packmaster,
        allowAlpha: false
    })
    packmasterColor = new Color(1, 0, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Packmaster
    })
    packmasterRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Strong Tier IV Slayer Mini-Boss',
        category: Setting.Slayer,
        subcategory: Setting.Alpha
    })
    alphaEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Alpha
    })
    alphaThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Alpha,
        allowAlpha: false
    })
    alphaColor = new Color(1, 0, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Alpha
    })
    alphaRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Weak Tier IV Slayer Mini-Boss',
        category: Setting.Slayer,
        subcategory: Setting.Follower
    })
    followerEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Follower
    })
    followerThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Follower,
        allowAlpha: false
    })
    followerColor = new Color(0, 0, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Follower
    })
    followerRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Tier III Slayer Mini-Boss',
        category: Setting.Slayer,
        subcategory: Setting.Enforcer
    })
    enforcerEnabled = false;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Enforcer
    })
    enforcerThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Enforcer,
        allowAlpha: false
    })
    enforcerColor = new Color(0, 1, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Enforcer
    })
    enforcerRGBEnabled = false;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription(Setting.Park, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Slayer, Setting.CategoryDescription);
    }
}
export default new ThePark;