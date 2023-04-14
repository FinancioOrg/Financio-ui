import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MenuItem } from "@mui/material";
import { GetAllCollections } from "../../../service/CollectionService";
import LinearProgress from '@mui/material/LinearProgress';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("");
  const [textFieldValue, setTextFieldValue] = React.useState("");
  const [collections, setCollections] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await GetAllCollections().then((response) => {
      setCollections(response);
    });
  };

  const handleClickOpen = () => {
    getData();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePublish = () => {
    props.handlePublish(selectedOption, textFieldValue);
    setOpen(false);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const handleClassifyClick = async () => {
    setLoading(true);
  
    const [response, textResponse] = await Promise.all([
      props.handleClassify(),
      props.handleSummarize()
    ]);
  
    const category = response.category;
    const categoryObject = collections.find(
      (option) => option.name === category
    );
    if (categoryObject && textResponse) {
      setSelectedOption(categoryObject.name);
      setTextFieldValue(textResponse.summary);
    }
    setLoading(false);
  };
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Continue
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Publish</DialogTitle>
        <DialogContent>
          <DialogContentText>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </DialogContentText>
          <Button
            autoFocus
            margin="dense"
            variant="outlined"
            onClick={handleClassifyClick}
            disabled={loading}
          >
            {loading ? "Loading..." : "Magic 🪄"}
          </Button>
          <br />
          <br />
          {loading ? <LinearProgress /> : ""}
          <TextField
            autoFocus
            margin="dense"
            id="standard-multiline-static"
            label="Description"
            type="email"
            fullWidth
            multiline
            rows={4}
            variant="standard"
            value={textFieldValue}
            onChange={handleTextFieldChange}
            disabled={loading}
          />
          <br />
          <TextField
            select
            autoFocus
            margin="dense"
            id="name"
            label="Collection"
            type="email"
            fullWidth
            variant="standard"
            value={selectedOption}
            onChange={handleOptionChange}
            disabled={loading}
          >
            {collections.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="error"
            onClick={handleClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={handlePublish}
            disabled={loading}
          >
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
