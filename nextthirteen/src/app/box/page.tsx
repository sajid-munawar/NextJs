
export default function Page() {
    let myCss='shadow-xl h-10 py-5 w-20 ring text-center '
    return (
      <div>
                <div className={myCss}>SRK</div>

              <div className='mt-20 mb-10 bg-yellow-50'>
                <div>This is a first line</div>
                <button className='bg-yellow-500 px-40 py-10 m-4 text-red-400 text-xs'>Button</button>
                <div>This is a last line</div>
                <div className={myCss +"bg-red-500"}>
                    2nd code
                </div>
              </div>
              <div>
                <div>
                  Margins, Paddings, and Borders
                </div>
                <div className="mt-20 mb-10">
                  <button className="p-10 border border-black">One</button>
                  <button className="m-10 border border-black">Two</button>
                  <button className="m-2 p-2 border-4 border-black">Three</button>
                </div>
                <div>
                  <button className="m-4 p-4 border-2 border-black rounded-md">
                  Four
                  </button>
                  <button className="m-4 p-4 border-2 border-black rounded-2xl">
                  Five
                  </button>
                  <button className="m-4 p-4 border-2 border-black rounded-full">
                  Six
                  </button>
              </div>
            </div>
        </div>
    )
  }