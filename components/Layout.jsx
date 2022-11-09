import Header from "./Header"
import Footer from "./Footer"

function Layout( {children} ) {
  return (
    <div className="p-4">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout