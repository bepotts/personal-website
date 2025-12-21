import Image from 'next/image';

function MainSection() {
  return (
    <main className="flex-1 bg-yellow-400 text-center my-8">
      <div className="flex-1 bg-sky-300 p-8">
        <h1>Hello!</h1>
        <h2>Welcome to the website of Brandon Potts!</h2>
      </div>

      <div className="bg-green-200 p-8">
        <p className="p-4">
          I&apos;m a software developer who enjoys to be build things
        </p>
      </div>
      <div>
        <h3>Hit me up</h3>
        <p>
          If you&apos;d like to contact me, feel free to{' '}
          <a href="mailto:bepotts47@gmail.com?subject=Contact%20from%20your%20website">
            contact me
          </a>
        </p>
        <div>
          <a href="mailto:bepotts47@gmail.com?subject=Contact%20from%20your%20website">
            <Image
              src="/icons/email-icon.svg"
              alt="email icon"
              width={50}
              height={20}
            />
          </a>
          <a
            href="https://github.com/bepotts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/github-icon.svg"
              alt="github icon"
              width={50}
              height={20}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/brandon-potts-05587b366/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/linkedin-icon.svg"
              alt="linkedin icon"
              width={50}
              height={20}
            />
          </a>
        </div>
      </div>
    </main>
  );
}

export default MainSection;
