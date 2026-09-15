import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="label text-volt">404</p>
      <h1 className="mt-6 display-lg">Ova stranica ne postoji.</h1>
      <p className="mt-6 max-w-[40ch] text-bone/60">Link je možda promijenjen. Vratite se na početnu stranicu.</p>
      <Link
        href="/"
        className="mt-10 inline-flex min-h-[3.25rem] items-center bg-volt px-7 text-[0.6875rem] font-semibold uppercase tracking-label text-black"
      >
        Na početnu
      </Link>
    </main>
  );
}
