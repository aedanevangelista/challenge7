import header from "./assets/images/image-header-desktop.jpg";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#0a0c1b] flex justify-center items-center">
        <main className="w-[68rem] flex flex-row bg-[#1c1938] rounded-lg">
          <div className=" flex flex-col">
            <article className=" my-16 ml-16 mr-18  ">
              <h1 className="font-bold text-[2.5rem] leading-[3rem] text-white">
                Get <span className="text-[#a460d1]">insights</span> that help
                your business grow.
              </h1>
              <p className="text-gray-400/90 my-8 w-10/12">
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </p>
              <div className="flex flex-row justify-between mt-16 w-10/12">
                <article>
                  <h1 className="text-2xl font-bold text-white">10k+</h1>
                  <span className=" font-semibold text-gray-400/90">
                    COMPANIES
                  </span>
                </article>
                <article>
                  <h1 className="text-2xl font-bold text-white">314</h1>
                  <span className=" font-semibold text-gray-400/90">
                    TEMPLATES
                  </span>
                </article>
                <article>
                  <h1 className="text-2xl font-bold text-white">12M+</h1>
                  <span className=" font-semibold text-gray-400/90">
                    QUERIES
                  </span>
                </article>
              </div>
            </article>
          </div>
          <div className="w-fit bg-purple-900 rounded-lg ml-16">
            <img
              src={header}
              className=" rounded-tr-lg w-[200rem] rounded-br-lg h-full opacity-40"
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
