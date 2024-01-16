import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white w-screen max-w-[1440] mx-auto max-h-[1818] px-64 py-3 text-black">
      {/* Navbar */}
      <nav className="flex justify-between items-center">
        <Image width={100} height={30} alt="logo" src={"/hyggex.png"}></Image>
        <div className="flex justify-between items-center gap-12">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Flashcard</div>
          <div className="cursor-pointer">Contact</div>
          <div className="cursor-pointer">FAQ</div>
          <div className="cursor-pointer w-32 h-12 px-10 py-[13px] bg-gradient-to-b from-blue-950 to-blue-800 rounded-[32px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-lg font-medium font-['Inter']">
              Login
            </div>
          </div>
        </div>
      </nav>
      <div className="flex justify-start my-6 text-sm items-center gap-1 w-1/2">
        <Image width={20} height={20} alt="logo" src={"/home.png"}></Image>
        <Image width={20} height={20} alt="logo" src={"/arrow.png"}></Image>
        <div>Flashcard</div>
        <Image width={20} height={20} alt="logo" src={"/arrow.png"}></Image>
        <div>Mathmatics</div>
        <Image width={20} height={20} alt="logo" src={"/arrow.png"}></Image>
        <div className="font-semibold text-[#06286E]">
          Relation and Function
        </div>
      </div>
      {/* Heading */}
      <h1 className="font-semibold text-[#06286E] text-xl">
        Relations and Functions ( Mathmatics )
      </h1>
      {/* Study quiz and others  */}
      <div className="flex justify-center gap-10 text-base font-semibold mt-6 items-center">
        <div className="cursor-pointer text-[#06286E] py-3 border-b-2 border-[#06286E]">
          Study
        </div>
        <div className="cursor-pointer">Quiz</div>
        <div className="cursor-pointer">Test</div>
        <div className="cursor-pointer">Game</div>
        <div className="cursor-pointer">Other</div>
      </div>
      {/* Card */}
      <div className="w-[712px] h-[393.19px] mx-auto relative mt-5 bg-gradient-to-bl from-blue-900 via-blue-900 to-blue-600 rounded-[42.51px] flex items-center justify-center">
        <div className="absolute top-8 left-0 w-[712px] px-8 flex justify-between">
          <Image width={30} height={30} alt="logo" className="cursor-pointer" src={"/bulb.png"}></Image>
          <Image width={30} height={30} alt="logo" className="cursor-pointer" src={"/spaeker.png"}></Image>
        </div>
        <h1 className="text-white text-2xl font-semibold">
          9 + 6 + 7x - 2x - 3
        </h1>
      </div>
      {/* Card Scroll */}
      <div className="flex w-[620px] mt-6 justify-between items-center mx-auto">
        <Image width={20} height={20} alt="logo" className="cursor-pointer" src={"/reload.png"}></Image>
        <div className="flex justify-center gap-6 items-center">
          <Image width={40} height={40} alt="logo" className="cursor-pointer" src={"/back.png"}></Image>
          <h1>01/10</h1>
          <Image width={40} height={40} alt="logo" className="cursor-pointer" src={"/forward.png"}></Image>
        </div>
        <Image width={20} height={20} alt="logo" className="cursor-pointer" src={"/full.png"}></Image>
      </div>
      {/* Powered by hyggex */}
      <div className="flex justify-between items-center">
        <div className="flex items-start gap-2">
          <Image
            width={30}
            height={30}
            alt="logo"
            className="rounded-full w-[50px] h-[50px] p-2 border-gray-300 shadow-xl border"
            src={"/logo.png"}
          ></Image>
          <div>
            Published by
            <Image
              width={50}
              height={50}
              alt="logo"
              src={"/hyggex1.png"}
            ></Image>
          </div>
        </div>
        <div className="flex gap-2 cursor-pointer items-center text-[#06286E]">
          <Image width={40} height={40} alt="logo" src={"/plus.png"}></Image>
          <h1>Create Flashcard</h1>
        </div>
      </div>
      {/* FAQ heading */}
      <h1 className="text-3xl text-[#06286E] font-bold mt-16">FAQ</h1>
      {/* Questions */}
      <div className="w-[848px] h-[58px] px-6 py-[17px] rounded-xl mt-5 border border-blue-600 cursor-pointer justify-between items-center flex">
        <div className="text-zinc-800 text-base font-semibold font-['Inter'] leading-relaxed">
          Can education flashcards be used for all age groups?
        </div>
        <Image width={20} height={20} alt="logo" src={"/down.png"}></Image>
      </div>
      <div className="w-[848px] h-[58px] px-6 py-[17px] rounded-xl mt-5 border border-blue-600 cursor-pointer justify-between items-center flex">
        <div className="text-zinc-800 text-base font-semibold font-['Inter'] leading-relaxed">
        How do education flashcards work?
        </div>
        <Image width={20} height={20} alt="logo" src={"/down.png"}></Image>
      </div>
      <div className="w-[848px] h-[58px] px-6 py-[17px] rounded-xl mt-5 mb-96 border border-blue-600 cursor-pointer justify-between items-center flex">
        <div className="text-zinc-800 text-base font-semibold font-['Inter'] leading-relaxed">
          Can education flashcards be used for test preparation?
        </div>
        <Image width={20} height={20} alt="logo" src={"/down.png"}></Image>
      </div>
    </div>
  );
}