import { Grid, Link, styled } from "@mui/material";

export const Paper = styled(Grid)({
  backgroundColor: "#484f4faa",
  height: "40px",
  position: "relative",
});

export const GridContainer = styled(Grid)({
  maxWidth: 325,
  margin: "auto",
  minHeight: "40px",
  position: "sticky",
});

export const CustomLink = styled(Link)({
  color: "white",
  fontFamily: "Gill Sans",
});
