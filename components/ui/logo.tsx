import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <img src={`https://cleansoft.s3.sa-east-1.amazonaws.com/Logos/logo-black.png`} alt="Clensoft Logo" className=" h-8"/>
    </Link>
  )
}
