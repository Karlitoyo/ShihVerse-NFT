module.exports = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },

    images: {
        loader: 'vercel',
        path: '',
      },


    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        return {
          '/': { page: '/' },
          '/marketplace': { page: '/marketplace' },
          '/index': { page: '/index' },
        }
      },
    }