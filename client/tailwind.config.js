/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        cards: 'repeat(4, minmax(240px, 1fr))',
      },
      screens: {
        lgNewRelease: { 'max': '1080px' },
        smFooter: { 'max': '768px' }
      },
      colors: {
        discount: '#BEEE11',
        discountOriginalPrice: '#738895',
        steamBg: '#1b2838',
        buttonColorBg: 'rgba( 103, 193, 245, 0.2 )',
        buttonColor: '#67c1f5',
        fontColor: '#556772;',
        headerFontColor: '#c6d4df',
        greyFontColor: '#8f98a0',
        greyBg: 'rgba(55, 62, 115, 0.21);',
        iconBg: '#0E141B',
        blueItemBg: 'rgba(53, 94, 118, 0.337)',
        buyBg: '#5ba32b',
        mixed: '#B9A074',
        linkHoverColor: '#38a4d2'
      },
      boxShadow: {
        moreMenu: '0 0 3px #000',
        card: '0 0 12px 2px #000'
      },
      spacing: {
        prodSliderSize: '40vw'
      }
    },
  },
  plugins: [],
}

