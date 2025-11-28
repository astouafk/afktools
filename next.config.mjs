// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
// }

// export default nextConfig




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
//   async rewrites() {
//     return [
//       {
//         source: '/project/:id',
//         destination: '/projects/:id',
//       },
//     ];
//   },
// }

// export default nextConfig




// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/project/:id',
        destination: '/projects/:id',
      },
      {
        source: '/project/:id/analysis',
        destination: '/projects/:id/analysis',
      },
      {
        source: '/project/:id/reports',
        destination: '/projects/:id/reports',
      },
      {
        source: '/project/:id/analysis/create',
        destination: '/projects/:id/analysis/create',
      },
      {
        source: '/project/:id/analysis/:analysisId',
        destination: '/projects/:id/analysis/:analysisId',
      },
      {
        source: '/project/:id/analysis/:analysisId/edit',
        destination: '/projects/:id/analysis/:analysisId/edit',
      },
      {
        source: '/project/:id/reports',
        destination: '/projects/:id/reports',
      },
      {
        source: '/project/:id/reports/create',
        destination: '/projects/:id/reports/create',
      },
      {
        source: '/project/:id/reports/:reportId',
        destination: '/projects/:id/reports/:reportId',
      },
      {
        source: '/project/:id/reports/:reportId/edit',
        destination: '/projects/:id/reports/:reportId/edit',
      },
      {
        source: '/reports/:reportId',
        destination: '/reports/:reportId',
      },
      {
        source: '/project/:id/team',
        destination: '/projects/:id/team',
      },
    ];
  },
}

export default nextConfig