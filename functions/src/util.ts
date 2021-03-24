import { DateTime } from "luxon";

export function now() {
  return DateTime.now().setZone("Asia/Bangkok");
}

export function parseISO(iso: string) {
  return DateTime.fromISO(iso).setZone("Asia/Bangkok");
}
