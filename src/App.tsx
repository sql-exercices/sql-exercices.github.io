import React from "react";
import "./styles.css";
import Exo from "./components/exo";
import { exos } from "./exos/exos";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import GithubCorner from "react-github-corner";
import { Grid } from "@mui/material";

const drawerWidth = 240;

const cours = {
    "Requêtes sur une table": { url: "1_select/select.pdf", exos: ["Pays", "Métro parisien"] },
    "Plusieurs tables": { url: "2_join/join.pdf", exos: [] },
    "Fonctions d'agrégation": { url: "3_groupby/groupby.pdf", exos: ["Pokémon"] },
    "Requêtes imbriquées": { url: "4_imbrique/imbrique.pdf", exos: ["Concours"] },
}
const exercices_other = ["Valeur foncière"];

export default function App(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [selectedExo, setSelectedExo] = React.useState(null);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container =
        window !== undefined ? () => window().document.body : undefined;

    const title = (t: string) => {
        return <ListItem key={t} >
            <ListItemText primary={
                <Grid container justifyContent="center" alignItems="center" sx={{ fontWeight: 'bold' }}>
                    <Typography style={{ fontWeight: "bold" }}>{t}</Typography>
                </Grid>
            } />
        </ListItem>
    }

    const exercise = (e: any) => {
        return <ListItem key={e} disablePadding>
            <ListItemButton disableRipple selected={selectedExo === e} onClick={(_) => {setSelectedExo(e); setMobileOpen(false)}}>
                Exercice : {e}
            </ListItemButton>
        </ListItem>
    }

    const drawer = (
        <div>
            <List>
                {Object.entries(cours).map(([name, { url, exos }]) => (
                    <div>
                        {name ? title(name) : "Apprendre SQL en CPGE"}
                        <ListItem key={name} disablePadding>
                            <ListItemButton disableRipple selected={selectedExo === name} onClick={(_) => {setSelectedExo(name); setMobileOpen(false)}}>
                                Cours
                            </ListItemButton>
                        </ListItem>
                        {exos.map(exercise)}
                        <Divider sx={{ border: 1 }} />
                    </div>
                ))}
                {title("Exercices généraux")}
                {exercices_other.map(exercise)}
            </List>
        </div>
    );
    
    const exercises = {};
    Object.values(exos).forEach((e) => exercises[e.name] = <Exo key={e.name} {...e} />);

    return (
        <div>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        height: 60,
                    }}
                >
                    <Toolbar>
                        <GithubCorner
                            href="https://apprendre-sql.github.io"
                            direction="right"
                            size="60"
                        />
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            {selectedExo ? selectedExo : "Apprendre SQL en CPGE"}
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: "block", sm: "none" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: "none", sm: "block" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                                border: 1.5,
                            },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                    }}
                >
                    <Toolbar />
                    {selectedExo in exercises && exercises[selectedExo]}
                    {selectedExo in cours && <iframe src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=https://raw.githubusercontent.com/fortierq/cours/main/sql/cours/${cours[selectedExo].url}#zoom=page-fit&pagemode=none`} width="100%" height="800" />}
                    {!selectedExo && <div>
                        {/* <img src="./xkcd.png" width="100%" /> */}
                        Ce site propose des cours et exercices interactifs pour apprendre SQL.
                        <br />
                        Il est conforme au programme de CPGE (filières MP2I, MP, PC, PSI, PT, BCPST).
                        <br /><br />
                        <a href="https://fortierq.github.io/teaching>">Voir mes autres cours</a>.
                    </div>}
                </Box>
            </Box>
        </div>
    );
}
