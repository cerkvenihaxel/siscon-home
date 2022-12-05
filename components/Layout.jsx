import Footer from "./Footer"
import { Navbar } from "./Navbar"

function Layout( {children} ) {
  return (
    <div className="p-4">
      
      {children}
    </div>
  )
}

export default Layout