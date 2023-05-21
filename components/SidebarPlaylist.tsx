import { useEffect, useState } from "preact/hooks";

export interface PlaylistFavorite {
  name: string;
  link: string;
}

export default function SidebarPlaylist(
  { isNavbarHidden }: { isNavbarHidden: boolean },
) {
  console.log("na sidebar", isNavbarHidden);
  const [playlistSongs, setPlaylistSongs] = useState<PlaylistFavorite[]>([]);

  function getFavoriteSongs() {
    const storedPlaylist = JSON.parse(
      localStorage.getItem("Playlistfavorita") as string,
    );
    let getPlaylist: PlaylistFavorite[] = [];

    if (storedPlaylist && Array.isArray(storedPlaylist)) {
      getPlaylist = storedPlaylist.map((song) => ({
        name: song.name,
        link: song.link,
      }));
    }

    if (getPlaylist.length > 0) {
      setPlaylistSongs(getPlaylist);
    }
  }

  useEffect(() => {
    getFavoriteSongs();
  }, []);

  return (
    <nav
      id="sidenav-3"
      class={`fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-zinc-800 shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] ${
        isNavbarHidden ? "hidden" : "translate-x-0"
      }`}
      data-te-sidenav-init
      data-te-sidenav-hidden={isNavbarHidden}
      data-te-sidenav-color="white"
    >
      <h1 class="text-xl font-bold text-gray-200 m-2 text-center">
        Seus favoritos
      </h1>
      <ul class="relative m-0 list-none px-[0.2rem]" data-te-sidenav-menu-ref>
        {playlistSongs.map(({ name, link }) => {
          return (
            <li class="relative">
              <a
                class="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-300 outline-none transition duration-300 ease-linear hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                data-te-sidenav-link-ref
              >
                <span class="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                    />
                  </svg>
                </span>
                <span>{name}</span>
                <button class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <audio controls className="w-40">
                    <source
                      src={link}
                    />
                    Seu navegador não suporta o elemento de áudio.
                  </audio>
                </button>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
