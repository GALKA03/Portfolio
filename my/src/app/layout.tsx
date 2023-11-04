import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Matviienko',
  description: 'Galya is a full-stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 pt-28 sm:pt-36`}>
        <div className='bg-[#f4353564] absolute z-[-10] top-[-6rem] right[-11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[6rem] sm:w-[68.75rem]'></div>
       <div className=' bg-[#a9da5564] absolute z-[-10] top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[6rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
       <Header/>
        {children}
      </body>
    </html>
  )
}
