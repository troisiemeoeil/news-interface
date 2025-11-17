"use client";
import InterfaceLayout from '@/components/interface-layout';
import axios from 'axios';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Page({ params }) {
  const pathname = usePathname()

  const [article, setArticle] = useState(null)
  const searchParams = useSearchParams();  
  const title = searchParams.get("title");
  const content = searchParams.get("content");
  const urlToImg = searchParams.get("urlToImg");
  const author = searchParams.get("author");
  const date = searchParams.get("date");
  const source = searchParams.get("source");


  useEffect(() => {

    
    axios
      .get(`/api/single-article?url=${encodeURIComponent(title)}`, { cache: "no-store" })
      .then((res) => {
        console.log(res.data.articles[0]);
        setArticle(res.data.articles[0])


      })
      .catch((error) => console.error(error));
  }, [title]);

  return (
    <InterfaceLayout>
      {
        article ? (
          <div className='w-full flex flex-col  items-center border-t'>
            
          <div className='max-w-4xl flex flex-col gap-4 mt-8'>

            <h1 className='text-black text-7xl text-center'>{title}</h1>
        
            <div className='flex flex-col  gap-4'>
                  <div className="w-full h-100 shrink-0 relative">
                                          <Image
                                              src={urlToImg || "/missing.jpg"}
                                              alt={article.title}
                                              fill
                                              className="rounded-2xl object-cover"
                                          />
                                      </div>
                                          <div className="flex justify-between p-5 text-sm">
              <div className='flex items-center gap-2'>
                <p className="text-zinc-600 uppercase text-lg">{author || "Joe Doe"}</p> |
                <p className="text-zinc-600">{source || "Joe Doe"}</p>
              </div>
              <div className="flex  gap-3">
                <p className="text-zinc-600 text-md">{date}</p>
              </div>
            </div>

              <p className='text-black text-md'>{content}</p>
            </div>
          </div>
          </div>

        ) :
          (
            <div>Loading Data</div>
          )
      }
    </InterfaceLayout>
  );
}
