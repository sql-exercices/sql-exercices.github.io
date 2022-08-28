import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ResultsTable } from "./results";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

var _ = require("lodash");

export default ({ db, question, answer }) => {
  const [request, setRequest] = useState("");
  const [result, setResult] = useState(null);
  const [expected, setExpected] = useState(null);
  const [verdict, setVerdict] = useState(<pre></pre>);

  return (
    <div>
      {question}
      <Grid mt={2} spacing={2} container alignItems="center">
        <Grid item md={8}>
          <TextField
            sx={{ width: "100%" }}
            multiline
            placeholder="Votre requête SQL"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />
        </Grid>
        <Grid item md={2}>
          <Button
            size="large"
            variant="contained"
            color="success"
            onClick={() => {
              try {
                let expected = db.exec(answer);
                let r = db.exec(request);
                setResult(r);
                setExpected(expected);
                setVerdict(
                  _.isEqual(r, expected) ? (
                    <pre>Correct</pre>
                  ) : (
                    <pre>Votre requête ne renvoie pas le bon résultat</pre>
                  )
                );
              } catch (err) {
                setVerdict(<pre>{(err || "").toString()}</pre>);
              }
            }}
          >
            Valider
          </Button>
        </Grid>
      </Grid>
      {verdict}

      {result && (
        <Grid container mt={5} direction="row">
          <Grid item md={6} xs={12}>
            <center>
              Résultat de votre requête
              {result.map(({ columns, values }, i) => (
                <ResultsTable columns={columns} values={values} />
              ))}
            </center>
          </Grid>
          <Grid item md={6} xs={12}>
            <center>
              Résultat attendu
              {expected.map(({ columns, values }, i) => (
                <ResultsTable columns={columns} values={values} />
              ))}
            </center>
          </Grid>
        </Grid>
      )}
    </div>
  );
};
