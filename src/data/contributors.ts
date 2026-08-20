export type Contributor = {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
};

const logins = [
  ['hypengw', 102276135, 654],
  ['burlone0', 108557545, 15],
  ['barrence01', 30810941, 9],
  ['wehrwolfmann', 256216494, 8],
  ['WorkingRobot', 16126912, 4],
  ['Arzumify', 109815155, 4],
  ['KaihWhite', 53894542, 4],
  ['15daksh-2003', 92374000, 2],
  ['Undead34', 90287831, 2],
  ['xExnderxMxanx', 52681400, 2],
  ['CatSema', 20588538, 1],
  ['OctaNebula', 68815420, 1],
  ['RedOrkGreenRox', 122482726, 1],
  ['ales-drnz', 82038599, 1],
  ['arenekosreal', 17194552, 1],
  ['KagurazakaIris', 104972236, 1],
] as const;

const fallback: Contributor[] = logins.map(([login, id, contributions]) => ({
  login,
  avatar_url: `https://avatars.githubusercontent.com/u/${id}?v=4`,
  html_url: `https://github.com/${login}`,
  contributions,
}));

let cached: Contributor[] | undefined;

export async function getContributors(): Promise<Contributor[]> {
  if (cached) return cached;

  try {
    const response = await fetch(
      'https://api.github.com/repos/waywallen/waywallen/contributors?per_page=100&anon=1',
      {
        headers: { Accept: 'application/vnd.github+json' },
        signal: AbortSignal.timeout(5000),
      },
    );
    if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);

    const data = (await response.json()) as Contributor[];
    cached = data.filter(
      (item) =>
        item.login &&
        item.avatar_url &&
        item.html_url &&
        item.contributions > 0,
    );
    if (cached.length) return cached;
  } catch {
    // A checked-in snapshot keeps local and rate-limited builds deterministic.
  }

  cached = fallback;
  return cached;
}
