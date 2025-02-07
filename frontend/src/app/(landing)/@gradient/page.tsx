export default function Gradient() {
  return (
    <div className="absolute w-full h-screen flex flex-col items-center">
      <div className="w-3/4 lg:w-2/5 h-2/3 bg-gradient-to-b lg:bg-gradient-to-bl lg:self-end from-green-500/90 to-transparent rounded-2xl blur-3xl animate-pulseGradient"></div>
      <div className="w-0 h-0 lg:w-2/5 lg:h-2/3 bg-gradient-to-b lg:bg-gradient-to-bl lg:self-start from-green-500/90 to-transparent rounded-2xl blur-3xl animate-pulseGradient"></div>
    </div>
  );
}
