import React, { useState, useEffect} from 'react'
import { getCategories } from '../services';
import Link from 'next/link';

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  
  }, []);

  return (
    <div className='mx-auto px-20 mb-8 mt-0  bg-gray-900'> 
        <div className='w-full inline-block py-4'>
            <div className='md:float-left block'> 
                <Link href="/">
                    <span className="cursor-pointer font-semibold text-2xl text-white">
                    💻 Chakrit Coding Blog
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents">
                {categories.map((categories) => (
                    <Link key={categories.slug} href={`/category/${categories.slug}`}>
                        <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                            {categories.name}
                        </span>
                    </Link>
                ))}
            </div> 
        </div>
    </div>
  )
}

export default Header