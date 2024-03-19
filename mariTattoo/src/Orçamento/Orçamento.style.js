import { styled, Box, Typography, FormControl } from "@mui/material";

export const SeparateAbout = styled(Box)({
  height: "37px",
  width: "275px",
  backgroundColor: "#FF5757",
});

export const TypeOrca = styled(Typography)({
  fontFamily: "Gill Sans",
  fontWeight: "lighter",
  color: "whitesmoke",
  textAlign: "left",
  marginLeft: "24px",
  fontSize: "20px",
});

export const TypeTitle = styled(Typography)({
  marginTop: "25px",
  marginBottom: "20px",
  marginLeft: "33px",
  fontFamily: "Gill Sans",
  fontSize: "27px",
  fontWeight: "lighter",
});

export const SelBox = styled(Box)({
  minWidth: 120,
});

export const Control = styled(FormControl)({
  minWidth: 220,
  marginTop: "25px",
  marginLeft: "100px",
});
