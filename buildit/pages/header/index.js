import Link from "next/link";
import Button from "../button"

let links = [
    [
      "./about", "About",
    ],
    
    [
      "./", "Services",
    ],
    [  
      "./", "Project",
   ],
    [
      "./", "contact"
    ],
  ];

function Header() {
    return (
        <header className='flex justify-center pt-8'>
              <div className='flex w-5/6 justify-between'>
                <Link href="./">
                  <a>
                    <div className='flex items-center'>
                      <img className='w-50s' src="/icons/icon1.png"/>
                      <h1 className='text-green6a6 font-bold h-fit text-1/5r'>Buildit</h1>
                    </div>
                  </a>
                </Link>   
                
                <ul className='flex items-center gap-8'>  
                  { 
                    links.map(
                      (item) => <li>
                                    <Link href={item[0]}>
                                    <a className='text-green6a6 hover:underline'>{item[1]}</a>
                                    </Link> 
                                </li>
                    )
                  }
                </ul>
                <Button style={'bg-greenba9 rounded-3s px-4 py-2 text-white hover:bg-green6a6 font-semibold'} value={'Need a project?'}/>
              </div>
            </header>
    );
}

export default Header;
