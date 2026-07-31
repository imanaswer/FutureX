import Link from "next/link";

export default function NotFound() {
  return (
    <section className="dark-zone flex min-h-[70vh] items-center bg-ink pt-24">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <p className="font-mono text-[0.72rem] tracking-[0.22em] text-accent">
          SIGNAL LOST · 404
        </p>
        <h1 className="font-display mt-5 text-balance text-4xl font-extrabold tracking-[-0.02em] text-white md:text-6xl">
          This page drifted off the flight path.
        </h1>
        <p className="mt-5 text-lg text-sky-dim">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-accent btn-sweep px-8 py-3.5 font-bold text-ink transition hover:bg-accent-deep"
        >
          Return to mission control
        </Link>
      </div>
    </section>
  );
}
