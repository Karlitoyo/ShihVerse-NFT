import Image from 'next/image'
import Shihverse from '../public/Shihverse-removebg.png'

// const myLoader = ({ src }) => {
//   return `/preprocessed-images/${src}`;
// };

const IndexPage = () => {

  return (
    <div className="bg-gradient-to-tr from-red-500 to-purple-400 relative h-screen overflow-hidden">
      <div className='md:flex md:justify-center lg:justify-left lg:absolute'>
        <Image src={Shihverse}
          // loader={myLoader}
          className="sm:relative lg:absolute md:absolute inset-0 w-full md:justify-center h-full object-cover filter brightness-50"
          alt="main background image"
        ></Image>
      </div>
      <div className="lg:absolute md:relative inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto lg:mr-60 md:-mt-28 text-center overflow-hidden">

        <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug">
          SHIHverse NFT
        </h1>
        <div className="space-y-8">
          <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
            Easily Mint NFT'S on {' '}
            <span className="text-palette-primary">
              SHIH.
            </span>
          </h1>
          <p className="font-secondary text-palette-light text-base md:text-lg lg:text-xl">
            All your NFT's in one Doggy dogg world!
          </p>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
