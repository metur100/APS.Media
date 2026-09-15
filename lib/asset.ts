const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** Prefiksira statičke fajlove basePath-om (potrebno za GitHub Pages poddirektorij). */
export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
