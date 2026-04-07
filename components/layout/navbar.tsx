"use client"

const links = [
  { name: 'Experience', href: '#Experience' },
  { name: 'Projects', href: '#Projects' },
  { name: 'Skills', href: '#Skills' },
  { name: 'Contact', href: '#Contact' },
]


export default function Navbar() {
  return (
    <nav className=" fixed top-0 w-full z-50 bg-white/70 dark:bg-white/0 backdrop-blur-md transition">
      <ul className="flex gap-4 md:gap-6 justify-center py-4 md:justify-end md:pr-5">
        {links.map(link => (
            <li key={link.name}>
                <a href={link.href} className="md:text-lg hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                {link.name}
                </a>
            </li>)
            )
        }
      </ul>
    </nav>
  )
}