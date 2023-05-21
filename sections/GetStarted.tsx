import Header from "../components/Header.tsx";
import MusicCard from "../components/MusicCard.tsx";
import Footer from "../components/Footer.tsx";
import { useEffect, useState } from "preact/hooks";

export interface PropsRequest {
  wrapperType?: string;
  kind?: string;
  artistId?: number;
  collectionId?: number;
  trackId?: number;
  artistName?: string;
  collectionName?: string;
  trackName?: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  artistViewUrl?: string;
  collectionViewUrl?: string;
  trackViewUrl?: string;
  previewUrl?: string;
  artworkUrl30?: string;
  artworkUrl60?: string;
  artworkUrl100: string;
  collectionPrice?: number;
  trackPrice?: number;
  releaseDate?: string;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  discCount?: number;
  discNumber?: number;
  trackCount?: number;
  trackNumber?: number;
  trackTimeMillis?: number;
  country?: string;
  currency?: string;
  primaryGenreName?: string;
  isStreamable?: boolean;
}

export default function GetStarted() {
  const [threeMusics, setThreeMusics] = useState<PropsRequest[]>([]);
  const [artistSearched, setArtistSearched] = useState("");

  const getMusics = async (id?: number) => {
    // const exampleid = 1603411913;
    // const exampleid = 1490544506;
    let request;
    if (!id) {
      const exampleId = 1674948960; //deco id artist
      request = await fetch(
        `https://itunes.apple.com/lookup?id=${exampleId}&entity=song`,
      );
    }
    if (id) {
      request = await fetch(
        `https://itunes.apple.com/lookup?id=${id}&entity=song`,
      );
    }
    const requestJson = await request?.json();
    const requestArray: PropsRequest[] = requestJson.results;

    const getFirstMusic = requestArray.filter((track) => {
      return track.wrapperType === "track";
    });

    if (getFirstMusic) {
      setThreeMusics((
        prevThreeMusics,
      ) => [...prevThreeMusics, ...getFirstMusic]);
    }
  };

  const searchAlbumsAPI = async (artist: string) => {
    setArtistSearched(artist);
    const artistNameURL = encodeURI(artist).replaceAll("%20", "+");

    const getAlbumsAPI =
      `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`;

    const APIResponse = await fetch(getAlbumsAPI);

    const { results } = await APIResponse.json();

    const getArtist: PropsRequest = results.find((eachAlbum: PropsRequest) =>
      artist.toLowerCase() === eachAlbum?.artistName?.toLowerCase()
    );

    if (getArtist) {
      const getArtistID = getArtist.artistId;
      setThreeMusics([]);
      getMusics(getArtistID);
    }
  };

  useEffect(() => {
    getMusics();
  }, []);

  return (
    <div>
      <Header
        searchAlbumAPI={searchAlbumsAPI}
      />
      <main class="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-green-500 p-5">
        <div>
          <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5 text-center">
            As Mais Tocadas do/a {artistSearched ? artistSearched : "Deco"}
          </h1>
          <section class="flex gap-4 flex-col flex-wrap lg:flex-row m-10">
            {threeMusics && (
              threeMusics.map((eachTrack, index) => {
                return (
                  <MusicCard
                    key={index}
                    artistName={eachTrack.artistName}
                    trackName={eachTrack.trackName}
                    previewUrl={eachTrack.previewUrl}
                    artworkUrl100={eachTrack.artworkUrl100}
                  />
                );
              })
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
