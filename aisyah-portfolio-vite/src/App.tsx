import { useEffect } from 'react'
import './index.css'

export default function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const toggleFaq = (item: Element) => {
    const isActive = item.classList.contains('active')
    document.querySelectorAll('.faq-item').forEach((el) => el.classList.remove('active'))
    if (!isActive) item.classList.add('active')
  }

  return (
    <div className="app">
      {/* ===== NAV ===== */}
      <nav>
        <div className="container nav-container">
          <div className="nav-logo">aisy<span>ah.</span>realty</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Perkhidmatan</a></li>
            <li><a href="#process">Proses</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <a href="https://wa.me/60123456789" target="_blank" className="nav-cta">WhatsApp</a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="container" style={{ paddingTop: 120, position: 'relative', zIndex: 1 }}>
          <div className="hero-badge reveal">✦ Ejen Hartanah Berdaftar — Klang Valley</div>
          <h1 className="reveal reveal-delay-1">
            Hartanah Pertama<br />
            <span className="highlight">Impian</span> Anda —<br />
            Saya Bantu.
          </h1>
          <p className="hero-sub reveal reveal-delay-2">
            Ejen hartanah profesional di Klang Valley. Jual, sewa rumah, kondo & hartanah komersial.
            Nasihat pelaburan hartanah & bantuan loan yang jujur & telus.
          </p>
          <div className="hero-actions reveal reveal-delay-3">
            <a href="https://wa.me/60123456789" target="_blank" className="btn-primary">WhatsApp Saya</a>
            <a href="#services" className="btn-ghost">Lihat Perkhidmatan →</a>
          </div>
          <div className="hero-stats reveal reveal-delay-4">
            <div><div className="hero-stat-num">50+</div><div className="hero-stat-label">Hartanah Dilaksanakan</div></div>
            <div><div className="hero-stat-num">5+</div><div className="hero-stat-label">Tahun Pengalaman</div></div>
            <div><div className="hero-stat-num">100%</div><div className="hero-stat-label">Commitment</div></div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrap reveal">
              <svg viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <rect width="400" height="480" rx="24" fill="url(#abg)" />
                <defs>
                  <linearGradient id="abg" x1="0" y1="0" x2="400" y2="480" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="180" r="60" fill="rgba(124,58,237,0.2)" stroke="rgba(167,139,250,0.5)" strokeWidth="1.5" />
                <circle cx="200" cy="175" r="38" fill="rgba(167,139,250,0.15)" stroke="#a78bfa" strokeWidth="1.5" />
                <path d="M135 330C135 275 265 275 265 330" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M200 75 L295 135 L295 225 L105 225 L105 135 Z" fill="rgba(124,58,237,0.15)" stroke="#a78bfa" strokeWidth="1.5" strokeLinejoin="round" />
                <rect x="173" y="165" width="54" height="60" rx="3" fill="rgba(167,139,250,0.1)" stroke="#a78bfa" strokeWidth="1.5" />
                <path d="M200 75 L105 135 M200 75 L295 135" stroke="#a78bfa" strokeWidth="1.5" />
                <line x1="200" y1="75" x2="200" y2="58" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="216" y1="83" x2="232" y2="73" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="184" y1="83" x2="168" y2="73" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="section-tag reveal">About</div>
              <h2 className="section-title reveal reveal-delay-1">Saya Aisyah Rahman,<br />Ejen Hartanah Anda.</h2>
              <p className="about-text lead reveal reveal-delay-2">
                Dengan pengalaman melibatkan transaksi hartanah residential & komersial di seluruh Klang Valley,
                matlamat saya adalah membantu anda membuat keputusan bijak — sama ada beli rumah pertama atau
                laburkan portfolio hartanah.
              </p>
              <p className="about-text reveal reveal-delay-3">
                Dari rumah pertama sehinggalah pelaburan hartanah kedua — saya bimbing anda dari mula sampai akhir.
                Nasihat saya telus, bebas karut, dan fokus pada matlamat anda sebenarnya.
              </p>
              <div className="about-highlights reveal reveal-delay-4">
                <div className="about-highlight"><span className="check">✓</span> Berlesen & Berdaftar</div>
                <div className="about-highlight"><span className="check">✓</span> Khas Klang Valley</div>
                <div className="about-highlight"><span className="check">✓</span> Loan Assistance</div>
                <div className="about-highlight"><span className="check">✓</span> Nasihat Pelaburan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services">
        <div className="container">
          <div className="section-tag reveal">Perkhidmatan</div>
          <h2 className="section-title reveal reveal-delay-1">Apa yang saya boleh bantu</h2>
          <p className="section-sub reveal reveal-delay-2">Servis lengkap untuk pembeli pertama dan pelabur hartanah di Klang Valley.</p>
          <div className="services-grid">
            {[
              { icon: '🏡', title: 'Jual Hartanah', desc: 'Jual rumah, kondo, atau hartanah komersial anda dengan nilai terbaik. Marketing strategik yang menarik pembeli serius.' },
              { icon: '🔑', title: 'Sewa Hartanah', desc: 'Cari penyewa yang sesuai untuk hartanah anda. Saya urus promosi, temuduga, dan dokumentasi sewaan dari A-Z.' },
              { icon: '🏢', title: 'Hartanah Komersial', desc: 'Pejabat, kedai, dan ruang niaga di Klang Valley. Sesuai untuk bisnes owner yang nak grow.' },
              { icon: '📊', title: 'Nasihat Pelaburan', desc: 'Analisa potensi ROI untuk hartanah pelaburan. Saya bantu analisis untuk keputusan yang bijak.' },
              { icon: '🏦', title: 'Bantuan Loan', desc: 'Panduan lengkap dari syarat bank sehingga toleransi. Saya bantu cerah bank mana yang terbaik untuk anda.' },
            ].map((s, i) => (
              <div key={i} className={`service-card reveal ${i > 0 ? `reveal-delay-${Math.min(i, 4)}` : ''}`}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY ===== */}
      <section id="why">
        <div className="container">
          <div className="section-tag reveal">Mengapa Saya?</div>
          <h2 className="section-title reveal reveal-delay-1">Ejen yang berfikal —<br />bukan sekadar obey gerak.</h2>
          <div className="why-grid">
            {[
              { n: '01', t: 'Dedicated untuk Klang Valley', d: 'Fokus pada satu kawasan bermakna saya tahu setiap trends, deals, dan peluang yang ada.' },
              { n: '02', t: 'Telus & Jujur', d: 'Nak saya cakap benar — kalau hartanah tu tak sesuai, saya cakap. Tiada karut, tiada pressure.' },
              { n: '03', t: 'Responsive & Professional', d: 'Response cepat. Proses yang jelas dan straight forward, tanpa delays atau surprises.' },
              { n: '04', t: 'Support Selepas Jual', d: 'Hubungan saya dengan klien tak habis bila dah settle. Saya still reachable untuk sebarang query.' },
            ].map((w, i) => (
              <div key={i} className={`why-item reveal ${i > 0 ? `reveal-delay-${Math.min(i, 4)}` : ''}`}>
                <div className="why-num">{w.n}</div>
                <div className="why-title">{w.t}</div>
                <div className="why-desc">{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process">
        <div className="container">
          <div className="section-tag reveal">Proses</div>
          <h2 className="section-title reveal reveal-delay-1">Macam mana kita mula</h2>
          <div className="process-timeline">
            {[
              { n: '1', t: 'WhatsApp Saya', d: 'Hantar mesej. Saya Understand matlamat anda dalam 15 minit.' },
              { n: '2', t: 'Property Viewing', d: 'Saya berani membawa anda melihat hartanah yang sesuai — pada masa yang nyaman untuk anda.' },
              { n: '3', t: 'Offer & Negotiate', d: 'Bantu anda buat offer yang strategik dan negotiate harga terbaik.' },
              { n: '4', t: 'Dokumen & Loan', d: 'Kumpulkan semua dokumen, liaise dengan bank, pastikan proses berjalan lancar sehingga hand over.' },
            ].map((p, i) => (
              <div key={i} className={`process-step reveal ${i > 0 ? `reveal-delay-${Math.min(i, 4)}` : ''}`}>
                <div className="process-step-num">{p.n}</div>
                <div className="process-title">{p.t}</div>
                <div className="process-desc">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials">
        <div className="container">
          <div className="section-tag reveal">Testimoni</div>
          <h2 className="section-title reveal reveal-delay-1">Apa kata klien saya</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card reveal">
              <p className="testimonial-text">
                "Aisyah tolong saya dapat rumah pertama dengan smooth. Sangat sabar & responsive! Dia tolong saya dari awal — cari hartanah yang sesuai dengan budget, explain semua butiran, dan bila ada masalah dengan bank, dia tolong negotiate sampai dapat approval. Sangat galaxy recommend!"
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">F</div>
                <div>
                  <div className="testimonial-name">Faizal</div>
                  <div className="testimonial-location">Shah Alam — House Buyer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq">
        <div className="container">
          <div className="section-tag reveal">FAQ</div>
          <h2 className="section-title reveal reveal-delay-1">Soalan yang sering ditanya</h2>
          <div className="faq-list">
            {[
              { q: 'Berapa fees saya untuk pelanggan?', a: 'Fees adalah based pada transaksi yang berjaya sahaja. Tiada bayaran pendahuluan atau hidden costs. Saya explain semua dengan jelas sebelum kita mulakan.' },
              { q: 'Berapa lama proses beli hartanah?', a: 'Purata 2-4 bulan dari offer accepted sehingga hand over. Bergantung pada kelajuan bank processing dan dokumentasi.' },
              { q: 'Area manakah yang saya cover?', a: 'Saya fokus di Klang Valley — termasuk Shah Alam, Subang, Petaling Jaya, Old Klang Road, dan sekitar.' },
              { q: 'Bantu untuk loan/pembiayaan bank?', a: 'Ya! Saya ada connection dengan beberapa bank dan broker financing. Saya boleh guide anda pilih bank yang terbaik untuk situasi anda.' },
            ].map((f, i) => (
              <div key={i} className={`faq-item reveal ${i > 0 ? `reveal-delay-${Math.min(i, 4)}` : ''}`}>
                <div className="faq-question" onClick={() => {
                  const el = document.querySelectorAll('.faq-item')[i]
                  if (el) toggleFaq(el)
                }}>{f.q}
                  <div className="faq-toggle">
                    <svg viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="faq-answer">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="cta">
        <div className="container">
          <div className="cta-box reveal">
            <div className="section-tag">Mula Sekarang</div>
            <h2 className="cta-title">Hartanah impian anda<br />satu WhatsApp بعيد?</h2>
            <p className="cta-sub">Jangan tunggu lagi. Hantar saya mesej dan kita boleh start dalam 24 jam.</p>
            <div className="cta-actions">
              <a href="https://wa.me/60123456789" target="_blank" className="btn-primary">0132345678 — WhatsApp Saya</a>
            </div>
            <div className="cta-divider"><span>atau</span></div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
              Email: <a href="mailto:aisyah.realty@gmail.com" style={{ color: 'var(--accent-light)' }}>aisyah.realty@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer>
        <div className="container">
          <p style={{ marginBottom: 8 }}>aisyah.realty — Ejen Hartanah Berdaftar, Klang Valley</p>
          <p>
            <a href="https://instagram.com/aisyah.property" target="_blank">instagram.com/aisyah.property</a>
            {' · '}
            <a href="https://wa.me/60123456789" target="_blank">WhatsApp</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
