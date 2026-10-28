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
  var bonus = ({ thuong: 1, tinhAnh: 1.7, satThu: 2.6, tieuHK: 4, daiHK: 6, chuThuyen: 9 }[loaiKey] || 1) * (E.bonusPham || 1);
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

// ================= ENGINE 2.5D (BAN 2) =================
// Ve nhan vat va quai tren canvas, danh nhau thoi gian thuc, so sat thuong bay,
// do roi xuong dat, vong sang skill. Cac he thong cu (chi so, do, nhiem vu, NPC) giu nguyen.
var THEME = [
  { sky: ["#8fc3e8", "#e8f4fc"], dat: "#69a84f", dat2: "#598c40", decor: "cay",    kieu: "thu",   mau: "#8a6b45" },
  { sky: ["#9fd8a8", "#eefbef"], dat: "#5f9e4e", dat2: "#4c8440", decor: "truc", kieu: "nguoi", mau: "#4e6b3a" },
  { sky: ["#7d8590", "#cfd6dd"], dat: "#5c6e4a", dat2: "#4a5a3c", decor: "da",     kieu: "nguoi", mau: "#3f4750" },
  { sky: ["#f2c879", "#fdeecb"], dat: "#d9b26a", dat2: "#c09a52", decor: "xuong",  kieu: "thu",   mau: "#b09a72" },
  { sky: ["#7fae7a", "#dcebd2"], dat: "#55793f", dat2: "#446231", decor: "dam",    kieu: "ran",   mau: "#5e8f3e" },
  { sky: ["#cfe6f5", "#ffffff"], dat: "#eef4f8", dat2: "#d7e4ee", decor: "tuyet",  kieu: "thu",   mau: "#e8edf2" },
  { sky: ["#e8845a", "#f7c489"], dat: "#6e3b2a", dat2: "#59301f", decor: "lava",   kieu: "ma",    mau: "#c2452d" },
  { sky: ["#4a4470", "#8d84b8"], dat: "#3d3a55", dat2: "#2f2c44", decor: "am",     kieu: "ma",    mau: "#b8c4de" },
  { sky: ["#a8d8f0", "#eefaff"], dat: "#bfe3f2", dat2: "#9fcadd", decor: "bang",   kieu: "thu",   mau: "#a8c8de" },
  { sky: ["#d9a05a", "#f2ddba"], dat: "#9a7d4f", dat2: "#7f663e", decor: "tich",   kieu: "nguoi", mau: "#8a6d3b" },
  { sky: ["#2c2438", "#574a6e"], dat: "#241d30", dat2: "#1a1524", decor: "dong",   kieu: "ma",    mau: "#7d4a5e" },
  { sky: ["#7fb2d9", "#dceefb"], dat: "#8a6b45", dat2: "#75582f", decor: "thuyen", kieu: "nguoi", mau: "#4a3b30" },
  { sky: ["#1f2a44", "#46586e"], dat: "#75582f", dat2: "#5e4525", decor: "thuyen", kieu: "nguoi", mau: "#30303a" }
];
var E = { ready: false, cv: null, cx: null, W: 0, H: 0,
  player: { x: 0.3, y: 0.78, face: 1, diChuyen: false, atkT: 0, castT: 0, dodgeT: 0, chet: false },
  mobs: [], parts: [], drops: [], target: null, theLuc: 100, tuDong2: false, demSinh: 0, rung: 0, flash: null };
function mauHanh() { return G && G.hanh ? NGU_HANH[G.hanh].mau : "#7dd3fc"; }
function tamRand(seed) { var x = Math.sin(seed * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
function genQuaiData(mapIdx) {
  var map = MAPS[mapIdx], r = Math.random(), key = "thuong";
  if (map.lv >= 150 && r < 0.10) key = "chuThuyen";
  else if (map.lv >= 30 && r < 0.016) key = "daiHK";
  else if (map.lv >= 20 && r < 0.046) key = "tieuHK";
  else if (map.lv >= 20 && r < 0.096) key = "satThu";
  else if (r < 0.216) key = "tinhAnh";
  var L = LOAI_QUAI[key];
  var hpMax = Math.round((30 + map.lv * 13) * (1 + map.lv / 28) * L.hs * ngau(0.92, 1.08));
  return { key: key, loai: L, ten: (key === "thuong" ? map.quai : L.ten.replace(/^[^ ]+ /, "") + " " + map.quai),
    hp: hpMax, hpMax: hpMax,
    atk: Math.round((3 + map.lv * 1.5) * Math.pow(L.hs, 0.6) * ngau(0.9, 1.1)),
    exp: Math.round(map.lv * 9 * L.exp), bac: Math.round(map.lv * 3.2 * L.bac * ngau(0.85, 1.25)) };
}
function spawnMob() {
  var d = genQuaiData(G.mapIdx);
  var mx = ngau(0.55, 0.95), my = ngau(0.36, 0.93);
  return { d: d, x: mx, y: my, nhaX: mx, nhaY: my, traThu: 0, langThang: ngau(0, 2), atkCd: ngau(0.4, 1.1), hitT: 0, chet: false, buoc: ngau(0, 6) };
}
function dongBoQuai() { quai = E.target ? E.target.d : (E.mobs.length ? E.mobs[0].d : null); }
function sinhQuai() {
  if (!E.ready) { quai = genQuaiData(G ? G.mapIdx : 0); return; }
  E.mobs = []; E.drops = []; E.parts = []; E.target = null;
  E.player.x = 0.25; E.player.y = 0.74; E.player.chet = false;
  for (var i = 0; i < 4; i++) E.mobs.push(spawnMob());
  dongBoQuai();
}
function tiLe(y) { return 0.5 + (y - 0.22) * 1.02; }
function PX(x) { return x * E.W; }
function PY(y) { return y * E.H; }

// ---------- VE NEN ----------
function veNen() {
  var cx = E.cx, th = THEME[G.mapIdx] || THEME[0], W = E.W, H = E.H, chanTroi = H * 0.18;
  var khoaNen = G.mapIdx + "_" + W + "x" + H + "_" + (E.bufTyLe || 1);
  if (E.nenKhoa !== khoaNen) { E.nenKhoa = khoaNen; taoNenTinh(th, W, H, chanTroi); }
  if (E.nenTinh) {
    cx.save(); cx.setTransform(1, 0, 0, 1, 0, 0); cx.drawImage(E.nenTinh, 0, 0); cx.restore();
    cx.setTransform(E.bufTyLe || 1, 0, 0, E.bufTyLe || 1, 0, 0);
    return;
  }
  var g = cx.createLinearGradient(0, 0, 0, chanTroi);
  g.addColorStop(0, th.sky[0]); g.addColorStop(1, th.sky[1]);
  cx.fillStyle = g; cx.fillRect(0, 0, W, chanTroi);
  cx.fillStyle = th.dat; cx.fillRect(0, chanTroi, W, H - chanTroi);
  // Duong phoi canh tren mat dat (nhin tu tren cao xuong 35 do): ngang thi thua o xa, day o gan
  cx.strokeStyle = th.dat2; cx.lineWidth = 1.4;
  [0.30, 0.45, 0.62, 0.82].forEach(function (ty) {
    cx.globalAlpha = 0.55; cx.beginPath(); cx.moveTo(0, H * ty); cx.lineTo(W, H * ty); cx.stroke();
  });
  cx.globalAlpha = 0.35;
  for (var v = 0; v < 7; v++) {
    var xv = W * (0.08 + v * 0.14);
    cx.beginPath(); cx.moveTo(W / 2 + (xv - W / 2) * 0.55, chanTroi); cx.lineTo(xv, H); cx.stroke();
  }
  cx.globalAlpha = 1;
  // Vat trang tri o chan troi (nho) va rai tren mat dat (to dan ve gan)
  for (var i = 0; i < 9; i++) {
    var dx = tamRand(G.mapIdx * 31 + i * 7) * W, dy = chanTroi - 2;
    var s = 0.42 + tamRand(i * 13 + G.mapIdx) * 0.25;
    veDecor(th.decor, dx, dy, s, th);
  }
  for (var j = 0; j < 6; j++) {
    var gx = tamRand(G.mapIdx * 57 + j * 19) * W, gy = H * (0.34 + tamRand(j * 7 + 3) * 0.55);
    veDecor(th.decor, gx, gy, tiLe(gy / H) * 0.85, th);
  }
  if (th.decor === "thuyen") {
    cx.strokeStyle = "rgba(60,40,20,.55)"; cx.lineWidth = 2;
    for (var k = 1; k < 7; k++) { cx.beginPath(); cx.moveTo(0, chanTroi + (H - chanTroi) * k * 0.14); cx.lineTo(W, chanTroi + (H - chanTroi) * k * 0.14); cx.stroke(); }
    cx.fillStyle = "#5e4525"; cx.fillRect(W * 0.82, H * 0.02, 6, chanTroi);
    cx.fillStyle = "rgba(240,235,215,.85)";
    cx.beginPath(); cx.moveTo(W * 0.82 + 6, H * 0.03); cx.lineTo(W * 0.95, H * 0.11); cx.lineTo(W * 0.82 + 6, chanTroi - 2); cx.closePath(); cx.fill();
  }
}
function veDecor(loai, x, y, s, th) {
  var cx = E.cx; cx.save(); cx.translate(x, y); cx.scale(s, s);
  cx.strokeStyle = "#4a3b28"; cx.fillStyle = "#4a3b28";
  if (loai === "cay") { cx.fillRect(-2, -16, 4, 16); cx.fillStyle = "#3e7d32"; cx.beginPath(); cx.arc(0, -26, 15, 0, 7); cx.arc(-11, -18, 10, 0, 7); cx.arc(11, -18, 10, 0, 7); cx.fill(); }
  else if (loai === "truc") { cx.fillStyle = "#3e7d32"; for (var i = -1; i < 2; i++) cx.fillRect(i * 9 - 1.5, -44, 3, 44); cx.beginPath(); cx.arc(-6, -46, 8, 0, 7); cx.arc(8, -40, 7, 0, 7); cx.fill(); }
  else if (loai === "da") { cx.fillStyle = "#6b7280"; cx.beginPath(); cx.moveTo(-15, 0); cx.lineTo(-6, -14); cx.lineTo(5, -18); cx.lineTo(15, 0); cx.closePath(); cx.fill(); }
  else if (loai === "xuong") { cx.fillStyle = "#4e7d3a"; cx.fillRect(-2, -26, 4, 26); cx.fillRect(-12, -20, 10, 4); cx.fillRect(2, -24, 10, 4); }
  else if (loai === "dam") { cx.strokeStyle = "#3e6b2f"; cx.lineWidth = 2.5; cx.beginPath(); cx.moveTo(0, 0); cx.quadraticCurveTo(-4, -16, -9, -22); cx.moveTo(0, 0); cx.quadraticCurveTo(4, -18, 10, -24); cx.stroke(); }
  else if (loai === "tuyet") { cx.fillRect(-2, -16, 4, 16); cx.fillStyle = "#eef4f8"; cx.beginPath(); cx.moveTo(0, -40); cx.lineTo(-13, -14); cx.lineTo(13, -14); cx.closePath(); cx.fill(); }
  else if (loai === "lava") { cx.fillStyle = "#3a2a24"; cx.beginPath(); cx.moveTo(-14, 0); cx.lineTo(-4, -13); cx.lineTo(7, -16); cx.lineTo(14, 0); cx.closePath(); cx.fill(); cx.fillStyle = "#ff7b3a"; cx.beginPath(); cx.arc(0, -4, 3, 0, 7); cx.fill(); }
  else if (loai === "am") { cx.strokeStyle = "#2c2838"; cx.lineWidth = 3; cx.beginPath(); cx.moveTo(0, 0); cx.lineTo(0, -24); cx.moveTo(0, -16); cx.lineTo(-10, -26); cx.moveTo(0, -20); cx.lineTo(9, -30); cx.stroke(); }
  else if (loai === "bang") { cx.fillStyle = "rgba(190,230,245,.9)"; cx.beginPath(); cx.moveTo(0, -34); cx.lineTo(-8, 0); cx.lineTo(8, 0); cx.closePath(); cx.fill(); }
  else if (loai === "tich") { cx.fillStyle = "#a08b62"; cx.fillRect(-6, -34, 12, 34); cx.fillRect(-9, -38, 18, 5); }
  else if (loai === "dong") { cx.fillStyle = "#3a3049"; cx.beginPath(); cx.moveTo(-8, -52); cx.lineTo(0, -30); cx.lineTo(8, -52); cx.closePath(); cx.fill(); }
  cx.restore();
}
// ---------- VE NHAN VAT ----------
function phamCuaViTri(vt) {
  var id = G.mac[vt]; if (!id) return -1;
  for (var i = 0; i < G.tui.length; i++) if (G.tui[i].id === id) return G.tui[i].pham;
  return -1;
}
function layDoMac(vt) {
  var id = G.mac[vt]; if (!id) return null;
  for (var i = 0; i < G.tui.length; i++) if (G.tui[i].id === id) return G.tui[i];
  return null;
}
function veNhanVat() {
  var cx = E.cx, p = E.player, x = PX(p.x), y = PY(p.y), s = tiLe(p.y), f = p.face;
  cx.fillStyle = "rgba(0,0,0,.3)"; cx.beginPath(); cx.ellipse(x, y + 2, 17 * s, 5 * s, 0, 0, 7); cx.fill();
  var dungSprite = (typeof SPR !== "undefined" && SPR.nv && G.gioi === "nam");
  if (p.dodgeT > 0) { cx.save(); cx.globalAlpha = 0.35; cx.translate(-f * 14 * s, 0); if (dungSprite) veSpriteNhanVat(x, y, s, f); else veThanNhanVat(x, y, s, f); cx.restore(); }
  if (dungSprite) veSpriteNhanVat(x, y, s, f); else veThanNhanVat(x, y, s, f);
  if (p.castT > 0) {
    var tt = 1 - p.castT / 0.55, mh = mauHanh();
    cx.strokeStyle = mh; cx.globalAlpha = 1 - tt; cx.lineWidth = 3;
    cx.beginPath(); cx.ellipse(x, y + 1, (8 + tt * 34) * s, (3 + tt * 11) * s, 0, 0, 7); cx.stroke();
    cx.globalAlpha = 0.8; cx.lineWidth = 2.5;
    cx.beginPath(); cx.ellipse(x, y - 34 * s, (20 + Math.sin(Date.now() / 60) * 3) * s, 6 * s, 0, 0.3, 5.2); cx.stroke();
    cx.globalAlpha = 1;
  }
}
function veThanNhanVat(x, y, s, f) {
  var cx = E.cx;
  var phamAo = phamCuaViTri("ao"), phamVK = phamCuaViTri("vuKhi");
  var aoItem = layDoMac("ao"), capAo = aoItem ? aoItem.cap : 0;
  var aoMau = phamAo >= 0 ? PHAM_CHAT[phamAo].mau : "#46586e";
  var buocChan = E.player.diChuyen ? Math.sin(Date.now() / 90) * 4 * s : 0;
  cx.fillStyle = "#2e2a33";
  cx.fillRect(x - 7 * s + buocChan, y - 12 * s, 5 * s, 12 * s);
  cx.fillRect(x + 2 * s - buocChan, y - 12 * s, 5 * s, 12 * s);
  cx.fillStyle = "#191411";
  cx.fillRect(x - 8.2 * s + buocChan, y - 2.8 * s, 7.6 * s, 2.8 * s);
  cx.fillRect(x + 1.4 * s - buocChan, y - 2.8 * s, 7.6 * s, 2.8 * s);
  cx.fillStyle = "rgba(255,255,255,.18)";
  cx.fillRect(x - 8.2 * s + buocChan, y - 2.8 * s, 7.6 * s, 0.9 * s);
  cx.fillRect(x + 1.4 * s - buocChan, y - 2.8 * s, 7.6 * s, 0.9 * s);
  cx.fillStyle = aoMau;
  cx.beginPath();
  cx.moveTo(x - 9 * s, y - 46 * s); cx.lineTo(x + 9 * s, y - 46 * s);
  cx.lineTo(x + 14 * s, y - 8 * s); cx.lineTo(x - 14 * s, y - 8 * s);
  cx.closePath(); cx.fill();
  cx.strokeStyle = "rgba(0,0,0,.35)"; cx.lineWidth = 1.1 * s;
  cx.beginPath(); cx.moveTo(x - 9 * s, y - 46 * s); cx.lineTo(x + 9 * s, y - 46 * s); cx.lineTo(x + 14 * s, y - 8 * s); cx.lineTo(x - 14 * s, y - 8 * s); cx.closePath(); cx.stroke();
  cx.fillStyle = "rgba(0,0,0,.15)";
  cx.beginPath(); cx.moveTo(x + 1 * s, y - 46 * s); cx.lineTo(x + 9 * s, y - 46 * s); cx.lineTo(x + 14 * s, y - 8 * s); cx.lineTo(x + 5 * s, y - 8 * s); cx.closePath(); cx.fill();
  if (capAo < 7) { cx.fillStyle = "rgba(255,255,255,.10)"; cx.beginPath(); cx.ellipse(x - 2.5 * s, y - 33 * s, 4.6 * s, 8 * s, 0, 0, 7); cx.fill(); }
  if (phamAo >= 3) { cx.strokeStyle = "#fff3b0"; cx.lineWidth = 1.6; cx.beginPath(); cx.moveTo(x - 12 * s, y - 12 * s); cx.lineTo(x + 12 * s, y - 12 * s); cx.stroke(); }
  // NGOAI HINH AO THEO CAP DO (chuan VLTK1): cap 1-3 vai tho, 4-6 hoa van theo phai, 7-8 giap sat, 9-10 chien giap
  if (capAo >= 1 && capAo <= 3) {
    if (capAo === 1) { cx.fillStyle = "rgba(0,0,0,.35)"; cx.fillRect(x - 6 * s, y - 22 * s, 5 * s, 5 * s); }
    cx.strokeStyle = "rgba(0,0,0,.25)"; cx.lineWidth = 1.2 * s;
    cx.beginPath(); cx.moveTo(x, y - 45 * s); cx.lineTo(x, y - 32 * s); cx.stroke();
  } else if (capAo >= 4 && capAo <= 6) {
    cx.strokeStyle = mauHanh(); cx.lineWidth = 1.7 * s;
    cx.beginPath(); cx.moveTo(x - 4 * s, y - 45 * s); cx.lineTo(x - 5.5 * s, y - 32 * s); cx.moveTo(x + 4 * s, y - 45 * s); cx.lineTo(x + 5.5 * s, y - 32 * s); cx.stroke();
    cx.fillStyle = "rgba(0,0,0,.3)";
    cx.beginPath(); cx.arc(x - 10 * s, y - 45 * s, 3.6 * s, 0, 7); cx.arc(x + 10 * s, y - 45 * s, 3.6 * s, 0, 7); cx.fill();
    cx.strokeStyle = "#e8d9a0"; cx.lineWidth = 1.2 * s;
    cx.beginPath(); cx.moveTo(x - 5 * s, y - 46.5 * s); cx.lineTo(x + 5 * s, y - 46.5 * s); cx.stroke();
  } else if (capAo >= 7) {
    var vang = capAo >= 9;
    cx.fillStyle = vang ? "#5a6270" : "#9aa7b5";
    cx.fillRect(x - 8 * s, y - 45.5 * s, 16 * s, 14 * s);
    cx.fillStyle = "rgba(255,255,255,.35)"; cx.fillRect(x - 8 * s, y - 45.5 * s, 16 * s, 3 * s);
    cx.strokeStyle = phamAo >= 2 ? PHAM_CHAT[phamAo].mau : (vang ? "#f5c542" : "#6e7885");
    cx.lineWidth = 1.6 * s; cx.strokeRect(x - 8 * s, y - 45.5 * s, 16 * s, 14 * s);
    cx.fillStyle = vang ? "#78818f" : "#aeb9c6";
    cx.beginPath(); cx.arc(x - 11 * s, y - 45 * s, (vang ? 6 : 5) * s, 0, 7); cx.arc(x + 11 * s, y - 45 * s, (vang ? 6 : 5) * s, 0, 7); cx.fill();
    cx.strokeStyle = vang ? "#f5c542" : "#79838f"; cx.lineWidth = 1.3 * s;
    cx.beginPath(); cx.arc(x - 11 * s, y - 45 * s, (vang ? 6 : 5) * s, 0, 7); cx.stroke();
    cx.beginPath(); cx.arc(x + 11 * s, y - 45 * s, (vang ? 6 : 5) * s, 0, 7); cx.stroke();
    if (vang) {
      cx.fillStyle = "#f5c542";
      cx.save(); cx.translate(x, y - 38 * s); cx.rotate(Math.PI / 4); cx.fillRect(-2.6 * s, -2.6 * s, 5.2 * s, 5.2 * s); cx.restore();
      cx.fillRect(x - 12.5 * s, y - 11.5 * s, 25 * s, 2 * s);
      cx.fillStyle = "#39404c";
      cx.beginPath(); cx.arc(x - 11 * s, y - 49 * s, 1.5 * s, 0, 7); cx.arc(x + 11 * s, y - 49 * s, 1.5 * s, 0, 7); cx.fill();
    }
  }
  cx.fillStyle = "#c9a227"; cx.fillRect(x - 9 * s, y - 30 * s, 18 * s, 3.4 * s);
  var gocTay = E.player.atkT > 0 ? Math.sin((0.28 - E.player.atkT) / 0.28 * Math.PI) * 1.5 * f : 0.15 * f;
  cx.save(); cx.translate(x + f * 9 * s, y - 42 * s); cx.rotate(gocTay);
  cx.fillStyle = aoMau; cx.fillRect(0, -2.4 * s, f * 11 * s, 4.8 * s);
  veVuKhi(11 * s * f, 0, s, f, phamVK);
  cx.restore();
  cx.fillStyle = "#f2c49b"; cx.beginPath(); cx.arc(x, y - 54 * s, 7.4 * s, 0, 7); cx.fill();
  cx.fillStyle = "#26221f";
  if (G.gioi === "nu") { cx.fillRect(x - 8.6 * s, y - 60 * s, 3.4 * s, 22 * s); cx.fillRect(x + 5.2 * s, y - 60 * s, 3.4 * s, 22 * s); cx.beginPath(); cx.arc(x, y - 58 * s, 7.4 * s, Math.PI, 0); cx.fill(); }
  else { cx.beginPath(); cx.arc(x, y - 57.5 * s, 7.4 * s, Math.PI, 0); cx.fill(); cx.beginPath(); cx.arc(x, y - 63 * s, 2.6 * s, 0, 7); cx.fill();
    cx.fillStyle = "#c9a86a"; cx.beginPath(); cx.ellipse(x, y - 59.5 * s, 11.5 * s, 3.2 * s, 0, 0, 7); cx.fill(); }
}
function veVuKhi(ox, oy, s, f, phamVK) {
  var cx = E.cx, loai = G.vuKhiLoai || "Đao";
  if (phamVK >= 2) { cx.shadowColor = PHAM_CHAT[phamVK].mau; cx.shadowBlur = 13; }
  cx.strokeStyle = "#d7dde6"; cx.fillStyle = "#d7dde6"; cx.lineWidth = 2.6 * s;
  cx.beginPath();
  cx.strokeStyle = "#6e4f30"; cx.lineWidth = 3 * s; cx.beginPath(); cx.moveTo(ox - f * 5 * s, oy + 2.4 * s); cx.lineTo(ox, oy); cx.stroke();
  cx.strokeStyle = "#d7dde6"; cx.fillStyle = "#d7dde6"; cx.lineWidth = 2.6 * s; cx.beginPath();
  if (loai === "Đao") { cx.moveTo(ox, oy); cx.quadraticCurveTo(ox + f * 13 * s, oy - 4 * s, ox + f * 19 * s, oy + 3 * s); cx.stroke(); cx.strokeStyle = "rgba(255,255,255,.65)"; cx.lineWidth = 1.1 * s; cx.beginPath(); cx.moveTo(ox + f * 3 * s, oy - 1 * s); cx.quadraticCurveTo(ox + f * 13 * s, oy - 4.6 * s, ox + f * 18 * s, oy + 1.6 * s); cx.stroke(); }
  else if (loai === "Kiếm") { cx.moveTo(ox, oy); cx.lineTo(ox + f * 20 * s, oy - 2 * s); cx.stroke(); cx.strokeStyle = "#c9a227"; cx.lineWidth = 2.2 * s; cx.beginPath(); cx.moveTo(ox + f * 3.4 * s, oy - 3.4 * s); cx.lineTo(ox + f * 3.4 * s, oy + 2.6 * s); cx.stroke(); }
  else if (loai === "Thương" || loai === "Mâu") { cx.moveTo(ox - f * 6 * s, oy + 3 * s); cx.lineTo(ox + f * 24 * s, oy - 3 * s); cx.stroke(); cx.fillStyle = "#fff"; cx.beginPath(); cx.moveTo(ox + f * 24 * s, oy - 6 * s); cx.lineTo(ox + f * 30 * s, oy - 2.5 * s); cx.lineTo(ox + f * 24 * s, oy); cx.closePath(); cx.fill(); }
  else if (loai === "Bổng") { cx.strokeStyle = "#8a6b45"; cx.moveTo(ox - f * 4 * s, oy + 6 * s); cx.lineTo(ox + f * 18 * s, oy - 8 * s); cx.stroke(); }
  else if (loai === "Chùy") { cx.strokeStyle = "#8a6b45"; cx.moveTo(ox, oy); cx.lineTo(ox + f * 12 * s, oy - 4 * s); cx.stroke(); cx.fillStyle = "#9aa3ad"; cx.fillRect(ox + f * 12 * s - 4 * s, oy - 10 * s, 9 * s, 9 * s); }
  else if (loai === "Bùa") { cx.fillStyle = "#f5d76e"; cx.fillRect(ox + f * 6 * s, oy - 8 * s, 7 * s, 11 * s); cx.fillStyle = "#c22e2e"; cx.fillRect(ox + f * 8.6 * s, oy - 5 * s, 1.8 * s, 5 * s); }
  else if (loai === "Ám Khí") { cx.fillStyle = "#cfd6de"; cx.beginPath(); cx.arc(ox + f * 9 * s, oy, 4 * s, 0, 7); cx.fill(); }
  cx.shadowBlur = 0;
}
// ---------- VE QUAI ----------
function veQuaiVat(e) {
  var cx = E.cx, th = THEME[G.mapIdx] || THEME[0], x = PX(e.x), y = PY(e.y), s = tiLe(e.y);
  var hs = e.d.loai.hs, to = s * (1 + (hs - 1) * 0.13) * (e.d.key === "chuThuyen" ? 1.45 : 1);
  var nhap = Math.sin(Date.now() / 500 + e.buoc * 2) * 1.6;
  cx.fillStyle = "rgba(0,0,0,.3)"; cx.beginPath(); cx.ellipse(x, y + 2, 19 * to, 5.5 * to, 0, 0, 7); cx.fill();
  cx.save(); if (e.hitT > 0) { cx.shadowColor = "#ffffff"; cx.shadowBlur = 16; }
  var mau = th.mau;
  if (th.kieu === "thu") {
    cx.fillStyle = mau;
    cx.beginPath(); cx.ellipse(x, y - 15 * to + nhap * 0.3, 21 * to, 12.5 * to, 0, 0, 7); cx.fill();
    cx.beginPath(); cx.arc(x - 22 * to, y - 22 * to + nhap * 0.3, 8.6 * to, 0, 7); cx.fill();
    cx.beginPath(); cx.moveTo(x - 27 * to, y - 29 * to); cx.lineTo(x - 24 * to, y - 35 * to); cx.lineTo(x - 20 * to, y - 29 * to); cx.closePath(); cx.fill();
    cx.fillRect(x - 14 * to, y - 8 * to, 4.6 * to, 8 * to); cx.fillRect(x + 9 * to, y - 8 * to, 4.6 * to, 8 * to);
    cx.strokeStyle = mau; cx.lineWidth = 3 * to; cx.beginPath(); cx.moveTo(x + 20 * to, y - 18 * to); cx.quadraticCurveTo(x + 30 * to, y - 24 * to, x + 28 * to, y - 32 * to); cx.stroke();
    cx.fillStyle = "#1c1c1c"; cx.beginPath(); cx.arc(x - 25 * to, y - 23 * to, 1.7 * to, 0, 7); cx.fill();
  } else if (th.kieu === "ran") {
    cx.fillStyle = mau;
    for (var i = 0; i < 5; i++) { var yy = y - 4 * to + Math.sin(Date.now() / 300 + i + e.buoc) * 2.4; cx.beginPath(); cx.arc(x - i * 11 * to, yy - i * 1.4 * to, (8.6 - i * 0.9) * to, 0, 7); cx.fill(); }
    cx.fillStyle = "#c22e2e"; cx.fillRect(x - 50 * to, y - 12 * to, 6 * to, 1.8 * to);
  } else if (th.kieu === "ma") {
    var bay = Math.sin(Date.now() / 600 + e.buoc) * 3;
    cx.fillStyle = mau;
    cx.beginPath(); cx.moveTo(x - 10 * to, y - 48 * to + bay); cx.lineTo(x + 10 * to, y - 48 * to + bay);
    cx.lineTo(x + 15 * to, y - 6 * to + bay); cx.lineTo(x + 7 * to, y - 11 * to + bay); cx.lineTo(x, y - 5 * to + bay); cx.lineTo(x - 7 * to, y - 11 * to + bay); cx.lineTo(x - 15 * to, y - 6 * to + bay); cx.closePath(); cx.fill();
    cx.fillStyle = "#f2c49b"; cx.beginPath(); cx.arc(x, y - 54 * to + bay, 7.6 * to, 0, 7); cx.fill();
    cx.fillStyle = "#26221f"; cx.beginPath(); cx.moveTo(x - 7 * to, y - 58 * to + bay); cx.lineTo(x - 12 * to, y - 68 * to + bay); cx.lineTo(x - 3 * to, y - 61 * to + bay); cx.moveTo(x + 7 * to, y - 58 * to + bay); cx.lineTo(x + 12 * to, y - 68 * to + bay); cx.lineTo(x + 3 * to, y - 61 * to + bay); cx.fill();
    cx.fillStyle = "#ffdf5e"; cx.beginPath(); cx.arc(x - 2.8 * to, y - 54 * to + bay, 1.5 * to, 0, 7); cx.arc(x + 2.8 * to, y - 54 * to + bay, 1.5 * to, 0, 7); cx.fill();
  } else {
    cx.fillStyle = "#2e2a33"; cx.fillRect(x - 6.6 * to, y - 11 * to, 4.8 * to, 11 * to); cx.fillRect(x + 2 * to, y - 11 * to, 4.8 * to, 11 * to);
    cx.fillStyle = mau; cx.beginPath(); cx.moveTo(x - 8.6 * to, y - 44 * to); cx.lineTo(x + 8.6 * to, y - 44 * to); cx.lineTo(x + 12.6 * to, y - 8 * to); cx.lineTo(x - 12.6 * to, y - 8 * to); cx.closePath(); cx.fill();
    cx.strokeStyle = "#d7dde6"; cx.lineWidth = 2.4 * to; cx.beginPath(); cx.moveTo(x + 10 * to, y - 36 * to); cx.lineTo(x + 24 * to, y - 20 * to); cx.stroke();
    cx.fillStyle = "#e8b98d"; cx.beginPath(); cx.arc(x, y - 51 * to, 7 * to, 0, 7); cx.fill();
    cx.fillStyle = "#26221f"; cx.beginPath(); cx.arc(x, y - 54.6 * to, 7 * to, Math.PI, 0); cx.fill();
  }
  cx.restore();
  if (e.d.key === "tieuHK" || e.d.key === "daiHK" || e.d.key === "chuThuyen") {
    cx.fillStyle = "#fbbf24"; var cy = y - 66 * to + nhap * 0.3;
    cx.beginPath(); cx.moveTo(x - 8 * to, cy); cx.lineTo(x - 8 * to, cy - 7 * to); cx.lineTo(x - 4 * to, cy - 2.6 * to); cx.lineTo(x, cy - 8 * to); cx.lineTo(x + 4 * to, cy - 2.6 * to); cx.lineTo(x + 8 * to, cy - 7 * to); cx.lineTo(x + 8 * to, cy); cx.closePath(); cx.fill();
  }
}
// ---------- THANH TREN DAU + SO BAY ----------
function veThanh(x, y, w, tiLe, mau) {
  var cx = E.cx;
  cx.fillStyle = "rgba(10,8,6,.75)"; cx.fillRect(x - w / 2, y, w, 5);
  cx.fillStyle = mau; cx.fillRect(x - w / 2 + 0.5, y + 0.5, Math.max(0, (w - 1) * tiLe), 4);
}
function veTrenDau() {
  var cx = E.cx, cs = chiSo(), p = E.player, x = PX(p.x), y = PY(p.y), s = tiLe(p.y);
  cx.font = "bold " + Math.round(12.5 * s + 2) + "px Arial"; cx.textAlign = "center";
  var dayLen = (typeof SPR !== "undefined" && SPR.nv && G.gioi === "nam") ? 36 * s : 0;
  cx.fillStyle = mauTen(); cx.fillText(G.ten, x, y - 78 * s - dayLen);
  cx.font = Math.round(10 * s + 1) + "px Arial"; cx.fillStyle = "#ffe9a8";
  cx.fillText("Lv." + G.lv + (G.phai ? " · " + NGU_HANH[G.hanh].phai[G.phai].ten : ""), x, y - 66 * s - dayLen);
  veThanh(x, y - 63 * s - dayLen, 58 * s, hp / cs.hpMax, "#e0342b");
  veThanh(x, y - 56.5 * s - dayLen, 58 * s, mp / cs.mpMax, "#22c55e");
  veThanh(x, y - 50 * s - dayLen, 58 * s, E.theLuc / 100, "#a3e635");
  E.mobs.forEach(function (e) {
    if (e.chet) return;
    var ex = PX(e.x), ey = PY(e.y), es = tiLe(e.y) * (1 + (e.d.loai.hs - 1) * 0.13);
    cx.font = "bold " + Math.round(11.5 * es + 1.5) + "px Arial"; cx.fillStyle = e.d.loai.mau;
    cx.fillText(e.d.ten, ex, ey - 74 * es);
    veThanh(ex, ey - 70 * es, 52 * es, e.d.hp / e.d.hpMax, "#e0342b");
  });
}
function soBay(x, y, txt, mau, lon) {
  E.parts.push({ loai: "so", x: x, y: y, txt: txt, mau: mau, lon: lon || 1, t: 0, doi: ngau(0, 6.28) });
}
function veParts(dt) {
  var cx = E.cx;
  E.parts = E.parts.filter(function (pt) {
    pt.t += dt;
    if (pt.loai === "so") {
      var song = 1.15, tt = pt.t / song; if (tt >= 1) return false;
      var yy = pt.y - tt * 46 - Math.sin(tt * 9) * 2, xx = pt.x + Math.sin(pt.t * 5 + pt.doi) * 5;
      cx.globalAlpha = 1 - tt * tt; cx.font = "bold " + Math.round(15 * pt.lon) + "px Arial"; cx.textAlign = "center";
      cx.fillStyle = pt.mau; cx.fillText(pt.txt, xx, yy); cx.globalAlpha = 1;
      return true;
    }
    if (pt.loai === "orb") {
      var tt2 = pt.t / pt.dur; if (tt2 >= 1) { if (pt.den) pt.den(); return false; }
      var ox = pt.x0 + (pt.x1 - pt.x0) * tt2, oy = pt.y0 + (pt.y1 - pt.y0) * tt2 - Math.sin(tt2 * Math.PI) * 14;
      cx.fillStyle = pt.mau; cx.shadowColor = pt.mau; cx.shadowBlur = 12;
      cx.beginPath(); cx.arc(ox, oy, 5, 0, 7); cx.fill(); cx.shadowBlur = 0;
      return true;
    }
    if (pt.loai === "tia") {
      var tt3 = pt.t / pt.dur; if (tt3 >= 1) return false;
      pt.x += pt.vx * dt; pt.y += pt.vy * dt; pt.vy += 340 * dt;
      cx.globalAlpha = 1 - tt3; cx.fillStyle = pt.mau;
      cx.fillRect(pt.x - pt.r / 2, pt.y - pt.r / 2, pt.r, pt.r);
      cx.globalAlpha = 1;
      return true;
    }
    return false;
  });
}

// ---------- ENGINE: VONG LAP + CHIEN DAU THOI GIAN THUC ----------
var mocTG = 0;
function khungHinh(ts) {
  requestAnimationFrame(khungHinh);
  if (!E.ready || !G || !E.cv) return;
  if (E.stage && E.stage.clientWidth > 0 && Math.abs(E.stage.clientWidth - (E.cssW || 0)) > 4 && E.coLai) E.coLai();
  var dt = Math.min(0.05, mocTG ? (ts - mocTG) / 1000 : 0.016); mocTG = ts;
  capNhat(dt);
  veSanDau(dt);
}
function tamXa() {
  if (!G) return false;
  if (G.loaiCong === "noi") return true;
  return ["Ám Khí", "Bùa"].indexOf(G.vuKhiLoai) >= 0;
}
function khoangCach(a, b) { return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow((a.y - b.y) * 1.6, 2)); }
function diToi(e, tx, ty, tocDo, dt) {
  var dx = tx - e.x, dy = ty - e.y, d = Math.sqrt(dx * dx + dy * dy * 2.2);
  if (d < 0.012) { e.diChuyen = false; return true; }
  var buoc = tocDo * dt;
  e.x += dx / d * Math.min(buoc, Math.abs(dx) + 0.001) * (Math.abs(dx) > 0.001 ? 1 : 0);
  e.y += dy / d * Math.min(buoc * 0.7, Math.abs(dy) + 0.001) * (Math.abs(dy) > 0.001 ? 1 : 0);
  if (dx !== 0) e.face = dx > 0 ? 1 : -1;
  e.diChuyen = true;
  return false;
}
function gayDanh(e, heSo, tenChieu) {
  if (!e || e.chet) return;
  var cs = chiSo();
  var crit = Math.random() * 100 < cs.crit;
  var goc = G.loaiCong === "noi" ? (cs.atk * 0.6 + cs.noi * 0.7) : cs.atk;
  var dmg = Math.max(1, Math.round(goc * heSo * ngau(0.9, 1.1) * (crit ? 1.7 : 1)));
  e.d.hp -= dmg; e.hitT = 0.16; e.traThu = 6;
  bungTia(PX(e.x), PY(e.y) - 30 * tiLe(e.y), crit ? "#fde047" : "#ffe9a8", crit ? 12 : 7);
  soBay(PX(e.x), PY(e.y) - 84 * tiLe(e.y), (crit ? "💥 " : "") + fmt(dmg), crit ? "#fde047" : "#ffffff", crit ? 1.35 : 1);
  if (tenChieu) ghiLog("✨ <b>" + tenChieu + "</b> gây <b>" + fmt(dmg) + "</b> sát thương lên " + e.d.ten + ".");
  if (e.d.hp <= 0) gietQuai(e);
}
function thucHienDanh() {
  var t = E.target; if (!t || t.chet) return;
  E.player.atkT = 0.28; E.player.atkCd = E.theLuc < 2 ? 1.1 : 0.72;
  E.theLuc = Math.max(0, E.theLuc - 1.5);
  if (tamXa()) {
    E.parts.push({ loai: "orb", x0: PX(E.player.x), y0: PY(E.player.y) - 44 * tiLe(E.player.y),
      x1: PX(t.x), y1: PY(t.y) - 30 * tiLe(t.y), t: 0, dur: 0.22, mau: mauHanh(),
      den: (function (mm) { return function () { gayDanh(mm, 1, null); }; })(t) });
  } else gayDanh(t, 1, null);
}
function taoDoRot(mapLv, loaiKey) {
  var bonus = ({ thuong: 1, tinhAnh: 1.7, satThu: 2.6, tieuHK: 4, daiHK: 6, chuThuyen: 9 }[loaiKey] || 1) * (E.bonusPham || 1);
  var minIdx = { thuong: 0, tinhAnh: 0, satThu: 1, tieuHK: 2, daiHK: 3, chuThuyen: 4 }[loaiKey] || 0;
  var capIdx = capDoCuaMap(mapLv);
  if (Math.random() < 0.18 && capIdx < 9) capIdx++;
  return taoDo(capIdx, rollPham(bonus, minIdx));
}
function gietQuai(e) {
  e.chet = true;
  var q = e.d;
  // Luat chenh cap: quai thap cap hon nhan vat -> khong EXP, khong bac, khong do.
  // Quai cao cap hon -> thuong nhieu hon va do ngon hon.
  var chenh = MAPS[G.mapIdx].lv - G.lv;
  var heSoThuong = chenh < 0 ? 0 : (1 + chenh / 60);
  var expNhan = Math.round(q.exp * heSoThuong), bacNhan = Math.round(q.bac * heSoThuong);
  G.exp += expNhan; G.bac += bacNhan;
  if (chenh < 0) {
    if (!E.logChenh || Date.now() - E.logChenh > 20000) { E.logChenh = Date.now(); ghiLog("Hạ " + q.ten + " — quái thấp cấp hơn bạn nên <b>không nhận EXP, vàng hay đồ</b>. Hãy vào cổng xoáy tới map cấp cao hơn."); }
  } else {
    ghiLog("🎉 Hạ <b style='color:" + q.loai.mau + "'>" + q.ten + "</b>! +" + fmt(expNhan) + " EXP, +" + fmt(bacNhan) + " ngân lượng." + (chenh >= 20 ? " (Quái cao cấp hơn hẳn — thưởng lớn!)" : ""));
  }
  tienDoNV(q);
  var soLan = chenh < 0 ? 0 : ({ thuong: Math.random() < 0.4 ? 1 : 0, tinhAnh: Math.random() < 0.85 ? 1 : 0,
    satThu: 1 + (Math.random() < 0.3 ? 1 : 0), tieuHK: 2, daiHK: 2 + (Math.random() < 0.5 ? 1 : 0), chuThuyen: 3 }[q.key]);
  E.bonusPham = chenh > 0 ? 1 + chenh / 20 : 1;
  for (var i = 0; i < soLan; i++) {
    var it = taoDoRot(MAPS[G.mapIdx].lv, q.key);
    E.drops.push({ item: it, x: Math.min(0.96, Math.max(0.04, e.x + ngau(-0.05, 0.05))), y: Math.min(0.95, e.y + ngau(0, 0.03)), t: 0 });
    soBay(PX(e.x), PY(e.y) - 96 * tiLe(e.y), "🎁 Rớt đồ!", "#ffe9a8", 0.95);
  }
  while (G.exp >= expCan(G.lv)) {
    G.exp -= expCan(G.lv); G.lv++;
    hp = chiSo().hpMax; mp = chiSo().mpMax;
    ghiLog("🌟🌟 <b>LÊN CẤP " + G.lv + "!</b> Hồi đầy máu và nội lực.");
    soBay(PX(E.player.x), PY(E.player.y) - 100, "LÊN CẤP " + G.lv + "!", "#f5c542", 1.4);
  }
  if (E.target === e) { E.target = null; dongBoQuai(); }
  renderAll(); luuGame();
}
function nhatDo(dr) {
  G.tui.push(dr.item);
  ghiLog("🎁 Nhặt: <b style='color:" + PHAM_CHAT[dr.item.pham].mau + "'>" + dr.item.ten + "</b> (Đồ cấp " + dr.item.cap + " · " + PHAM_CHAT[dr.item.pham].ten + ")");
  soBay(PX(E.player.x), PY(E.player.y) - 92, "🎁 " + dr.item.ten, PHAM_CHAT[dr.item.pham].mau, 0.85);
  renderAll(); luuGame();
}
function capNhat(dt) {
  var cs = chiSo(), p = E.player;
  E.theLuc = Math.min(100, E.theLuc + dt * 7);
  mp = Math.min(cs.mpMax, mp + dt * cs.mpMax * 0.012);
  if (!E.target) hp = Math.min(cs.hpMax, hp + dt * cs.hpMax * 0.008);
  p.atkT = Math.max(0, p.atkT - dt); p.castT = Math.max(0, p.castT - dt); p.dodgeT = Math.max(0, p.dodgeT - dt);
  p.atkCd = Math.max(0, (p.atkCd || 0) - dt);
  E.demSinh += dt;
  E.mobs = E.mobs.filter(function (e) { return !e.chet; });
  if (E.mobs.length < 4 && E.demSinh > 2.2) { E.demSinh = 0; var nm = spawnMob(); E.mobs.push(nm);
    if (nm.d.key === "daiHK" || nm.d.key === "chuThuyen") { E.flash = { txt: "⚠️ " + nm.d.loai.ten.toUpperCase() + " XUẤT HIỆN!", t: 0 }; ghiLog("⚠️ <b style='color:" + nm.d.loai.mau + "'>" + nm.d.ten + "</b> xuất hiện tại " + MAPS[G.mapIdx].ten + "!"); } }
  // Do roi: qua 25 giay tu nhat
  E.drops = E.drops.filter(function (dr) { dr.t += dt; if (dr.t > 25) { nhatDo(dr); return false; } return true; });
  // Chon muc tieu khi tu dong
  if (E.tuDong2) {
    if (!E.target || E.target.chet) {
      var gan = null, gd = 1e9;
      E.mobs.forEach(function (e) { var d = khoangCach(p, e); if (d < gd) { gd = d; gan = e; } });
      E.target = gan; dongBoQuai();
    }
  }
  // Di chuyen cua nhan vat
  var dich = null, laDo = false;
  if (E.drops.length && (!E.target || (E.tuDong2 && E.target && khoangCach(p, E.target) > 0.3))) {
    var dGan = null, dd = 1e9;
    E.drops.forEach(function (dr) { var d = khoangCach(p, dr); if (d < dd) { dd = d; dGan = dr; } });
    if (dGan && (E.tuDong2 || dd < 0.5)) { dich = dGan; laDo = true; }
  }
  if (!dich && E.target && !E.target.chet) dich = E.target;
  if (!dich && E.diemDen) dich = E.diemDen;
  p.diChuyen = false;
  if (E.joyVec && Math.abs(E.joyVec.x) + Math.abs(E.joyVec.y) > 0.25) {
    // Dieu khien thu cong bang joystick: chay theo huong gat, van tu danh neu quai trong tam
    var jx = Math.min(0.97, Math.max(0.03, p.x + E.joyVec.x * 0.12));
    var jy = Math.min(0.96, Math.max(0.28, p.y + E.joyVec.y * 0.09));
    diToi(p, jx, jy, 0.62, dt);
    if (E.target && !E.target.chet && khoangCach(p, E.target) <= (tamXa() ? 0.30 : 0.088) && p.atkCd <= 0 && p.castT <= 0) thucHienDanh();
  } else if (dich) {
    var phamVi = laDo ? 0.045 : (tamXa() ? 0.30 : 0.088);
    if (khoangCach(p, dich) > phamVi) diToi(p, dich.x, dich.y, 0.52, dt);
    else if (laDo) { E.drops = E.drops.filter(function (d2) { return d2 !== dich; }); nhatDo(dich); }
    else if (dich === E.diemDen) E.diemDen = null;
    else if (p.atkCd <= 0 && p.castT <= 0) thucHienDanh();
  }
  // Quai di chuyen + danh lai (theo cap map):
  //  - Map duoi cap 50: quai khong tu duoi theo; chi tra dua khi bi danh (traThu), con lai di lang thang quanh nha.
  //  - Map cap 50 tro len: quai trong vung 800 (ban kinh canh gioi) tu xum lai danh; ngoai vung thi dung yen.
  var mapLv = MAPS[G.mapIdx].lv;
  E.mobs.forEach(function (e) {
    e.hitT = Math.max(0, e.hitT - dt); e.atkCd -= dt;
    var d = khoangCach(e, p);
    var duoi = false;
    if (e.traThu > 0) { e.traThu -= dt; if (d < 0.30) duoi = true; else if (d > 0.45) e.traThu = 0; }
    if (mapLv >= 50 && d < 0.38) duoi = true;
    if (!duoi) {
      e.langThang -= dt;
      if (e.langThang <= 0) {
        e.langThang = ngau(1.6, 3.6);
        e.nhaX = Math.min(0.97, Math.max(0.03, e.nhaX + ngau(-0.05, 0.05)));
        e.nhaY = Math.min(0.95, Math.max(0.30, e.nhaY + ngau(-0.03, 0.03)));
      }
      if (khoangCach(e, { x: e.nhaX, y: e.nhaY }) > 0.02) diToi(e, e.nhaX, e.nhaY, 0.07, dt); else e.diChuyen = false;
      return;
    }
    if (d > 0.095) diToi(e, p.x + Math.sin(e.buoc) * 0.03, p.y, 0.30, dt);
    else if (e.atkCd <= 0) {
      e.atkCd = 1.15;
      var ne = 8 + (G.hanh === "moc" ? 6 : 0);
      if (Math.random() * 100 < ne) {
        p.dodgeT = 0.32;
        soBay(PX(p.x), PY(p.y) - 88, "NÉ TRÁNH!", "#7dd3fc", 1.05);
      } else {
        var dmg = Math.max(1, Math.round((e.d.atk - cs.def * 0.55) * ngau(0.9, 1.1)));
        hp -= dmg;
        bungTia(PX(p.x), PY(p.y) - 34 * tiLe(p.y), "#ff8a75", 6);
        soBay(PX(p.x), PY(p.y) - 88, "-" + fmt(dmg), "#ff6b6b", 1.05);
        veDau();
        if (hp <= 0) { chetNV(); }
      }
    }
  });
  if (E.flash) { E.flash.t += dt; if (E.flash.t > 1.8) E.flash = null; }
}
function veSanDau(dt) {
  var cx = E.cx; if (!cx) return;
  veNen();
  // do roi duoi dat
  E.drops.forEach(function (dr) {
    var x = PX(dr.x), y = PY(dr.y) + Math.sin(Date.now() / 300 + dr.x * 20) * 2, pc = PHAM_CHAT[dr.item.pham];
    cx.fillStyle = pc.mau; cx.globalAlpha = 0.3 + Math.sin(Date.now() / 200) * 0.12;
    cx.beginPath(); cx.ellipse(x, y, 15, 6, 0, 0, 7); cx.fill(); cx.globalAlpha = 1;
    cx.fillStyle = "#6b5320"; cx.fillRect(x - 6, y - 12, 12, 10);
    cx.fillStyle = pc.mau; cx.fillRect(x - 6, y - 12, 12, 3);
    cx.font = "bold 11px Arial"; cx.textAlign = "center"; cx.fillStyle = pc.mau;
    cx.fillText(dr.item.ten, x, y - 17);
  });
  // thuc the xep theo do sau
  var ds = E.mobs.filter(function (e) { return !e.chet; }).map(function (e) { return { y: e.y, e: e }; });
  ds.push({ y: E.player.y, e: null });
  ds.sort(function (a, b) { return a.y - b.y; });
  ds.forEach(function (o) { if (o.e) veQuaiVat(o.e); else veNhanVat(); });
  if (E.flash) {
    cx.globalAlpha = Math.max(0, 1 - E.flash.t / 1.8);
    cx.font = "bold 21px Arial"; cx.textAlign = "center"; cx.fillStyle = "#fde047";
    cx.fillText(E.flash.txt, E.W / 2, 40); cx.globalAlpha = 1;
  }
  veTrenDau();
  veParts(dt);
}
// ---------- GHI DE CAC HAM BAN 1 ----------
function veQuai() { dongBoQuai(); }
function danhThuong() {
  if (!E.target || E.target.chet) {
    var gan = null, gd = 1e9;
    E.mobs.forEach(function (e) { var d = khoangCach(E.player, e); if (d < gd) { gd = d; gan = e; } });
    E.target = gan; dongBoQuai();
  }
  if (E.target && khoangCach(E.player, E.target) <= (tamXa() ? 0.30 : 0.088) && (E.player.atkCd || 0) <= 0) thucHienDanh();
}
function dungSkill(i) {
  var chieu = CHIEU[G.phai || "chuaPhai"][i];
  if (mp < chieu[2]) { ghiLog("⚠️ Không đủ nội lực cho " + chieu[0] + "."); return; }
  if (E.theLuc < 12) { ghiLog("⚠️ Hết thể lực, chờ hồi đã!"); return; }
  if (!E.target || E.target.chet) { ghiLog("Hãy chọn một con quái trước (chạm vào quái hoặc bấm Đánh thường)."); return; }
  mp -= chieu[2]; E.theLuc -= 12;
  E.player.castT = 0.55; E.player.face = E.target.x >= E.player.x ? 1 : -1;
  ghiLog("✨ Thi triển <b>" + chieu[0] + "</b>!");
  var t = E.target;
  if (tamXa() || khoangCach(E.player, t) > 0.12) {
    E.parts.push({ loai: "orb", x0: PX(E.player.x), y0: PY(E.player.y) - 44 * tiLe(E.player.y),
      x1: PX(t.x), y1: PY(t.y) - 30 * tiLe(t.y), t: 0, dur: 0.26, mau: mauHanh(),
      den: (function (mm, hs, tc) { return function () { gayDanh(mm, hs, tc); }; })(t, chieu[1], chieu[0]) });
  } else gayDanh(t, chieu[1], chieu[0]);
  veDau();
}
function doiQuai() {
  var khac = E.mobs.filter(function (e) { return e !== E.target && !e.chet; });
  if (khac.length) { E.target = khac[ngauInt(0, khac.length - 1)]; dongBoQuai(); ghiLog("🎯 Đổi mục tiêu: " + E.target.d.ten); }
}
function batTatAuto() { E.tuDong2 ? tatAuto() : (E.tuDong2 = true, tuDong = true, $("btnAuto").textContent = "⏸️ Dừng tự động", ghiLog("▶ Tự động đánh: nhân vật tự tìm quái, đánh và nhặt đồ.")); }
function tatAuto() { E.tuDong2 = false; tuDong = false; var b = $("btnAuto"); if (b) b.textContent = "▶ Tự động đánh"; if (dongHoAuto) { clearInterval(dongHoAuto); dongHoAuto = null; } }
// ---------- KHOI TAO SAN DAU ----------
function khoiTaoSanDau() {
  if (E.ready) return;
  var theQuai = document.querySelector("#tab-luyen .theQuai");
  if (!theQuai) return;
  var stage = document.createElement("div"); stage.id = "stageWrap";
  stage.innerHTML = "<canvas id='stageCV'></canvas><div class='stageHint'>👆 Chạm vào quái để chọn mục tiêu — nhân vật tự chạy tới đánh. Đồ rơi xuống đất: chạm vào món đồ để nhặt (hoặc bật Tự động). Thanh trên đầu nhân vật: máu đỏ · nội lực xanh lục · thể lực xanh lá nhạt. Map dưới cấp 50 quái không tự đuổi theo (bị đánh mới đánh trả); từ map cấp 50, quái ở gần sẽ xúm lại.</div>";
  theQuai.parentNode.insertBefore(stage, theQuai);
  E.cv = document.getElementById("stageCV"); E.cx = E.cv.getContext("2d");
  E.stage = stage;
  function coLai() {
    var w = stage.clientWidth || 360;
    var dangFull = !!(document.fullscreenElement || document.webkitFullscreenElement);
    var h = dangFull ? window.innerHeight : Math.max(280, Math.min(540, Math.round(w * 0.78)));
    var dpr = Math.min(1.5, window.devicePixelRatio || 1);
    E.cv.width = Math.round(w * dpr); E.cv.height = Math.round(h * dpr);
    if (E.cx.setTransform) E.cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    E.W = w; E.H = h; E.cssW = w;
  }
  E.coLai = coLai;
  coLai(); window.addEventListener("resize", coLai);
  document.addEventListener("fullscreenchange", function () { setTimeout(coLai, 120); });
  document.addEventListener("webkitfullscreenchange", function () { setTimeout(coLai, 120); });
  window.addEventListener("orientationchange", function () { setTimeout(coLai, 250); });
  function chamSan(cxPx, cyPx) {
    var r = E.cv.getBoundingClientRect();
    var x = (cxPx - r.left) / r.width, y = (cyPx - r.top) / r.height;
    var chon = null, cd = 1e9;
    E.mobs.forEach(function (e) { var d = Math.sqrt(Math.pow(e.x - x, 2) + Math.pow((e.y - y) * 1.4, 2)); if (d < cd) { cd = d; chon = e; } });
    if (chon && cd < 0.13) { E.target = chon; dongBoQuai(); E.diemDen = null; }
    else { E.diemDen = { x: Math.min(0.96, Math.max(0.04, x)), y: Math.min(0.95, Math.max(0.30, y)) }; if (!E.tuDong2) E.target = null; dongBoQuai(); }
  }
  E.cv.addEventListener("pointerdown", function (ev) { chamSan(ev.clientX, ev.clientY); });
  E.cv.addEventListener("touchstart", function (ev) { if (ev.touches && ev.touches.length) chamSan(ev.touches[0].clientX, ev.touches[0].clientY); }, { passive: true });
  E.cv.addEventListener("mousedown", function (ev) { chamSan(ev.clientX, ev.clientY); });
  E.ready = true;
  if (G) sinhQuai();
  requestAnimationFrame(khungHinh);
}
window.addEventListener("load", khoiTaoSanDau);

// ================= BAN 4: HUD + CONG XOAY 7 MAU =================
var H4 = { fps: 0, demK: 0, mocFPS: Date.now(), mapTo: false, thoiTiet: "", congCD: 0 };
window.__server = (function () { try { return localStorage.getItem("vl_server_last") || "khaison"; } catch (e) { return "khaison"; } })();
function khoaLuu() { return window.__server === "khaison" ? "volam_save_v1" : "volam_save_" + window.__server; }
function luuGame() { try { localStorage.setItem(khoaLuu(), JSON.stringify(G)); } catch (e) {} }
function taiGame() { try { var s = localStorage.getItem(khoaLuu()); return s ? JSON.parse(s) : null; } catch (e) { return null; } }
function xoaSave() {
  if (!confirm("Xóa nhân vật ở server này và chơi lại từ đầu?")) return;
  try { localStorage.removeItem(khoaLuu()); } catch (e) {}
  location.reload();
}
// ---------- CONG XOAY ----------
function taoCongs() {
  var cur = G.mapIdx, lvCur = MAPS[cur].lv, ds = [];
  if (cur < MAPS.length - 1 && G.lv >= MAPS[cur + 1].lv) {
    for (var i = 0; i < MAPS.length; i++) {
      if (MAPS[i].lv >= lvCur + 19 && MAPS[i].lv <= lvCur + 49) ds.push(i);
    }
    for (var a = ds.length - 1; a > 0; a--) { var b = Math.floor(Math.random() * (a + 1)); var tmp = ds[a]; ds[a] = ds[b]; ds[b] = tmp; }
    ds = ds.slice(0, 4);
  }
  var goc = [[0.09, 0.38], [0.91, 0.38], [0.09, 0.88], [0.91, 0.88]];
  E.congs = ds.map(function (dich, k) {
    return { dich: dich, x: goc[k][0], y: goc[k][1], mo: G.lv >= MAPS[dich].lv };
  });
  E.congsMap = cur; E.congsLv = G.lv;
}
function kiemTraCong() {
  if (!G || !E.ready) return;
  if (E.congsMap !== G.mapIdx || E.congsLv !== G.lv) taoCongs();
}
function veCongs() {
  if (!E.congs) return;
  var cx = E.cx, t = Date.now() / 300;
  E.congs.forEach(function (cg) {
    var x = PX(cg.x), y = PY(cg.y), s = tiLe(cg.y), dich = MAPS[cg.dich];
    cx.fillStyle = cg.mo ? "rgba(255,220,120,.35)" : "rgba(120,120,120,.25)";
    cx.beginPath(); cx.ellipse(x, y + 2, 20 * s, 6 * s, 0, 0, 7); cx.fill();
    cx.save(); cx.translate(x, y - 26 * s); cx.scale(0.55, 1);
    for (var k = 0; k < 7; k++) {
      cx.strokeStyle = cg.mo ? ("hsl(" + ((k * 51 + t * 40) % 360) + ",95%,62%)") : "#8a8f98";
      cx.lineWidth = 3.4 * s;
      cx.beginPath(); cx.arc(0, 0, (7 + k * 2.6) * s, t + k * 0.9, t + k * 0.9 + 3.6); cx.stroke();
    }
    cx.restore();
    cx.font = "bold " + Math.round(11 * s + 1) + "px Arial"; cx.textAlign = "center";
    cx.fillStyle = cg.mo ? "#ffe9a8" : "#c8ccd4";
    cx.fillText(cg.mo ? dich.ten : "🔒 " + dich.ten, x, y + 16 * s);
    cx.font = Math.round(10 * s + 1) + "px Arial"; cx.fillStyle = "#fff";
    cx.fillText(cg.mo ? "Cấp " + dich.lv : "Cần cấp " + dich.lv, x, y + 28 * s);
  });
}
var veSanDauGoc4 = veSanDau;
veSanDau = function (dt) { veSanDauGoc4(dt); veCongs(); };
function kiemTraVaoCong() {
  if (!G || !E.congs || H4.congCD > Date.now()) return;
  for (var i = 0; i < E.congs.length; i++) {
    var cg = E.congs[i];
    if (cg.mo && khoangCach(E.player, cg) < 0.06) {
      H4.congCD = Date.now() + 2500;
      E.flash = { txt: "🌀 VÀO CỔNG: " + MAPS[cg.dich].ten.toUpperCase(), t: 0 };
      vaoMap(cg.dich);
      return;
    }
  }
}
// ---------- HUD ----------
function el(id) { return document.getElementById(id); }
function taoHUD() {
  if (!E.stage || el("hudTL")) return;
  E.stage.style.position = "relative";
  var tl = document.createElement("div"); tl.className = "hudCum"; tl.id = "hudTL";
  tl.innerHTML = "<canvas id='hudAva' width='54' height='54'></canvas><div><div class='hudBars'>" +
    "<div class='hbar'><i id='hbHP' style='background:#e0342b'></i><span id='hbHPT'></span></div>" +
    "<div class='hbar'><i id='hbMP' style='background:#22c55e'></i><span id='hbMPT'></span></div>" +
    "<div class='hbar'><i id='hbTL' style='background:#a3e635'></i><span id='hbTLT'></span></div></div>" +
    "<div id='hudMeta'>🕐 --<br>🌤️ --</div></div>";
  E.stage.appendChild(tl);
  var tr = document.createElement("div"); tr.className = "hudCum"; tr.id = "hudTR";
  tr.innerHTML = "<canvas id='hudMap' width='96' height='96'></canvas><div><button class='hudNutTron' id='btnMapZoom'>⤢</button><button class='hudNutTron' id='btnFull'>⛶</button></div><div id='hudXY'>X 0 · Y 0</div>";
  E.stage.appendChild(tr);
  var info = document.createElement("div"); info.className = "hudCum"; info.id = "hudInfo"; info.textContent = "-- FPS";
  E.stage.appendChild(info);
  var joy = document.createElement("div"); joy.className = "hudCum"; joy.id = "hudJoy";
  joy.innerHTML = "<div id='joyNub'></div>";
  E.stage.appendChild(joy);
  var sk = document.createElement("div"); sk.className = "hudCum"; sk.id = "hudSkills";
  sk.innerHTML = "<button class='skBtn' id='sk1'><b>⚔️</b><span>Chiêu 1</span></button><button class='skBtn' id='sk2'><b>💥</b><span>Chiêu 2</span></button><button class='skBtn' id='skDuoc'><b>🧪</b><span id='skDuocT'>Dược</span></button>";
  E.stage.appendChild(sk);
  var exp = document.createElement("div"); exp.id = "expBarWrap";
  exp.innerHTML = "<div id='expFill'></div><div id='expTxt'>EXP 0,00%</div>";
  E.stage.parentNode.insertBefore(exp, E.stage.nextSibling);
  var tk = document.createElement("div"); tk.id = "tkBar";
  exp.parentNode.insertBefore(tk, exp.nextSibling);
  el("sk1").addEventListener("click", function () { dungSkill(0); });
  el("sk2").addEventListener("click", function () { dungSkill(1); });
  el("skDuoc").addEventListener("click", function () { dungDuoc(); });
  el("btnMapZoom").addEventListener("click", function () {
    H4.mapTo = !H4.mapTo;
    var m = el("hudMap"); m.width = H4.mapTo ? 184 : 96; m.height = H4.mapTo ? 184 : 96;
  });
  el("btnFull").addEventListener("click", function () { vaoToanManHinh(); });
  var bf = document.createElement("button"); bf.id = "btnFull2"; bf.textContent = "⛶"; bf.title = "Toàn màn hình";
  E.stage.appendChild(bf);
  bf.addEventListener("click", function () { vaoToanManHinh(); });
  var bk = document.createElement("button"); bk.id = "btnKhoa"; bk.textContent = "🔓"; bk.title = "Khóa màn hình treo máy";
  E.stage.appendChild(bk);
  bk.addEventListener("click", function () { batKhoaMan(); });
  var km = document.createElement("div"); km.id = "khoaMan";
  km.innerHTML = "<div class='khoaIco'>🔒</div><div>Đã khóa màn hình — game vẫn tự cày ở phía dưới</div><div class='khoaGio' id='khoaGio'></div><div style='margin-top:12px;font-size:13.5px'>Nhấn giữ 1 giây vào màn hình để mở khóa</div>";
  E.stage.appendChild(km);
  var giuMo = null;
  function huyGiu() { if (giuMo) { clearTimeout(giuMo); giuMo = null; } }
  km.addEventListener("pointerdown", function () { giuMo = setTimeout(tatKhoaMan, 1000); });
  km.addEventListener("pointerup", huyGiu); km.addEventListener("pointerleave", huyGiu); km.addEventListener("pointercancel", huyGiu);
  km.addEventListener("touchstart", function () { giuMo = setTimeout(tatKhoaMan, 1000); }, { passive: true });
  km.addEventListener("touchend", huyGiu);
  ganJoystick(joy);
  capNhatTkBar();
}
function ganJoystick(joy) {
  var nub = null, dang = false;
  function nubEl() { return nub || (nub = el("joyNub")); }
  function toaDo(ev) {
    var r = joy.getBoundingClientRect();
    var cxp = (ev.touches && ev.touches.length ? ev.touches[0].clientX : ev.clientX);
    var cyp = (ev.touches && ev.touches.length ? ev.touches[0].clientY : ev.clientY);
    return { x: cxp - (r.left + r.width / 2), y: cyp - (r.top + r.height / 2), r: r.width / 2 };
  }
  function xuLy(ev) {
    var p = toaDo(ev), d = Math.sqrt(p.x * p.x + p.y * p.y), max = p.r - 8;
    var k = d > max ? max / d : 1;
    nubEl().style.transform = "translate(" + (p.x * k) + "px," + (p.y * k) + "px)";
    E.joyVec = { x: (p.x * k) / max, y: (p.y * k) / max };
    if (ev.preventDefault && ev.type !== "touchstart") ev.preventDefault();
  }
  function batDau(ev) { dang = true; xuLy(ev); }
  function ketThuc() { dang = false; E.joyVec = null; if (nubEl()) nubEl().style.transform = "translate(0,0)"; }
  joy.addEventListener("pointerdown", batDau);
  window.addEventListener("pointermove", function (ev) { if (dang) xuLy(ev); });
  window.addEventListener("pointerup", ketThuc);
  joy.addEventListener("touchstart", batDau, { passive: true });
  window.addEventListener("touchmove", function (ev) { if (dang) xuLy(ev); }, { passive: true });
  window.addEventListener("touchend", ketThuc);
}
function veAvatarHUD() {
  var c = el("hudAva"); if (!c || !G) return;
  var x = c.getContext("2d"); if (!x) return;
  x.clearRect(0, 0, 54, 54);
  x.fillStyle = "#2c3a52"; x.beginPath(); x.arc(27, 27, 26, 0, 7); x.fill();
  var aoMau = phamCuaViTri("ao") >= 0 ? PHAM_CHAT[phamCuaViTri("ao")].mau : "#46586e";
  x.fillStyle = aoMau; x.beginPath(); x.moveTo(8, 54); x.quadraticCurveTo(27, 34, 46, 54); x.closePath(); x.fill();
  var aoIt = (typeof layDoMac === "function") ? layDoMac("ao") : null, capA = aoIt ? aoIt.cap : 0;
  if (capA >= 7) { x.fillStyle = capA >= 9 ? "#78818f" : "#aeb9c6"; x.beginPath(); x.arc(13, 40, 5, 0, 7); x.arc(41, 40, 5, 0, 7); x.fill(); }
  if (capA >= 9) { x.fillStyle = "#f5c542"; x.save(); x.translate(27, 43); x.rotate(Math.PI / 4); x.fillRect(-3, -3, 6, 6); x.restore(); }
  else if (capA >= 4) { x.strokeStyle = "#e8d9a0"; x.lineWidth = 2; x.beginPath(); x.moveTo(20, 38); x.lineTo(34, 38); x.stroke(); }
  x.fillStyle = "#f2c49b"; x.beginPath(); x.arc(27, 24, 12.5, 0, 7); x.fill();
  x.fillStyle = "#26221f";
  if (G.gioi === "nu") { x.fillRect(13, 14, 5, 22); x.fillRect(36, 14, 5, 22); x.beginPath(); x.arc(27, 20, 12.5, Math.PI, 0); x.fill(); }
  else { x.beginPath(); x.arc(27, 21, 12.5, Math.PI, 0); x.fill(); x.fillStyle = "#c9a86a"; x.beginPath(); x.ellipse(27, 17, 17, 4.6, 0, 0, 7); x.fill(); x.fillStyle = "#26221f"; x.beginPath(); x.arc(27, 13, 4.4, 0, 7); x.fill(); }
}
function veMinimap() {
  var c = el("hudMap"); if (!c || !G) return;
  var x = c.getContext("2d"); if (!x) return;
  var w = c.width, h = c.height;
  x.clearRect(0, 0, w, h);
  x.fillStyle = (THEME[G.mapIdx] || THEME[0]).dat; x.globalAlpha = 0.5; x.fillRect(0, 0, w, h); x.globalAlpha = 1;
  if (E.congs) E.congs.forEach(function (cg) {
    x.fillStyle = "hsl(" + (Date.now() / 8 % 360) + ",95%,65%)";
    x.beginPath(); x.arc(cg.x * w, cg.y * h, 4, 0, 7); x.fill();
  });
  E.drops.forEach(function (dr) { x.fillStyle = "#ffd94d"; x.fillRect(dr.x * w - 1.5, dr.y * h - 1.5, 3, 3); });
  E.mobs.forEach(function (e) { if (e.chet) return; x.fillStyle = e.d.loai.mau; x.beginPath(); x.arc(e.x * w, e.y * h, 3, 0, 7); x.fill(); });
  x.fillStyle = "#ffffff"; x.beginPath(); x.arc(E.player.x * w, E.player.y * h, 4, 0, 7); x.fill();
  x.strokeStyle = "#f5c542"; x.lineWidth = 1.6; x.beginPath(); x.arc(E.player.x * w, E.player.y * h, 6.5, 0, 7); x.stroke();
}
function capNhatHUD() {
  if (!G || !el("hudTL")) return;
  var cs = chiSo();
  el("hbHP").style.width = Math.max(0, hp / cs.hpMax * 100) + "%"; el("hbHPT").textContent = "HP " + fmt(Math.max(0, Math.round(hp))) + "/" + fmt(cs.hpMax);
  el("hbMP").style.width = Math.max(0, mp / cs.mpMax * 100) + "%"; el("hbMPT").textContent = "MP " + fmt(Math.round(mp)) + "/" + fmt(cs.mpMax);
  el("hbTL").style.width = E.theLuc + "%"; el("hbTLT").textContent = "Thể lực " + Math.round(E.theLuc) + "%";
  var pc = G.exp / expCan(G.lv) * 100;
  el("expFill").style.width = pc + "%";
  el("expTxt").textContent = "Cấp " + G.lv + " · EXP " + pc.toFixed(2).replace(".", ",") + "%";
  el("hudXY").textContent = "X " + Math.round(E.player.x * 4000) + " · Y " + Math.round(E.player.y * 3000);
  el("hudInfo").textContent = H4.fps + " FPS · " + Math.round(E.W) + "×" + Math.round(E.H) + " · " + MAPS[G.mapIdx].ten;
  var ch = CHIEU[G.phai || "chuaPhai"];
  el("sk1").querySelector("span").textContent = ch[0][0].split(" ").slice(-2).join(" ");
  el("sk2").querySelector("span").textContent = ch[1][0].split(" ").slice(-2).join(" ");
  el("skDuocT").textContent = "Dược ×" + (G.duoc || 0);
  veMinimap();
}
function vongLapH4() {
  requestAnimationFrame(vongLapH4);
  H4.demK++;
  var bay = Date.now();
  if (bay - H4.mocFPS >= 1000) { H4.fps = H4.demK; H4.demK = 0; H4.mocFPS = bay; capNhatHUD(); }
  kiemTraCong(); kiemTraVaoCong();
}
function capNhatGio() {
  var m = el("hudMeta"); if (!m) return;
  var d = new Date(), pad = function (n) { return (n < 10 ? "0" : "") + n; };
  m.innerHTML = "🕐 " + pad(d.getDate()) + "/" + pad(d.getMonth() + 1) + "/" + d.getFullYear() + " · " + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()) +
    "<br>🌤️ " + (H4.thoiTiet || "Đang lấy thời tiết…");
  capNhatGioKhoa();
}
function layThoiTiet() {
  try {
    if (typeof navigator === "undefined" || !navigator.geolocation || typeof fetch === "undefined") { H4.thoiTiet = "Không rõ (máy không hỗ trợ)"; return; }
    navigator.geolocation.getCurrentPosition(function (pos) {
      var url = "https://api.open-meteo.com/v1/forecast?latitude=" + pos.coords.latitude.toFixed(3) + "&longitude=" + pos.coords.longitude.toFixed(3) + "&current=temperature_2m,weather_code";
      fetch(url).then(function (r) { return r.json(); }).then(function (j) {
        if (!j || !j.current) return;
        var ma = j.current.weather_code, moTa = "Trời quang";
        if (ma >= 95) moTa = "Có giông"; else if (ma >= 80) moTa = "Mưa rào"; else if (ma >= 71) moTa = "Có tuyết";
        else if (ma >= 51) moTa = "Mưa"; else if (ma >= 45) moTa = "Sương mù"; else if (ma >= 1) moTa = "Có mây";
        H4.thoiTiet = Math.round(j.current.temperature_2m) + "°C · " + moTa;
        capNhatGio();
      }).catch(function () {});
    }, function () { H4.thoiTiet = "Chưa cấp quyền vị trí"; }, { timeout: 8000 });
  } catch (e) {}
}

// ================= BAN 4B: TAI KHOAN + SERVER + NAP TIEN =================
// Thong tin nhan tien cua chu game: dien ten ngan hang, so tai khoan, ten chu tai khoan (va ma BIN neu co).
// Nguoi choi chuyen khoan truc tiep vao tai khoan nay de mo server moi (phi 10.000d).
var NGAN_HANG = { ten: "Eximbank", soTK: "0979432768", chuTK: "PHẠM VĂN PHÚC", maBIN: "970431" };
var PHI_SERVER = 10000;
var SERVER_LUC_TAI = window.__server;
var otpCho = null;
function tkDoc(key, md) { try { var s = localStorage.getItem(key); return s ? JSON.parse(s) : md; } catch (e) { return md; } }
function tkGhi(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) {} }
function cacTaiKhoan() { return tkDoc("vl_accounts", {}); }
function phienTK() { try { return localStorage.getItem("vl_session") || ""; } catch (e) { return ""; } }
function cacServer() { return tkDoc("vl_servers", [{ id: "khaison", ten: "Khai Sơn" }]); }
function tenServer(id) { var ds = cacServer(); for (var i = 0; i < ds.length; i++) if (ds[i].id === id) return ds[i].ten; return id; }
function khoaCuaServer(id) { return id === "khaison" ? "volam_save_v1" : "volam_save_" + id; }
function daMoServer(id) {
  if (id === "khaison") return true;
  var tk = phienTK(); if (!tk) return false;
  var ds = tkDoc("vl_da_mo_" + tk, []);
  return ds.indexOf(id) >= 0;
}
function danhDauDaMo(id) {
  var tk = phienTK(); if (!tk) return;
  var key = "vl_da_mo_" + tk, ds = tkDoc(key, []);
  if (ds.indexOf(id) < 0) { ds.push(id); tkGhi(key, ds); }
}
function vaoServer(id) {
  window.__server = id;
  try { localStorage.setItem("vl_server_last", id); } catch (e) {}
  if (id !== SERVER_LUC_TAI) { location.reload(); return; }
  dongManTK(); capNhatTkBar();
  ghiLog("🎮 Đang chơi ở server <b>" + tenServer(id) + "</b>.");
}
function capNhatTkBar() {
  var bar = el("tkBar"); if (!bar) return;
  var tk = phienTK();
  bar.innerHTML = "🎮 Server: <b style='color:#f5c542'>" + tenServer(window.__server) + "</b>" +
    (tk ? " · Tài khoản: <b style='color:#f5c542'>" + tk + "</b>" : " · Chưa đăng nhập") +
    "<button id='btnDoiSV'>Đổi server</button>" +
    (tk ? "<button id='btnDx'>Đăng xuất</button>" : "<button id='btnDn'>Đăng nhập / Đăng ký</button>");
  var b1 = el("btnDoiSV"); if (b1) b1.addEventListener("click", function () { hienManTK("server"); });
  var b2 = el("btnDx"); if (b2) b2.addEventListener("click", function () { try { localStorage.removeItem("vl_session"); } catch (e) {} capNhatTkBar(); ghiLog("Đã đăng xuất. Nhân vật vẫn được lưu trên máy này."); });
  var b3 = el("btnDn"); if (b3) b3.addEventListener("click", function () { hienManTK("login"); });
}
function dongManTK() { var m = el("manTK"); if (m && m.parentNode) m.parentNode.removeChild(m); }
function khungTK(noiDung) {
  dongManTK();
  var m = document.createElement("div"); m.id = "manTK";
  m.innerHTML = "<div class='tkBox'><h2>⚔️ VÕ LÂM TRUYỀN KỲ</h2><div class='phu'>Bản web lưu trên máy — tài khoản và nhân vật chỉ có trên thiết bị này.</div>" + noiDung + "</div>";
  document.body.appendChild(m);
  return m;
}
function hienManTK(mode, svId) {
  if (mode === "login") {
    khungTK(
      "<input id='dnTen' placeholder='Tên tài khoản'>" +
      "<input id='dnMat' type='password' placeholder='Mật khẩu'>" +
      "<div class='loi' id='tkLoi'></div>" +
      "<button class='tkNut' id='dnNut'>ĐĂNG NHẬP</button>" +
      "<button class='tkNutPhu' id='dnQuaDK'>Chưa có tài khoản? Đăng ký nhanh</button>" +
      "<button class='tkNutPhu' id='dnBoQua'>Bỏ qua, chơi ngay (khách)</button>");
    el("dnNut").addEventListener("click", function () {
      var ten = (el("dnTen").value || "").trim(), mat = el("dnMat").value || "";
      var ds = cacTaiKhoan();
      if (!ds[ten]) { el("tkLoi").textContent = "Tài khoản chưa tồn tại — hãy đăng ký trước."; return; }
      if (ds[ten].matKhau !== mat) { el("tkLoi").textContent = "Sai mật khẩu."; return; }
      try { localStorage.setItem("vl_session", ten); } catch (e) {}
      hienManTK("server");
    });
    el("dnQuaDK").addEventListener("click", function () { hienManTK("register"); });
    el("dnBoQua").addEventListener("click", function () { dongManTK(); capNhatTkBar(); });
  }
  else if (mode === "register") {
    otpCho = null;
    khungTK(
      "<input id='dkTen' placeholder='Tên tài khoản (dùng để đăng nhập)'>" +
      "<input id='dkEmail' placeholder='Gmail / Email'>" +
      "<input id='dkMat' type='password' placeholder='Mật khẩu (từ 4 ký tự)'>" +
      "<input id='dkSdt' placeholder='Số điện thoại (nhận OTP)'>" +
      "<div id='dkOtpHop'></div>" +
      "<input id='dkOtp' placeholder='Nhập mã OTP 6 số'>" +
      "<div class='loi' id='tkLoi'></div>" +
      "<button class='tkNutPhu' id='dkGuiOtp'>Gửi mã OTP</button>" +
      "<button class='tkNut' id='dkNut'>ĐĂNG KÝ & VÀO CHỌN SERVER</button>" +
      "<button class='tkNutPhu' id='dkQuaDN'>Đã có tài khoản? Đăng nhập</button>");
    el("dkGuiOtp").addEventListener("click", function () {
      var sdt = (el("dkSdt").value || "").replace(/\D/g, "");
      if (sdt.length < 9) { el("tkLoi").textContent = "Số điện thoại chưa đúng."; return; }
      otpCho = String(Math.floor(100000 + Math.random() * 900000));
      el("dkOtpHop").innerHTML = "<div class='otpMoPhong'>📩 Mã OTP mô phỏng của bạn: <b style='font-size:17px'>" + otpCho + "</b><br><small>Bản chính thức có máy chủ sẽ gửi mã này qua SMS về số " + sdt + ".</small></div>";
      el("tkLoi").textContent = "";
    });
    el("dkNut").addEventListener("click", function () {
      var ten = (el("dkTen").value || "").trim(), email = (el("dkEmail").value || "").trim(),
        mat = el("dkMat").value || "", sdt = (el("dkSdt").value || "").trim(), otp = (el("dkOtp").value || "").trim();
      var ds = cacTaiKhoan();
      if (ten.length < 3) { el("tkLoi").textContent = "Tên tài khoản cần từ 3 ký tự."; return; }
      if (ds[ten]) { el("tkLoi").textContent = "Tên tài khoản đã có người dùng."; return; }
      if (email.indexOf("@") < 1) { el("tkLoi").textContent = "Email chưa đúng."; return; }
      if (mat.length < 4) { el("tkLoi").textContent = "Mật khẩu cần từ 4 ký tự."; return; }
      if (!otpCho || otp !== otpCho) { el("tkLoi").textContent = "Mã OTP chưa đúng — bấm 'Gửi mã OTP' rồi nhập lại."; return; }
      ds[ten] = { email: email, matKhau: mat, sdt: sdt };
      tkGhi("vl_accounts", ds);
      try { localStorage.setItem("vl_session", ten); } catch (e) {}
      hienManTK("server");
    });
    el("dkQuaDN").addEventListener("click", function () { hienManTK("login"); });
  }
  else if (mode === "server") {
    var ds = cacServer(), html = "<div class='phu' style='margin-bottom:8px'>Chọn server để chơi — mỗi server là một nhân vật riêng.</div>";
    ds.forEach(function (sv) {
      var save = null;
      try { var s = localStorage.getItem(khoaCuaServer(sv.id)); if (s) save = JSON.parse(s); } catch (e) {}
      var phi = sv.id === "khaison" ? "Miễn phí · server đầu tiên" : (daMoServer(sv.id) ? "Đã mở · vào chơi" : "Mở server mới: " + fmt(PHI_SERVER) + "đ");
      html += "<button class='tkNut svNut' data-sv='" + sv.id + "' style='text-align:left'>" + (sv.id === window.__server ? "🟢 " : "🎮 ") + sv.ten + "<small>" + phi + (save ? " · Đã có nhân vật cấp " + save.lv : " · Chưa có nhân vật") + "</small></button>";
    });
    html += "<button class='tkNutPhu' id='svThem'>➕ Thêm server mới (phí " + fmt(PHI_SERVER) + "đ)</button>" +
      "<button class='tkNutPhu' id='svDong'>Đóng</button>";
    khungTK(html);
    var nuts = document.querySelectorAll("#manTK [data-sv]");
    for (var i = 0; i < nuts.length; i++) nuts[i].addEventListener("click", function () {
      var id = this.getAttribute("data-sv");
      if (daMoServer(id)) vaoServer(id);
      else hienManTK("pay", id);
    });
    el("svThem").addEventListener("click", function () {
      var ten = "";
      if (typeof prompt !== "undefined") ten = prompt("Đặt tên cho server mới:", "Server " + (cacServer().length + 1)) || "";
      ten = ten.trim(); if (!ten) return;
      var list = cacServer(), id = "sv" + Date.now();
      list.push({ id: id, ten: ten }); tkGhi("vl_servers", list);
      hienManTK("pay", id);
    });
    el("svDong").addEventListener("click", function () { dongManTK(); });
  }
  else if (mode === "pay") {
    var tk = phienTK(), noiDungCK = ("VL " + (tk || "KHACH") + " " + tenServer(svId)).toUpperCase();
    var html2 = "<div class='phu'>Mở server <b style='color:#f5c542'>" + tenServer(svId) + "</b> — phí <b style='color:#f5c542'>" + fmt(PHI_SERVER) + "đ</b>, chuyển khoản vào tài khoản của chủ game:</div>";
    if (NGAN_HANG.soTK) {
      var qr = "https://img.vietqr.io/image/" + (NGAN_HANG.maBIN || NGAN_HANG.ten) + "-" + NGAN_HANG.soTK + "-compact2.png?amount=" + PHI_SERVER + "&addInfo=" + encodeURIComponent(noiDungCK) + "&accountName=" + encodeURIComponent(NGAN_HANG.chuTK);
      html2 += "<div class='otpMoPhong'>🏦 " + NGAN_HANG.ten + "<br>Số tài khoản: <b style='font-size:16px'>" + NGAN_HANG.soTK + "</b><br>Chủ tài khoản: <b>" + NGAN_HANG.chuTK + "</b><br>Số tiền: <b>" + fmt(PHI_SERVER) + "đ</b><br>Nội dung chuyển khoản: <b>" + noiDungCK + "</b></div>" +
        "<img src='" + qr + "' alt='Mã QR chuyển khoản' style='width:210px;display:block;margin:6px auto;border-radius:10px;background:#fff'>" +
        "<div class='phu'>Quét mã QR bằng app ngân hàng — số tiền và nội dung sẽ tự điền sẵn.</div>" +
        "<button class='tkNut' id='napXong'>✅ TÔI ĐÃ CHUYỂN KHOẢN</button>";
    } else {
      html2 += "<div class='otpMoPhong'>⚠️ Chủ game chưa cập nhật số tài khoản nhận tiền.<br><small>Người chơi chưa thể nạp — chủ game cần điền thông tin ngân hàng vào game.</small></div>" +
        "<button class='tkNut' id='napXong'>Vào server (bản thử — chưa thu tiền)</button>";
    }
    html2 += "<button class='tkNutPhu' id='napQuay'>← Quay lại chọn server</button>" +
      "<div class='phu'>Lưu ý: bản web hiện tại chưa tự kiểm tra được tiền đã vào tài khoản — chủ game đối soát sao kê ngân hàng theo nội dung chuyển khoản ở trên.</div>";
    khungTK(html2);
    el("napXong").addEventListener("click", function () { danhDauDaMo(svId); vaoServer(svId); });
    el("napQuay").addEventListener("click", function () { hienManTK("server"); });
  }
}
function khoiDong4() {
  taoHUD(); veAvatarHUD();
  vongLapH4();
  setInterval(capNhatGio, 1000); capNhatGio();
  setInterval(veAvatarHUD, 6000);
  setTimeout(layThoiTiet, 4000);
  if (!phienTK()) hienManTK("login");
}
window.addEventListener("load", khoiDong4);

// ================= BAN 4.1: TOAN MAN HINH + KHOA MAN HINH =================
function khoaNgang() {
  try {
    if (typeof screen !== "undefined" && screen.orientation && screen.orientation.lock) {
      var r = screen.orientation.lock("landscape");
      if (r && r.catch) r.catch(function () {});
    }
  } catch (e) {}
}
function vaoToanManHinh() {
  var st = E.stage; if (!st) return;
  try {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      if (document.exitFullscreen) document.exitFullscreen();
      return;
    }
    var p = null;
    if (st.requestFullscreen) p = st.requestFullscreen();
    else if (st.webkitRequestFullscreen) p = st.webkitRequestFullscreen();
    else { ghiLog("ℹ️ Máy này không hỗ trợ ép toàn màn hình — hãy xoay ngang máy, hoặc dùng menu ⋮ → 'Thêm vào màn hình chính' để chơi full."); return; }
    if (p && p.then) p.then(function () { khoaNgang(); }).catch(function () {});
    setTimeout(khoaNgang, 350);
    setTimeout(function () { if (E.coLai) E.coLai(); }, 400);
  } catch (e) {}
}
function capNhatGioKhoa() {
  var g = el("khoaGio"); if (!g) return;
  var d = new Date(), pad = function (n) { return (n < 10 ? "0" : "") + n; };
  g.textContent = pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()) + " · " + pad(d.getDate()) + "/" + pad(d.getMonth() + 1) + "/" + d.getFullYear();
}
function batKhoaMan() {
  var k = el("khoaMan"); if (!k) return;
  k.style.display = "flex";
  capNhatGioKhoa();
  try {
    if (typeof navigator !== "undefined" && navigator.wakeLock && navigator.wakeLock.request) {
      navigator.wakeLock.request("screen").then(function (wl) { E.wakeLock = wl; }).catch(function () {});
    }
  } catch (e) {}
  ghiLog("🔒 Đã khóa màn hình treo máy: game vẫn tự cày, chạm giữ 1 giây để mở khóa. Lưu ý: tắt hẳn màn hình bằng nút nguồn thì trình duyệt sẽ dừng — khóa này chỉ chống chạm nhầm khi máy vẫn mở.");
}
function tatKhoaMan() {
  var k = el("khoaMan"); if (k) k.style.display = "none";
  try { if (E.wakeLock && E.wakeLock.release) E.wakeLock.release(); } catch (e) {}
  E.wakeLock = null;
}

// ================= BAN 5.0: NEN TINH PHONG CACH JX1 (DAT CO VAN, DUONG DAT, SAN DA, CAY / DA / NHA / HANG RAO) =================
function sangHon(hex, k) {
  var n = parseInt(String(hex).replace("#", ""), 16); if (isNaN(n)) return hex;
  var r = (n >> 16) & 255, gg = (n >> 8) & 255, b = n & 255;
  r = Math.round(r + (255 - r) * k); gg = Math.round(gg + (255 - gg) * k); b = Math.round(b + (255 - b) * k);
  return "rgb(" + r + "," + gg + "," + b + ")";
}
function lcg5(seed) { var s = (seed >>> 0) || 1; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
function bungTia(px, py, mau, n) {
  if (!E.parts) return;
  for (var i = 0; i < n; i++) E.parts.push({ loai: "tia", x: px, y: py, vx: (Math.random() - 0.5) * 260, vy: -Math.random() * 190 - 30, t: 0, dur: 0.42 + Math.random() * 0.2, mau: mau, r: 2 + Math.random() * 2.6 });
}
function veCayTinh(x, px, py, sc) {
  var cao = 46 * sc;
  x.fillStyle = "rgba(0,0,0,.25)"; x.beginPath(); x.ellipse(px, py + 2, 13 * sc, 4 * sc, 0, 0, 7); x.fill();
  x.fillStyle = "#6b4a2c"; x.fillRect(px - 2.4 * sc, py - cao * 0.45, 4.8 * sc, cao * 0.45);
  var greens = ["#2f5d33", "#3a7040", "#4c8a4e"];
  [[0, -cao, 17], [-11, -cao * 0.82, 12.5], [11, -cao * 0.82, 12.5]].forEach(function (v, i) {
    x.fillStyle = greens[i % 3]; x.beginPath(); x.arc(px + v[0] * sc, py + v[1] + cao * 0.42, v[2] * sc, 0, 7); x.fill();
  });
  x.fillStyle = "rgba(255,255,255,.14)"; x.beginPath(); x.arc(px - 5 * sc, py - cao * 0.95, 6 * sc, 0, 7); x.fill();
}
function veDaTinh(x, px, py, r) {
  x.fillStyle = "rgba(0,0,0,.22)"; x.beginPath(); x.ellipse(px, py + 2, r * 1.2, r * 0.4, 0, 0, 7); x.fill();
  x.fillStyle = "#8d9299"; x.beginPath(); x.moveTo(px - r, py); x.lineTo(px - r * 0.4, py - r * 0.9); x.lineTo(px + r * 0.5, py - r * 1.05); x.lineTo(px + r, py); x.closePath(); x.fill();
  x.fillStyle = "#aab0b7"; x.beginPath(); x.moveTo(px - r * 0.4, py - r * 0.9); x.lineTo(px + r * 0.5, py - r * 1.05); x.lineTo(px + r * 0.2, py - r * 0.3); x.closePath(); x.fill();
}
function veBuiCo(x, px, py, sc) {
  x.strokeStyle = "rgba(30,70,30,.55)"; x.lineWidth = 1.4;
  for (var i = 0; i < 3; i++) { x.beginPath(); x.moveTo(px, py); x.quadraticCurveTo(px + (i - 1) * 3 * sc, py - 5 * sc, px + (i - 1) * 4.4 * sc, py - 8 * sc); x.stroke(); }
}
function veNhaTinh(x, px, py, sc) {
  var w = 120 * sc, h = 74 * sc;
  x.fillStyle = "rgba(0,0,0,.25)"; x.beginPath(); x.ellipse(px, py + 4, w * 0.62, 10 * sc, 0, 0, 7); x.fill();
  x.fillStyle = "#d9c39a"; x.fillRect(px - w / 2, py - h * 0.52, w, h * 0.52);
  x.fillStyle = "#8a4b2d";
  x.beginPath(); x.moveTo(px - w * 0.62, py - h * 0.52); x.lineTo(px, py - h * 1.02); x.lineTo(px + w * 0.62, py - h * 0.52); x.closePath(); x.fill();
  x.strokeStyle = "rgba(0,0,0,.28)"; x.lineWidth = 1.4;
  for (var i = -2; i <= 2; i++) { x.beginPath(); x.moveTo(px + i * w * 0.11, py - h * (0.98 - Math.abs(i) * 0.115)); x.lineTo(px + i * w * 0.2, py - h * 0.55); x.stroke(); }
  x.fillStyle = "#4a3520"; x.fillRect(px - 8 * sc, py - h * 0.34, 16 * sc, h * 0.34);
  x.fillStyle = "#f5e7c0"; x.fillRect(px - w * 0.38, py - h * 0.42, 14 * sc, 12 * sc); x.fillRect(px + w * 0.38 - 14 * sc, py - h * 0.42, 14 * sc, 12 * sc);
}
function taoNenTinh(th, W, H, chanTroi) {
  try {
    var buf = E.bufTyLe || 1;
    var cv = document.createElement("canvas"); cv.width = Math.max(2, Math.round(W * buf)); cv.height = Math.max(2, Math.round(H * buf));
    var x = cv.getContext("2d"); if (!x) { E.nenTinh = null; return; }
    x.setTransform(buf, 0, 0, buf, 0, 0);
    var rnd = lcg5(G.mapIdx * 7919 + 101);
    var g = x.createLinearGradient(0, 0, 0, chanTroi);
    g.addColorStop(0, th.sky[0]); g.addColorStop(1, th.sky[1]);
    x.fillStyle = g; x.fillRect(0, 0, W, chanTroi);
    var g2 = x.createLinearGradient(0, chanTroi, 0, H);
    g2.addColorStop(0, th.dat); g2.addColorStop(1, sangHon(th.dat, 0.16));
    x.fillStyle = g2; x.fillRect(0, chanTroi, W, H - chanTroi);
    x.strokeStyle = "rgba(0,0,0,.10)"; x.lineWidth = 1.2;
    [0.30, 0.45, 0.62, 0.82].forEach(function (ty) { x.beginPath(); x.moveTo(0, H * ty); x.lineTo(W, H * ty); x.stroke(); });
    for (var i = 0; i < 800; i++) {
      var px = rnd() * W, py = chanTroi + rnd() * (H - chanTroi);
      var sc = 0.6 + (py - chanTroi) / (H - chanTroi) * 1.6;
      x.fillStyle = rnd() < 0.5 ? "rgba(0,0,0,.10)" : "rgba(255,255,255,.07)";
      x.beginPath(); x.arc(px, py, (0.8 + rnd() * 1.6) * sc, 0, 7); x.fill();
    }
    function duongGiua(t) { return { x: W * (0.30 + 0.40 * t + 0.08 * Math.sin(t * Math.PI)), y: H - t * (H - chanTroi) * 0.96 }; }
    function nuaRong(t) { return (30 - 20 * t) * (0.45 + W / 1100); }
    function veDuong(heSo, mau, alpha) {
      x.beginPath();
      for (var t1 = 0; t1 <= 1.001; t1 += 0.05) { var p1 = duongGiua(t1); var lx = p1.x - nuaRong(t1) * heSo; if (t1 === 0) x.moveTo(lx, p1.y); else x.lineTo(lx, p1.y); }
      for (var t2 = 1; t2 >= -0.001; t2 -= 0.05) { var p2 = duongGiua(t2); x.lineTo(p2.x + nuaRong(t2) * heSo, p2.y); }
      x.closePath(); x.globalAlpha = alpha; x.fillStyle = mau; x.fill(); x.globalAlpha = 1;
    }
    veDuong(1, "#a8895c", 0.55); veDuong(0.72, "#c2a878", 0.85);
    for (var d = 0; d < 130; d++) { var td = rnd(); var pd = duongGiua(td); var ox = (rnd() - 0.5) * 2 * nuaRong(td) * 0.8; x.fillStyle = "rgba(90,70,40,.25)"; x.beginPath(); x.arc(pd.x + ox, pd.y, 1 + rnd() * 2, 0, 7); x.fill(); }
    var sx = W * 0.5, sy = H * 0.885, sr = W * 0.105;
    x.fillStyle = "rgba(154,160,163,.92)"; x.beginPath(); x.ellipse(sx, sy, sr, sr * 0.42, 0, 0, 7); x.fill();
    x.strokeStyle = "rgba(70,74,78,.6)"; x.lineWidth = 1.4;
    [0.45, 0.72, 1].forEach(function (kk) { x.beginPath(); x.ellipse(sx, sy, sr * kk, sr * 0.42 * kk, 0, 0, 7); x.stroke(); });
    for (var a2 = 0; a2 < 8; a2++) { var ang = a2 / 8 * Math.PI * 2; x.beginPath(); x.moveTo(sx, sy); x.lineTo(sx + Math.cos(ang) * sr, sy + Math.sin(ang) * sr * 0.42); x.stroke(); }
    function ganDuong(px2, py2) {
      for (var t3 = 0; t3 <= 1.001; t3 += 0.05) { var pc3 = duongGiua(t3); var dx = px2 - pc3.x, dy = py2 - pc3.y; if (dx * dx + dy * dy < Math.pow(nuaRong(t3) + 16, 2)) return true; }
      var dxs = px2 - sx, dys = (py2 - sy) * 2.2; return dxs * dxs + dys * dys < Math.pow(sr + 12, 2);
    }
    function choTrong() { for (var lan = 0; lan < 12; lan++) { var px = rnd() * W, py = chanTroi + 14 + rnd() * (H - chanTroi - 24); if (!ganDuong(px, py)) return { x: px, y: py }; } return null; }
    for (var c = 0; c < 15; c++) { var cc = choTrong(); if (!cc) continue; var scC = (0.7 + (cc.y - chanTroi) / (H - chanTroi)) * (0.8 + rnd() * 0.5);
      if (typeof SPR !== "undefined" && SPR.cay) { var tw = 120 * scC, thC = tw * SPR.cay.height / SPR.cay.width; x.drawImage(SPR.cay, cc.x - tw / 2, cc.y - thC + 6, tw, thC); }
      else veCayTinh(x, cc.x, cc.y, scC); }
    for (var r2 = 0; r2 < 9; r2++) { var rc = choTrong(); if (rc) veDaTinh(x, rc.x, rc.y, 5 + rnd() * 9); }
    for (var b = 0; b < 110; b++) veBuiCo(x, rnd() * W, chanTroi + rnd() * (H - chanTroi), 0.6 + rnd() * 0.9);
    var mauHoa = ["#e7e05a", "#e88bb0", "#f2f2f2"];
    for (var h2 = 0; h2 < 30; h2++) { x.fillStyle = mauHoa[Math.floor(rnd() * 3)]; x.beginPath(); x.arc(rnd() * W, chanTroi + rnd() * (H - chanTroi), 1.7, 0, 7); x.fill(); }
    if (G.mapIdx === 0) {
      if (typeof SPR !== "undefined" && SPR.nha) {
        var hw = Math.min(310, W * 0.36), hh = hw * SPR.nha.height / SPR.nha.width;
        x.drawImage(SPR.nha, W * 0.155 - hw / 2, chanTroi + H * 0.115 - hh + 10, hw, hh);
        x.drawImage(SPR.nha, W * 0.855 - hw / 2, chanTroi + H * 0.15 - hh + 10, hw, hh);
      } else {
        veNhaTinh(x, W * 0.13, chanTroi + H * 0.10, W * 0.0011);
        veNhaTinh(x, W * 0.88, chanTroi + H * 0.13, W * 0.0013);
      }
      x.strokeStyle = "#7a5a38"; x.lineWidth = 3;
      x.beginPath(); x.moveTo(W * 0.06, H * 0.80); x.lineTo(W * 0.335, H * 0.845); x.stroke();
      x.beginPath(); x.moveTo(W * 0.665, H * 0.845); x.lineTo(W * 0.94, H * 0.80); x.stroke();
      x.lineWidth = 2;
      for (var f = 0; f <= 6; f++) {
        var fx1 = W * 0.06 + (W * 0.275) * f / 6, fy1 = H * 0.80 + (H * 0.045) * f / 6;
        x.beginPath(); x.moveTo(fx1, fy1 - 8); x.lineTo(fx1, fy1 + 3); x.stroke();
        var fx2 = W * 0.665 + (W * 0.275) * f / 6, fy2 = H * 0.845 - (H * 0.045) * f / 6;
        x.beginPath(); x.moveTo(fx2, fy2 - 8); x.lineTo(fx2, fy2 + 3); x.stroke();
      }
    }
    E.nenTinh = cv;
  } catch (e) { E.nenTinh = null; }
}

// ================= BAN 5.1: SPRITE THAT (HINH VE SAN THAY VE VECTOR) =================
var SPR = { nv: null, cay: null, nha: null };
function veSpriteNhanVat(x, y, s, f) {
  var cx = E.cx, im = SPR.nv; if (!im) return;
  var h = 104 * s, w = h * im.width / im.height;
  var nhun = E.player.diChuyen ? Math.abs(Math.sin(Date.now() / 85)) * 2.4 * s : Math.sin(Date.now() / 500) * 0.7 * s;
  cx.save();
  cx.translate(x, y - nhun);
  if (E.player.atkT > 0) cx.rotate(-0.09 * f * (E.player.atkT / 0.28));
  if (f < 0) cx.scale(-1, 1);
  cx.drawImage(im, -w / 2, -h, w, h);
  cx.restore();
}
function taiSprite() {
  if (typeof Image === "undefined") return;
  [["sprite_nv.png", "nv"], ["sprite_cay.png", "cay"], ["sprite_nha.png", "nha"]].forEach(function (cap) {
    var im = new Image();
    im.onload = function () { SPR[cap[1]] = im; E.nenKhoa = null; };
    im.onerror = function () {};
    im.src = cap[0];
  });
}
try { taiSprite(); } catch (e) {}
