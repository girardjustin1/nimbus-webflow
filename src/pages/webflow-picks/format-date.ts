const MONTHS: Record<string, string> = {
    jan: "January",
    feb: "February",
    mar: "March",
    apr: "April",
    may: "May",
    jun: "June",
    jul: "July",
    aug: "August",
    sep: "September",
    oct: "October",
    nov: "November",
    dec: "December",
};

/**
 * Reduce a display date to a month + year stamp.
 * Webflow Picks posts are dated by month/year only (no day, no author), so
 * "20 Jan 2026" → "January 2026". Falls back to the input if it can't be parsed.
 */
export const toMonthYear = (input: string): string => {
    const tokens = input.trim().split(/\s+/);
    const year = tokens.find((t) => /^\d{4}$/.test(t)) ?? "";
    const monthKey = tokens.map((t) => t.toLowerCase().slice(0, 3)).find((t) => t in MONTHS);
    const month = monthKey ? MONTHS[monthKey] : "";
    return [month, year].filter(Boolean).join(" ") || input;
};
