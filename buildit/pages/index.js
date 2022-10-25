import Link from 'next/link';
import { Fragment } from 'react';
import Header from './header';
import Button from './button';


export default function Home() {
  return (
    <Fragment>
    <section className='text-green6a6 bg-[url("../public/images/Bgs.png")]'>
      <Header/>
      <section className='flex mt-12'>
        <div className='w-fit ml-32 mt-20'>
          <h1 className='text-green6a6 text-4r leading-4r font-bold w-96'>Development company</h1>
          <p className='mt-8 w-4/6 text-green6a6 mb-20'>Forward-thinking real estate developer, owner and investor with a reputation</p>
          <div className='flex gap-4'>
            <Button style={'bg-greenba9 rounded-3s px-4 py-2 text-white hover:bg-green6a6 font-semibold'} value={'Service'}/>
            <Button style={'bg-blue6ff rounded-3s px-4 py-2 text-white hover:bg-green6a6 font-semibold'} value={'About the company'}/>
          </div>
        </div>
        <div>
          <img className='index1 w-30r z-4' src="/images/photos1.png"/>
        </div>
      </section>

      <section className='mt-96 pb-96'>
        <h1 className='text-2xl font-bold mt-32r text-center'>Innovative Execution</h1>
        <div className='flex justify-center mt-20'>
          <div className='flex flex-col p-8 gap-4 w-72 '>
            <img className='w-50s' src='/icons/icon2.png'/>
            <h2 className='font-bold text-xl'>Featured Listing</h2>
            <p className=' font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <div className='flex flex-col p-8 gap-4 w-72  mx-8'>
            <img className='w-50s' src='/icons/icon3.png'/>
            <h2 className='font-bold text-xl'>Available Properties</h2>
            <p className=' font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <div className='flex flex-col p-8 gap-4 w-72 '>
            <img className='w-50s' src='/icons/icon4.png'/>
            <h2 className='font-bold text-xl'>In the news</h2>
            <p className=' font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
      </section>

      <section className="flex justify-center pb-32">
            <div className="flex items-center w-4/6 mt-8 ">
              <div className= "h-fit">
                <img className="w-[120rem] pt-20" src="/images/image1.png"/>
              </div>
              <div className="flex flex-col gap-4  mt-20 ml-4">
                <h3 className="text-xs text-blueccd pl-4" >About us</h3>
                <h1 className="text-2xl text-green6a6 font-bold pl-4 pr-20">Owner and investor with a reputation</h1>
                <p className="text-green6a6 mb-12 pl-4 pr-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. 
                  Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, 
                  quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
                  Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra
                  vel ultrices in, congue sed ex.
                </p>
              <Button style={'bg-greenba9 -ml-[21rem] rounded-3s px-6 py-2 text-white hover:bg-green6a6 font-semibold'} value={'Explore'}/>
              </div>
            </div>
          </section>
          <section className="flex justify-center pb-32 mt-80">
            <div className="flex items-center w-4/6 mt-8 ">
              <div className="flex flex-col gap-4  mt-20 ml-4">
                <h3 className="text-xs text-blueccd " >Available Properties</h3>
                <h1 className="text-2xl text-green6a6 font-bold pr-20">Feature Listing</h1>
                <p className="text-green6a6 mb-12 pr-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. 
                  Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, 
                  quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
                  Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra
                  vel ultrices in, congue sed ex.
                </p>
              <Button style={'bg-greenba9 -ml-[23rem] rounded-3s px-6 py-2 text-white hover:bg-green6a6 font-semibold'} value={'Explore'}/>
              </div>
              <div className= "h-fit">
                <img className="w-[120rem] pt-20" src="/images/photos2.png"/>
              </div>
            </div>
          </section>


          <section>
            <h3 className="text-xs text-blueccd text-center " >Socials</h3>
            <h1 className="text-2xl text-green6a6 font-bold text-center ">On Instagram</h1>
          </section>
    </section>
  </Fragment>
  )
}