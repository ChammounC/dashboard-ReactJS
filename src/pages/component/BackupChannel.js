import { Box,MenuItem,Button,Typography,FormControl,InputLabel,Select } from "@mui/material";
import { useState } from "react";
import TrashLogo from '../../assets/images/trash.svg';

const BackupChannel=({onDelete,channelKey,setBackup})=>{


    const [primaryChannel, setPrimaryChannel] = useState("");
    const [refChannel, setRefChannel] = useState("null");

     const handlePrimaryChange = (event) => {
       setPrimaryChannel(event.target.value);
       setBackup(event.target.value.toUpperCase(),'primary');
      };
      const handleRefChange = (event) => {
        setRefChannel(event.target.value);
        setBackup(event.target.value.toUpperCase(), "reference");
     };

     const deleteBackupChannelHandler=()=>{
        onDelete(channelKey);
     }


    return (
      <Box
        sx={{
          width: "100%",
          height: "80px",
          backgroundColor: "#F6F6F6",
          borderRadius: " 0px 0px 5px 5px",
          alignItems: "center",
          pl: "56px",
          mt: "20px",
          display: "flex",
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "23px",
            flex: "1.1",
            color: "#0F0F0F",
          }}
        ></Typography>

        <Box sx={{ minWidth: "270px", maxWidth: "270px", flex: "4", mr: "8%" }}>
          <FormControl fullWidth>
            <InputLabel
              id="select-label"
              sx={{
                color: primaryChannel !== "" ? "transparent" : "#959595",
                "&.Mui-focused .MuiInputLabel-formControl": {
                  color: "#0f0",
                },
              }}
            >
              Select Channel
            </InputLabel>

            <Select
              labelId="select-label-backup"
              id="simple-select-backup"
              value={primaryChannel}
              onChange={handlePrimaryChange}
              sx={{
                backgroundColor: "#fff",
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(228, 219, 233, 0.25)",
                },
              }}
            >
              <MenuItem value="c3">C3</MenuItem>
              <MenuItem value="a2">A2</MenuItem>
              <MenuItem value="emg">EMG</MenuItem>
              <MenuItem value="vds">VDS</MenuItem>
              <MenuItem value="b6">B6</MenuItem>
              <MenuItem value="y88">Y88</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: "270px", maxWidth: "270px", flex: "4" }}>
          <FormControl fullWidth>
            <InputLabel
              id="select-label"
              sx={{
                color: refChannel !== "" ? "transparent" : "#959595",
                "&.Mui-focused .MuiInputLabel-formControl": {
                  color: "#0f0",
                },
              }}
            >
              Select Channel
            </InputLabel>

            <Select
              labelId="select-label"
              id="simple-select"
              value={refChannel}
              onChange={handleRefChange}
              sx={{
                backgroundColor: "#fff",
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(228, 219, 233, 0.25)",
                },
              }}
            >
              <MenuItem value="null">NULL</MenuItem>
              <MenuItem value="c3">C3</MenuItem>
              <MenuItem value="a2">A2</MenuItem>
              <MenuItem value="emg">EMG</MenuItem>
              <MenuItem value="vds">VDS</MenuItem>
              <MenuItem value="b6">B6</MenuItem>
              <MenuItem value="y88">Y88</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ ml: "8%", justifyContent: "center", flex: "2" }}>
          <Button
            disableFocusRipple
            disableTouchRipple
            onClick={deleteBackupChannelHandler}
            disableRipple
            sx={{ textTransform: "capitalize" }}
          >
            <img src={TrashLogo} alt="delete" />
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "23px",
                textAlign: "center",
                color: "#E03A3A",
                ml: "8px",
              }}
            >
              Delete
            </Typography>
          </Button>
        </Box>
      </Box>
    );
}

export default BackupChannel;