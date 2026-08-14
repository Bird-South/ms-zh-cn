/**
 * PBS Editor 汉化字典
 *
 *
 * 键 = 该插件的英文源字符串（gettext 风格，必须与源码完全一致，区分大小写）。
 * 占位符如 {file} / {count} / {n} 需原样保留在翻译里，运行时由插件替换。
 *
 * index.js 通过 `import { pbsEditorDict } from "./pbs-editor.js"` 引入，
 * 再以 `...pbsEditorDict` 合并进整个应用的 zh-CN locale。
 */

export const pbsEditorDict = {
  // ── PBS Editor ──────────────────────────────────────────────────────────
  "PBS Editor": "PBS 编辑器",
  "Open PBS Editor": "打开 PBS 编辑器",
  "You have unsaved changes in the PBS Editor.": "PBS 编辑器中有未保存的更改。",

  // editor.js — toolbar
  "Search entries...": "搜索条目…",
  "Save": "保存",
  "Discard": "放弃",
  "+ New": "+ 新建",
  "Delete": "删除",
  "All files": "所有文件",
  "Base": "基础",

  // editor.js — states
  "Loading...": "加载中…",
  "Select a file type.": "选择一个文件类型。",
  "No entries in this file.": "此文件中没有条目。",
  "No entries match search.": "没有条目匹配搜索。",

  // editor.js — context menu
  "Duplicate": "复制",
  "Toggle Exclude": "切换排除",

  // editor.js — detail
  "[Excluded]": "[已排除]",

  // editor.js — save
  "Saved {file}": "已保存 {file}",
  "Save failed: {error}": "保存失败：{error}",

  // editor.js — status bar
  "{count} entries": "{count} 个条目",
  "{filtered} / {count}": "{filtered} / {count}",

  // editor.js — dialogs
  "Unsaved Changes": "未保存的更改",
  "You have unsaved changes in {fileType}. Discard?": "{fileType} 中有未保存的更改。放弃吗？",
  "Discard Changes": "放弃更改",
  "Discard all unsaved changes in {fileType}?": "放弃 {fileType} 中的所有未保存更改？",
  "New Entry": "新条目",
  "Enter name for new {type} entry:": "为新{type}输入名称：",
  "Delete Entry": "删除条目",
  "Delete \"{name}\"? This cannot be undone.": "删除 \"{name}\"？此操作无法撤销。",

  // components.js — search
  "Search...": "搜索…",

  // components.js — pagination
  "« First": "« 第一页",
  "← Prev": "← 上一页",
  "Next →": "下一页 →",
  "Last »": "最后一页 »",
  "Page {current} of {total}": "第 {current} / {total} 页",

  // components.js — preview
  "Select an entry to preview": "选择一个条目以预览",
  "No graphic": "无图形",
  "No loader": "无加载器",
  "Not found": "未找到",
  "Select an entry": "选择一个条目",

  // components.js — checkbox
  "Yes": "是",
  "No": "否",

  // components.js — buttons
  "+ Add": "+ 添加",
  "+ Add EV": "+ 添加 EV",
  "Browse": "浏览",

  // components.js — encounter editor
  "Density:": "密度：",
  "Min Lv": "最小等级",
  "Max Lv": "最大等级",
  "+ Add Pokemon": "+ 添加宝可梦",
  "+ Add Encounter Type": "+ 添加遭遇类型",

  // components.js — trainer editor
  "Pokemon {n}": "宝可梦 {n}",
  "Species": "物种",
  "Level": "等级",
  "Item": "道具",
  "Ability Index": "特性索引",
  "Moves": "招式",
  "Nature": "性格",
  "Gender": "性别",
  "Form": "形态",
  "Shiny": "闪光",
  "IVs": "个体值",
  "EVs": "努力值",

  // components.js — pairs/triplets
  "Method": "方法",
  "Param": "参数",

  // file-types.js — category labels
  "Pokemon": "宝可梦",
  "Forms": "形态",
  "Items": "道具",
  "Types": "类型",
  "Encounters": "遭遇",
  "Trainers": "训练家",
  "Trainer Types": "训练家类型",
  "Town Map": "城镇地图",
  "TM": "TM",
  "Abilities": "特性",

  // file-types.js — section labels
  "Basic": "基础",
  "Stats": "能力值",
  "Moves & Breeding": "招式与培育",
  "Evolution & Other": "进化与其他",
  "All Fields": "所有字段",
  "Stats & Abilities": "能力值与特性",
  "Moves & Evolution": "招式与进化",
  "Other": "其他",
  "Trainer Info": "训练家信息",

  // file-types.js — field labels
  "Name": "名称",
  "Internal Name": "内部名称",
  "Gender Ratio": "性别比例",
  "Growth Rate": "成长速度",
  "Color": "颜色",
  "Base Stats": "基础能力值",
  "Base Exp": "基础经验",
  "Catch Rate": "捕获率",
  "Happiness": "亲密度",
  "Hidden Ability": "隐藏特性",
  "Level Moves": "升级招式",
  "Tutor Moves": "教学招式",
  "Egg Moves": "蛋招式",
  "Egg Groups": "蛋组",
  "Evolutions": "进化",
  "Hatch Steps": "孵化步数",
  "Height": "身高",
  "Weight": "体重",
  "Category": "分类",
  "Habitat": "栖息地",
  "Pokedex Entry": "图鉴说明",
  "Pokedex": "宝可梦图鉴",
  "Battler Player Y": "玩家战斗精灵 Y",
  "Battler Enemy Y": "敌方战斗精灵 Y",
  "Battler Altitude": "战斗精灵高度",
  "Form Index": "形态索引",
  "Form Name": "形态名称",
  "Mega Stone": "超级石",
  "Region": "地区",
  "Function Code": "功能代码",
  "Power": "威力",
  "Type": "类型",
  "Accuracy": "命中率",
  "PP": "PP",
  "Effect Chance": "效果概率",
  "Priority": "优先级",
  "Target": "目标",
  "Flags": "标志",
  "Description": "描述",
  "Plural Name": "复数名称",
  "Pocket": "口袋",
  "Price": "价格",
  "Sell Price": "出售价格",
  "BP Price": "BP 价格",
  "Field Use": "野外使用",
  "Battle Use": "对战使用",
  "Consumable": "消耗品",
  "Show Quantity": "显示数量",
  "Move": "招式",
  "Move Name": "招式名称",
  "Compatible Pokemon": "兼容宝可梦",
  "Icon Position": "图标位置",
  "Pseudo Type": "伪属性",
  "Special Type": "特殊属性",
  "Weaknesses": "弱点",
  "Resistances": "抗性",
  "Immunities": "免疫",
  "Trainer Type": "训练家类型",
  "Version": "版本",
  "Lose Text": "胜利后显示文本",
  "Base Money": "基础金钱",
  "Skill Level": "技能等级",
  "Battle BGM": "对战 BGM",
  "Victory BGM": "胜利 BGM",
  "Intro BGM": "开场 BGM",
  "Filename": "文件名",

  // file-types.js — column labels
  "Internal": "内部名称",
  "Cat": "分类",
  "Pow": "威力",
  "Acc": "命中率",
  "Weak": "弱点",
  "Resist": "抗性",
  "Ver": "版本",
  "Base $": "基础 $",
  "Compatible": "兼容",
  "Index": "索引",
  "ID": "ID",
  "Map": "地图",

  // file-types.js — graphic labels
  "Front": "正面",
  "Back": "背面",
  "Female": "雌性",
  "Icon": "图标",
  "Icon Shiny": "闪光图标",
  "Sprite": "精灵图",
};
