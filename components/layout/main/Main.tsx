import Image from 'next/image';

function MainSection() {
  return (
    <main className="flex-1 bg-yellow-400 text-center m-0">
      <div className="flex-1 bg-sky-300 p-4">
        <h1 className="text-fluid-2xl">Hello!</h1>
        <h2 className="text-fluid-xl">
          Welcome to the website of Brandon Potts!
        </h2>
      </div>

      <div className="bg-green-200 p-4">
        <p className="p-4 m-4">
          I&apos;m a software developer who enjoys to be build things
        </p>
      </div>
      <div className="p-8">
        <h3 className="pt-4 text-fluid-lg">Hit me up</h3>
        <p>Where you can find me online:</p>
        <div className="flex justify-center items-center gap-4 pt-6">
          <a
            className="cursor-pointer"
            href="mailto:bepotts47@gmail.com?subject=Contact%20from%20your%20website"
          >
            <Image
              src="/icons/email-icon.svg"
              alt="email icon"
              width={50}
              height={20}
              className="pointer-events-none"
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
              width={50}
              height={20}
              className="pointer-events-none"
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
              width={50}
              height={20}
              className="pointer-events-none"
            />
          </a>
        </div>
      </div>
    </main>
  );
}

export default MainSection;
