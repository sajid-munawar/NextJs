"use client";

import useSWR from "swr";

const url = "/api/matches";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function MatchesClient() {
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data.matches);
  return (
    <div>
      {data &&
        data.matches?.map((match: any) => (
          <ul key={match.id}>
            <li className="text-xl font-bold">Match ID: {match.id}</li>
            <li> Home Team: {match.homeTeam.name}</li>
            <li> Away Team: {match.awayTeam.name}</li>
            <li> Date: {new Date(match.utcDate).toLocaleString()}</li>
            <li> Status: {match.status}</li>
          </ul>
        ))}
    </div>
  );
}
