import { pbsEditorDict } from "./pbs-editor.js";
import { makerStudioDict } from "./maker-studio.js";

/**
 * 简体中文汉化 mod
 *
 * 原理：应用本体使用 gettext 风格的 i18n —— 所有界面文字以「英文源字符串」为键。
 * 通过 `ctx.i18n.registerLocale(...)`（Tier 2，「本地化整个应用」）注册一个完整的
 * zh-CN locale，它的 dict 覆盖应用的 `t()` 查找，从而汉化整个编辑器界面。
 *
 * 汉化后的语言会出现在 视图(View) → 语言(Language) 菜单中，用户可一键切换。
 * 切换逻辑、记忆、热重载恢复均由编辑器自动处理。
 *
 * dict 的键 = 应用的英文源字符串（gettext 风格，必须与源码完全一致，区分大小写）。
 * 占位符如 {file} / {count} / {n} 需原样保留在翻译里，运行时由编辑器替换。
 *
 * 字典拆分：
 *   - pbs-editor.js    → PBS Editor 插件汉化（...pbsEditorDict）
 *   - maker-studio.js  → Maker Studio 编辑器本体汉化（...makerStudioDict）
 * 两者在此合并为完整的 zh-CN locale。
 */

// ---------- 汉化字典 ----------
const en = {
  // PBS Editor 汉化（pbs-editor.js）
  ...pbsEditorDict,
  // Maker Studio 编辑器本体汉化（maker-studio.js）
  ...makerStudioDict,
};

export function activate(ctx) {
  // Tier 2：注册一个完整的应用级 locale，界面即被汉化。
  // 出现在 视图 → 语言 菜单中，名为「简体中文」。
  ctx.i18n.registerLocale({
    code: "zh-CN",
    name: "简体中文",
    dict: en,
  });

  // 注册后直接切换到 zh-CN（用户也可在 视图 → 语言 中手动切换）。
  ctx.i18n.setLocale("zh-CN");

  ctx.log.info(
    "汉化 mod 已加载。可用语言: " +
      ctx.i18n.locales().map((l) => `${l.code} (${l.name})`).join(", ")
  );
}

export function deactivate() {
  // registerLocale 返回的 Disposable 会在 mod 卸载 / 热重载时自动清理。
  // 若用户选中了本 mod 提供的 zh-CN，卸载/热重载后编辑器会自动回退到适合的语言。
}
