/** @type {import('next').NextConfig} */
const nextConfig = {
  // Las secciones "Industrias" y "Casos de éxito" se retiraron del sitio.
  // Redirección permanente (308) para no dejar 404 en URLs ya indexadas.
  async redirects() {
    return [
      { source: '/industrias/:path*', destination: '/', permanent: true },
      { source: '/casos-de-exito', destination: '/', permanent: true },
    ];
  },
};
module.exports = nextConfig;
