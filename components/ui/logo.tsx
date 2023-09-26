import Link from 'next/link'
import LogoClen from "@/public/images/logo-black.png"
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className='cursor-pointer'>
      <span className='block font-[800] text-2xl'>
        &lt;/&gt;
      </span>
    </Link>
  )
}
