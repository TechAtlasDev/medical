import ButtonPrimary from "@/components/landing/button"
import ParticlesBackground from "@/components/landing/particles"

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-5 mt-32">
      <h2 className="text-center bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-5xl/[1.07] font-bold tracking-tight text-transparent md:text-7xl/[1.07]">A Smarter Way to Diagnose and Innovate in Healthcare</h2>
      <p className="text-center text-gray-400">Get instant medical insights, explore AI-driven diagnostics, and seamlessly connect with specialists—all in one platform.</p>
      <ButtonPrimary />
      <ParticlesBackground />
    </section>
  )
}