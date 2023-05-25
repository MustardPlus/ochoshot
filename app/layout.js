import '@styles/globals.css'

export const metadata = {
  title: '[ ocho.shot ]',
  description: '> PHOTOGRAPHY by romeo.',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
          <main className="app">
              {children}
          </main>
      </body>
    </html>
  )
};

export default RootLayout;