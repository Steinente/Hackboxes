import { @Vigilant, @SwitchProperty, @ColorProperty, @ButtonProperty, @SliderProperty } from 'Vigilance';
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

    @SliderProperty({
        name: Setting.Horizontal,
        min: 10,
        max: 60,
        category: Setting.End,
        subcategory: Setting.End
    })
    horizontal = 60;

    @SliderProperty({
        name: Setting.Vertical,
        min: 1,
        max: 200,
        category: Setting.End,
        subcategory: Setting.End
    })
    vertical = 200;

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
        description: 'Tier III Slayer Mini-Boss',
        category: Setting.Slayer,
        subcategory: Setting.Devotee
    })
    devoteeEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Devotee
    })
    devoteeThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Devotee,
        allowAlpha: false
    })
    devoteeColor = new Color(0, 1, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Devotee
    })
    devoteeRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Weak Tier IV Slayer Mini-Boss',
        category: Setting.Slayer,
        subcategory: Setting.Radical
    })
    radicalEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Radical
    })
    radicalThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Radical,
        allowAlpha: false
    })
    radicalColor = new Color(0, 0, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Radical
    })
    radicalRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Strong Tier IV Slayer Mini-Boss',
        category: Setting.Slayer,
        subcategory: Setting.Maniac
    })
    maniacEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Maniac
    })
    maniacThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Maniac,
        allowAlpha: false
    })
    maniacColor = new Color(1, 0, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Maniac
    })
    maniacRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Slayer Boss',
        category: Setting.Slayer,
        subcategory: Setting.Seraph
    })
    seraphEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Seraph
    })
    seraphThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Seraph,
        allowAlpha: false
    })
    seraphColor = new Color(1, 0, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Seraph
    })
    seraphRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Beacon thrown by the slayer',
        category: Setting.Slayer,
        subcategory: Setting.Glyph
    })
    glyphEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Glyph
    })
    glyphThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Glyph,
        allowAlpha: false
    })
    glyphColor = new Color(0, 0, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Glyph
    })
    glyphRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Look at it or you will die',
        category: Setting.Slayer,
        subcategory: Setting.Weird
    })
    weirdEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Weird
    })
    weirdThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Weird,
        allowAlpha: false
    })
    weirdColor = new Color(1, 1, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Weird
    })
    weirdRGBEnabled = false;

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

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Spawns every 5.000 Zealots',
        category: Setting.Misc,
        subcategory: Setting.Protector
    })
    protectorEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Misc,
        subcategory: Setting.Protector
    })
    protectorThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Misc,
        subcategory: Setting.Protector,
        allowAlpha: false
    })
    protectorColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Misc,
        subcategory: Setting.Protector
    })
    protectorRGBEnabled = false;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription(Setting.End, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Slayer, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Dragon, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Zealot, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Misc, Setting.CategoryDescription);
    }
}
export default new TheEnd;