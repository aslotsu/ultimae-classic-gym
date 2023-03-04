import Head from 'next/head'
import Navigation from "../Components/Navigation";


export const Home = () => {
  return (
    <div>
      <Head>
        <title>Ultimate Classic Gym</title>
        <meta name="description" content="Ultimate Classic Gym - Get In The Best Shape of your Life!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
            <Navigation />
        </main>
    </div>
  )
}

export default Home