import React from "react";
import { motion } from "framer-motion";

/**
 * Remind – Landing Page (VN)
 * ---------------------------------------------------------
 * ✅ Single-file React component (TailwindCSS)
 * ✅ Pastel kawaii aesthetic, rounded cards, soft shadows
 * ✅ Mobile-first responsive
 * ✅ Smooth motion via framer-motion
 * ✅ Image slots ready for your chibi Cat/Dog art
 * ✅ New: hover animations on images + Web App section
 * ---------------------------------------------------------
 * Hướng dẫn thay ảnh:
 *  - Tìm <img ... data-slot="..." /> và thay src= bằng link ảnh của bạn
 *  - Gợi ý kích thước: hero ~ 1640x624, level ~ 1024x1024, tối thiểu 800x800
 */

const features = [
  {
    title: "Ghi nhớ thần sầu",
    desc: "Tạo nhắc nhanh trong 1 chạm — không sợ quên deadline hay việc vặt.",
  },
  {
    title: "Đồng bộ mọi nơi",
    desc: "Tự động đồng bộ giữa điện thoại và máy tính, dùng là mượt.",
  },
  {
    title: "Nhẹ như hơi thở",
    desc: "Tối ưu hiệu năng: mở là ghi ngay, không đợi, không lag.",
  },
];

const catLevels = Array.from({ length: 7 }).map((_, i) => ({
  level: i + 1,
  slot: `cat-lv${i + 1}`,
}));

const dogLevels = Array.from({ length: 5 }).map((_, i) => ({
  level: i + 1,
  slot: `dog-lv${i + 1}`,
}));

const Card = ({ children }) => (
  <div className="rounded-2xl bg-white/80 backdrop-blur shadow-sm ring-1 ring-black/5 p-5">{children}</div>
);

// Motion helpers
const hoverImg = {
  whileHover: { scale: 1.03, rotate: -0.5, boxShadow: "0 8px 24px rgba(0,0,0,.12)" },
  transition: { type: "spring", stiffness: 260, damping: 20 },
};

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
import catLv1 from "./assets/images/cats/cat-lv1.png";
import catLv2 from "./assets/images/cats/cat-lv2.png";
import catLv3 from "./assets/images/cats/cat-lv3.png";
import catLv4 from "./assets/images/cats/cat-lv4.png";
import catLv5 from "./assets/images/cats/cat-lv5.png";
import catLv6 from "./assets/images/cats/cat-lv6.png";
import catLv7 from "./assets/images/cats/cat-lv7.png";

const catImages = {
  1: catLv1,
  2: catLv2,
  3: catLv3,
  4: catLv4,
  5: catLv5,
  6: catLv6,
  7: catLv7,
};



export default function App() {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-50 via-rose-50 to-emerald-50 text-slate-800">
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b border-white/60">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-pink-200">📝</span>
            <span className="font-semibold">Remind</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#tinh-nang" className="hover:opacity-80">Tính năng</a>
            <a href="#bo-level" className="hover:opacity-80">Bộ level</a>
            <a href="#web-app" className="hover:opacity-80">Dùng trên Web</a>
            <a href="#tai-ung-dung" className="hover:opacity-80">Tải ứng dụng</a>
          </div>
          <a href="#tai-ung-dung" className="text-sm rounded-xl bg-emerald-500 text-white px-3 py-1.5 shadow hover:shadow-md">Tải ngay</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-8 items-center">
          <motion.div variants={reveal} initial="hidden" animate="show">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            >
              Ghi nhớ nhanh hơn người yêu cũ trở mặt,<br className="hidden sm:block" />
              <span className="text-rose-500">dai như tình đầu</span>
            </motion.h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-prose">
              Ứng dụng nhắc việc phong cách kawaii — nhẹ, mượt, và vui. Ghi chú, nhắc lịch, theo dõi thói quen… tất cả trong một trải nghiệm siêu đáng yêu. Giúp bạn **nhắc việc và lên kế hoạch ghi nhớ khoa học**, tạo thói quen tốt mỗi ngày để sống gọn gàng và hiệu quả hơn.

            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#tai-ung-dung" className="rounded-xl bg-rose-500 text-white px-5 py-3 text-sm font-semibold shadow hover:shadow-md">Tải cho iOS</a>
              <a href="#tai-ung-dung" className="rounded-xl bg-emerald-500 text-white px-5 py-3 text-sm font-semibold shadow hover:shadow-md">Tải cho Android</a>
              <span className="text-xs text-slate-500">Miễn phí • Không quảng cáo</span>
            </div>
          </motion.div>

          {/* Hero Image Slot with hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[41/15] w-full rounded-3xl bg-gradient-to-br from-pink-100 via-rose-100 to-emerald-100 p-2 shadow-inner">
              <div className="h-full w-full rounded-2xl bg-white/70 ring-1 ring-black/5 flex items-center justify-center overflow-hidden">
                {/* 👉 Thay src dưới đây bằng banner 1640x624 của bạn */}
                <motion.img
                  data-slot="hero-banner"
                  src="https://placehold.co/1640x624/png?text=Hero+Banner+1640x624"
                  alt="Remind – Hero banner"
                  className="h-full w-full object-cover"
                  whileHover={!prefersReduced ? hoverImg.whileHover : undefined}
                  transition={!prefersReduced ? hoverImg.transition : undefined}
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block rotate-6 select-none">✨</div>
            <div className="absolute -top-6 -right-6 hidden sm:block -rotate-6 select-none">💖</div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="tinh-nang" className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-2xl sm:text-3xl font-bold mb-8"
          >
            Tính năng bạn sẽ thích
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl bg-white/80 backdrop-blur shadow-sm ring-1 ring-black/5 p-5"
              >
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEVEL GALLERY */}
      <section id="bo-level" className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-2xl sm:text-3xl font-bold"
          >
            Bộ tiến hoá dễ thương
          </motion.h2>
          <p className="mt-2 text-slate-600">Mèo 7 cấp độ & Chó 5 cấp độ — cấp càng cao càng mập, càng giàu, càng đáng yêu.</p>

          {/* Cats */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">Remind Cat (Lv1 → Lv7)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
              {catLevels.map((c) => (
                <motion.div
                  key={c.level}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-white/70 ring-1 ring-black/5 p-2 shadow-sm"
                >
                  <div className="aspect-square w-full overflow-hidden rounded-xl bg-pink-50">
                    <motion.img
                      data-slot={c.slot}
                      src={catImages[c.level]} // 👉 lấy ảnh thật từ file cục bộ
                      alt={`Remind Cat Level ${c.level}`}
                      className="h-full w-full object-cover"
                      whileHover={!prefersReduced ? hoverImg.whileHover : undefined}
                      transition={!prefersReduced ? hoverImg.transition : undefined}
                    />
                  </div>
                  <div className="mt-2 text-center text-xs">Lv{c.level}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dogs */}
          {/* <div className="mt-10">
            <h3 className="font-semibold mb-3">Remind Dog (Lv1 → Lv5)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {dogLevels.map((d) => (
                <motion.div
                  key={d.level}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-white/70 ring-1 ring-black/5 p-2 shadow-sm"
                >
                  <div className="aspect-square w-full overflow-hidden rounded-xl bg-emerald-50">
                    <motion.img
                      data-slot={d.slot}
                      src={`https://placehold.co/800x800/png?text=Dog+Lv${d.level}`}
                      alt={`Remind Dog Level ${d.level}`}
                      className="h-full w-full object-cover"
                      whileHover={!prefersReduced ? hoverImg.whileHover : undefined}
                      transition={!prefersReduced ? hoverImg.transition : undefined}
                    />
                  </div>
                  <div className="mt-2 text-center text-xs">Lv{d.level}</div>
                </motion.div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* WEB APP SECTION */}
      <section id="web-app" className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-2xl sm:text-3xl font-bold"
          >
            Dùng Remind trên Web
          </motion.h2>
          <p className="mt-2 text-slate-600 max-w-prose">
            Không cần cài đặt — mở trình duyệt là ghi chú, tạo nhắc việc, theo dõi thói quen. Đồng bộ ngay với app di động.
          </p>
          <div className="mt-6 grid lg:grid-cols-2 gap-6 items-center">
            <div className="order-2 lg:order-1">
              <ul className="text-sm text-slate-700 list-disc pl-5 space-y-2">
                <li>Đăng nhập bằng tài khoản Remind hoặc Google</li>
                <li>Tạo nhắc nhanh bằng phím tắt (\"N\" để tạo note mới)</li>
                <li>Chia sẻ link danh sách với team (quyền xem/sửa)</li>
                <li>Chế độ Focus – ẩn việc đã xong, tập trung việc quan trọng</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a href="#" className="rounded-xl bg-emerald-500 text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-md">Dùng bản Web</a>
                <a href="#tai-ung-dung" className="rounded-xl bg-white/80 ring-1 ring-black/5 px-4 py-2 text-sm font-semibold">Tải ứng dụng</a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-emerald-100 via-rose-100 to-pink-100 p-2 shadow-inner">
                <div className="h-full w-full overflow-hidden rounded-2xl bg-white/70 ring-1 ring-black/5">
                  <motion.img
                    data-slot="web-ui"
                    src="https://placehold.co/1200x900/png?text=Remind+Web+UI"
                    alt="Remind Web UI"
                    className="h-full w-full object-cover"
                    whileHover={!prefersReduced ? hoverImg.whileHover : undefined}
                    transition={!prefersReduced ? hoverImg.transition : undefined}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / CTA */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">“Gọn gàng – Dễ nhớ – Siêu đáng yêu”</h3>
                <p className="mt-2 text-slate-600 text-sm">
                  Remind giúp đội ngũ Vietwin nhớ việc trong chớp mắt. Tạo nhắc chỉ 1 chạm, giao diện kawaii khiến việc quản lý trở nên vui hơn.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href="#tai-ung-dung" className="rounded-xl bg-rose-500 text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-md">Tải cho iOS</a>
                  <a href="#tai-ung-dung" className="rounded-xl bg-emerald-500 text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-md">Tải cho Android</a>
                </div>
              </div>
              <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-rose-100 to-emerald-100 p-2">
                <div className="h-full w-full overflow-hidden rounded-lg bg-white/70 ring-1 ring-black/5 flex items-center justify-center">
                  {/* 👉 Thay src bằng hình minh hoạ UI app */}
                  <motion.img data-slot="app-ui" src="https://placehold.co/1200x900/png?text=App+UI" alt="Remind App UI" className="h-full w-full object-cover" whileHover={!prefersReduced ? hoverImg.whileHover : undefined} transition={!prefersReduced ? hoverImg.transition : undefined} />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Câu hỏi thường gặp</h2>
          <div className="mt-6 grid gap-4">
            <Card>
              <h4 className="font-semibold">Remind có miễn phí không?</h4>
              <p className="text-sm text-slate-600 mt-1">Có. Phiên bản cơ bản miễn phí, không quảng cáo.</p>
            </Card>
            <Card>
              <h4 className="font-semibold">Có đồng bộ đa thiết bị không?</h4>
              <p className="text-sm text-slate-600 mt-1">Có. Đăng nhập là đồng bộ ngay.</p>
            </Card>
            <Card>
              <h4 className="font-semibold">Dữ liệu của tôi có an toàn không?</h4>
              <p className="text-sm text-slate-600 mt-1">Chúng tôi áp dụng mã hoá và chỉ bạn mới thấy dữ liệu của mình.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="tai-ung-dung" className="border-t border-white/60 bg-white/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold">Tải Remind ngay</h3>
            <p className="text-sm text-slate-600 mt-1">Nhẹ – mượt – chuẩn kawaii. Quản lý việc chưa bao giờ dễ thương đến thế.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#" className="rounded-xl bg-black text-white px-4 py-2 text-sm font-semibold">App Store</a>
              <a href="#" className="rounded-xl bg-green-600 text-white px-4 py-2 text-sm font-semibold">Google Play</a>
            </div>
          </div>
          <div className="justify-self-end text-sm text-slate-500">
            © {new Date().getFullYear()} Remind. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
