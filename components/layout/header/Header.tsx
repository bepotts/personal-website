import Image from 'next/image';

function Header() {
  return (
    <header className="bg-blue-500 top-0">
      <div className="mx-auto px-8 py-4 bg-green-500 flex justify-center">
        <Image src="/bp-logo.svg" alt="BP logo" width={100} height={20} />
      </div>
    </header>
  );
}

export default Header;
