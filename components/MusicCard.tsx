import { PropsRequest } from "../sections/GetStarted.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import { PlaylistFavorite } from "./SidebarPlaylist.tsx";
import { h, FunctionalComponent } from 'preact';

interface PropsPropsRequest extends PropsRequest {
  setIsNavbarHidden: () => void
}

export const MusicCard: FunctionalComponent<PropsPropsRequest> = (
  { artistName, trackName, previewUrl, artworkUrl100, setIsNavbarHidden }
) => {
  function toggleFavoriteSong(songName: string, songLink: string) {
    const storedPlaylist =
      JSON.parse(localStorage.getItem("Playlistfavorita") as string) || [];
    const existingSongIndex = storedPlaylist.findIndex((
      song: PlaylistFavorite,
    ) => song.name === songName);

    if (existingSongIndex !== -1) {
      storedPlaylist.splice(existingSongIndex, 1);
    } else {
      storedPlaylist.push({ name: songName, link: songLink });
    }

    localStorage.setItem("Playlistfavorita", JSON.stringify(storedPlaylist));
  }

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
            <audio controls className="w-40">
              <source
                src={previewUrl}
              />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </button>
        </div>
      </div>
      <div>
        <button
          class="mt-10 inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
          data-te-sidenav-toggle-ref
          data-te-target="#sidenav-3"
          aria-controls="#sidenav-3"
          aria-haspopup="true"
          onClick={() => {
            setIsNavbarHidden();
            toggleFavoriteSong(trackName, previewUrl);
          }}
        >
          <span class="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </span>
        </button>
      </div>
      <div class="p-5">
        <h3 class="text-white text-lg">{trackName}</h3>
        <p class="text-gray-400">{artistName}</p>
      </div>
    </div>
  );
}
