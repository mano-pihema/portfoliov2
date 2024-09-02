import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
} from 'react-icons/ai';

const Contact = () => {
  function handleDownload() {
    const anchor = document.createElement('a');
    anchor.href = '/Mano-Pihema-Resume.pdf';
    anchor.download = 'Mano-Pihema-Resume.pdf';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  return (
    <div id='Contact' className='pt-20 p-6'>
      <h1 className='text-2xl md:text-6xl'>Thanks for dropping by!</h1>
      <h1 className='text-xl md:text-3xl'>Do reach out below.👇</h1>
      <footer className='w-full mx-auto pt-10  px-4 sm:px-20 '>
        <div>
          <div className=' md:h-auto items-center justify-center md:flex '>
            <button
              className=' transition duration-500 hover:bg-blue-500 rounded-3xl m-5 '
              onClick={() =>
                window.open('https://github.com/mano-pihema', '_blank')
              }
            >
              <AiFillGithub size={30} />
            </button>
            <button
              className='hover:bg-blue-500 transition duration-500 rounded m-5 '
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/mano-pihema/',
                  '_blank'
                )
              }
            >
              <AiFillLinkedin size={30} />
            </button>

            <button
              className=' relative hover:bg-blue-500 transition duration-500 rounded m-5 group'
              onClick={handleDownload}
            >
              <AiOutlineDownload size={30} />
              <span className='absolute top-1/2 left-full transform -translate-y-1/2 ml-3 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-500'>
                Download my CV
              </span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
