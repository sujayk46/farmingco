/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      base: '#EFF4F7',
      white: '#ffff',
      primary: '#F48932',
      secondary: '#0FA157',
      tertiary: {
        pri:'#FDE416',
        sec:'#F9B824'
      },
      accent: {
        pri:'#95BC2D',
        sec: 'rgba(169, 208, 68,0.4)',
        ter: 'rgb(132 204 22)'
      },
      maroon: {
        pri: '#683023',
        sec: '#AB4721',
        acc: '#E8E4D1',
      },
      ash: {
        pri: '#363435',
        sec: '#FFFFFF',
        acc: '#AAA7A5',
      },
      brown: {
        pri: '#93642C',
        sec: '#4E350D',
        acc: '#D1C6AA',
      },
      lime: {
        pri: '#9FC94C',
        sec: '#A1CA48',
        acc: '#F4F3DC',
      },
      gold: {
        pri: '#EEC628',
        sec: '#DBB51C',
        acc: '#F4F3DB',
      },
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Define Roboto font family
        montserrat: ['Montserrat', 'sans-serif'], // Montserrat as paired font
      },
      backgroundImage: {
        'spices-img': "url('./src/assets/images/spices.jpg')",
        'texture-img': "url('./src/assets/images/white-wood-texture.jpg')",
      },
      backgroundOpacity: {
        35: '0.35', // Custom background opacity for 35% transparency
      },
      height: {
        'screen-minus-80': 'calc(100vh - 80px)', // custom class to deduct 50px from 100vh
      },
    },
  },
  plugins: [],
}

