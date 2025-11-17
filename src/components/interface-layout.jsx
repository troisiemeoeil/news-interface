import React from 'react'
import Categories from "@/components/categories";
import Header from "@/components/header";
import Image from "next/image";

export default function InterfaceLayout( {children}) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white font-sans overflow-hidden ">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center gap-1 py-4 px-4 bg-white overflow-hidden">
        <Header />
        {children}
      </main>
    </div>
    )
}
