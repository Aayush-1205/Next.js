import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/about-new')){
        return NextResponse.rewrite(new URL('/about', request.url))
    }
//     return NextResponse.json({message: 'Hey, you are at the wrong page!'})
//   return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about-new/:path*',
}


// import { NextResponse } from 'next/server'
 
// export function middleware(request) {
//   // Clone the request headers and set a new header `x-hello-from-middleware1`
//   const requestHeaders = new Headers(request.headers)
//   requestHeaders.set('x-hello-from-middleware1', 'hello')
 
//   // You can also set request headers in NextResponse.rewrite
//   const response = NextResponse.next({
//     request: {
//       // New request headers
//       headers: requestHeaders,
//     },
//   })
 
//   // Set a new response header `x-hello-from-middleware2`
//   response.headers.set('x-hello-from-middleware2', 'hello')
//   return response
// }