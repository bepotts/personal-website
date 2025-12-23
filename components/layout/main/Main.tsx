import Image from 'next/image';

function MainSection() {
  const iconWidth: number = 55;
  const iconHeight: number = 20;

  return (
    <main
      className="flex-1 text-center m-0"
      style={{
        backgroundColor: 'var(--main-bg)',
        color: 'var(--text-primary)',
      }}
    >
      <div
        className="flex-1 p-4"
        style={{
          backgroundColor: 'var(--section-bg)',
        }}
      >
        <h1 className="text-fluid-2xl">Hello!</h1>
        <h2 className="text-fluid-xl">
          Welcome to the website of Brandon Potts!
        </h2>
      </div>

      <div
        className="p-4"
        style={{
          backgroundColor: 'var(--section-accent)',
        }}
      >
        <p className="p-4 m-4" style={{ color: 'var(--text-secondary)' }}>
          I&apos;m a software developer who enjoys to build things
        </p>
      </div>
      <div
        className="p-8 lg:p-12 xl:p-16"
        style={{
          backgroundColor: 'var(--section-bg)',
        }}
      >
        <h3 className="pt-4 text-fluid-lg">Hit me up</h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          Where you can find me online:
        </p>
        <div className="flex justify-center items-center gap-4 pt-6">
          <a
            className="cursor-pointer"
            href="mailto:bepotts47@gmail.com?subject=Contact%20from%20your%20website"
          >
            <Image
              src="/icons/email-icon.svg"
              alt="email icon"
              width={iconWidth}
              height={iconHeight}
              className="pointer-events-none responsive-image image-white"
            />
          </a>
          <a
            href="https://github.com/bepotts"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
              src="/icons/github-icon.svg"
              alt="github icon"
              width={iconWidth}
              height={iconHeight}
              className="pointer-events-none responsive-image image-white"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/brandon-potts-05587b366/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
              src="/icons/linkedin-icon.svg"
              alt="linkedin icon"
              width={iconWidth}
              height={iconHeight}
              className="pointer-events-none responsive-image image-white"
            />
          </a>
        </div>
      </div>
    </main>
  );
}

export default MainSection;
