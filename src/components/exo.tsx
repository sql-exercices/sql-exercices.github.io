import React, { useState, useEffect } from "react";
import { Exo_interface } from "../exos/exos";
import Typography from "@mui/material/Typography";
import initSqlJs from "sql.js";
// @ts-ignore
import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";
import Question from "./question";
import Box from "@mui/material/Box";
import Pagination from '@mui/material/Pagination';
import { Grid } from "@mui/material";
import Divider from '@mui/material/Divider';

export default (exo: Exo_interface): JSX.Element => {
    const [page, setPage] = useState(1);
    const [db, setDb] = useState<any>(null);
    useEffect(() => {
        (async () => {
            const sqlPromise = initSqlJs({
                locateFile: () => sqlWasm,
            });
            const dataPromise = fetch(exo.db_url).then((res) => res.text());
            const [SQL, buf] = await Promise.all([sqlPromise, dataPromise]);
            const db = new SQL.Database();
            db.exec(buf);
            setDb(db);
        })();
    }, []);
    
    return (
        <div key={exo.name}>
            <Grid container justifyContent="center" alignItems="center">
                {exo.description && <Grid item sm={4} xs={12}>
                    <Box sx={{ borderLeft: 2.5, borderColor: "gray", padding: 2 }}>
                        {exo.description}
                    </Box>
                </Grid>
                }
                <Grid item sm={8} xs={12}>
                    {exo.diagram && <iframe width="100%" height="450" src={"https://dbdiagram.io/embed/" + exo.diagram} />}
                </Grid>
            </Grid>
            <Divider sx={{ m: 3 }} />
            <Grid container justifyContent="center" alignItems="center">
                <Pagination siblingCount={exo.questions.length} count={exo.questions.length} page={page} onChange={(_, v) => { setPage(v) }} />
            </Grid>
            {exo.questions.map((_, i) =>
                <div style={{ display: i + 1 === page ? "block" : "none" }}>
                    <Question
                        name={exo.name}
                        db={db}
                        question={exo.questions[i]}
                        answer={exo.answers[i]}
                    />
                </div>
            )}

        </div>
    );
};
