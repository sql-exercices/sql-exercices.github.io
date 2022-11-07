import React, { useState, useEffect } from "react";
import { Exo_interface } from "../exos/exos";
import Typography from "@mui/material/Typography";
import initSqlJs from "sql.js";
// @ts-ignore
import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";
import Question from "./question";
import Box from "@mui/material/Box";

export default (exo: Exo_interface): JSX.Element => {
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
        <div>
            {exo.description && (
                <Box sx={{ borderLeft: 2.5, borderColor: "gray", padding: 2 }}>
                    {exo.description}
                </Box>
            )}
            {exo.diagram && (
                <Typography align="center">
                    <iframe
                        frameBorder="0"
                        width="70%"
                        height="400"
                        src={"https://dbdiagram.io/embed/" + exo.diagram}
                    >
                        {" "}
                    </iframe>
                </Typography>
            )}
            <ol>
                {exo.questions.map((q, i) => (
                    <li key={`${exo.name}_${i}`}>
                        <Question
                            db={db}
                            name={exo.name}
                            question={q}
                            answer={exo.answers[i]}
                        />
                    </li>
                ))}
            </ol>
        </div>
    );
};
