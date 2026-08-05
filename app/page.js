'use client';
import { useState, useRef } from 'react';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Contacto', href: '#contacto' },
];

const pillars = [
  { num: '01', title: 'Escuchamos antes de construir', text: 'Entendemos tu operación y tus objetivos de negocio antes de proponer una solución.' },
  { num: '02', title: 'Te acompañamos en cada etapa', text: 'Haces parte activa del proceso: diseño, avances y decisiones se construyen contigo.' },
  { num: '03', title: 'Buscamos resultados de negocio', text: 'La tecnología es el medio; el objetivo es siempre un impacto medible en tu operación.' },
];

const services = [
  { num: '01', title: 'Desarrollo de software a medida', text: 'Soluciones diseñadas específicamente para las necesidades de cada cliente.' },
  { num: '02', title: 'Plataformas web', text: 'Sistemas y aplicaciones web robustas y escalables.' },
  { num: '03', title: 'Aplicaciones móviles', text: 'Apps nativas y multiplataforma para iOS y Android.' },
  { num: '04', title: 'Automatización de procesos', text: 'Optimización de flujos de trabajo mediante tecnología.' },
  { num: '05', title: 'Inteligencia artificial aplicada', text: 'IA y LLMs integrados a la operación del negocio.' },
  { num: '06', title: 'Integraciones entre sistemas', text: 'Conectamos herramientas y plataformas existentes.' },
  { num: '07', title: 'Diseño UX/UI', text: 'Experiencias de usuario claras, funcionales y atractivas.' },
  { num: '08', title: 'Consultoría tecnológica', text: 'Acompañamiento estratégico en decisiones de tecnología.' },
];

const adisSteps = [
  { letter: 'A', title: 'Análisis', text: 'Levantamiento de requerimientos, diagnóstico técnico y de negocio, alcance y objetivos claros.' },
  { letter: 'D', title: 'Diseño', text: 'Arquitectura de la solución, diseño UX/UI, cronograma y entregas.' },
  { letter: 'I', title: 'Implementación', text: 'Desarrollo iterativo, entregas parciales verificables, pruebas y control de calidad.' },
  { letter: 'S', title: 'Soporte', text: 'Acompañamiento post-lanzamiento, monitoreo y mantenimiento, mejoras continuas.' },
];

const techStack = [
  { category: 'Frontend', tools: 'React y Next.js', text: 'Interfaces rápidas, modernas y fáciles de mantener.' },
  { category: 'Backend', tools: 'Node.js y Python', text: 'Servicios robustos y preparados para escalar.' },
  { category: 'IA y datos', tools: 'IA / LLMs y SQL / NoSQL', text: 'Automatización e inteligencia aplicada a la operación.' },
  { category: 'Cloud y móvil', tools: 'AWS / Cloud e iOS / Android', text: 'Infraestructura segura y presencia en cualquier dispositivo.' },
];

const industries = ['Inmobiliario', 'Turismo', 'Retail', 'Transporte y logística', 'Servicios empresariales', 'Salud', 'Educación'];

const whyUs = [
  { num: '01', title: 'Cercanía real', text: 'Te acompañamos como si tu proyecto fuera nuestro.' },
  { num: '02', title: 'Cumplimiento garantizado', text: '100% de cumplimiento en fechas y entregables pactados.' },
  { num: '03', title: 'Visión de negocio', text: 'Resolvemos problemas reales, no solo escribimos código.' },
  { num: '04', title: 'Presencia regional', text: 'Trabajamos con empresas en Colombia y Latinoamérica.' },
];

const logoFiles = ['miruta', 'ansira', 'sociedad-cardiologia', 'eduku', 'comfandi', 'atmos', 'hylink', 'gps-trackit', 'kfc'];
const logos = [...logoFiles, ...logoFiles];

const gradientTitle = {
  fontFamily: 'Fustat,sans-serif',
  fontWeight: 800,
  letterSpacing: '-2px',
  lineHeight: 1.15,
  background: 'linear-gradient(120deg,#0a3288,#3a63c8 55%,#b8c0e0)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  width: 'fit-content',
};

export default function Home() {
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [isoHover, setIsoHover] = useState(false);
  const [trail, setTrail] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', sector: '', message: '' });
  const particleId = useRef(0);
  const particleColors = ['#0a3288', '#b8c0e0', '#3a63c8'];

  const onIsoMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setRot({ x: py * -22, y: px * 22 });

    const rawLeft = ((e.clientX - rect.left) / rect.width) * 100;
    const rawTop = ((e.clientY - rect.top) / rect.height) * 100;
    const left = (rawLeft + 12) / 1.24;
    const top = (rawTop + 12) / 1.24;
    const newParticles = [];
    for (let i = 0; i < 12; i++) {
      const id = particleId.current++;
      const color = particleColors[id % particleColors.length];
      const size = 4 + Math.random() * 8;
      const jitterX = (Math.random() - 0.5) * 14;
      const jitterY = (Math.random() - 0.5) * 14;
      newParticles.push({ id, left: left + jitterX, top: top + jitterY, color, size });
    }
    setTrail((t) => [...t, ...newParticles]);
    newParticles.forEach((p) => {
      setTimeout(() => setTrail((t) => t.filter((x) => x.id !== p.id)), 700);
    });
  };

  const onNavClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const target = document.querySelector(href);
    if (!target) return;
    target.style.transition = 'box-shadow .6s ease, transform .6s ease';
    target.style.borderRadius = target.style.borderRadius || '20px';
    target.style.animation = 'none';
    void target.offsetWidth;
    target.style.animation = 'navPulse 0.9s ease-out';
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const onFieldChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmitContact = (e) => {
    e.preventDefault();
    const { name, email, sector, message } = form;
    const subject = encodeURIComponent(`Nuevo contacto de ${name || 'un visitante'}`);
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\nSector: ${sector}\n\nCaso:\n${message}`);
    window.location.href = `mailto:hello.adisoft@gmail.com?subject=${subject}&body=${body}`;
  };

  const isoTransform = `perspective(1200px) rotateX(${rot.x}deg) rotateY(${rot.y}deg) scale(1.06)`;
  const isoShadow = `${-rot.y * 1.2}px ${18 - rot.x}px 36px rgba(10,50,136,0.35)`;

  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: '#ffffff', fontFamily: 'Inter,sans-serif', minHeight: '100vh', color: '#0b0b1f' }}>
      <div style={{ position: 'absolute', top: -180, left: -180, width: 460, height: 460, borderRadius: '50%', background: '#0a3288', filter: 'blur(110px)', opacity: 0.16, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: -60, left: 60, width: 320, height: 320, borderRadius: '50%', background: '#b8c0e0', filter: 'blur(100px)', opacity: 0.28, pointerEvents: 'none' }} />

      <div style={{ position: 'sticky', top: 30, zIndex: 50, display: 'flex', justifyContent: 'center', width: '100%', padding: '0 16px' }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,3vw,44px)', padding: '10px 10px 10px 22px', borderRadius: 16, background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(50px)', WebkitBackdropFilter: 'blur(50px)', border: '1px solid rgba(0,0,0,0.1)', boxShadow: 'inset 0px 4px 4px 0px rgba(255,255,255,0.25)', width: 'fit-content', maxWidth: '92vw' }}>
          <span style={{ fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 19, color: '#0b0b1f', letterSpacing: '-0.5px', whiteSpace: 'nowrap' }}>AdiSoft</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px,2.4vw,28px)' }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={onNavClick} style={{ position: 'relative', color: '#0b0b1f', fontSize: 14, fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap', padding: '6px 4px', borderRadius: 8, transition: 'color .2s ease, background .2s ease' }}>
                {link.label}
              </a>
            ))}
          </div>
          <a href="mailto:hello.adisoft@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px', borderRadius: 12, background: 'rgba(10,50,136,0.14)', border: '1px solid rgba(10,50,136,0.25)', color: '#0a3288', fontWeight: 600, fontSize: 13, textDecoration: 'none', whiteSpace: 'nowrap', transition: 'transform .25s ease' }}>
            Contáctanos
            <span style={{ display: 'inline-block', width: 6, height: 6, borderTop: '2px solid #0a3288', borderRight: '2px solid #0a3288', transform: 'rotate(45deg)' }} />
          </a>
        </nav>
      </div>

      <div style={{ maxWidth: 1600, margin: '0 auto', padding: 'clamp(48px,9vw,120px) clamp(24px,5vw,64px) 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 56, position: 'relative', zIndex: 1 }}>
        <div style={{ flex: '1 1 420px', minWidth: 280, display: 'flex', flexDirection: 'column', gap: 26 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '8px 16px', borderRadius: 999, background: '#f7f7fa', border: '1px solid rgba(10,50,136,0.1)', width: 'fit-content' }}>
            <span style={{ fontSize: 15, color: '#0b0b1f', fontWeight: 500 }}>+7 años acompañando la transformación digital en LatAm</span>
          </div>

          <h1 style={{ fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 'clamp(38px,5.6vw,68px)', lineHeight: 1.08, letterSpacing: '-2px', color: '#0b0b1f', margin: 0 }}>
            Consultora tecnológica en software e inteligencia artificial
          </h1>

          <p style={{ fontSize: 18, letterSpacing: '-1px', color: '#5a5a66', lineHeight: 1.6, maxWidth: 540, margin: 0 }}>
            Acompañamos a empresas de Latinoamérica a resolver problemas de negocio a través de la tecnología. Un aliado, no solo un proveedor.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            <a href="#contacto" onClick={onNavClick} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '16px 28px', borderRadius: 16, background: 'rgba(10,50,136,0.85)', backdropFilter: 'blur(2px)', color: '#ffffff', fontWeight: 600, fontSize: 16, textDecoration: 'none', boxShadow: 'inset 0px 4px 4px 0px rgba(255,255,255,0.35)', width: 'fit-content', transition: 'transform .3s ease' }}>
              Hablemos de tu proyecto
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 26, borderRadius: '50%', background: '#ffffff' }}>
                <span style={{ display: 'inline-block', width: 6, height: 6, borderTop: '2px solid #0a3288', borderRight: '2px solid #0a3288', transform: 'rotate(45deg)', marginLeft: -2 }} />
              </span>
            </a>
          </div>
        </div>

        <div style={{ flex: '1 1 340px', minWidth: 260, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', minHeight: 380 }}>
          <div
            style={{ position: 'relative', width: 'clamp(340px,38vw,540px)', height: 'clamp(340px,38vw,540px)', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: 1200, cursor: 'pointer' }}
            onMouseMove={onIsoMove}
            onMouseEnter={() => setIsoHover(true)}
            onMouseLeave={() => { setRot({ x: 0, y: 0 }); setIsoHover(false); }}
          >
            <div style={{ position: 'absolute', width: '78%', height: '78%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(10,50,136,0.35), transparent 70%)', opacity: isoHover ? 0.9 : 0, transform: `scale(${isoHover ? 1.15 : 0.8})`, transition: 'opacity .4s ease, transform .4s ease', filter: 'blur(18px)' }} />
            <div style={{ position: 'absolute', inset: '-12%', pointerEvents: 'none', zIndex: 5 }}>
              {trail.map((p) => (
                <span key={p.id} style={{ position: 'absolute', left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size, borderRadius: '50%', background: p.color, animation: 'particleFade 0.7s ease-out forwards' }} />
              ))}
            </div>
            <div style={{ position: 'absolute', width: '82%', height: '82%', borderRadius: '50%', border: '1.5px dashed rgba(10,50,136,0.25)', animation: `ringSpin ${isoHover ? '5s' : '18s'} linear infinite`, transition: 'animation-duration .3s ease' }} />
            <div style={{ position: 'absolute', width: '64%', height: '64%', borderRadius: '50%', border: '1.5px dashed rgba(184,192,224,0.6)', animation: `ringSpin ${isoHover ? '3.5s' : '12s'} linear infinite reverse`, transition: 'animation-duration .3s ease' }} />
            <div style={{ position: 'relative', width: '92%', height: '92%', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'isoFloat 5s ease-in-out infinite' }}>
              <div style={{ position: 'relative', width: '64%', height: '80%', animation: 'barsAutoRotate 6s ease-in-out infinite', transformStyle: 'preserve-3d', transform: `scale(${isoHover ? 1.08 : 1})`, transition: 'transform .3s ease' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%', filter: `drop-shadow(${isoShadow})`, transform: isoTransform, transition: 'transform 0.15s ease-out', transformStyle: 'preserve-3d' }}>
                  <div style={{ position: 'absolute', left: '26%', top: '28%', width: '38%', height: '88%', transform: 'skewX(-18deg)', zIndex: 1 }}>
                    <div style={{ position: 'absolute', inset: 0, transform: 'translate(22px,22px)', background: '#5c6aa0', borderRadius: 22 }} />
                    <div style={{ position: 'absolute', inset: 0, transform: 'translate(11px,11px)', background: '#7d8ac0', borderRadius: 22 }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,#e2e7f5,#b8c0e0 60%)', borderRadius: 22, boxShadow: 'inset 0 6px 10px rgba(255,255,255,0.5), inset 0 -10px 16px rgba(10,50,136,0.15)' }} />
                  </div>
                  <div style={{ position: 'absolute', left: 0, top: 0, width: '38%', height: '100%', transform: 'skewX(-18deg)', zIndex: 2 }}>
                    <div style={{ position: 'absolute', inset: 0, transform: 'translate(22px,22px)', background: '#041338', borderRadius: 22 }} />
                    <div style={{ position: 'absolute', inset: 0, transform: 'translate(11px,11px)', background: '#082a70', borderRadius: 22 }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,#1e5ec4,#0a3288 60%)', borderRadius: 22, boxShadow: 'inset 0 6px 10px rgba(255,255,255,0.3), inset 0 -10px 16px rgba(0,0,0,0.3)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1600, margin: '180px auto 0', padding: '0 clamp(24px,5vw,64px) 0', position: 'relative', zIndex: 1 }}>
        <div style={{ paddingTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30 }}>
          <span style={{ fontSize: 13, color: '#a8a8a8', letterSpacing: 1, textTransform: 'uppercase', fontWeight: 500 }}>Empresas que ya confían en nosotros</span>
          <div style={{ width: '100%', overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)', maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 72, width: 'max-content', animation: 'logoMarquee 26s linear infinite' }}>
              {logos.map((name, i) => (
                <img key={i} src={`/logos/${name}.png`} alt={name} style={{ height: 78, width: 'auto', objectFit: 'contain', filter: 'grayscale(1) opacity(0.7)' }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1600, margin: '0 auto', padding: '132px clamp(24px,5vw,64px) 0', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 64, alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 420px', minWidth: 280 }}>
            <span style={{ fontSize: 13, color: '#0a3288', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>Quiénes somos</span>
            <h2 style={{ ...gradientTitle, fontSize: 'clamp(28px,3.4vw,40px)', margin: '12px 0 0' }}>Un aliado, no solo un proveedor</h2>
            <p style={{ fontSize: 17, color: '#5a5a66', lineHeight: 1.7, maxWidth: 520, marginTop: 18 }}>
              Somos una consultora tecnológica que ayuda a empresas a resolver problemas de negocio mediante software e inteligencia artificial. Diseñamos, desarrollamos y acompañamos productos digitales con visión estratégica, no solo técnica.
            </p>
          </div>
          <div style={{ flex: '1 1 420px', minWidth: 280, display: 'flex', flexDirection: 'column', gap: 22 }}>
            {pillars.map((pillar) => (
              <div key={pillar.num} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 22, color: '#0a3288', minWidth: 36 }}>{pillar.num}</span>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: 16, margin: '0 0 4px', color: '#0b0b1f' }}>{pillar.title}</h3>
                  <p style={{ fontSize: 15, color: '#5a5a66', lineHeight: 1.6, margin: 0 }}>{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="servicios" style={{ maxWidth: 1600, margin: '0 auto', padding: '132px clamp(24px,5vw,64px) 0', position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: 13, color: '#0a3288', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>Qué hacemos</span>
        <h2 style={{ ...gradientTitle, fontSize: 'clamp(28px,3.4vw,40px)', margin: '12px 0 32px' }}>Servicios</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
          {services.map((svc) => (
            <div key={svc.num} style={{ position: 'relative', padding: '30px 26px', borderRadius: 18, background: '#ffffff', border: '1px solid rgba(10,50,136,0.1)', display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden', transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease' }}>
              <div style={{ position: 'absolute', top: -40, right: -40, width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle, rgba(10,50,136,0.08), transparent 70%)' }} />
              <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 13, background: 'linear-gradient(135deg,#0a3288,#3a63c8)', color: '#ffffff', fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 18 }}>{svc.num}</span>
              <h3 style={{ position: 'relative', fontWeight: 600, fontSize: 17, margin: 0, color: '#0b0b1f' }}>{svc.title}</h3>
              <p style={{ position: 'relative', fontSize: 14, color: '#5a5a66', lineHeight: 1.6, margin: 0 }}>{svc.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="metodologia" style={{ maxWidth: 1600, margin: '0 auto', padding: '132px clamp(24px,5vw,64px) 0', position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: 13, color: '#0a3288', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>Nuestra metodología</span>
        <h2 style={{ ...gradientTitle, fontSize: 'clamp(40px,5.2vw,64px)', lineHeight: 1, margin: '12px 0 8px' }}>ADIS</h2>
        <p style={{ fontSize: 16, color: '#5a5a66', maxWidth: 640, margin: '0 0 40px', lineHeight: 1.6 }}>
          Proceso propio de AdiSoft para garantizar claridad, cumplimiento y comunicación constante en cada proyecto.
        </p>
        <div style={{ overflowX: 'auto', paddingBottom: 8 }}>
          <div style={{ position: 'relative', minWidth: 860, height: 300, margin: '44px 0 8px' }}>
            <div style={{ position: 'absolute', left: '8%', right: '8%', top: '50%', height: 2, background: 'rgba(10,50,136,0.14)', transform: 'translateY(-50%)', borderRadius: 2 }} />
            <div style={{ position: 'absolute', left: '8%', right: '8%', top: '50%', height: 2, transform: 'translateY(-50%)', overflow: 'hidden', borderRadius: 2 }}>
              <div style={{ position: 'absolute', top: 0, left: '-32%', height: '100%', width: '32%', background: 'linear-gradient(90deg, transparent, #3a63c8 45%, #0a3288 55%, transparent)', boxShadow: '0 0 14px 2px rgba(10,50,136,0.5)', animation: 'beamMove 5s linear infinite' }} />
            </div>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'space-between', padding: '0 8%' }}>
              {adisSteps.map((step, i) => (
                <div key={step.letter} style={{ position: 'relative', width: 150 }}>
                  {i % 2 === 0 && (
                    <div style={{ position: 'absolute', bottom: 'calc(50% + 36px)', left: '50%', transform: 'translateX(-50%)', width: 190, textAlign: 'center' }}>
                      <h3 style={{ fontWeight: 600, fontSize: 16, margin: '0 0 6px', color: '#0b0b1f' }}>{step.title}</h3>
                      <p style={{ fontSize: 13, color: '#5a5a66', lineHeight: 1.5, margin: 0 }}>{step.text}</p>
                    </div>
                  )}
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(160deg,#0e3a99,#0a3288 55%,#082a70)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 22, color: '#ffffff', border: '3px solid #ffffff', animation: `nodePulse 5s ease-in-out ${i * 1.25}s infinite`, zIndex: 2 }}>
                    {step.letter}
                  </div>
                  {i % 2 !== 0 && (
                    <div style={{ position: 'absolute', top: 'calc(50% + 36px)', left: '50%', transform: 'translateX(-50%)', width: 190, textAlign: 'center' }}>
                      <h3 style={{ fontWeight: 600, fontSize: 16, margin: '0 0 6px', color: '#0b0b1f' }}>{step.title}</h3>
                      <p style={{ fontSize: 13, color: '#5a5a66', lineHeight: 1.5, margin: 0 }}>{step.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="tecnologia" style={{ maxWidth: 1600, margin: '0 auto', padding: '132px clamp(24px,5vw,64px) 0', position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: 13, color: '#0a3288', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>Tecnología que usamos</span>
        <h2 style={{ ...gradientTitle, fontSize: 'clamp(28px,3.4vw,40px)', margin: '12px 0 32px' }}>Herramientas elegidas por necesidad</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
          {techStack.map((stack) => (
            <div key={stack.category} style={{ padding: 26, borderRadius: 16, border: '1px solid rgba(10,50,136,0.12)' }}>
              <h3 style={{ fontWeight: 600, fontSize: 15, color: '#0a3288', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stack.category}</h3>
              <p style={{ fontSize: 16, color: '#0b0b1f', fontWeight: 600, margin: '0 0 6px' }}>{stack.tools}</p>
              <p style={{ fontSize: 14, color: '#5a5a66', lineHeight: 1.5, margin: 0 }}>{stack.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1600, margin: '0 auto', padding: '132px clamp(24px,5vw,64px) 0', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
          <div style={{ flex: '1 1 300px', minWidth: 260 }}>
            <span style={{ fontSize: 13, color: '#0a3288', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>Industrias</span>
            <h2 style={{ ...gradientTitle, fontSize: 'clamp(24px,2.8vw,32px)', lineHeight: 1.2, margin: '12px 0 16px' }}>Dónde generamos más impacto</h2>
            <p style={{ fontSize: 15, color: '#5a5a66', lineHeight: 1.7, margin: 0 }}>
              Nuestro foco principal está en inmobiliario, turismo, retail, transporte y logística. También trabajamos con empresas de servicios empresariales, salud y educación.
            </p>
          </div>
          <div style={{ flex: '1 1 300px', minWidth: 260, display: 'flex', flexWrap: 'wrap', gap: 10, alignContent: 'flex-start' }}>
            {industries.map((name) => (
              <span key={name} style={{ padding: '10px 18px', borderRadius: 999, background: '#f7f8fc', border: '1px solid rgba(10,50,136,0.12)', fontSize: 14, color: '#0b0b1f', fontWeight: 500 }}>{name}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1600, margin: '0 auto', padding: '132px clamp(24px,5vw,64px) 0', position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: 13, color: '#0a3288', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>Por qué AdiSoft</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, marginTop: 24 }}>
          {whyUs.map((reason) => (
            <div key={reason.num} style={{ padding: '8px 0' }}>
              <span style={{ fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 20, color: '#0a3288' }}>{reason.num}</span>
              <h3 style={{ fontWeight: 600, fontSize: 16, margin: '8px 0 6px', color: '#0b0b1f' }}>{reason.title}</h3>
              <p style={{ fontSize: 14, color: '#5a5a66', lineHeight: 1.6, margin: 0 }}>{reason.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="contacto" style={{ maxWidth: 1600, margin: '132px auto 0', padding: '0 clamp(24px,5vw,64px) 80px', position: 'relative', zIndex: 1 }}>
        <div style={{ borderRadius: 24, background: 'rgba(10,50,136,0.9)', padding: 'clamp(40px,6vw,72px)', display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{ maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 28, flex: '1 1 320px', alignItems: 'center', textAlign: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 'clamp(30px,3.6vw,42px)', letterSpacing: '-1px', color: '#ffffff', margin: '0 0 14px', lineHeight: 1.2 }}>Hablemos de tu proyecto</h2>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, margin: 0 }}>
                Te ayudamos a resolver problemas reales de tu negocio con software e inteligencia artificial, acompañándote de principio a fin.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28, alignItems: 'center', width: '100%' }}>
              <a href="mailto:hello.adisoft@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '16px 28px', borderRadius: 16, background: '#ffffff', color: '#0a3288', fontWeight: 600, fontSize: 16, textDecoration: 'none', width: '100%', maxWidth: 340, transition: 'transform .3s ease' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0a3288" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="M2 6l10 7 10-7"></path>
                </svg>
                hello.adisoft@gmail.com
              </a>
              <a href="https://instagram.com/adisoft.tech" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '16px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', color: '#ffffff', fontSize: 16, fontWeight: 600, textDecoration: 'none', width: '100%', maxWidth: 340, transition: 'transform .3s ease' }}>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle>
                </svg>
                @adisoft.tech
              </a>
            </div>
          </div>
          <form onSubmit={onSubmitContact} style={{ flex: '1 1 380px', minWidth: 280, maxWidth: 460, background: '#ffffff', borderRadius: 20, padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#0b0b1f' }}>Nombre</label>
              <input type="text" required value={form.name} onChange={onFieldChange('name')} placeholder="Tu nombre" style={{ padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(10,50,136,0.15)', fontSize: 14, color: '#0b0b1f', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#0b0b1f' }}>Correo electrónico</label>
              <input type="email" required value={form.email} onChange={onFieldChange('email')} placeholder="tucorreo@empresa.com" style={{ padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(10,50,136,0.15)', fontSize: 14, color: '#0b0b1f', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#0b0b1f' }}>Sector donde trabajas</label>
              <input type="text" value={form.sector} onChange={onFieldChange('sector')} placeholder="Ej. Retail, salud, inmobiliario..." style={{ padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(10,50,136,0.15)', fontSize: 14, color: '#0b0b1f', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#0b0b1f' }}>Cuéntanos tu caso</label>
              <textarea rows={4} value={form.message} onChange={onFieldChange('message')} placeholder="Describe brevemente lo que buscas resolver..." style={{ padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(10,50,136,0.15)', fontSize: 14, color: '#0b0b1f', outline: 'none', resize: 'vertical' }} />
            </div>
            <button type="submit" style={{ marginTop: 4, padding: '14px 24px', borderRadius: 12, border: 'none', background: '#0a3288', color: '#ffffff', fontWeight: 600, fontSize: 15, cursor: 'pointer', transition: 'transform .2s ease' }}>Enviar mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
}
