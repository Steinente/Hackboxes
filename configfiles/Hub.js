import { @Vigilant, @SwitchProperty, @ColorProperty, @ButtonProperty, @SliderProperty } from 'Vigilance';
import Setting from '../utils/Setting';
const Color = Java.type('java.awt.Color');

@Vigilant(Setting.ModuleName, Setting.Hub)
class Hub {

    @ButtonProperty({
        name: Setting.General,
        placeholder: Setting.Open,
        category: Setting.Hub,
        subcategory: Setting.SubGeneral
    })
    openGeneral() {
        ChatLib.command('hb', true);
    }

    @SwitchProperty({
        name: Setting.Enabled,
        description: Setting.SpecificPlaceDescription,
        category: Setting.Hub,
        subcategory: Setting.Hub
    })
    enabled = false;

    @SwitchProperty({
        name: Setting.Park,
        description: 'Also show entities from The Park',
        category: Setting.Hub,
        subcategory: Setting.Hub
    })
    parkEnabled = false;

    @SliderProperty({
        name: Setting.Horizontal,
        min: 10,
        max: 60,
        category: Setting.Hub,
        subcategory: Setting.Hub
    })
    horizontal = 20;

    @SliderProperty({
        name: Setting.Vertical,
        min: 1,
        max: 200,
        category: Setting.Hub,
        subcategory: Setting.Hub
    })
    vertical = 5;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Slayer Boss',
        category: Setting.Slayer,
        subcategory: Setting.Revenant
    })
    revenantEnabled = false;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Revenant
    })
    revenantThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Revenant,
        allowAlpha: false
    })
    revenantColor = new Color(1, 0, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Revenant
    })
    revenantRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Strong Tier V Slayer Mini-Boss',
        category: Setting.Slayer,
        subcategory: Setting.AtonedRev
    })
    atonedRevEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.AtonedRev
    })
    atonedRevThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.AtonedRev,
        allowAlpha: false
    })
    atonedRevColor = new Color(1, 0, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.AtonedRev
    })
    atonedRevRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Weak Tier V Slayer Mini-Boss',
        category: Setting.Slayer,
        subcategory: Setting.AtonedChamp
    })
    atonedChampEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.AtonedChamp
    })
    atonedChampThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.AtonedChamp,
        allowAlpha: false
    })
    atonedChampColor = new Color(0, 0, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.AtonedChamp
    })
    atonedChampRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Strong Tier IV Slayer Mini-Boss',
        category: Setting.Slayer,
        subcategory: Setting.Deformed
    })
    deformedEnabled = false;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Deformed
    })
    deformedThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Deformed,
        allowAlpha: false
    })
    deformedColor = new Color(1, 1, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Deformed
    })
    deformedRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Weak Tier IV Slayer Mini-Boss',
        category: Setting.Slayer,
        subcategory: Setting.Champ
    })
    champEnabled = false;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Champ
    })
    champThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Champ,
        allowAlpha: false
    })
    champColor = new Color(0, 1, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Champ
    })
    champRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Tier III Slayer Mini-Boss',
        category: Setting.Slayer,
        subcategory: Setting.Sycophant
    })
    sycophantEnabled = false;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Sycophant
    })
    sycophantThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Sycophant,
        allowAlpha: false
    })
    sycophantColor = new Color(1, 1, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Sycophant
    })
    sycophantRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Drops Rat Pet',
        category: Setting.Misc,
        subcategory: Setting.Rat
    })
    ratEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Misc,
        subcategory: Setting.Rat
    })
    ratThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Misc,
        subcategory: Setting.Rat,
        allowAlpha: false
    })
    ratColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Misc,
        subcategory: Setting.Rat
    })
    ratRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Nighttime Boss',
        category: Setting.Misc,
        subcategory: Setting.Horseman
    })
    horsemanEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Misc,
        subcategory: Setting.Horseman
    })
    horsemanThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Misc,
        subcategory: Setting.Horseman,
        allowAlpha: false
    })
    horsemanColor = new Color(1, 0, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Misc,
        subcategory: Setting.Horseman
    })
    horsemanRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Drops Chimera Book',
        category: Setting.Mythological,
        subcategory: Setting.Inquisitor
    })
    inquisitorEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Mythological,
        subcategory: Setting.Inquisitor
    })
    inquisitorThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Mythological,
        subcategory: Setting.Inquisitor,
        allowAlpha: false
    })
    inquisitorColor = new Color(1, 0, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Mythological,
        subcategory: Setting.Inquisitor
    })
    inquisitorRGBEnabled = false;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription(Setting.Hub, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Slayer, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Mythological, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Misc, Setting.CategoryDescription);
    }
}
export default new Hub;