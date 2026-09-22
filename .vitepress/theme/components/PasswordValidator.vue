<script setup lang="ts">
/**
 * 密码格式校验组件
 *
 * 用途：账号注册前自查密码是否满足服务器要求，并**逐字符**指出哪一位不符合条件。
 * 全部逻辑在浏览器本地完成，不发送任何请求（密码不会离开用户设备）。
 *
 * 规则与 `docs/guide/quickstart/account` 的表格保持一致，改动时需同步：
 *   长度 5-32 位；≥1 数字；≥1 大写字母；≥2 小写字母；≥2 特殊字符（仅 !@#$%^&*?）
 */
import { computed, ref } from "vue";

/** 允许使用的特殊字符（共 9 个） */
const SPECIAL_CHARS = "!@#$%^&*?";
/** 允许出现在密码中的单个字符：字母、数字、上表 9 个特殊字符 */
const ALLOWED_CHAR = /^[A-Za-z0-9!@#$%^&*?]$/;
/** 长度下限 / 上限 */
const MIN_LENGTH = 5;
const MAX_LENGTH = 32;

/** 用户输入（用 Array.from 按「字符」计数，避免中文/emoji 被算成多个） */
const password = ref("");
/** 明文显示开关：密码校验需要肉眼比对，默认明文，可一键隐藏 */
const revealed = ref(true);

const chars = computed(() => Array.from(password.value));
const length = computed(() => chars.value.length);

/** 各类字符的出现次数 */
const counts = computed(() => {
  let digit = 0;
  let upper = 0;
  let lower = 0;
  let special = 0;
  for (const char of chars.value) {
    if (char >= "0" && char <= "9") digit += 1;
    else if (char >= "A" && char <= "Z") upper += 1;
    else if (char >= "a" && char <= "z") lower += 1;
    else if (SPECIAL_CHARS.includes(char)) special += 1;
  }
  return { digit, upper, lower, special };
});

interface RuleItem {
  key: string;
  label: string;
  /** 已满足 */
  ok: boolean;
  /** 右侧状态说明 */
  state: string;
}

/** 逐条规则明细，「还差多少」写在 state 里，方便用户按提示补 */
const rules = computed<RuleItem[]>(() => {
  const { digit, upper, lower, special } = counts.value;
  const len = length.value;

  /** 数量型要求的文案 */
  const need = (current: number, required: number) => {
    if (current >= required) return `已满足（当前 ${current} 个）`;
    if (current === 0) return `一个都没有，需要 ${required} 个`;
    return `当前 ${current} 个，还差 ${required - current} 个`;
  };

  return [
    {
      key: "length",
      label: `长度 ${MIN_LENGTH} – ${MAX_LENGTH} 位`,
      ok: len >= MIN_LENGTH && len <= MAX_LENGTH,
      state:
        len === 0
          ? "尚未输入"
          : len < MIN_LENGTH
            ? `当前 ${len} 位，还差 ${MIN_LENGTH - len} 位`
            : len > MAX_LENGTH
              ? `当前 ${len} 位，超出 ${len - MAX_LENGTH} 位`
              : `已满足（当前 ${len} 位）`,
    },
    {
      key: "digit",
      label: "至少 1 个数字",
      ok: digit >= 1,
      state: need(digit, 1),
    },
    {
      key: "upper",
      label: "至少 1 个大写字母",
      ok: upper >= 1,
      state: need(upper, 1),
    },
    {
      key: "lower",
      label: "至少 2 个小写字母",
      ok: lower >= 2,
      state: need(lower, 2),
    },
    {
      key: "special",
      label: `至少 2 个特殊字符（${SPECIAL_CHARS}）`,
      ok: special >= 2,
      state: need(special, 2),
    },
  ];
});

/** 页面上的不可见字符在这里给出可见替身 */
const VISIBLE: Record<string, string> = { " ": "␠", "\t": "→" };

interface BadChar {
  /** 从 1 开始的位置，与人类数位习惯一致 */
  position: number;
  /** 展示用字符（空白字符用替身） */
  display: string;
  /** 字符归类，例如「全角字符」「下划线」 */
  kind: string;
  /** 具体怎么改 */
  hint: string;
  /** Unicode 码位，用于分辨长得很像的字符 */
  code: string;
}

/**
 * 判断单个字符是否违规，并给出可执行的修改建议。
 * @param char 待判断字符
 * @param position 该字符在密码中的位置（从 1 开始）
 * @returns 违规返回 BadChar，合规返回 null
 */
function classifyChar(char: string, position: number): BadChar | null {
  if (ALLOWED_CHAR.test(char)) return null;

  const codePoint = char.codePointAt(0) ?? 0;
  const code = `U+${codePoint.toString(16).toUpperCase().padStart(4, "0")}`;
  let kind = "该字符";
  let hint = `不在允许范围内，请改用字母、数字或 ${SPECIAL_CHARS} 之一`;

  if (char === "_") {
    kind = "下划线";
    hint =
      "下划线不计入特殊字符，也不能作为密码字符，请删除或换成允许的特殊字符";
  } else if (/\s/.test(char)) {
    kind = char === " " ? "空格" : "空白字符";
    hint =
      "空格/制表符不计入特殊字符，请删除；若需要特殊字符请用允许的 9 个符号";
  } else if (/[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/.test(char)) {
    kind = "中文字符";
    hint = "密码只能使用字母、数字与允许的特殊字符，请删除";
  } else if (/[\u3000-\u303F\uFF00-\uFFEF]/.test(char)) {
    kind = "全角字符";
    hint = "这是全角字符，请改用对应的半角字符（例如 ！→ ! ，Ａ→ A ，０→ 0）";
  } else if (/[\u2000-\u200F\u2028-\u202F\u205F\u3000]/.test(char)) {
    kind = "不可见字符";
    hint = "从其它地方复制密码时容易混入，请删除后重新输入";
  }

  return { position, display: VISIBLE[char] ?? char, kind, hint, code };
}

/** 全部违规字符 */
const badChars = computed(() =>
  chars.value
    .map((char, index) => classifyChar(char, index + 1))
    .filter((item): item is BadChar => item !== null),
);

/** 是否已输入内容 */
const isEmpty = computed(() => length.value === 0);
/** 所有规则是否都满足 */
const allRulesPassed = computed(
  () =>
    !isEmpty.value &&
    badChars.value.length === 0 &&
    rules.value.every((rule) => rule.ok),
);

/** 汇总状态：idle（未输入）/ ok（可用）/ bad（未通过） */
const status = computed<"idle" | "ok" | "bad">(() => {
  if (isEmpty.value) return "idle";
  return allRulesPassed.value ? "ok" : "bad";
});

const summary = computed(() => {
  if (isEmpty.value) return "输入密码后开始逐项校验";
  if (allRulesPassed.value) return "密码符合全部要求，可以使用";

  const failed = rules.value.filter((rule) => !rule.ok).length;
  const parts: string[] = [];
  if (failed > 0) parts.push(`${failed} 项要求未满足`);
  if (badChars.value.length > 0)
    parts.push(`${badChars.value.length} 个字符不符合条件`);
  return `还有 ${parts.join("，")}`;
});
</script>

<template>
  <section class="pwv">
    <div class="pwv-head">
      <span class="pwv-title">密码格式校验</span>
      <span class="pwv-tip">边输边查，会指出具体是哪一位字符不符合条件</span>
    </div>

    <div class="pwv-field">
      <input
        v-model="password"
        class="pwv-input"
        :type="revealed ? 'text' : 'password'"
        placeholder="在此输入你打算使用的密码"
        autocomplete="new-password"
        spellcheck="false"
        aria-label="待校验的密码"
      />
      <button class="pwv-btn" type="button" @click="revealed = !revealed">
        {{ revealed ? "隐藏" : "显示" }}
      </button>
      <button
        v-if="!isEmpty"
        class="pwv-btn"
        type="button"
        @click="password = ''"
      >
        清空
      </button>
    </div>

    <p class="pwv-privacy">
      校验全部在你的浏览器里完成，输入内容不会被上传或保存。
    </p>

    <!-- 逐字符视图：违规字符标红，鼠标悬停可看该字符的问题 -->
    <div v-if="!isEmpty" class="pwv-chars" aria-hidden="true">
      <span
        v-for="(char, index) in chars"
        :key="index"
        class="pwv-ch"
        :class="{ 'is-bad': !ALLOWED_CHAR.test(char) }"
        :title="
          classifyChar(char, index + 1)
            ? classifyChar(char, index + 1)!.hint
            : '符合要求'
        "
      >
        {{ VISIBLE[char] ?? char }}
      </span>
    </div>

    <p class="pwv-summary" :class="`is-${status}`" aria-live="polite">
      <span class="pwv-dot" aria-hidden="true" />
      {{ summary }}
    </p>

    <ul class="pwv-rules">
      <li v-for="rule in rules" :key="rule.key" :class="{ 'is-ok': rule.ok }">
        <span class="pwv-mark" aria-hidden="true">
          <svg viewBox="0 0 16 16" width="13" height="13">
            <path
              v-if="rule.ok"
              d="M3.2 8.4l3 3L12.8 4.6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              v-else
              d="M4.5 4.5l7 7M11.5 4.5l-7 7"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
        <span class="pwv-rule-label">{{ rule.label }}</span>
        <span class="pwv-rule-state">{{ rule.state }}</span>
      </li>
    </ul>

    <div v-if="badChars.length" class="pwv-bad">
      <p class="pwv-bad-title">以下 {{ badChars.length }} 个字符不符合条件：</p>
      <ul>
        <li v-for="item in badChars" :key="`${item.position}-${item.code}`">
          <span class="pwv-bad-pos">第 {{ item.position }} 位</span>
          <code class="pwv-bad-char">{{ item.display }}</code>
          <span class="pwv-bad-kind">{{ item.kind }}</span>
          <span class="pwv-bad-code">{{ item.code }}</span>
          <span class="pwv-bad-hint">{{ item.hint }}</span>
        </li>
      </ul>
      <p class="pwv-bad-foot">
        允许的特殊字符只有 <code>{{ SPECIAL_CHARS }}</code> 这 9
        个，其余符号一律不计入。
      </p>
    </div>
  </section>
</template>

<style scoped>
.pwv {
  margin: 20px 0;
  padding: 16px 18px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  --pwv-ok: var(--vp-c-green-1);
  --pwv-ok-bg: var(--vp-c-green-soft);
  --pwv-bad: var(--vp-c-danger-1);
  --pwv-bad-bg: var(--vp-c-danger-soft);
}

.pwv-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 10px;
  margin-bottom: 12px;
}

.pwv-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.pwv-tip {
  font-size: 12px;
  color: var(--vp-c-text-3);
}

/* ---------- 输入区 ---------- */

.pwv-field {
  display: flex;
  gap: 8px;
}

.pwv-input {
  flex: 1 1 auto;
  min-width: 0;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  letter-spacing: 0.5px;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.pwv-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}

.pwv-btn {
  flex: 0 0 auto;
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: transparent;
  color: var(--vp-c-text-2);
  font-size: 13px;
  cursor: pointer;
  transition:
    color 0.2s,
    border-color 0.2s;
}

.pwv-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.pwv-privacy {
  margin: 8px 0 0;
  font-size: 12px;
  line-height: 1.6;
  color: var(--vp-c-text-3);
}

/* ---------- 逐字符视图 ---------- */

.pwv-chars {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 14px 0 0;
  padding: 10px 12px;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg);
}

.pwv-ch {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 26px;
  padding: 0 5px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 5px;
  color: var(--vp-c-text-2);
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  line-height: 1;
}

.pwv-ch.is-bad {
  border-color: var(--pwv-bad);
  background-color: var(--pwv-bad-bg);
  color: var(--pwv-bad);
  font-weight: 600;
}

/* ---------- 汇总条 ---------- */

.pwv-summary {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 14px 0 0;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 13.5px;
  line-height: 1.6;
}

.pwv-dot {
  flex: 0 0 auto;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: currentColor;
}

.pwv-summary.is-idle {
  color: var(--vp-c-text-3);
}

.pwv-summary.is-ok {
  background-color: var(--pwv-ok-bg);
  color: var(--pwv-ok);
}

.pwv-summary.is-bad {
  background-color: var(--pwv-bad-bg);
  color: var(--pwv-bad);
}

/* ---------- 规则清单 ---------- */

.pwv-rules {
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
}

.pwv-rules li {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 5px 0;
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.pwv-mark {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  align-self: center;
  color: var(--pwv-bad);
}

.pwv-rules li.is-ok .pwv-mark {
  color: var(--pwv-ok);
}

.pwv-rule-label {
  flex: 0 0 auto;
  color: var(--vp-c-text-1);
}

.pwv-rules li.is-ok .pwv-rule-label {
  color: var(--vp-c-text-2);
}

.pwv-rule-state {
  flex: 1 1 auto;
  text-align: right;
  font-size: 12.5px;
  color: var(--vp-c-text-3);
}

.pwv-rules li.is-ok .pwv-rule-state {
  color: var(--pwv-ok);
}

/* ---------- 违规字符清单 ---------- */

.pwv-bad {
  margin: 14px 0 0;
  padding: 12px 14px;
  border-left: 3px solid var(--pwv-bad);
  border-radius: 0 8px 8px 0;
  background-color: var(--pwv-bad-bg);
}

.pwv-bad-title {
  margin: 0 0 8px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--pwv-bad);
}

.pwv-bad ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.pwv-bad li {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  padding: 4px 0;
  font-size: 13px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.pwv-bad-pos {
  flex: 0 0 auto;
  color: var(--vp-c-text-3);
}

.pwv-bad-char {
  padding: 1px 7px;
  border: 1px solid var(--pwv-bad);
  border-radius: 5px;
  background-color: var(--vp-c-bg);
  color: var(--pwv-bad) !important;
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
}

.pwv-bad-kind {
  flex: 0 0 auto;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.pwv-bad-code {
  flex: 0 0 auto;
  font-family: var(--vp-font-family-mono);
  font-size: 11.5px;
  color: var(--vp-c-text-3);
}

.pwv-bad-hint {
  flex: 1 1 100%;
  color: var(--vp-c-text-2);
}

.pwv-bad-foot {
  margin: 8px 0 0;
  font-size: 12.5px;
  color: var(--vp-c-text-2);
}
</style>
