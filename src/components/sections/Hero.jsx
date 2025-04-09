export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 bg-black text-white overflow-hidden group before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.06),transparent_80%)] before:pointer-events-nonebefore:opacity-0 hover:before:opacity-100 transition-opacity"
    >
      {/* Neon lights */}
      <div className="absolute top-4 lg:top-10 left-10 w-60 h-60 bg-pink-500 opacity-20 blur-3xl rounded-full mix-blend-screen z-0" />
      <div className="absolute bottom-10 lg:bottom-20 right-20 h-60 w-60 md:w-80 md:h-80 bg-blue-500 opacity-20 blur-[100px] rounded-full mix-blend-screen z-0" />
      <div className="hidden md:block absolute top-1/2 left-1/8 w-40 h-40 bg-purple-400 opacity-15 blur-2xl rounded-full mix-blend-screen z-0" />

      <div className="relative z-10 max-w-4xl mx-auto text-left space-y-6">
        <h1 className="text-5xl lg:text-7xl font-bold text-black flex gap-4 animate-neon">
          <span className="opacity-0 animate-fade-in-up [animation-delay:0.2s]">Hi,</span>
          <span className="opacity-0 animate-fade-in-up [animation-delay:0.6s]">I'm</span>
          <span className="opacity-0 animate-fade-in-up [animation-delay:1s]">
            Gastón
          </span>
        </h1>

        <p className="text-md lg:text-lg text-gray-300 max-w-md opacity-0 animate-fade-in-up tracking-wide [animation-delay:1.5s]">
          Frontend developer specialized in React/Next.js and Shopify. Experienced in A/B
          testing and performance optimization.
        </p>

        <a
          href="#my-work"
          className="inline-block px-6 py-3 rounded-xl bg-[#004d57] -white text-lg font-medium shadow-md transition hover:bg-[#056875] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black opacity-0 animate-fade-in-up [animation-delay:2s]"
        >
          View my work
        </a>
      </div>
    </section>
  );
}
