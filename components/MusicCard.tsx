import { PropsRequest } from "../sections/GetStarted.tsx";
import Image from "deco-sites/std/components/Image.tsx";

export default function MusicCard(
  { artistName, trackName, previewUrl, artworkUrl100 }: PropsRequest,
) {
  return (
    <div class="bg-gray-900 shadow-lg rounded p-3 lg:flex-2 flex-col lg:w-96">
      <div class="group relative">
        <Image
          class="w-full block rounded"
          src={artworkUrl100}
          alt="Track Image"
          width={512}
          height={512}
        />
        <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
          <button class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
            <audio controls className='w-40'>
              <source
                src={previewUrl}
              />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </button>
        </div>
      </div>
      <div class="p-5">
        <h3 class="text-white text-lg">{trackName}</h3>
        <p class="text-gray-400">{artistName}</p>
      </div>
    </div>
  );
}
