module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about-us/testimonials',
        destination: '/testimonials',
        permanent: true,
      },
      {
        source: '/blog/flatten-you-abs-and-strenghten-your-back',
        destination: '/blog/flatten-your-abs-and-strenghten-your-back',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/schedule',
        permanent: true,
      },
      {
        source: '/treatments',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/treatments/chiropractic',
        destination: '/services/chiropractic',
        permanent: true,
      },
      {
        source: '/treatments/corrective-exercise',
        destination: '/services/corrective-exercise',
        permanent: true,
      },
      {
        source: '/treatments/nutritional-counseling',
        destination: '/services/nutritional-counseling',
        permanent: true,
      },
      {
        source: '/treatments/spinal-decompression',
        destination: '/services/spinal-decompression',
        permanent: true,
      },
    ];
  },
}
