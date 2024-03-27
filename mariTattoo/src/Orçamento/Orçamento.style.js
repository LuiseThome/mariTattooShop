import {
  styled,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Card,
} from "@mui/material";

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

export const TypeNotice = styled(Typography)({
  fontFamily: "Gill Sans",
  fontWeight: "lighter",
  fontSize: "15px",
  textAlign: "center",
  color: "#FF5757",
  marginBottom: "20px",
  marginLeft: "33px",
});

export const SelBox = styled(Box)({
  minWidth: 120,
});

export const Control = styled(FormControl)({
  minWidth: 270,
  marginTop: "25px",
  marginLeft: "100px",
});

export const StyleLabel = styled(InputLabel)({
  fontFamily: "Gill Sans",
  fontWeight: "lighter",
  fontSize: "19px",
});

export const StyleType = styled(Typography)({
  fontFamily: "Gill Sans",
  fontWeight: "lighter",
  fontSize: "19px",
  marginTop: "25px",
  marginBottom: "25px",
  textAlign: "center",
});

export const StyleCard = styled(Card)({
  maxWidth: 450,
  marginLeft: 45,
  marginTop: 15,
  marginBottom: 25,
});
