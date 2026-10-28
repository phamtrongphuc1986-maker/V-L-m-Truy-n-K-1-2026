// ================= DU LIEU GAME =================
var PHAM_CHAT = [
  { ten: "Trắng",     mau: "#e5e7eb", heSo: 1.0,  ts: 560 },
  { ten: "Xanh lục",  mau: "#22c55e", heSo: 1.35, ts: 250 },
  { ten: "Xanh lá",   mau: "#84cc16", heSo: 1.8,  ts: 115 },
  { ten: "Vàng nhạt", mau: "#fde047", heSo: 2.4,  ts: 48 },
  { ten: "Vàng cam",  mau: "#fb923c", heSo: 3.2,  ts: 20 },
  { ten: "Đỏ",        mau: "#ef4444", heSo: 4.6,  ts: 7 }
];
// Cap do 1..10 yeu cau cap nhan vat tuong ung:
var CAP_DO_LV = [1, 10, 20, 35, 50, 65, 85, 100, 110, 120];
var CHAT_LIEU = ["Hàn Thiết","Tinh Cương","Huyền Thiết","Ngân Tinh","Kim Quang","Lôi Quang","Phá Thiên","Truy Nguyệt","Thiên Cang","Thần Thánh"];
var VI_TRI = [
  { id: "vuKhi", ten: "Vũ khí",   atk: 14, def: 0, hp: 0,  danhTu: null },
  { id: "ao",    ten: "Áo giáp",  atk: 0,  def: 6, hp: 26, danhTu: "Giáp" },
  { id: "non",   ten: "Nón",      atk: 0,  def: 4, hp: 10, danhTu: "Mũ" },
  { id: "dai",   ten: "Đai lưng", atk: 2,  def: 2, hp: 18, danhTu: "Đai" },
  { id: "giay",  ten: "Giày",     atk: 0,  def: 3, hp: 8,  danhTu: "Giày" },
  { id: "ngoc",  ten: "Ngọc bội", atk: 5,  def: 1, hp: 12, danhTu: "Ngọc Bội" }
];
var MAPS = [
  { lv: 1,   ten: "Ngoại Ô Dương Châu", quai: "Dã Khuyển" },
  { lv: 10,  ten: "Rừng Trúc Xanh",     quai: "Trúc Lâm Tặc" },
  { lv: 20,  ten: "Hắc Phong Lĩnh",     quai: "Hắc Phong Đạo Tặc" },
  { lv: 30,  ten: "Cổ Đạo Sa Mạc",      quai: "Sa Mạc Lang" },
  { lv: 40,  ten: "Đầm Lầy Độc Vụ",     quai: "Độc Xà" },
  { lv: 50,  ten: "Tuyết Sơn",          quai: "Tuyết Sơn Cự Hùng" },
  { lv: 60,  ten: "Hỏa Diệm Sơn",       quai: "Hỏa Ma" },
  { lv: 70,  ten: "U Minh Cốc",         quai: "U Minh Quỷ Tốt" },
  { lv: 80,  ten: "Hàn Băng Đảo",       quai: "Băng Hải Cự Thú" },
  { lv: 90,  ten: "Phế Tích Cổ Thành",  quai: "Cổ Thành Thủ Vệ" },
  { lv: 110, ten: "Ma Quật Địa Cung",   quai: "Địa Cung Ma Binh" },
  { lv: 120, ten: "Phong Lăng Độ",      quai: "Thuyền Phu Hắc Ám" },
  { lv: 150, ten: "Phong Lăng Độ — Tầng Cuối", quai: "Hộ Vệ Chủ Thuyền" }
];
var LOAI_QUAI = {
  thuong:    { ten: "Quái thường",            mau: "#e5e7eb", hs: 1,    exp: 1,  bac: 1 },
  tinhAnh:   { ten: "★ Boss (tinh anh)",      mau: "#22c55e", hs: 2.3,  exp: 2.5, bac: 2.5 },
  satThu:    { ten: "⚔️ Boss Sát Thủ",        mau: "#fde047", hs: 3.4,  exp: 4,  bac: 4 },
  tieuHK:    { ten: "👑 Boss Tiểu Hoàng Kim", mau: "#fbbf24", hs: 5,    exp: 7,  bac: 7 },
  daiHK:     { ten: "👑 Boss Đại Hoàng Kim",  mau: "#f97316", hs: 7.5,  exp: 12, bac: 12 },
  chuThuyen: { ten: "☠️ Chủ Thuyền Phong Lăng Độ", mau: "#ef4444", hs: 13, exp: 30, bac: 30 }
};
var NGU_HANH = {
  kim:  { ten: "Kim",  mau: "#facc15", moTa: "Sinh mạng dồi dào, ngoại công mạnh.",
    phai: {
      thieuLam:   { ten: "Thiếu Lâm",       phe: "Chính phái", namOnly: true,  duong: [["Thiếu Lâm Đao Pháp","ngoai","Đao"],["Thiếu Lâm Bổng Pháp","ngoai","Bổng"],["Thiếu Lâm Quyền Pháp","ngoai","Quyền"]] },
      thienVuong: { ten: "Thiên Vương Bang", phe: "Trung lập", namOnly: true,  duong: [["Thiên Vương Chùy Pháp","ngoai","Chùy"],["Thiên Vương Đao Pháp","ngoai","Đao"],["Thiên Vương Thương Pháp","ngoai","Thương"]] }
    } },
  moc:  { ten: "Mộc",  mau: "#4ade80", moTa: "Thân pháp nhanh nhẹn, hay ra đòn chí mạng.",
    phai: {
      duongMon: { ten: "Đường Môn",  phe: "Trung lập", namOnly: false, duong: [["Bạo Vũ Lê Hoa","noi","Ám Khí"],["Đường Môn Ám Khí — Cạm Bẫy","noi","Ám Khí"],["Cửu Cung Phi Tinh","ngoai","Ám Khí"],["Tiểu Lí Phi Đao","ngoai","Đao"]] },
      nguDoc:   { ten: "Ngũ Độc Giáo", phe: "Tà phái", namOnly: false, duong: [["Ngũ Độc Đao Pháp","ngoai","Đao"],["Ngũ Độc Chưởng Pháp","noi","Chưởng"],["Ngũ Độc Bùa Pháp","noi","Bùa"]] }
    } },
  thuy: { ten: "Thủy", mau: "#38bdf8", moTa: "Cân bằng, nội lực dồi dào.",
    phai: {
      ngaMy:   { ten: "Nga My",   phe: "Chính phái", namOnly: false, duong: [["Nga My Chưởng Pháp","noi","Chưởng"],["Nga My Kiếm Pháp","ngoai","Kiếm"]] },
      thuyYen: { ten: "Thúy Yên", phe: "Trung lập",  namOnly: false, duong: [["Thúy Yên Đao Pháp","ngoai","Đao"],["Thúy Yên Chưởng Pháp","noi","Chưởng"]] }
    } },
  hoa:  { ten: "Hỏa",  mau: "#f87171", moTa: "Tấn công bùng nổ, sát thương lớn.",
    phai: {
      caiBang:   { ten: "Cái Bang",   phe: "Chính phái", namOnly: false, duong: [["Cái Bang Chưởng Pháp","ngoai","Chưởng"],["Cái Bang Bổng Pháp","ngoai","Bổng"]] },
      thienNhan: { ten: "Thiên Nhẫn", phe: "Tà phái",    namOnly: false, duong: [["Thiên Nhẫn Đao Pháp","ngoai","Đao"],["Thiên Nhẫn Mâu Pháp","ngoai","Mâu"],["Thiên Nhẫn Bùa Pháp","noi","Bùa"]] }
    } },
  tho:  { ten: "Thổ",  mau: "#d6a35c", moTa: "Thông minh, nội công thâm hậu.",
    phai: {
      conLon: { ten: "Côn Lôn", phe: "Trung lập",  namOnly: false, duong: [["Côn Lôn Đao Pháp","ngoai","Đao"],["Côn Lôn Kiếm Pháp","ngoai","Kiếm"],["Côn Lôn Bùa Pháp","noi","Bùa"]] },
      voDang: { ten: "Võ Đang", phe: "Chính phái", namOnly: false, duong: [["Võ Đang Chưởng Pháp","noi","Chưởng"],["Võ Đang Kiếm Pháp","ngoai","Kiếm"]] }
    } }
};
var CHIEU = {
  chuaPhai:  [["Phách Không Chưởng", 1.5, 8], ["Toàn Phong Thối", 2.0, 14]],
  thieuLam:  [["La Hán Phục Ma Quyền", 1.6, 10], ["Đạt Ma Phá Không", 2.3, 18]],
  thienVuong:[["Thiên Vương Chiến Ý", 1.6, 10], ["Phá Thiên Nhất Kích", 2.35, 18]],
  duongMon:  [["Mãn Thiên Hoa Vũ", 1.6, 10], ["Bạo Vũ Lê Hoa", 2.3, 18]],
  nguDoc:    [["Vạn Độc Phệ Tâm", 1.6, 10], ["Đoạn Trường Tán", 2.3, 18]],
  ngaMy:     [["Phật Quang Phổ Chiếu", 1.6, 10], ["Nga My Kiếm Ý", 2.3, 18]],
  thuyYen:   [["Thúy Yên Đao Vũ", 1.6, 10], ["Hàn Băng Chưởng", 2.3, 18]],
  caiBang:   [["Giáng Long Thập Bát Chưởng", 1.65, 10], ["Đả Cẩu Bổng Pháp", 2.3, 18]],
  thienNhan: [["Thiên Ma Giải Thể", 1.6, 10], ["Hỏa Vũ Cuồng Đao", 2.35, 18]],
  conLon:    [["Côn Lôn Kiếm Trận", 1.6, 10], ["Ngũ Lôi Chú", 2.3, 18]],
  voDang:    [["Thái Cực Kiếm", 1.6, 10], ["Võ Đang Miên Chưởng", 2.3, 18]]
};
var NV_CHINH = [
  { lv: 1,  ten: "Ra mắt giang hồ",      mapIdx: 0, so: 8,  exp: 150,   bac: 150 },
  { lv: 4,  ten: "Tay nghề đầu tiên",    mapIdx: 0, so: 12, exp: 300,   bac: 200 },
  { lv: 10, ten: "Lên Rừng Trúc",        mapIdx: 1, so: 12, exp: 800,   bac: 300, doXanh: true },
  { lv: 16, ten: "Trừ hại Rừng Trúc",    mapIdx: 1, so: 16, exp: 1500,  bac: 400 },
  { lv: 24, ten: "Hắc Phong nổi sóng",   mapIdx: 2, so: 18, exp: 3000,  bac: 600 },
  { lv: 34, ten: "Vượt Cổ Đạo",          mapIdx: 3, so: 20, exp: 6000,  bac: 900 },
  { lv: 48, ten: "Chinh phục Tuyết Sơn", mapIdx: 5, so: 22, exp: 13000, bac: 1400 },
  { lv: 65, ten: "U Minh dậy sóng",      mapIdx: 7, so: 25, exp: 26000, bac: 2200 },
  { lv: 85, ten: "Cổ Thành quyết chiến", mapIdx: 9, so: 28, exp: 55000, bac: 4000 }
];
var NV_PHU = [
  { lv: 20, ten: "Trừ tinh anh Hắc Phong", loai: "tinhAnh", mapIdx: 2, so: 3,  exp: 3200,  bac: 800 },
  { lv: 30, ten: "Truy lùng sát thủ",      loai: "satThu",  mapIdx: 3, so: 1,  exp: 7000,  bac: 1500 },
  { lv: 40, ten: "Dọn sạch Đầm Lầy",       loai: null,      mapIdx: 4, so: 30, exp: 11000, bac: 1200 },
  { lv: 55, ten: "Săn Tiểu Hoàng Kim",     loai: "tieuHK",  mapIdx: 6, so: 1,  exp: 22000, bac: 3000 }
];
var MP_MUC = [10, 20, 30, 40, 50, 60, 70, 85];
var GIA_DUOC = 100;

// ================= TRANG THAI =================
var G = null;          // du lieu nhan vat (duoc luu)
var hp = 0, mp = 0;    // mau/noi luc hien tai (khong luu)
var quai = null;       // quai dang danh
var tuDong = false, dongHoAuto = null;
var gioiTam = "nam";
var chonTam = { hanh: null, phai: null };
var npcMo = null;

function fmt(n) { return Math.floor(n).toLocaleString("vi-VN"); }
function ngau(nho, lon) { return nho + Math.random() * (lon - nho); }
function ngauInt(nho, lon) { return Math.floor(ngau(nho, lon + 1)); }
function expCan(lv) { return Math.round(60 * Math.pow(lv, 1.5)); }

function nhanVatMoi(ten, gioi) {
  return {
    ten: ten, gioi: gioi, lv: 1, exp: 0, bac: 300, duoc: 3,
    hanh: null, phai: null, duong: null, loaiCong: null, vuKhiLoai: "Đao",
    mac: { vuKhi: null, ao: null, non: null, dai: null, giay: null, ngoc: null },
    tui: [], mapIdx: 0,
    nv: { chinh: 0, chinhDem: 0, phu: 0, phuDem: 0, mp: 0, mpDem: 0, daTau: null, satThu: null }
  };
}
function luuGame() { try { localStorage.setItem("volam_save_v1", JSON.stringify(G)); } catch (e) {} }
function taiGame() { try { var s = localStorage.getItem("volam_save_v1"); return s ? JSON.parse(s) : null; } catch (e) { return null; } }
function xoaSave() {
  if (!confirm("Xóa nhân vật hiện tại và chơi lại từ đầu?")) return;
  try { localStorage.removeItem("volam_save_v1"); } catch (e) {}
  location.reload();
}

// ================= CHI SO =================
function tongDo() {
  var t = { atk: 0, def: 0, hp: 0 };
  for (var k in G.mac) {
    var id = G.mac[k]; if (!id) continue;
    for (var i = 0; i < G.tui.length; i++) if (G.tui[i].id === id) {
      t.atk += G.tui[i].atk; t.def += G.tui[i].def; t.hp += G.tui[i].hp;
    }
  }
  return t;
}
function chiSo() {
  var d = tongDo(), lv = G.lv;
  var cs = {
    atk: Math.round(8 + lv * 4.2 + d.atk),
    noi: Math.round(6 + lv * 3.0 + d.atk * 0.8),
    def: Math.round(2 + lv * 1.1 + d.def),
    hpMax: Math.round(120 + lv * 30 + d.hp),
    mpMax: Math.round(50 + lv * 10 + d.hp * 0.3),
    crit: 10
  };
  if (G.hanh === "kim") cs.hpMax = Math.round(cs.hpMax * 1.10);
  if (G.hanh === "hoa") cs.atk = Math.round(cs.atk * 1.06);
  if (G.hanh === "tho") cs.noi = Math.round(cs.noi * 1.10);
  if (G.hanh === "moc") cs.crit = 16;
  if (G.hanh === "thuy") cs.mpMax = Math.round(cs.mpMax * 1.15);
  return cs;
}

// ================= TRANG BI =================
var demIdDo = 1;
function rollPham(bonus, minIdx) {
  var ts = PHAM_CHAT.map(function (p, i) {
    return i === 0 ? p.ts / Math.pow(bonus, 1.6) : p.ts * Math.pow(bonus, i * 0.55);
  });
  var tong = ts.reduce(function (a, b) { return a + b; }, 0), r = Math.random() * tong, idx = 0;
  for (var i = 0; i < ts.length; i++) { r -= ts[i]; if (r <= 0) { idx = i; break; } }
  return Math.max(idx, minIdx || 0);
}
function taoDo(capIdx, phamIdx) {
  var vt = VI_TRI[ngauInt(0, VI_TRI.length - 1)];
  var pc = PHAM_CHAT[phamIdx];
  var he = (capIdx + 1) * pc.heSo;
  var ten = CHAT_LIEU[capIdx] + " " + (vt.id === "vuKhi" ? (G ? G.vuKhiLoai : "Đao") : vt.danhTu);
  return {
    id: "do" + (demIdDo++) + "_" + Date.now(),
    viTri: vt.id, tenViTri: vt.ten, cap: capIdx + 1, pham: phamIdx,
    ten: ten,
    atk: Math.round(vt.atk * he * ngau(0.9, 1.15)),
    def: Math.round(vt.def * he * ngau(0.9, 1.15)),
    hp: Math.round(vt.hp * he * ngau(0.9, 1.15)),
    giaBan: Math.round(20 * Math.pow(capIdx + 1, 1.7) * pc.heSo)
  };
}
function capDoCuaMap(mapLv) {
  var idx = 0;
  for (var i = 0; i < CAP_DO_LV.length; i++) if (mapLv >= CAP_DO_LV[i]) idx = i;
  return idx;
}
function rotDo(mapLv, loaiKey) {
  var bonus = { thuong: 1, tinhAnh: 1.7, satThu: 2.6, tieuHK: 4, daiHK: 6, chuThuyen: 9 }[loaiKey] || 1;
  var minIdx = { thuong: 0, tinhAnh: 0, satThu: 1, tieuHK: 2, daiHK: 3, chuThuyen: 4 }[loaiKey] || 0;
  var capIdx = capDoCuaMap(mapLv);
  if (Math.random() < 0.18 && capIdx < 9) capIdx++;
  var doMoi = taoDo(capIdx, rollPham(bonus, minIdx));
  G.tui.push(doMoi);
  return doMoi;
}

// ================= QUAI =================
function sinhQuai() {
  var map = MAPS[G.mapIdx], r = Math.random(), key = "thuong";
  if (map.lv >= 150 && r < 0.10) key = "chuThuyen";
  else if (map.lv >= 30 && r < 0.016) key = "daiHK";
  else if (map.lv >= 20 && r < 0.046) key = "tieuHK";
  else if (map.lv >= 20 && r < 0.096) key = "satThu";
  else if (r < 0.216) key = "tinhAnh";
  var L = LOAI_QUAI[key];
  var hpMax = Math.round((30 + map.lv * 13) * (1 + map.lv / 28) * L.hs * ngau(0.92, 1.08));
  quai = {
    key: key, loai: L,
    ten: (key === "thuong" ? map.quai : L.ten.replace(/^[^ ]+ /, "") + " " + map.quai),
    hpMax: hpMax, hp: hpMax,
    atk: Math.round((3 + map.lv * 1.5) * Math.pow(L.hs, 0.6) * ngau(0.9, 1.1)),
    exp: Math.round(map.lv * 9 * L.exp), bac: Math.round(map.lv * 3.2 * L.bac * ngau(0.85, 1.25))
  };
  veQuai();
}

// ================= GIAO DIEN CHUNG =================
function $(id) { return document.getElementById(id); }
function ghiLog(html) {
  var k = $("nhatKy"); if (!k) return;
  var d = document.createElement("div"); d.innerHTML = html;
  k.insertBefore(d, k.firstChild);
  while (k.children.length > 40) k.removeChild(k.lastChild);
}
function moTab(key) {
  ["luyen", "nv", "tui", "nhiemvu", "thon"].forEach(function (t) {
    $("tab-" + t).classList.toggle("an", t !== key);
  });
  document.querySelectorAll(".tabBtn").forEach(function (b) {
    b.classList.toggle("dangMo", b.getAttribute("data-tab") === key);
  });
}
function tenPhai() {
  if (!G.phai) return "Chưa nhập phái";
  return NGU_HANH[G.hanh].phai[G.phai].ten + " · " + G.duong;
}
function mauTen() { return G.hanh ? NGU_HANH[G.hanh].mau : "#e5e7eb"; }
function veDau() {
  var cs = chiSo();
  $("tenNV").textContent = G.ten; $("tenNV").style.color = mauTen();
  $("capNV").textContent = "Lv." + G.lv;
  $("phaiNV").textContent = tenPhai() + (G.phai ? "" : " (tên còn màu trắng)");
  $("thanhHP").style.width = Math.max(0, hp / cs.hpMax * 100) + "%";
  $("chuHP").textContent = "HP " + fmt(hp) + "/" + fmt(cs.hpMax);
  $("thanhMP").style.width = Math.max(0, mp / cs.mpMax * 100) + "%";
  $("chuMP").textContent = "MP " + fmt(mp) + "/" + fmt(cs.mpMax);
  var can = expCan(G.lv);
  $("thanhEXP").style.width = Math.min(100, G.exp / can * 100) + "%";
  $("chuEXP").textContent = "EXP " + fmt(G.exp) + "/" + fmt(can);
  $("bacNV").textContent = fmt(G.bac);
  $("duocNV").textContent = G.duoc;
  var chieu = CHIEU[G.phai || "chuaPhai"];
  $("btnSkill1").textContent = "✨ " + chieu[0][0] + " (" + chieu[0][2] + " MP)";
  $("btnSkill2").textContent = "💥 " + chieu[1][0] + " (" + chieu[1][2] + " MP)";
}
function veMaps() {
  $("dsMap").innerHTML = MAPS.map(function (m, i) {
    var khoa = G.lv < m.lv;
    return "<button class='mapChip" + (i === G.mapIdx ? " dangO" : "") + (khoa ? " khoa" : "") + "' onclick='vaoMap(" + i + ")'>" +
      (khoa ? "🔒 " : "") + m.ten + " (Lv." + m.lv + ")</button>";
  }).join("");
}
function vaoMap(i) {
  if (G.lv < MAPS[i].lv) { ghiLog("⚠️ Cần cấp " + MAPS[i].lv + " mới tới được " + MAPS[i].ten + "."); return; }
  G.mapIdx = i; sinhQuai(); veMaps();
  ghiLog("🐴 Xa Phu đưa bạn tới <b>" + MAPS[i].ten + "</b>.");
  luuGame();
}
function veQuai() {
  if (!quai) { $("tenQuai").textContent = "—"; return; }
  $("tenQuai").textContent = quai.ten; $("tenQuai").style.color = quai.loai.mau;
  $("loaiQuai").textContent = quai.loai.ten + " · Cấp quái " + MAPS[G.mapIdx].lv + " · Tại " + MAPS[G.mapIdx].ten;
  $("thanhQuaiHP").style.width = Math.max(0, quai.hp / quai.hpMax * 100) + "%";
  $("chuQuaiHP").textContent = "HP " + fmt(Math.max(0, quai.hp)) + "/" + fmt(quai.hpMax);
  $("thongTinQuai").textContent = "Sát thương ~" + fmt(quai.atk) + " · Thưởng EXP " + fmt(quai.exp) + " · Ngân lượng ~" + fmt(quai.bac);
}
function renderAll() { veDau(); veMaps(); veQuai(); veNhanVat(); veTui(); veNV(); }

// ================= CHIEN DAU =================
function satThuongLenQuai(heSo, tenChieu) {
  var cs = chiSo();
  var crit = Math.random() * 100 < cs.crit;
  var goc = G.loaiCong === "noi" ? (cs.atk * 0.6 + cs.noi * 0.7) : cs.atk;
  var dmg = Math.max(1, Math.round(goc * heSo * ngau(0.9, 1.1) * (crit ? 1.7 : 1)));
  quai.hp -= dmg;
  ghiLog((tenChieu ? "✨ <b>" + tenChieu + "</b>" : "👊 Đánh thường") + " gây <b>" + fmt(dmg) + "</b> sát thương" + (crit ? " <b style='color:#fde047'>CHÍ MẠNG!</b>" : "") + " lên " + quai.ten + ".");
  if (quai.hp <= 0) { thangQuai(); return; }
  quaiDanhLai(); veDau(); veQuai();
}
function danhThuong() { if (!quai) sinhQuai(); satThuongLenQuai(1, null); }
function dungSkill(i) {
  if (!quai) sinhQuai();
  var chieu = CHIEU[G.phai || "chuaPhai"][i];
  if (mp < chieu[2]) { ghiLog("⚠️ Không đủ nội lực cho " + chieu[0] + "."); return; }
  mp -= chieu[2];
  satThuongLenQuai(chieu[1], chieu[0]);
}
function quaiDanhLai() {
  var cs = chiSo();
  var dmg = Math.max(1, Math.round((quai.atk - cs.def * 0.55) * ngau(0.9, 1.1)));
  hp -= dmg;
  ghiLog("💢 " + quai.ten + " đánh lại, bạn mất <b>" + fmt(dmg) + "</b> HP.");
  if (hp <= 0) chetNV();
}
function dungDuoc() {
  var cs = chiSo();
  if (G.duoc <= 0) { ghiLog("⚠️ Hết Kim Sang Dược! Về Dương Châu gặp Tạp Hóa để mua."); return; }
  if (hp >= cs.hpMax) { ghiLog("Máu đã đầy."); return; }
  G.duoc--;
  var hoi = Math.round(cs.hpMax * 0.45);
  hp = Math.min(cs.hpMax, hp + hoi);
  ghiLog("🧪 Dùng Kim Sang Dược, hồi <b>" + fmt(hoi) + "</b> HP.");
  if (quai && quai.hp > 0) quaiDanhLai();
  veDau(); luuGame();
}
function doiQuai() { sinhQuai(); ghiLog("🔍 Bạn lánh đi và tìm con quái khác."); }
function thangQuai() {
  var q = quai;
  G.exp += q.exp; G.bac += q.bac;
  ghiLog("🎉 Hạ <b style='color:" + q.loai.mau + "'>" + q.ten + "</b>! +" + fmt(q.exp) + " EXP, +" + fmt(q.bac) + " ngân lượng.");
  tienDoNV(q);
  var soLan = { thuong: Math.random() < 0.4 ? 1 : 0, tinhAnh: Math.random() < 0.85 ? 1 : 0,
    satThu: 1 + (Math.random() < 0.3 ? 1 : 0), tieuHK: 2, daiHK: 2 + (Math.random() < 0.5 ? 1 : 0), chuThuyen: 3 }[q.key];
  for (var i = 0; i < soLan; i++) {
    var d = rotDo(MAPS[G.mapIdx].lv, q.key);
    ghiLog("🎁 Rớt: <b style='color:" + PHAM_CHAT[d.pham].mau + "'>" + d.ten + "</b> (Đồ cấp " + d.cap + " · " + PHAM_CHAT[d.pham].ten + ")");
  }
  var cs = chiSo();
  while (G.exp >= expCan(G.lv)) {
    G.exp -= expCan(G.lv); G.lv++;
    hp = chiSo().hpMax; mp = chiSo().mpMax;
    ghiLog("🌟🌟 <b>LÊN CẤP " + G.lv + "!</b> Hồi đầy máu và nội lực.");
  }
  if (hp > cs.hpMax) hp = chiSo().hpMax;
  sinhQuai(); renderAll(); luuGame();
}
function chetNV() {
  var mat = Math.round(G.bac * 0.03);
  G.bac -= mat;
  ghiLog("☠️ Bạn bị đánh trọng thương! Được đưa về Dương Châu cứu chữa, mất " + fmt(mat) + " ngân lượng viện phí.");
  hp = Math.round(chiSo().hpMax * 0.6); mp = chiSo().mpMax;
  tatAuto(); sinhQuai(); renderAll(); luuGame();
}
function batTatAuto() { tuDong ? tatAuto() : batAuto(); }
function batAuto() {
  tuDong = true; $("btnAuto").textContent = "⏸️ Dừng tự động";
  ghiLog("▶ Bật tự động đánh.");
  dongHoAuto = setInterval(function () {
    if (!quai) { sinhQuai(); return; }
    var cs = chiSo();
    if (hp < cs.hpMax * 0.3 && G.duoc > 0) dungDuoc(); else danhThuong();
  }, 950);
}
function tatAuto() {
  tuDong = false; $("btnAuto").textContent = "▶ Tự động đánh";
  if (dongHoAuto) clearInterval(dongHoAuto);
}

// ================= NHIEM VU =================
function mapGanNhat(lv) { var idx = 0; for (var i = 0; i < MAPS.length; i++) if (MAPS[i].lv <= lv) idx = i; return idx; }
function nvMonPhai(idx) {
  var lv = MP_MUC[idx];
  return { lv: lv, mapIdx: mapGanNhat(lv), so: 12 + idx * 3,
    exp: [700, 1600, 3200, 6000, 11000, 20000, 36000, 65000][idx],
    bac: [300, 500, 800, 1200, 1800, 2600, 3800, 6000][idx], doVang: idx === MP_MUC.length - 1 };
}
function moTaNV(q) {
  return "Tiêu diệt " + q.so + " " + (q.loai ? LOAI_QUAI[q.loai].ten : "quái bất kỳ") + " tại " + MAPS[q.mapIdx].ten + ".";
}
function tienDoNV(q) {
  var n = G.nv;
  if (n.chinh < NV_CHINH.length) { var c = NV_CHINH[n.chinh]; if (c.mapIdx === G.mapIdx && n.chinhDem < c.so) n.chinhDem++; }
  if (n.phu < NV_PHU.length) { var p = NV_PHU[n.phu]; if (p.mapIdx === G.mapIdx && (!p.loai || p.loai === q.key) && n.phuDem < p.so) n.phuDem++; }
  if (G.phai && n.mp < MP_MUC.length) { var m = nvMonPhai(n.mp); if (m.mapIdx === G.mapIdx && n.mpDem < m.so) n.mpDem++; }
  if (n.daTau && n.daTau.mapIdx === G.mapIdx && n.daTau.dem < n.daTau.so) n.daTau.dem++;
  if (n.satThu && q.key === "satThu" && n.satThu.mapIdx === G.mapIdx) n.satThu.dem = 1;
}
function congThuong(exp, bac) {
  G.exp += exp; G.bac += bac;
  while (G.exp >= expCan(G.lv)) { G.exp -= expCan(G.lv); G.lv++; hp = chiSo().hpMax; mp = chiSo().mpMax; ghiLog("🌟 LÊN CẤP " + G.lv + "!"); }
}
function taoDoTheoViTri(capIdx, phamIdx, viTriId) {
  var d = taoDo(capIdx, phamIdx), vt = null;
  for (var i = 0; i < VI_TRI.length; i++) if (VI_TRI[i].id === viTriId) vt = VI_TRI[i];
  var pc = PHAM_CHAT[phamIdx], he = (capIdx + 1) * pc.heSo;
  d.viTri = vt.id; d.tenViTri = vt.ten;
  d.ten = CHAT_LIEU[capIdx] + " " + (vt.id === "vuKhi" ? G.vuKhiLoai : vt.danhTu);
  d.atk = Math.round(vt.atk * he); d.def = Math.round(vt.def * he); d.hp = Math.round(vt.hp * he);
  return d;
}
function nhanThuongChinh() {
  var n = G.nv, q = NV_CHINH[n.chinh];
  if (!q || n.chinhDem < q.so) return;
  congThuong(q.exp, q.bac);
  ghiLog("📜 Hoàn thành chính tuyến '" + q.ten + "'! +" + fmt(q.exp) + " EXP, +" + fmt(q.bac) + " ngân lượng.");
  if (q.doXanh) { var d = taoDoTheoViTri(capDoCuaMap(10), 1, "vuKhi"); G.tui.push(d); ghiLog("🎁 Long Ngũ tặng: <b style='color:#22c55e'>" + d.ten + "</b> (Xanh lục)!"); }
  n.chinh++; n.chinhDem = 0; renderAll(); luuGame(); if (npcMo) moNPC(npcMo);
}
function nhanThuongPhu() {
  var n = G.nv, q = NV_PHU[n.phu];
  if (!q || n.phuDem < q.so) return;
  congThuong(q.exp, q.bac);
  ghiLog("📜 Hoàn thành phụ tuyến '" + q.ten + "'! +" + fmt(q.exp) + " EXP, +" + fmt(q.bac) + " ngân lượng.");
  n.phu++; n.phuDem = 0; renderAll(); luuGame(); if (npcMo) moNPC(npcMo);
}
function nhanThuongMP() {
  var n = G.nv, q = nvMonPhai(n.mp);
  if (n.mpDem < q.so) return;
  congThuong(q.exp, q.bac);
  ghiLog("📜 Hoàn thành nhiệm vụ môn phái! +" + fmt(q.exp) + " EXP, +" + fmt(q.bac) + " ngân lượng.");
  if (q.doVang) { var d = taoDoTheoViTri(capDoCuaMap(85), 3, "vuKhi"); G.tui.push(d); ghiLog("🎁 Chưởng Môn ban thưởng: <b style='color:#fde047'>" + d.ten + "</b> (Vàng nhạt)!"); }
  n.mp++; n.mpDem = 0; renderAll(); luuGame(); if (npcMo) moNPC(npcMo);
}
function nhanNVDaTau() {
  var d = G.nv.daTau; if (!d || d.dem < d.so) return;
  congThuong(d.exp, d.bac);
  ghiLog("📜 Dã Tẩu khen ngươi nhanh tay! +" + fmt(d.exp) + " EXP, +" + fmt(d.bac) + " ngân lượng.");
  G.nv.daTau = null; renderAll(); luuGame(); if (npcMo) moNPC(npcMo);
}
function nhanThuongSatThu() {
  var s = G.nv.satThu; if (!s || s.dem < 1) return;
  congThuong(s.exp, s.bac);
  ghiLog("📜 Đã tru sát Boss Sát Thủ! +" + fmt(s.exp) + " EXP, +" + fmt(s.bac) + " ngân lượng.");
  if (Math.random() < 0.35) { var d = taoDo(capDoCuaMap(MAPS[s.mapIdx].lv), rollPham(3, 3)); G.tui.push(d); ghiLog("🎁 Chiến lợi phẩm: <b style='color:" + PHAM_CHAT[d.pham].mau + "'>" + d.ten + "</b>!"); }
  G.nv.satThu = null; renderAll(); luuGame(); if (npcMo) moNPC(npcMo);
}
function theNV(tieuDe, moTa, tienDo, xong, hamNhan, nguon) {
  return "<div class='theNV'><div class='tieuDeNV'>" + tieuDe + "</div><div class='moTaNV'>" + moTa + "</div>" +
    "<div class='tienDo'>Tiến độ: " + tienDo + (xong ? " — ✅ Đã hoàn thành!" : "") + "</div>" +
    (xong ? "<button class='nutPhu' onclick='" + hamNhan + "'>Nhận thưởng</button>" : "<div class='ghiChu'>Nhận và trả tại: " + nguon + "</div>") + "</div>";
}
function veNV() {
  var n = G.nv, h = "";
  if (n.chinh < NV_CHINH.length) { var c = NV_CHINH[n.chinh];
    h += theNV("⭐ Chính tuyến: " + c.ten + " (Long Ngũ)", moTaNV(c) + " Thưởng: " + fmt(c.exp) + " EXP, " + fmt(c.bac) + " ngân lượng.", n.chinhDem + "/" + c.so, n.chinhDem >= c.so, "nhanThuongChinh()", "Long Ngũ — Thôn trấn");
  } else h += "<div class='theNV'><div class='tieuDeNV'>⭐ Chính tuyến</div><div class='moTaNV'>Đã hoàn thành toàn bộ chính tuyến hiện có. Chờ hồi sau!</div></div>";
  if (n.phu < NV_PHU.length) { var p = NV_PHU[n.phu];
    if (G.lv >= p.lv) h += theNV("📗 Phụ tuyến: " + p.ten + " (Long Ngũ)", moTaNV(p) + " Thưởng: " + fmt(p.exp) + " EXP, " + fmt(p.bac) + " ngân lượng.", n.phuDem + "/" + p.so, n.phuDem >= p.so, "nhanThuongPhu()", "Long Ngũ — Thôn trấn");
    else h += "<div class='theNV'><div class='tieuDeNV'>📗 Phụ tuyến</div><div class='moTaNV'>Mở khóa ở cấp " + p.lv + ".</div></div>";
  }
  if (G.phai) { if (n.mp < MP_MUC.length) { var m = nvMonPhai(n.mp);
      h += theNV("🏯 Môn phái: Thử thách cấp " + m.lv + " (Chưởng Môn)", moTaNV(m) + " Thưởng: " + fmt(m.exp) + " EXP, " + fmt(m.bac) + " ngân lượng" + (m.doVang ? " + vũ khí Vàng nhạt." : "."), n.mpDem + "/" + m.so, n.mpDem >= m.so, "nhanThuongMP()", "Chưởng Môn — Thôn trấn");
    } else h += "<div class='theNV'><div class='tieuDeNV'>🏯 Môn phái</div><div class='moTaNV'>Đã hoàn thành mọi thử thách môn phái tới cấp 85.</div></div>";
  } else h += "<div class='theNV'><div class='tieuDeNV'>🏯 Môn phái</div><div class='moTaNV'>Đạt cấp 10 rồi gặp Chưởng Môn ở Thôn trấn để nhập phái và nhận nhiệm vụ môn phái.</div></div>";
  if (n.daTau) h += theNV("🎲 Dã Tẩu", moTaNV(n.daTau) + " Thưởng: " + fmt(n.daTau.exp) + " EXP, " + fmt(n.daTau.bac) + " ngân lượng.", n.daTau.dem + "/" + n.daTau.so, n.daTau.dem >= n.daTau.so, "nhanNVDaTau()", "Dã Tẩu — Thôn trấn");
  if (n.satThu) h += theNV("⚔️ Săn Boss Sát Thủ (Chưởng Môn)", moTaNV({ so: 1, loai: "satThu", mapIdx: n.satThu.mapIdx }) + " Thưởng lớn EXP và ngân lượng.", n.satThu.dem + "/1", n.satThu.dem >= 1, "nhanThuongSatThu()", "Chưởng Môn — Thôn trấn");
  $("dsNV").innerHTML = h;
}

// ================= NHAN VAT & TUI DO =================
function capDoMacDuoc() { var c = 1; for (var i = 0; i < CAP_DO_LV.length; i++) if (G.lv >= CAP_DO_LV[i]) c = i + 1; return c; }
function veNhanVat() {
  var cs = chiSo(), d = tongDo();
  var o = [["Cấp độ", "Lv." + G.lv], ["Ngoại công (tấn công)", fmt(cs.atk)], ["Nội công", fmt(cs.noi)], ["Phòng thủ", fmt(cs.def)],
    ["Sinh mạng tối đa", fmt(cs.hpMax)], ["Nội lực tối đa", fmt(cs.mpMax)], ["Tỉ lệ chí mạng", cs.crit + "%"], ["Mặc được tối đa", "Đồ cấp " + capDoMacDuoc()]];
  $("chiSo").innerHTML = o.map(function (x) { return "<div class='oChiSo'>" + x[0] + ": <b>" + x[1] + "</b></div>"; }).join("");
  $("doMac").innerHTML = VI_TRI.map(function (vt) {
    var id = G.mac[vt.id], it = null;
    for (var i = 0; i < G.tui.length; i++) if (G.tui[i].id === id) it = G.tui[i];
    if (!it) return "<div class='theDo'><div><div class='tenDo'>" + vt.ten + "</div><div class='chiTietDo'>— trống —</div></div></div>";
    return theDoHTML(it, true);
  }).join("");
}
function theDoHTML(it, dangMac) {
  var pc = PHAM_CHAT[it.pham];
  var khoa = G.lv < CAP_DO_LV[it.cap - 1];
  var nut = dangMac
    ? "<button class='nutPhu' onclick='thaoDo(\"" + it.viTri + "\")'>Tháo</button>"
    : (khoa ? "<span class='ghiChu'>Cần Lv." + CAP_DO_LV[it.cap - 1] + "</span>" : "<button class='nutPhu' onclick='macDo(\"" + it.id + "\")'>Mặc</button>") +
      " <button class='nutPhu' onclick='banDo(\"" + it.id + "\")'>Bán " + fmt(it.giaBan) + "</button>";
  return "<div class='theDo'><div><div class='tenDo' style='color:" + pc.mau + "'>" + it.ten + (dangMac ? " ✔" : "") + "</div>" +
    "<div class='chiTietDo'>" + it.tenViTri + " · Đồ cấp " + it.cap + " · Phẩm " + pc.ten + "<br>Công " + it.atk + " · Thủ " + it.def + " · Máu " + it.hp + "</div></div><div>" + nut + "</div></div>";
}
function veTui() {
  var macIds = {}; for (var k in G.mac) if (G.mac[k]) macIds[G.mac[k]] = true;
  var ds = G.tui.filter(function (it) { return !macIds[it.id]; });
  ds.sort(function (a, b) { return b.pham - a.pham || b.cap - a.cap; });
  $("dsTui").innerHTML = ds.length ? ds.map(function (it) { return theDoHTML(it, false); }).join("") : "<p class='ghiChu'>Túi trống. Ra map luyện công đánh quái để cày đồ nhé!</p>";
}
function macDo(id) {
  for (var i = 0; i < G.tui.length; i++) if (G.tui[i].id === id) {
    if (G.lv < CAP_DO_LV[G.tui[i].cap - 1]) return;
    G.mac[G.tui[i].viTri] = id; ghiLog("🎽 Đã mặc " + G.tui[i].ten + ".");
  }
  renderAll(); luuGame();
}
function thaoDo(viTri) { G.mac[viTri] = null; renderAll(); luuGame(); }
function banDo(id) {
  for (var i = 0; i < G.tui.length; i++) if (G.tui[i].id === id) {
    G.bac += G.tui[i].giaBan; ghiLog("💰 Bán " + G.tui[i].ten + " được " + fmt(G.tui[i].giaBan) + " ngân lượng.");
    G.tui.splice(i, 1); break;
  }
  renderAll(); luuGame();
}
function banTheoDK(dk) {
  var macIds = {}; for (var k in G.mac) if (G.mac[k]) macIds[G.mac[k]] = true;
  var tong = 0, giu = [];
  G.tui.forEach(function (it) { if (!macIds[it.id] && dk(it)) { tong += it.giaBan; } else giu.push(it); });
  G.tui = giu; G.bac += tong;
  ghiLog("💰 Đã bán các đồ đủ điều kiện, thu " + fmt(tong) + " ngân lượng.");
  renderAll(); luuGame();
}
function banTrang() { banTheoDK(function (it) { return it.pham === 0; }); }
function banDuoiCap() { var c = capDoMacDuoc(); banTheoDK(function (it) { return it.cap < c; }); }

// ================= THON TRAN / NPC =================
function veNPC_List() {
  var npc = [
    ["longNgu", "🐉 Long Ngũ", "Nhiệm vụ chính tuyến và phụ tuyến, thưởng lớn."],
    ["daTau", "🎲 Dã Tẩu", "Nhiệm vụ ngẫu nhiên mỗi ngày — cày EXP và ngân lượng."],
    ["xaPhu", "🐴 Xa Phu", "Dịch chuyển tới các map luyện công."],
    ["chuongMon", "🏯 Chưởng Môn", G.phai ? "Nhiệm vụ môn phái và săn Boss Sát Thủ." : "Nhập môn phái khi đạt cấp 10."],
    ["tapHoa", "🧪 Tạp Hóa", "Mua Kim Sang Dược hồi máu."]
  ];
  $("dsNPC").innerHTML = npc.map(function (x) {
    return "<div class='theNPC'><div><div class='tenNPC'>" + x[1] + "</div><div class='moTaNPC'>" + x[2] + "</div></div><button class='nutPhu' onclick='moNPC(\"" + x[0] + "\")'>Gặp</button></div>";
  }).join("");
}
function moNPC(id) {
  npcMo = id; var h = "", n = G.nv;
  if (id === "longNgu") {
    h = "<div class='khoiNPC'><h4>🐉 Long Ngũ</h4>";
    if (n.chinh < NV_CHINH.length) { var c = NV_CHINH[n.chinh];
      h += "<p><b>Chính tuyến: " + c.ten + "</b><br>" + moTaNV(c) + "<br>Tiến độ: " + n.chinhDem + "/" + c.so + "</p>" +
        (n.chinhDem >= c.so ? "<button class='nutLon nho' onclick='nhanThuongChinh()'>Nhận thưởng</button>" : "");
    } else h += "<p>Chính tuyến đã hoàn thành hết.</p>";
    if (n.phu < NV_PHU.length) { var p = NV_PHU[n.phu];
      if (G.lv >= p.lv) h += "<p><b>Phụ tuyến: " + p.ten + "</b><br>" + moTaNV(p) + "<br>Tiến độ: " + n.phuDem + "/" + p.so + "</p>" +
        (n.phuDem >= p.so ? "<button class='nutLon nho' onclick='nhanThuongPhu()'>Nhận thưởng</button>" : "");
      else h += "<p>Phụ tuyến tiếp theo mở ở cấp " + p.lv + ".</p>";
    }
    h += "</div>";
  }
  if (id === "daTau") {
    h = "<div class='khoiNPC'><h4>🎲 Dã Tẩu</h4>";
    if (!n.daTau) h += "<p>Lão phu đi khắp giang hồ, việc gì cũng biết. Nhận một việc ngẫu nhiên chứ?</p><button class='nutLon nho' onclick='nhanNVDaTauMoi()'>Nhận nhiệm vụ</button>";
    else h += "<p><b>Việc đang làm:</b> " + moTaNV(n.daTau) + "<br>Tiến độ: " + n.daTau.dem + "/" + n.daTau.so + "</p>" +
      (n.daTau.dem >= n.daTau.so ? "<button class='nutLon nho' onclick='nhanNVDaTau()'>Nhận thưởng</button>" : "<button class='nutPhu' onclick='huyDaTau()'>Hủy, nhận việc khác</button>");
    h += "</div>";
  }
  if (id === "xaPhu") {
    h = "<div class='khoiNPC'><h4>🐴 Xa Phu</h4><p>Đại hiệp muốn đi đâu? (cần đủ cấp)</p>" + MAPS.map(function (m, i) {
      return "<button class='luaChon' " + (G.lv < m.lv ? "disabled" : "") + " onclick='vaoMap(" + i + "); moTab(\"luyen\")'><b>" + m.ten + "</b> — Lv." + m.lv + (G.lv < m.lv ? " (chưa đủ cấp)" : "") + "</button>";
    }).join("") + "</div>";
  }
  if (id === "chuongMon") h = bangChuongMon();
  if (id === "tapHoa") {
    h = "<div class='khoiNPC'><h4>🧪 Tạp Hóa Dương Châu</h4><p>Kim Sang Dược: <b>" + GIA_DUOC + " ngân lượng/bình</b> — hồi 45% máu. Bạn đang có " + G.duoc + " bình, " + fmt(G.bac) + " ngân lượng.</p>" +
      "<button class='nutLon nho' onclick='muaDuoc(1)'>Mua 1 bình</button> <button class='nutPhu' onclick='muaDuoc(5)'>Mua 5 bình</button></div>";
  }
  $("bangNPC").innerHTML = h;
}
function nhanNVDaTauMoi() {
  var idx = mapGanNhat(G.lv);
  var so = ngauInt(8, 14), mlv = MAPS[idx].lv;
  G.nv.daTau = { mapIdx: idx, so: so, dem: 0, exp: mlv * 45, bac: mlv * 22 };
  ghiLog("🎲 Nhận nhiệm vụ Dã Tẩu: diệt " + so + " quái tại " + MAPS[idx].ten + ".");
  renderAll(); luuGame(); moNPC("daTau");
}
function huyDaTau() { G.nv.daTau = null; renderAll(); luuGame(); moNPC("daTau"); }
function muaDuoc(so) {
  var gia = GIA_DUOC * so;
  if (G.bac < gia) { ghiLog("⚠️ Không đủ ngân lượng mua dược."); return; }
  G.bac -= gia; G.duoc += so;
  ghiLog("🧪 Mua " + so + " Kim Sang Dược (-" + fmt(gia) + " ngân lượng).");
  renderAll(); luuGame(); moNPC("tapHoa");
}
function bangChuongMon() {
  var h = "<div class='khoiNPC'><h4>🏯 Chưởng Môn Các Phái</h4>";
  if (!G.phai) {
    if (G.lv < 10) return h + "<p>Đệ tử hãy luyện tới <b>cấp 10</b> rồi quay lại đây bái sư nhập phái. Hiện tên của bạn vẫn là màu trắng — chưa thuộc môn phái nào.</p></div>";
    h += "<p>Chọn <b>ngũ hành</b> trước:</p>";
    for (var hk in NGU_HANH) { var hh = NGU_HANH[hk];
      h += "<button class='luaChon' onclick='chonHanh(\"" + hk + "\")'><b style='color:" + hh.mau + "'>Hành " + hh.ten + "</b> — " + hh.moTa + "</button>";
    }
    if (chonTam.hanh) {
      h += "<p>Chọn <b>môn phái</b> (hành " + NGU_HANH[chonTam.hanh].ten + "):</p>";
      var ph = NGU_HANH[chonTam.hanh].phai;
      for (var pk in ph) { var pp = ph[pk], khoa = pp.namOnly && G.gioi === "nu";
        h += "<button class='luaChon' " + (khoa ? "disabled" : "") + " onclick='chonPhai(\"" + pk + "\")'><b>" + pp.ten + "</b> (" + pp.phe + ")" + (pp.namOnly ? " — chỉ nhận nam đệ tử" : "") + (khoa ? " 🚫" : "") + "</button>";
      }
    }
    if (chonTam.hanh && chonTam.phai) {
      var pp2 = NGU_HANH[chonTam.hanh].phai[chonTam.phai];
      h += "<p>Chọn <b>đường võ công</b> của " + pp2.ten + " (quyết định loại vũ khí và công phu):</p>";
      pp2.duong.forEach(function (d, i) {
        h += "<button class='luaChon' onclick='xacNhanNhapPhai(" + i + ")'><b>" + d[0] + "</b> — " + (d[1] === "ngoai" ? "Ngoại công" : "Nội công") + " · Vũ khí: " + d[2] + "</button>";
      });
    }
    return h + "</div>";
  }
  var n = G.nv;
  h += "<p>Bạn là đệ tử <b style='color:" + mauTen() + "'>" + tenPhai() + "</b>. Tên bạn nay mang màu hành " + NGU_HANH[G.hanh].ten + ".</p>";
  if (n.mp < MP_MUC.length) { var m = nvMonPhai(n.mp);
    h += "<p><b>Nhiệm vụ môn phái (cấp " + m.lv + "):</b> " + moTaNV(m) + "<br>Tiến độ: " + n.mpDem + "/" + m.so + "</p>" +
      (n.mpDem >= m.so ? "<button class='nutLon nho' onclick='nhanThuongMP()'>Nhận thưởng</button>" : "");
  } else h += "<p>Đã hoàn thành mọi nhiệm vụ môn phái.</p>";
  if (G.lv >= 20 && G.lv <= 90) {
    if (!n.satThu) h += "<p><b>Nhiệm vụ sát thủ:</b> Chưởng Môn giao việc tru sát một Boss Sát Thủ.</p><button class='nutLon nho' onclick='nhanNVSatThu()'>Nhận nhiệm vụ sát thủ</button>";
    else h += "<p><b>Săn Boss Sát Thủ:</b> " + moTaNV({ so: 1, loai: "satThu", mapIdx: n.satThu.mapIdx }) + "<br>Tiến độ: " + n.satThu.dem + "/1</p>" +
      (n.satThu.dem >= 1 ? "<button class='nutLon nho' onclick='nhanThuongSatThu()'>Nhận thưởng</button>" : "<button class='nutPhu' onclick='huySatThu()'>Hủy nhiệm vụ</button>");
  } else if (G.lv < 20) h += "<p class='ghiChu'>Nhiệm vụ săn Boss Sát Thủ mở từ cấp 20 tới cấp 90 cho đệ tử đã nhập phái.</p>";
  return h + "</div>";
}
function chonHanh(h) { chonTam.hanh = h; chonTam.phai = null; moNPC("chuongMon"); }
function chonPhai(p) { chonTam.phai = p; moNPC("chuongMon"); }
function xacNhanNhapPhai(i) {
  var pp = NGU_HANH[chonTam.hanh].phai[chonTam.phai], d = pp.duong[i];
  if (pp.namOnly && G.gioi === "nu") { ghiLog("🚫 " + pp.ten + " chỉ nhận nam đệ tử."); return; }
  G.hanh = chonTam.hanh; G.phai = chonTam.phai; G.duong = d[0]; G.loaiCong = d[1]; G.vuKhiLoai = d[2];
  ghiLog("🏯🎉 Bạn đã gia nhập <b>" + pp.ten + "</b>, theo đường <b>" + d[0] + "</b>! Tên bạn từ nay mang màu hành " + NGU_HANH[G.hanh].ten + ".");
  renderAll(); luuGame(); moNPC("chuongMon");
}
function nhanNVSatThu() {
  var idx = mapGanNhat(Math.min(G.lv, 90));
  if (MAPS[idx].lv < 20) idx = 2;
  G.nv.satThu = { mapIdx: idx, dem: 0, exp: G.lv * 260, bac: G.lv * 60 };
  ghiLog("⚔️ Nhận nhiệm vụ: tru sát Boss Sát Thủ tại " + MAPS[idx].ten + ".");
  renderAll(); luuGame(); moNPC("chuongMon");
}
function huySatThu() { G.nv.satThu = null; renderAll(); luuGame(); moNPC("chuongMon"); }

// ================= KHOI TAO =================
function chonGioi(g) {
  gioiTam = g;
  $("gtNam").classList.toggle("dangChon", g === "nam");
  $("gtNu").classList.toggle("dangChon", g === "nu");
}
function vaoGame() {
  $("manTao").classList.add("an");
  $("manGame").classList.remove("an");
  hp = chiSo().hpMax; mp = chiSo().mpMax;
  veNPC_List(); sinhQuai(); renderAll();
}
function taoNhanVat() {
  var ten = $("tenNhap").value.trim() || "Vô Danh Hiệp";
  G = nhanVatMoi(ten, gioiTam);
  vaoGame();
  ghiLog("⚔️ Chào mừng <b>" + ten + "</b> bước vào giang hồ! Hãy luyện công ở Ngoại Ô Dương Châu, cấp 10 sẽ được nhập môn phái.");
  luuGame();
}
function choiTiep() {
  var s = taiGame(); if (!s) return;
  G = s; vaoGame();
  ghiLog("▶ Chào mừng trở lại, " + G.ten + "!");
}
window.onload = function () { if (taiGame()) $("btnChoiTiep").classList.remove("an"); };
