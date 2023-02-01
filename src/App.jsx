import "./App.css";
import quote from "/imgs/images/bg-pattern-quotation.svg"

function App() {
  return (
    <div className=" mx-auto font-barley lg:h-[100vh] p-6 lg:p-12 grid place-content-center container bg-slate-300">
      <div className="bg-slate-400 lg:p-10">
        <div className="grid gap-10 h-max  lg:grid-cols-4 lg:grid-rows-none ">
          <div className="p-10 bg-violet-500 rounded-3xl lg:col-span-2 flex justify-between flex-col relative">
            <img src={quote} alt="#" className="absolute right-6 lg:right-20 top-0 w-40 z-20"/>
            <div className="flex items-center">
              <img
                src="/imgs/images/image-daniel.jpg"
                className="rounded-[50%] border-solid border-[4px]"
                alt=""
              />
              <div className="ml-6">
                <p className=" text-white text-xl">Daniel Clifford</p>
                <p className="text-white opacity-50">Verified Graduate</p>
              </div>
            </div>
            <h1 className=" mt-5 font-semibold text-2xl relative z-30">
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny’s worth.
            </h1>
            <p className=" text-white opacity-70 mt-5">
              “ I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup. ”
            </p>
          </div>
          <div className="p-10 bg-slate-500 rounded-3xl flex justify-between flex-col">
            <div className="flex items-center">
              <img
                src="/imgs/images/image-jonathan.jpg"
                className="rounded-[50%] border-solid border-[4px]"
                alt=""
              />
              <div className="ml-6">
                <p className="text-white text-xl">Jonathan Walters</p>
                <p className="text-white opacity-50">Verified Graduate</p>
              </div>
            </div>
            <h1 className="mt-5 font-semibold text-2xl">
              The team was very supportive and kept me motivated
            </h1>
            <p className=" text-white opacity-70 mt-5">
              “ I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I’ve made in myself. ”
            </p>
          </div>
          <div className="p-10 bg-slate-500 rounded-3xl flex justify-between flex-col">
            <div className="flex items-center">
              <img
                src="/imgs/images/image-jeanette.jpg"
                className="rounded-[50%] border-solid border-[4px]"
                alt=""
              />
              <div className="ml-6">
                <p className="text-white text-xl">Jeanette Harmon</p>
                <p className="text-white opacity-50">Verified Graduate</p>
              </div>
            </div>
            <h1 className="mt-5 font-semibold text-2xl">
              An overall wonderful and rewarding experience
            </h1>
            <p className=" text-white opacity-70 mt-5">
              “ Thank you for the wonderful experience! I now have a job I
              really enjoy, and make a good living while doing something I love.
              ”
            </p>
          </div>
          <div className="p-10 bg-slate-500 rounded-3xl flex justify-between flex-col lg:col-span-2">
            <div className="flex items-center">
              <img
                src="/imgs/images/image-patrick.jpg"
                className="rounded-[50%] border-solid border-[4px]"
                alt=""
              />
              <div className="ml-6">
                <p className="text-xl text-white">Patrick Abrams</p>
                <p className="text-white opacity-50">Verified Graduate</p>
              </div>
            </div>
            <h1 className="mt-5 font-semibold text-2xl">
              Awesome teaching support from TAs who did the bootcamp themselves.
              Getting guidance from them and learning from their experiences was
              easy.
            </h1>
            <p className=" text-white opacity-70 mt-5">
              “ The staff seem genuinely concerned about my progress which I
              find really refreshing. The program gave me the confidence
              necessary to be able to go out in the world and present myself as
              a capable junior developer. The standard is above the rest. You
              will get the personal attention you need from an incredible
              community of smart and amazing people. ”
            </p>
          </div>
          <div className="p-10 bg-slate-500 rounded-3xl flex justify-between flex-col lg:col-start-4 lg:row-span-2 lg:row-start-1">
            <div className="flex items-center">
              <img
                src="/imgs/images/image-kira.jpg"
                className="rounded-[50%] border-solid border-[4px]"
                alt=""
              />
              <div className="ml-6">
                <p className="text-xl text-white">Kira Whittle</p>
                <p className="text-white opacity-50">Verified Graduate</p>
              </div>
            </div>
            <h1 className="mt-5 font-semibold text-2xl">
              Such a life-changing experience. Highly recommended!
            </h1>
            <p className=" text-white opacity-70 mt-5">
              “ Before joining the bootcamp, I’ve never written a line of code.
              I needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I’ve often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend! ”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
