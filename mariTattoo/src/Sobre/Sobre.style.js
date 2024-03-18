import { Grid, Box, Typography, CardMedia, styled } from "@mui/material";

export const TopGrid = styled(Grid)({});

export const SeparateCover = styled(Box)({
  height: "37px",
  width: "275px",
  backgroundColor: "#FF5757",
});

export const TypeSection = styled(Typography)({
  fontFamily: "Gill Sans",
  fontWeight: "lighter",
  color: "whitesmoke",
  textAlign: "left",
  marginLeft: "24px",
  fontSize: "20px",
});

export const TitleArtista = styled(Typography)({
  marginTop: "20px",
  marginBottom: "20px",
  marginLeft: "33px",
  fontFamily: "Gill Sans",
  fontSize: "27px",
  fontWeight: "lighter",
});

export const FotoArt = styled(CardMedia)({
  marginLeft: "-200px",
  marginTop: "75px",
  alignSelf: "center",
  width: "25%",
});

export const BioText = styled(Typography)({
  fontFamily: "Gill Sans",
  fontSize: "23px",
  fontWeight: "lighter",
  marginTop: "90px",
  marginLeft: "10px",
});
