import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href='/' className='flex items-center '>
            <Image src='/logo.png' height={60} width={} alt=""/>
            <Image src='/logo-texto.png' width={} alt=""/>
        </Link>
    )
}