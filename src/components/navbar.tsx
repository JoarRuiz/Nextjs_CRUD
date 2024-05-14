import Link from "next/link"
import { ModeToggle } from "./theme-toggle-button"
import { buttonVariants } from "./ui/button"

function Navbar() {
  return (
    <nav className="flex justify-between py-10">
    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">NexActionsCrud</h1>
    <div className="flex gap-x-2 items-start">
      <Link href="/new" className={buttonVariants({variant : "secondary"})}>
        Crear tarea
      </Link>
      <ModeToggle />
    </div>

    </nav>
    
  )
}

export default Navbar