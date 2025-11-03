export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <main className="max-w-2xl">
        <h1 className="text-4xl font-medium tracking-tight">
          Raul Dronca
        </h1>
        <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          Design Engineer at{" "}
          <a
            href="https://www.coxautoinc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-600 underline-offset-4 hover:decoration-zinc-500 dark:hover:decoration-zinc-400 transition-colors"
          >
            Cox Automotive
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="https://codepen.io/rauldronca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            CodePen
          </a>
          <a
            href="https://dribbble.com/rauldronk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Dribbble
          </a>
          <a
            href="https://github.com/iRaul"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/raul-dronca-7434a3184/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://layers.to/iraul"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Layers
          </a>
          <a
            href="https://x.com/raul_dronca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            X
          </a>
        </div>
      </main>
    </div>
  );
}
