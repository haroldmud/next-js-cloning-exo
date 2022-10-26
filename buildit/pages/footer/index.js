function Footer() {
  return (
    <footer className="flex justify-center text-white h-[22rem]  bg-green6a6 ">
      <div className="flex justify-between mt-16 w-5/6 h-[15rem] py-8">
          <div>
            <div className="flex flex-col justify-between h-full ">
              <div>
                <h1 className="font-bold text-xl">Buildit</h1>
                <p className="">Development company, 2022</p>
              </div>
              <p>Site design – ⏰ Alarm</p>
            </div>
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              <li>Service1</li>
              <li>Service2</li>
              <li>Service3</li>
              <li>Service4</li>
            </ul>
            <div>
              <img className="w-[5rem] mt-4" src='/icons/icon8.png' />
            </div>
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              <li>About us</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <ul className="flex flex-col gap-2 w-5/6">
              <li>Get in touch</li>
              <li>60 Manor Station St. Fairport, NY 14450</li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>708-790-0000</li>
              <li>sales@buildit.site</li>
            </ul>
      </div>
      </div>
    </footer>
  )
}

export default Footer; 