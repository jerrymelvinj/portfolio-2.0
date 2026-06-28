import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

export const metadata = {
  title: 'Jerry Melvin — Product Designer',
  description: 'Product Designer and Frontend Developer based in Bengaluru.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  )
}