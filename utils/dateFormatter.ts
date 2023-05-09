import { parseISO, format } from "date-fns";

export default function dateFormatter(dateString: string) {
  const date: Date = parseISO(dateString);
  return format(date, "LLL d, yyyy");
}
