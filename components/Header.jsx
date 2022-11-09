import Link from "next/link"

function Header() {
  return (
    <div className="flex justify-between my-1 text-white">
      <Link href="./">
        <h3>Global Medica S.A</h3>
      </Link>
      <ul className="flex mr-4">
        <li className="px-2">
          <Link href="">
            Información
          </Link>
        </li>
        <li className="px-2">
          <Link href="">
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header