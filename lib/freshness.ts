import { hawaiiToday } from "./releases";

// A monitor's status line must never call itself current when it isn't (RN, Nov 27, 2026). Given the date of
// its last successful check and how often it is meant to run, this says "last check <date>" while that is
// on schedule, and "Paused · last successful check <date>" once a run is more than 8 days overdue.
// Update lastOk when a monitor runs again; pages rebuild every hour.
export function monitorStatus(label: string, lastOk: string, everyDays = 7, now = new Date()) {
  const days = (Date.parse(hawaiiToday(now)) - Date.parse(lastOk)) / 86_400_000;
  const when = new Date(lastOk + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
  return days > everyDays + 8
    ? `Paused · last successful check ${when}`
    : `${label} · last check ${when}`;
}

// The badge that goes with monitorStatus: "paused" when the run is overdue, else "live".
export function monitorKind(lastOk: string, everyDays = 7, now = new Date()): "live" | "paused" {
  return monitorStatus("", lastOk, everyDays, now).startsWith("Paused") ? "paused" : "live";
}
