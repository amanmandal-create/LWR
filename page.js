import './globals.css'

export const metadata = {
  title: 'Learn With Ranjan',
  description: 'Free and premium learning for classes 9 to 11.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}