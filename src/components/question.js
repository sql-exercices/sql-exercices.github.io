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
      <Grid mt={0} container spacing={4} direction="row" alignItems="center">
        <Grid item md={8} xs={8}>
          <TextField
            sx={{ width: "100%" }}
            multiline
            placeholder="Votre requête SQL"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />
        </Grid>
        <Grid item>
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
                    <pre>Il y a une erreur dans votre requête</pre>
                  )
                );
              } catch (err) {}
            }}
          >
            Valider
          </Button>
        </Grid>
      </Grid>

      {result && (
        <Grid container direction="row">
          <Grid item md={6} xs={12}>
            {result.map(({ columns, values }, i) => (
              <ResultsTable
                columns={columns}
                values={values}
                title="Résultat de votre requête"
              />
            ))}
          </Grid>
          <Grid item md={6} xs={12}>
            {expected.map(({ columns, values }, i) => (
              <ResultsTable
                columns={columns}
                values={values}
                title="Résultat attendu"
              />
            ))}
          </Grid>
        </Grid>
      )}
      <Grid item>{verdict}</Grid>
    </div>
  );
};
