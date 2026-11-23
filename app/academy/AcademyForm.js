'use client';
import { useEffect, useRef, useState } from 'react';
import { colors } from '../lib/theme';
import { trackEvent } from '../lib/analytics';
import { interestOptions } from './data';

const emptyForm = { name: '', email: '', phone: '', interest: '', message: '', website: '' };

const fieldStyle = {
  padding: '12px 14px',
  borderRadius: 10,
  border: '1px solid rgba(10,50,136,0.22)',
  fontSize: 15,
  fontFamily: 'Inter,sans-serif',
  color: colors.ink,
  background: '#ffffff',
  width: '100%',
  boxSizing: 'border-box',
};
const labelStyle = { fontSize: 13, fontWeight: 600, color: colors.ink };

// Formulario de inscripción / contacto de AdiSoft Academy.
// Envía a POST /api/academy, que notifica por correo (destino: ver app/academy/README.md).
export default function AcademyForm() {
  const [form, setForm] = useState(emptyForm);
  const [state, setState] = useState('idle'); // idle | sending | sent | error
  const nameRef = useRef(null);

  // Los botones "Inscribirme", "Pedir cotización", etc. (EnrollButton) preseleccionan el interés.
  useEffect(() => {
    const onSelect = (e) => {
      const { interest, message } = e.detail || {};
      setState('idle');
      setForm((f) => ({
        ...f,
        interest: interest || f.interest,
        message: message || f.message,
      }));
      // Espera a que termine el scroll suave hacia el formulario.
      setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 600);
    };
    window.addEventListener('academy:select', onSelect);
    return () => window.removeEventListener('academy:select', onSelect);
  }, []);

  const onChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch('/api/academy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('send failed');
      trackEvent('form_submit', { form_name: 'academy', interest: form.interest });
      setState('sent');
      setForm(emptyForm);
    } catch {
      setState('error');
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Formulario de inscripción a AdiSoft Academy"
      style={{ background: '#ffffff', borderRadius: 20, padding: 'clamp(22px,3vw,32px)', border: `1px solid ${colors.border}`, display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 18px 40px -24px rgba(10,50,136,0.35)' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label htmlFor="academy-name" style={labelStyle}>Nombre</label>
        <input ref={nameRef} id="academy-name" className="academy-field" type="text" name="name" autoComplete="name" required maxLength={120} value={form.name} onChange={onChange('name')} placeholder="Tu nombre" style={fieldStyle} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label htmlFor="academy-email" style={labelStyle}>Correo electrónico</label>
        <input id="academy-email" className="academy-field" type="email" name="email" autoComplete="email" required maxLength={200} value={form.email} onChange={onChange('email')} placeholder="tucorreo@empresa.com" style={fieldStyle} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label htmlFor="academy-phone" style={labelStyle}>Teléfono o WhatsApp <span style={{ fontWeight: 400, color: colors.muted }}>(opcional)</span></label>
        <input id="academy-phone" className="academy-field" type="tel" name="phone" autoComplete="tel" maxLength={40} value={form.phone} onChange={onChange('phone')} placeholder="+57 300 000 0000" style={fieldStyle} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label htmlFor="academy-interest" style={labelStyle}>¿Qué te interesa?</label>
        <select id="academy-interest" className="academy-field" name="interest" required value={form.interest} onChange={onChange('interest')} style={fieldStyle}>
          <option value="">Selecciona una opción</option>
          {interestOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label htmlFor="academy-message" style={labelStyle}>Mensaje</label>
        <textarea id="academy-message" className="academy-field" name="message" rows={4} required maxLength={2000} value={form.message} onChange={onChange('message')} placeholder="Cuéntanos qué quieres aprender o qué reto tiene tu equipo..." style={{ ...fieldStyle, resize: 'vertical' }} />
      </div>

      {/* Honeypot anti-spam: los humanos no lo ven ni lo llenan; si llega con valor, el servidor lo descarta. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
        <label htmlFor="academy-website">No llenar este campo</label>
        <input id="academy-website" type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={onChange('website')} />
      </div>

      <button
        type="submit"
        disabled={state === 'sending'}
        className="academy-btn"
        style={{ marginTop: 4, padding: '14px 24px', borderRadius: 12, border: 'none', background: state === 'sent' ? '#1e8f5f' : colors.primary, color: '#ffffff', fontWeight: 600, fontSize: 15, cursor: state === 'sending' ? 'default' : 'pointer', opacity: state === 'sending' ? 0.75 : 1, transition: 'background .2s ease' }}
      >
        {state === 'sending' ? 'Enviando...' : state === 'sent' ? '¡Solicitud enviada!' : 'Enviar solicitud'}
      </button>

      <div aria-live="polite" style={{ minHeight: 0 }}>
        {state === 'sent' && (
          <p role="status" style={{ margin: 0, fontSize: 14, color: '#1e6f4d', lineHeight: 1.6 }}>
            Gracias. Recibimos tu solicitud y te escribiremos pronto al correo que dejaste.
          </p>
        )}
        {state === 'error' && (
          <p role="alert" style={{ margin: 0, fontSize: 14, color: '#b03a2e', lineHeight: 1.6 }}>
            No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos a hello@adisoftco.com.
          </p>
        )}
      </div>
    </form>
  );
}
