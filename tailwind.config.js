/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '38': '50px',
        '70': '286px',
        '80': '1212px',
        '81': '1300px',
        '90': '600px',
        '92': '330px',
        '93': '500px',
        '94': '340px',
        
      },
      margin: {
        '600': '620px',
        '700':'705px',
        '55px': '55px',
        '84px': '84px',
        '85': '310px',
        '95': '960px'
      },
      colors:{
        'chose':{
          10:'#1A1A1B',
          20:'#FFC947',
          30:'#246AF3',
          40:'#191A19',
          50:'#006E7F',
          60:'#EE5007',
          70:'#B22727',
          80:'#3E6D9C'
        }
      },
      backgroundImage: {
        'hero-pattern': "url('https://i.cdn.newsbytesapp.com/images/l145_9711629017738.jpg')",

      }
    },
  },
  plugins: [],
}

