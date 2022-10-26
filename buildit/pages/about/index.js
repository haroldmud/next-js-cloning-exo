import { Fragment } from "react";
import Header from "../header";
import Footer from "../footer";


function Info () {
    return (
      <Fragment>
        <section className="bg-[url('/images/bgs-about.png')]">
          <Header/>
          <section className="flex justify-center">
            <div className="flex items-center w-5/6">
              <div className= "h-fit">
                <img className="w-100r pt-20" src="/images/photosX1.png"/>
              </div>
              <div className="flex flex-col gap-4 w-100r">
                <h3 className="text-xs text-blueccd" >About us</h3>
                <h1 className="text-2xl text-green6a6 font-bold w-4/6">Owner and investor with a reputation</h1>
                <p className="text-green6a6 w-5/6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. 
                  Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, 
                  quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
                  Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra
                  vel ultrices in, congue sed ex.
                </p>
              </div>
            </div>
          </section>
          <Footer/>
        </section>
      </Fragment>
    )
}

export default Info;
