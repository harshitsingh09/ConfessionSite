import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import classes from "./Note.module.css";
import IconButton from "@mui/material/IconButton";
import { reportDbIn } from "../../firebaseConfig";
import { addDoc } from "firebase/firestore";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import "./noteStyles.css"

const StyledCard = styled(Card)`
  border: 1px solid black;
  box-shadow: 0.4rem 0.5em rgba(121, 121, 121, 0.65);
  maxwidth: 400;
`;
const Note = ({ note }) => {
  return (
    <StyledCard className={classes.Card}>
      <CardContent>
        <Typography className={classes.NameStyles}>
          {note.PseudoName}
        </Typography>
        <Typography className={classes.ConfessionStyles}>
          {note.confession}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "flex-end"}}>
        <div className="report" onClick={()=>{
          if(window.confirm("Are u dev?")){
            addDoc(reportDbIn, {confessionID:note.id})
          }else{
            console.log("Not Confirmed");
          };
        }}>
        <span style={{color:"red"}}>Report</span>
        <IconButton sx={{ color: red[400] }} aria-label="Report" size="small" >
          
          <ReportGmailerrorredIcon />
        </IconButton>
        </div>
      </CardActions>
    </StyledCard>
  );
};

export default Note;
