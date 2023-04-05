// https://www.data.gouv.fr/fr/datasets/demandes-de-valeurs-foncieres/

import React, { useState, useEffect } from "react";
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
import { Grid, Link } from "@mui/material";

const drawerWidth = 240;

const cours = {
    "Requêtes sur une table": { url: "https://raw.githubusercontent.com/fortierq/cours/main/sql/cours/1_select/select.pdf", exos: ["Pays"] },
    "Plusieurs tables": { url: "https://raw.githubusercontent.com/fortierq/cours/main/sql/cours/2_join/join.pdf", exos: [] },
    "Fonctions d'agrégation": { url: "https://raw.githubusercontent.com/fortierq/cours/main/sql/cours/3_groupby/groupby.pdf", exos: [] },
}
const exercices_other = ["Pokémon", "Métro parisien", "Valeur foncière"];

export default function App(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [selectedExo, setSelectedExo] = React.useState("Pays");

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
            <ListItemButton disableRipple selected={selectedExo === e} onClick={(_) => setSelectedExo(e)}>
                Exercice : {e}
            </ListItemButton>
        </ListItem>
    }
        
    const drawer = (
        <div>
            <List>
                {Object.entries(cours).map(([name, { url, exos }]) => (
                    <div>
                        {title(name)}
                        <Link href={url} target="_blank" sx={{ textDecoration: "none", color: "inherit" }} >
                            <ListItemButton disableRipple> Cours </ListItemButton>
                        </Link>
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
                            href="https://github.com/cpge-exercices/sql"
                            direction="right"
                            size="60"
                        />
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 , display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Cours et exercices SQL
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
                    {selectedExo && exercises[selectedExo]}
                </Box>
            </Box>
        </div>
    );
}
