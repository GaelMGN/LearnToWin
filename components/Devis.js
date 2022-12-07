function Devis() {
  return (
    <div className="flex h-full flex-col">
      <div className="w-full">
        <div className="m-16 max-w-[1000px] p-5 text-center shadow-2xl shadow-black ring-1 ring-black sm:mx-auto">
          <h1 className="text-shadow-lt text-5xl text-[#437A73]">
            Demande de devis
          </h1>
          <p className="mt-3 text-sm italic text-white">
            En remplissant ce formulaire, nous rentrerons en contact avec toi
            afin d'en savoir plus sur ta demande
          </p>
        </div>
      </div>
      <section className="relative flex h-[500px] flex-col items-center justify-center py-0 px-3 text-center text-white">
        <div className="video-docker absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
          <video
            className="absolute min-h-full min-w-full object-cover"
            src="/videoFooter.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="video-content z-10">
          <div className="mt-5 flex flex-col items-center justify-center md:m-5">
            <h1 className="mb-5 text-3xl font-bold tracking-wider text-white ">
              Rejoindre la communauté
            </h1>
            <p className="mb-6">Abonnez vous à notre newsgames</p>
            <form>
              <label htmlFor="email-adress" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                required
                placeholder="Enter your email"
                className="w-full appearance-none rounded-full border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 opacity-50 shadow-sm focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-indigo-500"
              />
              <button className="mt-3 flex w-full items-center justify-center rounded-full bg-[#222324] py-4 px-20 text-base font-medium text-white">
                JE REJOINS LA TEAM
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="mt-auto bg-[#222324] text-[#437A73]">
        <div className="mx-auto grid max-w-xl  p-4 md:py-10 lg:max-w-7xl lg:grid-cols-2">
          <div className="m-3 flex flex-col justify-center md:m-5">
            <h5 className="mb-3 text-lg text-white sm:text-xl">Learn To Win</h5>
            <p>Made with love in Paris, France</p>
          </div>
          <div className="m-3 md:m-5">
            <h5 className="mb-3 text-lg text-gray-100 sm:text-xl">
              Plus d'informations
            </h5>
            <ul>
              <li className="text-md my-2  sm:text-lg">Accueil</li>
              <li className="text-md my-2  sm:text-lg">Découvrir les jeux</li>
              <li className="text-md my-2  sm:text-lg">Actualités E-sport</li>
              <li className="text-md my-2  sm:text-lg">Se connecter</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-4 flex w-full items-center justify-between border-t border-gray-200 bg-[#437A73] p-6 md:mt-8 md:flex-row md:justify-between md:py-5">
          <ul className="flex space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <img
                className="h-6 w-6"
                src="/twitter-sign.svg"
                alt="twitter icon"
              />
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-500">
              <img
                className="h-6 w-6"
                src="/facebook.svg"
                alt="facebook icon"
              />
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-500">
              <img
                className="h-6 w-6"
                src="/instagram.svg"
                alt="instagram icon"
              />
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-500">
              <img className="h-6 w-6" src="/tiktok.svg" alt="tiktok icon" />
            </a>
          </ul>
          <p className="mt-4 text-base text-gray-400 md:order-1 md:mt-0">
            &copy; LearnToWin All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Devis;
