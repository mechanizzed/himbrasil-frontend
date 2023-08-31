import Image from 'next/image';
import Link from 'next/link';

import { AiFillInstagram } from 'react-icons/ai';

import VVLogo from '../../public/vv_logo.webp';
import clubTicket from '../../public/ingresso.png';

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-start bg-main">
      <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 w-full 2xl:bg-gradient-to-r xl:bg-gradient-to-r lg:bg-gradient-to-r from-black flex justify-center items-center p-6">
        <div>
          <Image
            src={VVLogo}
            alt="VV Neon Noir"
            className="w-44 mx-auto mb-8"
          />
          <h4 className="text-pink-700 font-bold 2xl:text-3xl xl:text-3xl text-2xl text-center mb-2">
            VV / NEON NOIR TOUR 2023
          </h4>
          <h4 className="text-pink-700 text-center mb-8">
            VILLE VALO, A VOZ E A ALMA DO HIM <br /> EM ÚNICO SHOW NO BRASIL
          </h4>
          <h2 className="text-white font-bold text-3xl text-center mb-2">
            01.11.2023 São Paulo
          </h2>
          <p className="text-white text-center text-lg mb-8">Carioca Club</p>
          <p className="text-gray-200 text-sm text-center mb-2">Ingressos:</p>
          <Link
            href="https://www.clubedoingresso.com/evento/villevalo-sp"
            target="_blank"
          >
            <Image
              src={clubTicket}
              alt="clube do ingresso"
              className="w-60 mx-auto mb-8 bg-white p-4 rounded"
            />
          </Link>

          <Link
            href="https://www.instagram.com/darkdimensionsbrasil/"
            target="_blank"
            className="text-white flex gap-2 items-center justify-center mb-6"
          >
            <AiFillInstagram />
            darkdimensionsbrasil
          </Link>

          <p className="text-pink-600 text-center">
            <span className="text-xs">
              himbrasil.com.br / heartagram.com.br
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
