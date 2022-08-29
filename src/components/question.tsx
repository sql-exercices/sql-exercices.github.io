import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ResultsTable } from "./results";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

var equal = require("fast-deep-equal/es6/react");

export default ({ name, db, question, answer }) => {
  const [request, setRequest] = useState("");
  const [result, setResult] = useState<null | any[]>(null);
  const [expected, setExpected] = useState<null | any[]>(null);
  const [verdict, setVerdict] = useState(<pre></pre>);

  return (
    <Box mb={8}>
      {question}
      <Grid mt={1} spacing={2} container alignItems="center">
        <Grid item md={8}>
          <TextField
            key={name + question}
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
                  equal(r[0].values, expected[0].values) ? (
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

      <Grid container spacing={6} direction="row">
        {result && (
          <Grid item md={5} xs={12}>
            <Typography align="center">
              Résultat de votre requête <br></br>
              {result.map(({ columns, values }) => (
                <ResultsTable columns={columns} values={values} />
              ))}
            </Typography>
          </Grid>
        )}
        {expected && (
          <Grid item md={5} xs={12}>
            <Typography align="center">
              Résultat attendu <br></br>
              {expected.map(({ columns, values }) => (
                <ResultsTable columns={columns} values={values} />
              ))}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
