import React from "react";
import {
  Button,
  TextField,
  Grid,
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Badge as MaterialBadge,
  IconButton,
  withStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Accordion = withStyles({
  root: {
    marginTop: "10px",
    borderRadius: "50px",
    backgroundColor: "#f1f1f1",
    border: "none",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionDetails = withStyles((theme) => ({
  root: {
    border: "none",
    borderRadius: "0px",
    backgroundColor: "#f1f1f1",
  },
}))(MuiAccordionDetails);

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#f40000",
    right: 7,
    top: 7,
    borderRadius: "50%",
    padding: "0 4px",
    height: "7px",
    minWidth: "3px",
  },
}))(MaterialBadge);
const StyledTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px",
    },
  },
})(TextField);

const StyledIconButton = withStyles(() => ({
  root: {
    height: "40px",
    width: "40px",
    marginTop: "15px",
    marginRight: "20px",
    backgroundColor: "#f1f1f1",

    "&:hover": {
      backgroundColor: "#f1f1f1",
    },
  },
}))(IconButton);

function ContactForm() {
  return (
    <Grid container justifyContent="flex-end">
      <Grid item xs={12} sm={6}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <AccountCircleIcon fontSize="small" />
            Contact Us
          </AccordionSummary>
          <AccordionDetails>
            <form noValidate autoComplete="off">
              <StyledTextField
                label="Name"
                variant="outlined"
                fullWidth
                style={{ marginBottom: "1em" }}
              />
              <StyledTextField
                label="Email"
                variant="outlined"
                fullWidth
                style={{ marginBottom: "1em" }}
              />
              <StyledTextField
                label="Message"
                variant="outlined"
                multiline
                fullWidth
                style={{ marginBottom: "1em" }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="medium"
              >
                Submit
              </Button>
            </form>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <hr
        style={{
          height: "25%",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          margin: "27px 10px 0px 20px",
        }}
      />
      <StyledIconButton color="primary">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          variant="dot"
        >
          <NotificationsIcon style={{ fontSize: "20px", color: "#a1b2bf" }} />
        </StyledBadge>
      </StyledIconButton>
    </Grid>
  );
}

export default ContactForm;
