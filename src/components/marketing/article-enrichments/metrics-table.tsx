import { Table, TableCard } from "@/components/application/table/table";
import { Badge } from "@/components/base/badges/badges";

export interface MetricsTableRow {
    /** Geo/market code, e.g. "US". */
    geo: string;
    /** Unfloored eCPM, formatted, e.g. "$4.10". */
    unflooredEcpm: string;
    /** Floored eCPM, formatted, e.g. "$5.82". */
    flooredEcpm: string;
    /** Lift badge value, e.g. "+42%". */
    lift: string;
}

const defaultRows: MetricsTableRow[] = [
    { geo: "US", unflooredEcpm: "$4.10", flooredEcpm: "$5.82", lift: "+42%" },
    { geo: "UK", unflooredEcpm: "$3.20", flooredEcpm: "$4.05", lift: "+27%" },
    { geo: "DE", unflooredEcpm: "$2.90", flooredEcpm: "$3.55", lift: "+22%" },
    { geo: "JP", unflooredEcpm: "$3.80", flooredEcpm: "$4.60", lift: "+21%" },
];

/** A data table comparing Nimbus floored vs. unfloored eCPM across key geos. */
export const MetricsTable = ({
    rows = defaultRows,
    title = "Floored vs. unfloored eCPM by geo",
    description = "Impact of applying price floors on eCPM across key markets.",
}: {
    rows?: MetricsTableRow[];
    title?: string;
    description?: string;
}) => (
    <div className="my-10">
        <TableCard.Root>
            <TableCard.Header title={title} description={description} />

            <Table aria-label="Floored vs. unfloored eCPM by geo">
                <Table.Header>
                    <Table.Head isRowHeader label="Geo" />
                    <Table.Head label="Unfloored eCPM" />
                    <Table.Head label="Floored eCPM" />
                    <Table.Head label="Lift" />
                </Table.Header>

                <Table.Body>
                    {rows.map((row) => (
                        <Table.Row key={row.geo}>
                            <Table.Cell className="text-md font-medium text-primary">{row.geo}</Table.Cell>
                            <Table.Cell className="text-md">{row.unflooredEcpm}</Table.Cell>
                            <Table.Cell className="text-md font-medium text-primary">{row.flooredEcpm}</Table.Cell>
                            <Table.Cell>
                                <Badge color="success" size="md" type="pill-color">
                                    {row.lift}
                                </Badge>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </TableCard.Root>
    </div>
);
