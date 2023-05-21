import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";

export interface Props {
  searchAlbumAPI: (args: string) => void;
}

export default function Header({ searchAlbumAPI }: Props) {
  const [inputSearch, setInputSearch] = useState("");

  const handleInputChange = (event: Event) => {
    const inputValue = event.target as HTMLInputElement;
    setInputSearch(inputValue.value);
  };

  const handleKeyPress = (
    event: KeyboardEvent,
  ) => {
    if (event.key === "Enter") {
      searchAlbumAPI(inputSearch);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-2xl h-40 gap-10 bg-gradient-to-t from-blue-200 to-green-800">
      <div className="flex items-center justify-center">
        <a className="btn btn-ghost hidden normal-case text-xl lg:flex md:flex md:bg-white md:hover:bg-green-400 animate-pulse">
          Deco Music
        </a>
      </div>
      <div className="flex w-auto m-auto items-center justify-center md:w-96">
        <input
          type="text"
          placeholder="Busque seu Artista Favorito"
          className="input input-bordered w-full"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => searchAlbumAPI(inputSearch)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-72 h-14 rounded-full">
              <Image
                class="object-cover"
                src="https://avatars.githubusercontent.com/u/104853950?s=200&v=4"
                alt=""
                width={812}
                height={512}
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Perfil
                <span className="badge">Breve</span>
              </a>
            </li>
            <li>
              <a>
                Configurações
                <span className="badge">Breve</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
