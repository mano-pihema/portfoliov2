import AnimatedWord from './animated/AnimatedWord';

const Hero = () => {
  return (
    <div id='Home' className=' h-screen w-screen flex flex-col justify-center'>
      <div className='mx-auto text-left -mt-20'>
        <h1 className='text-6xl md:text-8xl'>Kia Ora</h1>
        <h1 className='text-6xl md:text-8xl'>Welcome,</h1>
        {/* <h1 className='text-4xl md:text-6xl '>Come on in</h1> */}
        <AnimatedWord text='Come on in 🙂' />
      </div>
    </div>
  );
};

export default Hero;
