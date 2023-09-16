import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'

export const metadata = {
  title: 'Sketchify',
  description: 'Your Spotify listening imagined by AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
