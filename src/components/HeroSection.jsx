const HeroSection = () => {
  return (
    <div className="max-w-full m-auto border-b-2 border-b-[#3a3f54aa]">
      <div className="w-full max-h-[800px] bg-gradient-to-br from-stone-200 via-stone-100 via-60% to-stone-200 flex flex-col items-center justify-center bg-white drop-shadow-xl lg:p-36 p-12 gap-12 max-w-full text-center">
        <div className="flex flex-col  xl:w-2/5 md:w-4/5 w-full  md:gap-12 gap-6">
          <h1 className="xl:text-7xl md:text-6xl text-4xl font-serif text-gray-950">
            WELCOME TO MY FAKE E-STORE WEBSITE
          </h1>
          <p className="lg:text-3xl md:text-2xl font-serif text-xl text-gray-900">
            Try it out! Start by adding products to the cart!
          </p>
        </div>
        <div className="bg-[#f3929cdd] text-gray-100 px-4 py-1 rounded-full animate-bounce inline-block text-3xl font-extrabold">
          &darr;
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
