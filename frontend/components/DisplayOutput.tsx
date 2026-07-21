type DisplayOutputProps = {
  children: React.ReactNode;
};

export default function DisplayOutput({ children }: DisplayOutputProps) {
  return (
    <div
      className="
      bg-zinc-900
      text-white
      text-l
      border
      border-zinc-700
      rounded-xl
      p-5
      min-h-40
      min-w-1/2
      m-4
    "
    >
      <h2 className="text-lg font-semibold text-white mb-4">Output</h2>

      {children}
    </div>
  );
}
