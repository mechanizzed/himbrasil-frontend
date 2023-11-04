import Image from 'next/image';
import Link from 'next/link';

import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
} from 'react-icons/ai';

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
            VV / NEON NOIR
          </h4>
          <div className="mb-6 flex justify-center items-center gap-4">
            <Link
              href="https://www.instagram.com/himbrasil_"
              target="_blank"
              className="text-white text-xl"
            >
              <AiFillInstagram />
            </Link>
            <Link
              href="https://www.facebook.com/himbrasil"
              target="_blank"
              className="text-white text-xl"
            >
              <AiFillFacebook />
            </Link>

            <Link
              href="https://twitter.com/HIMBRASIL"
              target="_blank"
              className="text-white text-xl"
            >
              <AiFillTwitterSquare />
            </Link>
            <Link
              href="https://www.youtube.com/@HIMBRASIL"
              target="_blank"
              className="text-white text-xl"
            >
              <AiFillYoutube />
            </Link>
          </div>
          <p className="text-pink-600 text-center flex flex-col gap-1 justify-center items-center">
            <span className="text-xs">
              himbrasil.com.br / heartagram.com.br
            </span>
            <span className="text-xs">2003/2024</span>
          </p>
        </div>
      </div>
    </main>
  );
}
