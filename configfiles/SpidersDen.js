import { @Vigilant, @SwitchProperty, @ColorProperty, @ButtonProperty } from 'Vigilance';
import Setting from '../utils/Setting';
const Color = Java.type('java.awt.Color');

@Vigilant(Setting.ModuleName, Setting.SpidersDen)
class SpidersDen {

    @ButtonProperty({
        name: Setting.General,
        placeholder: Setting.Open,
        category: Setting.SpidersDen,
        subcategory: Setting.SubGeneral
    })
    openGeneral() {
        ChatLib.command('hb', true);
    }

    @SwitchProperty({
        name: Setting.Enabled,
        description: Setting.SpecificPlaceDescription,
        category: Setting.SpidersDen,
        subcategory: Setting.SpidersDen
    })
    enabled = true;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Slayer Boss',
        category: Setting.Slayer,
        subcategory: Setting.Father
    })
    fatherEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Father
    })
    fatherThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Father,
        allowAlpha: false
    })
    fatherColor = new Color(1, 0, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Father
    })
    fatherRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Strong Tier IV Slayer Mini-Boss',
        category: Setting.Slayer,
        subcategory: Setting.Mutant
    })
    mutantEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Mutant
    })
    mutantThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Mutant,
        allowAlpha: false
    })
    mutantColor = new Color(1, 0, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Mutant
    })
    mutantRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Weak Tier IV Slayer Mini-Boss',
        category: Setting.Slayer,
        subcategory: Setting.Beast
    })
    beastEnabled = false;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Beast
    })
    beastThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Beast,
        allowAlpha: false
    })
    beastColor = new Color(0, 0, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Beast
    })
    beastRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Tier III Slayer Mini-Boss',
        category: Setting.Slayer,
        subcategory: Setting.Vermin
    })
    verminEnabled = false;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Slayer,
        subcategory: Setting.Vermin
    })
    verminThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Slayer,
        subcategory: Setting.Vermin,
        allowAlpha: false
    })
    verminColor = new Color(0, 1, 1);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Slayer,
        subcategory: Setting.Vermin
    })
    verminRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Drops Arachne Keeper Fragment',
        category: Setting.Arachne,
        subcategory: Setting.Keeper
    })
    keeperEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Arachne,
        subcategory: Setting.Keeper
    })
    keeperThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Arachne,
        subcategory: Setting.Keeper,
        allowAlpha: false
    })
    keeperColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Arachne,
        subcategory: Setting.Keeper
    })
    keeperRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Drops Spider Talisman',
        category: Setting.Misc,
        subcategory: Setting.Mother
    })
    motherEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Misc,
        subcategory: Setting.Mother
    })
    motherThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Misc,
        subcategory: Setting.Mother,
        allowAlpha: false
    })
    motherColor = new Color(0, 1, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Misc,
        subcategory: Setting.Mother
    })
    motherRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Arachne\`s wave mob',
        category: Setting.Arachne,
        subcategory: Setting.Brood
    })
    broodEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Arachne,
        subcategory: Setting.Brood
    })
    broodThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Arachne,
        subcategory: Setting.Brood,
        allowAlpha: false
    })
    broodColor = new Color(1, 0, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Arachne,
        subcategory: Setting.Brood
    })
    broodRGBEnabled = false;

    // --------------------------------------

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Summoned Boss',
        category: Setting.Arachne,
        subcategory: Setting.Arachne
    })
    arachneEnabled = true;

    @SwitchProperty({
        name: Setting.ThroughWall,
        category: Setting.Arachne,
        subcategory: Setting.Arachne
    })
    arachneThroughWallEnabled = true;

    @ColorProperty({
        name: Setting.Color,
        category: Setting.Arachne,
        subcategory: Setting.Arachne,
        allowAlpha: false
    })
    arachneColor = new Color(1, 1, 0);

    @SwitchProperty({
        name: Setting.RGB,
        category: Setting.Arachne,
        subcategory: Setting.Arachne
    })
    arachneRGBEnabled = false;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription(Setting.SpidersDen, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Slayer, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Arachne, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Misc, Setting.CategoryDescription);
    }
}
export default new SpidersDen;