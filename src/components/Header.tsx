import Image from 'next/image';

export default function Header() {
  return (
    <header className="mx-8 my-4 sm:px-8">
      <nav className="flex justify-between items-center max-container">
        <div className="flex gap-6 items-center">
          <a href="/">
            <Image src="/bar.svg" alt="menu icon" width={30} height={30} />
          </a>
          <a href="/">
            <Image src="/logo.svg" alt="logo" width={120} height={62} />
          </a>
        </div>
        <ul className="flex justify-between items-center gap-8 font-bold text-[15px] max-lg:hidden">
          <li>
            <a href="/">Почивки и екскурзии</a>
          </li>
          <li>
            <a href="/">Хотели</a>
          </li>
          <li>
            <a href="/">Блог</a>
          </li>
          <li>
            <a href="/">За нас</a>
          </li>
          <li>
            <a href="/">Контакти</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
