# Welcome Just Eat search app for test

this app mainly is use React.js, Next.js and Fela (css) 


## To run the App

for Simple proxy to bypass CORS issues , you need add Local CORS Proxy. This module was built to solve the issue of getting this error:

```
No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disable
```
```
npm install -g local-cors-proxy
```
Start Proxy:

```
lcp --proxyUrl https://uk.api.just-eat.io/
```
Run App:

```
yarn && yarn dev
```
