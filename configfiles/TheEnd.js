import { @Vigilant, @SwitchProperty, @ColorProperty, @ButtonProperty } from 'Vigilance';
import Setting from '../utils/Setting';
const Color = Java.type('java.awt.Color');

@Vigilant(Setting.ModuleName, Setting.End)
class TheEnd {

    @ButtonProperty({
        name: Setting.General,
        placeholder: Setting.Open,
        category: Setting.End,
        subcategory: Setting.SubGeneral
    })
    openGeneral() {
        ChatLib.command('hb', true);
    }

    @SwitchProperty({
        name: Setting.Enabled,
        description: Setting.SpecificPlaceDescription,
        category: Setting.End,
        subcategory: Setting.End
    })
    enabled = true;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Used for summoning the Ender Dragon',
        category: Setting.Zealot,
        subcategory: Setting.Eye
    })
    eyeEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Zealot,
        subcategory: Setting.Eye
    })
    eyeThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Zealot,
        subcategory: Setting.Eye,
        allowAlpha: false
    })
    eyeColor = new Color(1, 0, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Zealot,
        subcategory: Setting.Eye
    })
    eyeRGBEnabled = true;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Drops Summoning Eye',
        category: Setting.Zealot,
        subcategory: Setting.Zealot
    })
    zealotEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Zealot,
        subcategory: Setting.Zealot
    })
    zealotThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Zealot,
        subcategory: Setting.Zealot,
        allowAlpha: false
    })
    zealotColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Zealot,
        subcategory: Setting.Zealot
    })
    zealotRGBEnabled = true;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Slayer Mini-Boss',
        category: Setting.Slayer,
        subcategory: Setting.Fanatic
    })
    fanaticEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Fanatic
    })
    fanaticThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Fanatic,
        allowAlpha: false
    })
    fanaticColor = new Color(1, 0, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Fanatic
    })
    fanaticRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Slayer Boss',
        category: Setting.Slayer,
        subcategory: Setting.Slayer
    })
    slayerEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Slayer
    })
    slayerThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Slayer,
        allowAlpha: false
    })
    slayerColor = new Color(1, 0, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Slayer
    })
    slayerRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Summoned Boss',
        category: Setting.Dragon,
        subcategory: Setting.Dragon
    })
    dragonEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Dragon,
        subcategory: Setting.Dragon
    })
    dragonThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Dragon,
        subcategory: Setting.Dragon,
        allowAlpha: false
    })
    dragonColor = new Color(1, 1, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Dragon,
        subcategory: Setting.Dragon
    })
    dragonRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Drops Crystal Fragment',
        category: Setting.Dragon,
        subcategory: Setting.Crystal
    })
    crystalEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Dragon,
        subcategory: Setting.Crystal
    })
    crystalThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Dragon,
        subcategory: Setting.Crystal,
        allowAlpha: false
    })
    crystalColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Dragon,
        subcategory: Setting.Crystal
    })
    crystalRGBEnabled = true;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription(Setting.End, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Slayer, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Dragon, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Zealot, Setting.CategoryDescription);
    }
}
export default new TheEnd;