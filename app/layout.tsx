// This is used for modifying the font family 
import { Nunito } from 'next/font/google'
// This is  used for metadata [like changing title , desc and all]
import { Metadata } from 'next'
// import './globals.css'



/*
For using nunito font
> this we use for creating a font family for our te

const font = Nunito({
  subsets:['latin']
})

> To include it 
 wherever you want simply use 

className = {font.className}

like this
>  <body className={inter.className}>{children}</body>
*/

const font = Nunito({
  subsets:["latin"],
})

/*
Meta data constant 

title : denotes title our application 
description : desc of title 
*/
export const metadata: Metadata = {
  title: 'airbnb-clone',
  description: 'airbnb clone created with next js ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
