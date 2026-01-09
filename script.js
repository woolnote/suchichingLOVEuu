// Gift site v6 — verified midnight change + no-repeat

function msUntilNextMidnight() {
  const now = new Date();
  const next = new Date(now);
  next.setHours(24, 0, 0, 0);
  return next.getTime() - now.getTime();
}

// 🔴 明確標記：這行一定要存在
console.log("SCRIPT_VERSION", "v6_midnight_enabled");

// 每晚 00:00 強制 reload
setTimeout(() => location.reload(), msUntilNextMidnight() + 50);

// ===== 顏色池 =====
const palette = [
  { name: "霧霾藍", color: "#E6F0FA", why: ["讓節奏慢下來。"] },
  { name: "柔霧綠", color: "#EAF5EE", why: ["適合整理與恢復。"] },
  { name: "暖杏米", color: "#FFF1E6", why: ["適合照顧自己。"] },
  { name: "日光黃", color: "#FFF6CC", why: ["適合開始新事。"] }
];

// ===== 今天 ≠ 昨天（硬保證）=====
function todayKey() {
  const d = new Date();
  return d.getFullYear()*10000 + (d.getMonth()+1)*100 + d.getDate();
}

function pickTodayColor() {
  const today = todayKey();
  const yesterday = today - 1;

  const todayIdx = today % palette.length;
  const yesterdayIdx = yesterday % palette.length;

  return palette[
    todayIdx === yesterdayIdx
      ? (todayIdx + 1) % palette.length
      : todayIdx
  ];
}

// ===== 渲染（最簡）=====
document.addEventListener("DOMContentLoaded", () => {
  const p = pickTodayColor();
  const box = document.getElementById("todayColor");
  if (box) {
    box.style.background = p.color;
    box.innerText = p.name;
  }
});
