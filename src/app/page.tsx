import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 md:p-24 bg-dark text-gray-200 font-rubik">
      <div className="flex items-start flex-col">
        <h3 className="uppercase">Hello There 👋</h3>
        <h1 className="text-6xl font-bold md:text-9xl">
          I&rsquo;m <strong className="text-main">Sarah</strong>
        </h1>
        <p className="text-sm md:text-lg leading-relaxed">
          I teach the{" "}
          <strong className="text-main"> Ten Quran Recitations </strong>to
          Non-Arabic speaking Muslims from all over the world.
        </p>
      </div>

      <div className="w-1/2 h-0.5 bg-white my-10" />

      <div className="text-right">
        <h3 className="uppercase text-2xl">الســـــلام عليــــكم</h3>
        <h1 className="text-6xl font-bold md:text-9xl mt-2">
          انــا <strong className="text-main">ســــارة</strong>
        </h1>
        <p className="text-sm md:text-lg flex flex-row-reverse flex-wrap mt-4">
          <span className="inline-block ml-0.5">أعلم</span>
          <strong className="text-main ml-0.5">
            التجويد والقراءات العشر للقران الكريم
          </strong>
          للمسلمين غير الناطقين بالغة العربية من جميع انحاء العالم
        </p>
      </div>
    </main>
  );
}
