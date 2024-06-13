
export default function Page({ params }) {
  console.log(params);

  return <div>Post Not Found {params.val}</div>;
}

// In this page we are getting the params from the url and logging it in console with help of [...val], this helps in getting an array from url
