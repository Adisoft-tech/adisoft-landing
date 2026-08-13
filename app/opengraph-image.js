import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AdiSoft — Consultora tecnológica en software e inteligencia artificial';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg,#061f5c 0%,#0a3288 55%,#3a63c8 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              width: 56,
              height: 56,
              borderRadius: 14,
              background: 'rgba(255,255,255,0.15)',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ display: 'flex', color: '#ffffff', fontSize: 32, fontWeight: 700, letterSpacing: -1 }}>
            AdiSoft
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            color: '#ffffff',
            fontSize: 56,
            fontWeight: 800,
            letterSpacing: -2,
            lineHeight: 1.15,
            marginTop: 40,
            maxWidth: 920,
          }}
        >
          Consultora tecnológica en software e inteligencia artificial
        </div>
        <div style={{ display: 'flex', color: 'rgba(255,255,255,0.75)', fontSize: 26, marginTop: 28 }}>
          Un aliado, no solo un proveedor · Colombia y LatAm
        </div>
      </div>
    ),
    { ...size }
  );
}
