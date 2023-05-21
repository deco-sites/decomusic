export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between gap-8 justify-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <p className="hover:underline">Team 256: MeAjudaGPT</p>.
          Desenvolvido no Hackathon da Deco.cx.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <p className="mr-4 hover:underline md:mr-6 ">Desenvolvedores:</p>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alissontassi/" className="mr-4 hover:underline md:mr-6">GitHub: AlissonSeraphim</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/dijair-vieira-ribeiro-71368013b/" className="mr-4 hover:underline md:mr-6">GitHub: dijair12</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
