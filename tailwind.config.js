/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#d0011b',
        sub: '#ee4d2d',
        non: 'rgba(0,0,0,.26)'
      },
      backgroundColor: {
        registerBg: 'rgb(238, 77, 45)'
      },
      backgroundImage: {
        'hero-pattern': "url('https://down-vn.img.susercontent.com/file/sg-11134004-7rbnd-ln2u4n7zfkag0a')"
      }
    }
  },
  plugins: []
}
