import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const drawerWidth = 200;

export default function Sidebar() {
  const theme = useTheme();

  const [open, setOpen] = React.useState({
    filters: true,
    topicals: true,
    imaging: true,
    music: true,
    soundDesign: true,
    voiceSamples: true,
    formatSpecials: true,
  });

  const handleClick = (which) => {
    console.log("open state before click", open);
    console.log("which value", which);

    /* setOpen({ ...open, ...{ filters: which } }); */
    setOpen({ ...open, [which]: !open[which] });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,

          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
        open={open.filters}
      >
        <List
          sx={{
            width: "100%",

            color: "white",
            maxWidth: 360,
            backgroundImage:
              "linear-gradient(#17082e 0,#1a0933 7%,#1a0933 80%,#0c1f4c 100%)",
          }}
          component="nav"
        >
          {/* FILTER SECTION */}
          <ListItemButton
            onClick={() => handleClick("filters")}
            sx={{
              backgroundColor: "white",
            }}
          >
            <ListItemText primary="FILTERS" sx={{ color: "black" }} />
            {open.filters ? (
              <ExpandLess sx={{ color: "black" }} />
            ) : (
              <ExpandMore sx={{ color: "black" }} />
            )}
          </ListItemButton>
          <Collapse in={open.filters} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="All Files" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="New This Week" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="New Since Last Visit" />
              </ListItemButton>
            </List>
          </Collapse>
          {/* END FILTER SECTION */}

          {/* imaging SECTION */}
          <ListItemButton
            onClick={() => handleClick("imaging")}
            sx={{
              backgroundColor: "white",
            }}
          >
            <ListItemText primary="IMAGING" sx={{ color: "black" }} />
            {open.imaging ? (
              <ExpandLess sx={{ color: "black" }} />
            ) : (
              <ExpandMore sx={{ color: "black" }} />
            )}
          </ListItemButton>
          <Collapse in={open.imaging} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Brandings" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Promos" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sweepers" />
              </ListItemButton>
            </List>
          </Collapse>
          {/* END imaging SECTION */}
          {/* music SECTION */}
          <ListItemButton
            onClick={() => handleClick("music")}
            sx={{
              backgroundColor: "white",
            }}
          >
            <ListItemText primary="MUSIC" sx={{ color: "black" }} />
            {open.music ? (
              <ExpandLess sx={{ color: "black" }} />
            ) : (
              <ExpandMore sx={{ color: "black" }} />
            )}
          </ListItemButton>
          <Collapse in={open.music} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Music Beds" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Loops" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Ramp Loops" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Music Hooks" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Stagers" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Instrumentals" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Acapellas" />
              </ListItemButton>
            </List>
          </Collapse>
          {/* END music SECTION */}

          {/* soundDesign SECTION */}
          <ListItemButton
            onClick={() => handleClick("soundDesign")}
            sx={{
              backgroundColor: "white",
            }}
          >
            <ListItemText primary="SOUND DESIGN" sx={{ color: "black" }} />
            {open.soundDesign ? (
              <ExpandLess sx={{ color: "black" }} />
            ) : (
              <ExpandMore sx={{ color: "black" }} />
            )}
          </ListItemButton>
          <Collapse in={open.soundDesign} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="FX" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="SFX" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Drones & Pads" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Scratches" />
              </ListItemButton>
            </List>
          </Collapse>
          {/* END soundDesign SECTION */}

          {/* voiceSamples SECTION */}
          <ListItemButton
            onClick={() => handleClick("voiceSamples")}
            sx={{
              backgroundColor: "white",
            }}
          >
            <ListItemText primary="VOICE SAMPLES" sx={{ color: "black" }} />
            {open.voiceSamples ? (
              <ExpandLess sx={{ color: "black" }} />
            ) : (
              <ExpandMore sx={{ color: "black" }} />
            )}
          </ListItemButton>
          <Collapse in={open.voiceSamples} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Artist Audio" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Samples & Drops" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Acapella Cuts" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Listeners" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Numbers & Letters" />
              </ListItemButton>
            </List>
          </Collapse>
          {/* END voiceSamples SECTION */}
        </List>
      </Drawer>
    </Box>
  );
}
