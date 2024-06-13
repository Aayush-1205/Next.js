import { language } from "@/context/data";

export default function Page({ params }) {
  // throw new Error('Error???!!!!');
  console.log(params);
  if (language.includes(params.slug)) {
    return <div>My blog post is of {params.slug} language.</div>;
  } else {
    return <div>Post Not Found</div>;
  }
}
