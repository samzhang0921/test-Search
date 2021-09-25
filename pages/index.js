import Head from 'next/head'
import getConfig from 'next/config'
import App from '../src/App'


const { publicRuntimeConfig } = getConfig()

export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>Just Eat</title>
      </Head>

      <main>
        <App {...props} />
      </main>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.8;
          color: #333;
          font-family: sans-serif;
        }
        h1 {
          font-weight: 700;
        }
        p {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  )
}

Home.getInitialProps = (ctx) => {
  return { ...publicRuntimeConfig }
}
