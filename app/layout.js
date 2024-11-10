export const metadata = {
  title: 'Puffer Isle Resort',
  description: 'Welcome to Puffer Isle Resort',
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}