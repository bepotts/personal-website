import Image from 'next/image';

function Header() {
  const logoWidth = 100;
  const logoHeight = 20;

  return (
    <header className="top-0">
      <div
        className="mx-auto py-4 flex justify-center"
        style={{
          background: 'var(--header-bg)',
        }}
      >
        <Image src="/bp-logo.svg" alt="BP logo" className="responsive-image" width={logoWidth} height={logoHeight} />
      </div>
    </header>
  );
}

export default Header;
