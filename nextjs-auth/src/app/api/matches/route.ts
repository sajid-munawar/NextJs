import { NextRequest, NextResponse } from "next/server";
const apiURL = "http://api.football-data.org/v4/teams/67/matches/";
const authToken = "41159774f9884bb38d002ac08f5c3719"; // Replace with your actual authentication token

export async function GET() {
  try {
    const response = await fetch(apiURL, {
      headers: {
        "X-Auth-Token": authToken,
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
