// "use client";

// import { useEffect } from "react";

const getMatches = async () => {
  const response = await fetch(
    "http://api.football-data.org/v4/teams/67/matches/",
    {
      mode: "no-cors",
      headers: {
        "content-type": "application/json",
        "X-Auth-Token": "41159774f9884bb38d002ac08f5c3719",
      },
    }
  );
  const data = await response.json();
  console.log("data", data);
  return data.matches;
};
export default async function Home() {
  // useEffect(() => {
  const data = await getMatches();
  //   console.log("data1", data);
  // }, []);

  return (
    <section>
      <h1>Matches of Newcastle United FC</h1>
      <ul>
        {data &&
          data?.map((match: any) => (
            <li key={match.id}>
              Match ID: {match.id}
              Date: {new Date(match.utcDate).toLocaleString()}
              Status: {match.status}
            </li>
          ))}
      </ul>
    </section>
  );
}
