import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='bg-zinc-700 text-gray-100 shadow w-full'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link
          className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'
          href='/'
        >
          <Image src='/images/codecafelogo.jpg' width={40} height={40} alt='logo' className='rounded'/>
          {/* <img src='/images/logo.png' width={40} height={40} alt='logo' /> */}

          <span className='font-mono ml-3 hover:text-white text-xl'>CodeCafé</span>
        </Link>
        <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
          <Link
            className='font-mono mx-5 cursor-pointer uppercase hover:text-white'
            href='/blog'
          >
            Blog
          </Link>
          <Link
            className='font-mono mx-5 cursor-pointer uppercase hover:text-white'
            href='/about'
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
