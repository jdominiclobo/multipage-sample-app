import * as React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Select, MenuItem, InputLabel } from "@material-ui/core";
// import DesktopDatePicker from "@material-ui/core/lab/DesktopDatePicker";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function FormDialog(props) {
  const { classes } = props;

  const [deviceType, setDeviceType] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [date, setDate] = useState(new Date());
  const [address, setAddress] = useState("");
  const [devices, setDevices] = useState([]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setDeviceType(event.target.value);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const formData = {
      deviceType,
      serialNo,
      date,
      address,
    };
    // setDevices((devices) => {
    //   return [...devices, formData];
    // });
    console.log("selected device", formData);
    handleClose();
  };

  return (
    <div>
      <Button
        variant="outlined"
        // style={{ height: 40, paddingLeft: "20px", marginLeft: "7.5em" }}
        onClick={handleClickOpen}
      >
        Add Device
      </Button>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Device</DialogTitle>

          <DialogContent>
            <InputLabel id="demo-simple-select-standard-label">
              Select Device type
            </InputLabel>
            <Select
              autoFocus
              margin="dense"
              id="demo-simple-select-standard"
              value={deviceType}
              onChange={handleChange}
              label="Select Device type"
              variant="standard"
              style={{ width: "100%" }}
            >
              <MenuItem value="portable">Portable</MenuItem>
              <MenuItem value="inverter">Inverter</MenuItem>
              <MenuItem value="standby">Standby</MenuItem>
              <MenuItem value="induction">Induction</MenuItem>
            </Select>

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Serial No."
              type="email"
              fullWidth
              variant="standard"
              value={serialNo}
              onChange={(e) => setSerialNo(e.target.value)}
            />
            <br />
            <br />

            <TextField
              id="date"
              label="Date of purchase"
              type="date"
              // defaultValue={Date.now()}
              className={props.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setDate(e.target.value)}
            />
            <br />
            <br />
            <TextField
              id="outlined-multiline-static"
              label="Address"
              multiline
              rows={5}
              defaultValue=""
              onChange={(e) => setAddress(e.target.value)}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
export default FormDialog;
