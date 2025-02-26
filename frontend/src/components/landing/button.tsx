interface ButtonPrimaryProps {
  href?: string;
  children: React.ReactNode;
}

export default function ButtonPrimary({ href, children }: ButtonPrimaryProps) {
  return (
    <a href={href || '#'}>
      <div><button className="group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Rjlj9ukq:" data-state="closed"><span className="absolute inset-0 overflow-hidden rounded-full"><span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span></span><div className="relative z-10 rounded-full bg-black px-4 py-1.5 ring-1 ring-green-600/40">{children}</div><span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span></button></div>
    </a>
  )
}