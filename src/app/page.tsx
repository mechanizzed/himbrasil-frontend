import Image from 'next/image';

import VVLogo from '../../public/vv_logo.webp';

export default function Home() {
  return (
    // <main className="w-full h-screen flex justify-start bg-main">
    //   <div className="w-full">
    //     <Image src={BgVille} alt="VV Neon Noir" className="w-full" />
    //   </div>

    //   <div className="w-full flex justify-center items-center">
    //     <div className="w-full flex flex-col items-center justify-center">
    //       <Image src={VVLogo} alt="VV Neon Noir" className="w-60 mb-8" />
    //       <p className="text-pink-600 w-1/2 text-center">
    //         HIMBRASIL.com.br <br />
    //         <span className="text-xs uppercase">
    //           criado e desenvolvido por Luciano J Guerra
    //         </span>
    //       </p>
    //     </div>
    //   </div>
    // </main>

    <main className="w-full h-screen flex justify-start bg-main">
      <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 w-full 2xl:bg-gradient-to-r xl:bg-gradient-to-r lg:bg-gradient-to-r from-black flex justify-center items-center p-6">
        <div>
          <Image
            src={VVLogo}
            alt="VV Neon Noir"
            className="w-60 mx-auto mb-8"
          />
          <p className="text-pink-600 text-center">
            HIMBRASIL.com.br <br />
            <span className="text-xs uppercase">
              criado e desenvolvido por Luciano J Guerra
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
