import './globals.css'
import NavBar from './components/NavBar'
import MyProfilePic from './components/MyProfilePic'


export const metadata = {
  title: "",
  description: 'Built by Algo Hussle using Nextjs 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <NavBar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
