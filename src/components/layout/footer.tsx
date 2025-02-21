import Link from 'next/link'
import LetsChat from '../sections/lets-chat'

export default function Footer() {
  return (
    <footer className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <LetsChat />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <Link href="/about" className="block text-gray-400 hover:text-white mb-2">
              About Us
            </Link>
            <Link href="/projects" className="block text-gray-400 hover:text-white mb-2">
              Projects
            </Link>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <Link href="/services" className="block text-gray-400 hover:text-white mb-2">
              Services
            </Link>
            <Link href="/careers" className="block text-gray-400 hover:text-white mb-2">
              Careers
            </Link>
          </div>
          <div>
            <h3 className="font-bold mb-4">Blog</h3>
            <Link href="/blog" className="block text-gray-400 hover:text-white mb-2">
              Blog
            </Link>
          </div>
          <div className="col-span-2">
            <h3 className="font-bold mb-4">Contact</h3>
            <a href="mailto:hello@lunover.com" className="block text-gray-400 hover:text-white mb-2">
              hello@lunover.com
            </a>
            <p className="text-gray-400">+1 123 456 789</p>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Lunover. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
