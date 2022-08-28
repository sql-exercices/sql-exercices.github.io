import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

/**
 * Renders a single value of the array returned by db.exec(...) as a table
 * @param {import("sql.js").QueryExecResult} props
 */
export function ResultsTable({ columns, values }) {
  return (
    <Paper elevation={3} sx={{ width: "80%" }}>
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((columnName, i) => (
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", fontSize: 16 }}
                  key={i}
                >
                  {columnName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {values.map((row, i) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                  {row.map((value, i) => {
                    return (
                      <TableCell align="center" key={i}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
