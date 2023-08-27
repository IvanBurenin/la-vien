import Header from './components/Header/Header'

import './normalize.css'
import mainStyles from './main.module.css'

export const metadata = {
    title: 'La Vien',
    description: 'The main section of the portfolio website of Ivan Burenin',
}

export default function RootLayout({children}){
    return (
      <html className={mainStyles.root}>
        <body>
          <div className={mainStyles.wrapper}>
              <Header/>
              <main className={mainStyles.main}>
                {children}
              </main>
          </div>
        </body>
      </html>
    )
}