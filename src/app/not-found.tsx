import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-2xl text-white mb-4">Page Not Found</h2>
        <p className="text-slate-400 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-violet-600 hover:to-fuchsia-600 transition-all inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
