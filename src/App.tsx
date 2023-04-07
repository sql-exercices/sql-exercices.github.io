import React from "react";
import "./styles.css";
import Exo from "./components/exo";
import { cours } from "./exos/exos";

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
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const drawerWidth = 240;

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
                Exercice : {e.name}
            </ListItemButton>
        </ListItem>
    }

    const drawer = (
        <div>
            <List>
                {cours.map((c) => (
                    <div>
                        {title(c.name)}
                        <ListItem key={c.name} disablePadding>
                            <ListItemButton disableRipple selected={selectedExo === c} onClick={(_) => {setSelectedExo(c); setMobileOpen(false)}}>
                                Cours
                            </ListItemButton>
                        </ListItem>
                        {c.exos.map(exercise)}
                        <Divider sx={{ border: 1 }} />
                    </div>
                ))}
                {/* {title("Exercices généraux")}
                {exercices_other.map(exercise)} */}
            </List>
        </div>
    );
    
    let main = (<div>
        Ce site propose des cours et exercices interactifs pour apprendre SQL et comprendre le fonctionnement des bases de données.
        <br />
        Il est conforme au programme de CPGE (filières MP2I, MP, PC, PSI, PT, BCPST).
        <br />
        <b>Attention : dans vos réponses, les colonnes doivent apparaître dans le même ordre que dans la question.</b><br />
        <a href="https://github.com/sql-exercices/sql-exercices.github.io/issues">Signaler un problème</a><br />
        <a href="https://github.com/fortierq/datasets">Bases de données utilisées</a><br />
        <a href="https://fortierq.github.io/teaching>">Mes autres cours</a><br /><br />
        <Grid container justifyContent="center" alignItems="center">
        <img src="https://raw.githubusercontent.com/sql-exercices/sql-exercices.github.io/main/src/xkcd.png" width="600" />
        </Grid>
    </div>)
    if (selectedExo) {
        if ('url' in selectedExo)
            main = (<iframe src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=https://raw.githubusercontent.com/fortierq/cours/main/sql/cours/${selectedExo.url}#zoom=page-fit&pagemode=none`} width="100%" height="700" />)
        else
            main = (<Exo key={selectedExo.name} {...selectedExo} />)
    }
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
                            href="https://github.com/sql-exercices/sql-exercices.github.io"
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
                        <IconButton
                            disableRipple
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={(_) => {setSelectedExo(null)}}
                            sx={{ mr: 1 }}
                        >
                            <HomeIcon fontSize="large" />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            {/* {selectedExo ? selectedExo : "Cours de bases de données et exercices SQL"} */}
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
                    {main}
                </Box>
            </Box>
        </div>
    );
}
