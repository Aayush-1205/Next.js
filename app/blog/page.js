import { language } from "@/context/data";
import Link from "next/link";
import React from "react";

const page = () => {

  return (
  <div className="p-5">
    <h1 className="text-2xl font-semibold mb-5">Blogs</h1>
    {language.map((lang,index) => {
      return <Link key={index} href={`/blogpost/${lang}`} className="flex gap-5">{lang}</Link>
    })}
  </div>
  );
};

export default page;
