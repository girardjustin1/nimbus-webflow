import type { Meta, StoryObj } from "@storybook/react-vite";
import { buildMetricsTableEmbed, type ColumnType, type TableColumn } from "@/webflow-embeds/builders";
import { EmbedPlayground } from "@/webflow-embeds/embed-playground";

const TYPE_OPTIONS: ColumnType[] = ["auto", "text", "bold", "muted", "check", "pill-gray", "pill-brand", "pill-navy"];
const TYPE_LABELS: Record<ColumnType, string> = {
    auto: "Auto (+/− pill)",
    text: "Text",
    bold: "Bold",
    muted: "Muted",
    check: "Check / cross",
    "pill-gray": "Pill · gray",
    "pill-brand": "Pill · brand",
    "pill-navy": "Pill · navy",
};
const typeControl = (label: string) => ({ name: label, control: { type: "select" as const, labels: TYPE_LABELS }, options: TYPE_OPTIONS });
const cells = (s: string) => s.split(",").map((x) => x.trim());

interface Args {
    title: string;
    description: string;
    colCount: number;
    rowCount: number;
    col1Name: string;
    col2Name: string;
    col2Type: ColumnType;
    col3Name: string;
    col3Type: ColumnType;
    col4Name: string;
    col4Type: ColumnType;
    col5Name: string;
    col5Type: ColumnType;
    row1: string;
    row2: string;
    row3: string;
    row4: string;
    row5: string;
    row6: string;
    row7: string;
    row8: string;
    row9: string;
    row10: string;
}

const rowHelp = "Cell values, comma-separated (one per column). First cell is the row label.";

const meta: Meta<Args> = {
    title: "Rich Text Editor/Embed Kit/Metrics & Charts/Metrics Table",
    parameters: { layout: "fullscreen" },
    decorators: [
        (Story) => (
            <div className="bg-primary px-4 py-10 md:px-8">
                <div className="mx-auto max-w-200">
                    <Story />
                </div>
            </div>
        ),
    ],
    argTypes: {
        title: { name: "Title" },
        description: { name: "Description (optional)" },
        colCount: { name: "Number of columns", control: "inline-radio", options: [2, 3, 4, 5] },
        rowCount: { name: "Number of rows", control: "select", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        col1Name: { name: "Col 1 · name (row label)" },
        col2Name: { name: "Col 2 · name" },
        col2Type: typeControl("Col 2 · type"),
        col3Name: { name: "Col 3 · name" },
        col3Type: typeControl("Col 3 · type"),
        col4Name: { name: "Col 4 · name" },
        col4Type: typeControl("Col 4 · type"),
        col5Name: { name: "Col 5 · name" },
        col5Type: typeControl("Col 5 · type"),
        row1: { name: "Row 1", description: rowHelp },
        row2: { name: "Row 2", description: rowHelp },
        row3: { name: "Row 3", description: rowHelp },
        row4: { name: "Row 4", description: rowHelp },
        row5: { name: "Row 5", description: rowHelp },
        row6: { name: "Row 6", description: rowHelp },
        row7: { name: "Row 7", description: rowHelp },
        row8: { name: "Row 8", description: rowHelp },
        row9: { name: "Row 9", description: rowHelp },
        row10: { name: "Row 10", description: rowHelp },
    },
};

export default meta;
type Story = StoryObj<Args>;

const guide = (
    <div className="flex flex-col gap-3 text-sm text-secondary">
        <p>
            Pick the column count, name each column, and choose its <b className="font-semibold text-primary">element type</b>. Each row field is the cell values,{" "}
            <b className="font-semibold text-primary">comma-separated</b> — the first cell is the row label (bold).
        </p>
        <ul className="flex flex-col gap-1.5">
            <li>
                <b className="font-semibold text-primary">Auto</b> — “+42%” → green pill, “−3%” → red pill, else plain text
            </li>
            <li>
                <b className="font-semibold text-primary">Text · Bold · Muted</b> — plain, emphasized, or de-emphasized text
            </li>
            <li>
                <b className="font-semibold text-primary">Check / cross</b> — “yes/true/✓” → green ✓, anything else → red ✗
            </li>
            <li>
                <b className="font-semibold text-primary">Pill · gray / brand / navy</b> — a colored pill of the cell text
            </li>
        </ul>
    </div>
);

const render = (args: Args) => {
    const allCols: TableColumn[] = [
        { name: args.col1Name },
        { name: args.col2Name, type: args.col2Type },
        { name: args.col3Name, type: args.col3Type },
        { name: args.col4Name, type: args.col4Type },
        { name: args.col5Name, type: args.col5Type },
    ];
    const columns = allCols.slice(0, args.colCount);
    const allRows = [args.row1, args.row2, args.row3, args.row4, args.row5, args.row6, args.row7, args.row8, args.row9, args.row10];
    const rows = allRows.slice(0, args.rowCount).map(cells);
    return <EmbedPlayground guide={guide} html={buildMetricsTableEmbed({ title: args.title, description: args.description || undefined, columns, rows })} />;
};

/** Editable table — column count + per-column type, and one comma-separated field per row. */
export const Embed: Story = {
    args: {
        title: "Floored vs. unfloored eCPM by geo",
        description: "Impact of applying price floors on eCPM across key markets.",
        colCount: 4,
        rowCount: 4,
        col1Name: "Geo",
        col2Name: "Unfloored eCPM",
        col2Type: "text",
        col3Name: "Floored eCPM",
        col3Type: "bold",
        col4Name: "Lift",
        col4Type: "auto",
        col5Name: "Notes",
        col5Type: "muted",
        row1: "US, $4.10, $5.82, +42%, —",
        row2: "UK, $3.20, $4.05, +27%, —",
        row3: "DE, $2.90, $3.55, +22%, —",
        row4: "JP, $3.80, $4.60, +21%, —",
        row5: "BR, $2.60, $3.10, +19%, —",
        row6: "FR, $2.90, $3.40, +17%, —",
        row7: "IN, $1.80, $2.20, +22%, —",
        row8: "MX, $2.40, $2.90, +21%, —",
        row9: "CA, $4.00, $4.90, +23%, —",
        row10: "AU, $3.60, $4.30, +19%, —",
    },
    render,
};

/** Comparison table — the "check / cross" column types in action. */
export const Comparison: Story = {
    args: {
        title: "Nimbus vs. a legacy stack",
        description: "Capability comparison at a glance.",
        colCount: 3,
        rowCount: 4,
        col1Name: "Capability",
        col2Name: "Nimbus",
        col2Type: "check",
        col3Name: "Legacy stack",
        col3Type: "check",
        col4Name: "",
        col4Type: "auto",
        col5Name: "",
        col5Type: "auto",
        row1: "Unified auction, yes, no",
        row2: "60+ demand partners, yes, no",
        row3: "No added SDK weight, yes, no",
        row4: "Transparent reporting, yes, no",
        row5: "Real-time bidding, yes, no",
        row6: "Advertiser-level reporting, yes, no",
        row7: "One contract and bill, yes, no",
        row8: "Zero-bias auction, yes, no",
        row9: "Backfill protection, yes, no",
        row10: "White-glove support, yes, no",
    },
    render,
};
