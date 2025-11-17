import { Search, Instagram, Facebook } from 'lucide-react'
import React from 'react'
import Form from 'next/form'
import SearchForm from './search-results'
function Header() {
    return (
        <div className="w-full py-4 px-4 sm:px-8 flex flex-col md:flex-row items-center ">
      
            <div className="w-full md:flex-1 mb-2 md:mb-0">
             <SearchForm />
            </div>
            <div className="w-full md:flex-2 flex justify-center mb-2 md:mb-0">
                <a href='/' className="uppercase font-bold text-3xl sm:text-4xl text-black text-center md:text-left">
                    Centria TKI News
                </a>
            </div>

            <div className="w-full md:flex-1 flex justify-center md:justify-end gap-4">
                <Instagram size={25} className="text-zinc-700" />
                <Facebook size={25} className="text-zinc-700" />
            </div>
        </div>

    )
}

export default Header
