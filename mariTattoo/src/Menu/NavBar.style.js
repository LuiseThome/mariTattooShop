import { Grid, Link, ListItem, styled } from "@mui/material";

export const GridContainer = styled(Grid)({
  backgroundColor: "#484f4faa",
  width: "100%",
  minHeight: "40px",
  position: "fixed",
  justifyContent: "center",
});

export const CustomList = styled(ListItem)({
  width: "fit-content",
});

export const CustomLink = styled(Link)({
  color: "white",
  fontFamily: "Gill Sans",
  fontSize: "17px",
  fontWeight: "lighter",
});
