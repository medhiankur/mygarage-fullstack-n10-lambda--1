import Head from 'next/head';
import Image from 'next/image';
 

export default function Home() {
  return (
    <>
    <Head>
        <title>My Garage| Workshop Management System</title>
    </Head>
    <div className="flex-wrap">
              <Image src ="/mainimage.jpg" width = {1280} height ={853}  />            
    </div>

    </>

  )
}
