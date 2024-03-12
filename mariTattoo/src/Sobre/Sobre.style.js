import { Box, Typography, CardMedia, styled } from "@mui/material";

export const SeparateCover = styled(Box)({
  height: "4px",
  width: "275px",
  backgroundColor: "#FF5757",
});

export const TitleArtista = styled(Typography)({
  marginTop: "12px",
  marginBottom: "12px",
  marginLeft: "15px",
  fontFamily: "Gill Sans",
  fontSize: "30px",
  fontWeight: "lighter",
});

export const FotoArt = styled(CardMedia)({
  marginLeft: "15px",
  width: "25%",
});

export const BioText = styled(Typography)({
  fontFamily: "Gill Sans",
  fontSize: "23px",
  fontWeight: "lighter",
  textAlign: "center",
  marginLeft: "120px",
  marginTop: "-150px",
});
