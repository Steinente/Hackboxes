import { @Vigilant, @SwitchProperty, @ButtonProperty } from 'Vigilance';
import Setting from '../utils/Setting';

@Vigilant(Setting.ModuleName, Setting.General)
class General {

    @SwitchProperty({
        name: Setting.Enabled,
        description: 'Creates borders around significant entities',
        category: Setting.General,
        subcategory: Setting.SubGeneral
    })
    enabled = true;

    @SwitchProperty({
        name: 'Notify when update',
        category: Setting.General,
        subcategory: Setting.Updates
    })
    update = true;

    // --------------------------------------

    @ButtonProperty({
        name: Setting.Everywhere,
        placeholder: Setting.Open,
        category: Setting.Areas,
        subcategory: Setting.Areas
    })
    openEverywhere() {
        ChatLib.command('hb everywhere', true);
    }

    @ButtonProperty({
        name: Setting.Hub,
        placeholder: Setting.Open,
        category: Setting.Areas,
        subcategory: Setting.Areas
    })
    openHub() {
        ChatLib.command('hb hub', true);
    }

    @ButtonProperty({
        name: Setting.Park,
        placeholder: Setting.Open,
        category: Setting.Areas,
        subcategory: Setting.Areas
    })
    openThePark() {
        ChatLib.command('hb park', true);
    }

    @ButtonProperty({
        name: Setting.SpidersDen,
        placeholder: Setting.Open,
        category: Setting.Areas,
        subcategory: Setting.Areas
    })
    openSpidersDen() {
        ChatLib.command('hb den', true);
    }

    @ButtonProperty({
        name: Setting.End,
        placeholder: Setting.Open,
        category: Setting.Areas,
        subcategory: Setting.Areas
    })
    openTheEnd() {
        ChatLib.command('hb end', true);
    }

    @ButtonProperty({
        name: Setting.DwarvenMines,
        placeholder: Setting.Open,
        category: Setting.Areas,
        subcategory: Setting.Areas
    })
    openDwarvenMines() {
        ChatLib.command('hb mines', true);
    }

    @ButtonProperty({
        name: Setting.FarmingIslands,
        placeholder: Setting.Open,
        category: Setting.Areas,
        subcategory: Setting.Areas
    })
    openTheFarmingIslands() {
        ChatLib.command('hb farming', true);
    }

    @ButtonProperty({
        name: Setting.Dungeon,
        placeholder: Setting.Open,
        category: Setting.Areas,
        subcategory: Setting.Areas
    })
    openDungeon() {
        ChatLib.command('hb dungeon', true);
    }

    constructor() {
        this.initialize(this);
        this.setCategoryDescription(Setting.General, Setting.CategoryDescription);
        this.setCategoryDescription(Setting.Areas, Setting.CategoryDescription);
    }
}
export default new General;