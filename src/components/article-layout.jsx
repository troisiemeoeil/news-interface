"use client"
import useStore from '@/app/utils/store';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function ArticleLayout() {
    const [articles, setArticles] = useState([]);
    const category = useStore((state) => state.category);

    useEffect(() => {
        console.log("Current category:", category);
        axios.get(`/api/article-metadata?category=${category}`).then((res) => {
            console.log(res.data);
            setArticles(res.data.articles);
        })
            .catch((error) => console.error(error))

    }, [category])

    if (articles.length === 0) {
        return <div className="w-full py-4 px-8">Loading...</div>;
    }
    return (
        <div className="w-full py-4 px-8  flex items-center h-fit ">
            {articles ? (
                <div className="w-full flex-col  sm:flex-row md:flex-row lg:flex-row xl:flex-row flex items-start gap-6">
       
                        <div className="md:w-[60%] flex flex-col  gap-4">
             <Link key={articles[0].title}
                        href={`/article?title=${encodeURIComponent(articles[0].title)}&urlToImg=${articles[0].urlToImage}&author=${articles[0].author}&date=${new Date(articles[0].publishedAt).toLocaleDateString()}&source=${articles[0].source.name}&content=${articles[0].content}`}>

                            <div className="w-full h-100 shrink-0 relative">
                                <Image
                                    src={articles[0].urlToImage}
                                    alt={articles[0].title}
                                    fill
                                    className="rounded-2xl object-cover"
                                />
                            </div>
                            <div className='flex flex-col gap-2 px-3 '>
                                <h1 className="text-black font-semibold text-3xl">{articles[0].title}</h1>
                                <h1 className="text-zinc-500 font-normal text-md">{articles[0].description}</h1>
                            </div>


                </Link>
                        </div>
                        <div className="md:w-[40%] h-[75vh] flex flex-col items-center justify-start overflow-y-auto gap-4">
                            {articles.slice(1).map((article) => (
                                <Link key={article.title}
                                    href={`/article?title=${encodeURIComponent(article.title)}&urlToImg=${article.urlToImage}&author=${article.author}&date=${new Date(article.publishedAt).toLocaleDateString()}&source=${article.source.name}&content=${article.content}`}>

                                    <div className="mb-4 flex flex-col gap-2 w-full">
                                        <div className="flex items-center gap-2">
                                            <div className="w-48 h-36 shrink-0 relative">
                                                <Image
                                                    src={article.urlToImage || "/public/missing.jpg"}
                                                    alt={article.title}
                                                    fill
                                                    className="rounded-2xl object-cover"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <h1 className="text-black text-lg font-semibold">{article.title}</h1>
                                            </div>
                                        </div>
                                        <div className="flex justify-between px-3 text-sm">
                                            <p className="text-zinc-600">{article.author || "Joe Doe"}</p>
                                            <div className="flex  gap-3">
                                                <p className="text-zinc-600">{article.source.name || "Joe Doe"}</p>
                                                <p className="text-zinc-600">{new Date(article.publishedAt).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}

                            {/* <button className='text-black border-2  p-3 hover:cursor-pointer rounded-xl'
                        // onClick={}
                        >Read More</button> */}
                        </div>


                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );

}

export default ArticleLayout
