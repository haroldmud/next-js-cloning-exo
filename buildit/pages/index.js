import Link from 'next/link';
import { Fragment } from 'react';
import Header from './header';
import Button from './button';


export default function Home() {
  return (
    <Fragment>
    <section className='bg-[url("../public/images/Bgs.png")]'>
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
    </section>
  </Fragment>
  )
}
