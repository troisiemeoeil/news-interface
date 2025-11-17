"use client"

import useStore from '@/app/utils/store';
import React from 'react'

function Categories() {

const changeCategory = useStore((state) => state.changeCategory);

    const newsCategories = [
        {
            name: "general",
            label: "Top News"
        },
        {
            name: "business",
            label: "Business"
        },
        {
            name: "sports",
            label: "Sports"
        },
        {
            name: "entertainment",
            label: "Entertainment"
        },
     
        {
            name: "technology",
            label: "Technology"
        },
        {
            name: "science",
            label: "Science"
        },
        {
            name: "health",
            label: "Health"
        }
    ]


    return (
            <div className='w-full py-4 px-8 flex flex-col border-y-2  sm:flex-row md:flex-row lg:flex-row justify-between h-fit  '>
                {newsCategories.map((item) => (
                    <button className=' flex justify-center hover:cursor-pointer selection:border-y-4 selection:border-black ' 
                    key={item.name}
                    onClick={() => changeCategory(item.name)} 
                    >
                        <span className='uppercase font-bold text-lg text-zinc-700 hover:text-zinc-800'>{item.label}</span> |
                    </button>
                ))}
            </div>
    )
}

export default Categories
