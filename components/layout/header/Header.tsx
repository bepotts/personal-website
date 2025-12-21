import Image from 'next/image';

function Header() {
  return (
    <header className="top-0">
      <div className="mx-auto py-4 bg-purple-500 flex justify-center">
        <Image src="/bp-logo.svg" alt="BP logo" width={100} height={20} />
      </div>
    </header>
  );
}

export default Header;
