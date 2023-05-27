import {
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import BackupChannel from "./BackupChannel";
import { ChannelContext } from "../../context/ChannelContext";

// {
//       channel: {
//         name: "",
//         primary: "",
//         reference: "",
//         backup: [
//           {
//             bPrimary: "",
//             bReference: "NULL",
//           },
//         ],
//       },
//     },

const ChannelComponent = ({ channel }) => {
  const { channelData, setChannelData } = useContext(ChannelContext);

  const [primaryChannel, setPrimaryChannel] = useState("");
  const [refChannel, setRefChannel] = useState("");
  const [backupChannel, setBackupChannel] = useState([]);
  const [backupChannelNotZero, setBackupChannelNotZero] = useState(false);
  const [showBackupChannels, setShowBackupChannels] = useState(false);
  const [deleteBackup, setDeleteBackup] = useState(false);
  const [deleteChannelKey, setDeleteChannelKey] = useState("");

  const handlePrimaryChange = (event) => {
    setPrimaryChannel(event.target.value);

    //Login for storing Primary Channel into ChannelContext
    setChannelData((prevState) => {
      if (prevState.length !== 0) {
        let matchedIndex; // for indexing value of i as .map() returns an array
        const i = prevState.map((c) => {
          let index;
          if (c.channel.name === channel) {
            index = prevState.findIndex((contextChannel) => {
              return contextChannel.channel.name === channel;
            });
            matchedIndex = index;
          }
          return index;
        });

        // if match found
        if (matchedIndex !== undefined) {
          if (i[matchedIndex] !== undefined) {
            prevState[i[matchedIndex]].channel.primary =
              event.target.value.toUpperCase();
            return prevState;
          }
        } else {
          return prevState.concat({
            channel: {
              name: channel,
              primary: event.target.value.toUpperCase(),
              reference: "",
              backup: [
                {
                  bPrimary: "",
                  bReference: "NULL",
                },
              ],
            },
          });
        }
      }
      // need for initial channel Object creation if Reference Channel is first set
      return prevState.concat({
        channel: {
          name: channel,
          primary: event.target.value.toUpperCase(),
          reference: "",
          backup: [
            {
              bPrimary: "",
              bReference: "NULL",
            },
          ],
        },
      });
    });
  };
  const handleRefChange = (event) => {
    setRefChannel(event.target.value);

    //Login for storing Reference channel into ChannelContext
    setChannelData((prevState) => {
      if (prevState.length !== 0) {
        let matchedIndex; // for indexing value of i as .map() returns an array
        const i = prevState.map((c) => {
          let index;
          if (c.channel.name === channel) {
            index = prevState.findIndex((contextChannel) => {
              return contextChannel.channel.name === channel;
            });
            matchedIndex = index;
          }
          return index;
        });

        // if match found
        if (matchedIndex !== undefined) {
          if (i[matchedIndex] !== undefined) {
            prevState[i[matchedIndex]].channel.reference =
              event.target.value.toUpperCase();
            return prevState;
          }
        } else {
          return prevState.concat({
            channel: {
              name: channel,
              primary: "",
              reference: event.target.value.toUpperCase(),
              backup: [
                {
                  bPrimary: "",
                  bReference: "NULL",
                },
              ],
            },
          });
        }
      }
      // need for initial channel Object creation if Reference Channel is first set
      return prevState.concat({
        channel: {
          name: channel,
          primary: event.target.value.toUpperCase(),
          reference: "",
          backup: [
            {
              bPrimary: "",
              bReference: "NULL",
            },
          ],
        },
      });
    });
  };

  const deleteBackupChannelHandler = (channelKey) => {
    setDeleteChannelKey(channelKey);
    setDeleteBackup(true);
  };

  // const setBackup=()=>{

  // }

  const onAddBackupChannel = () => {
    setBackupChannel(
      backupChannel.concat(
        <BackupChannel
          key={channel + backupChannel.length}
          onDelete={deleteBackupChannelHandler}
          channelKey={channel + backupChannel.length}
          // setBackup={}
        />
      )
    );
    setChannelData(backupChannel);
    if (backupChannel.length === 0) toggleViewBackupChannel();
  };

  const toggleViewBackupChannel = () => {
    setShowBackupChannels((prevState) => !prevState);
  };

  useEffect(() => {
    // console.log("logging channelData from useEffect:", channelData);
    if (deleteBackup) {
      setDeleteBackup(false);
      const newBackupChannelItem = backupChannel.filter(
        (channel) => channel.props.channelKey !== deleteChannelKey
      );
      setBackupChannel(newBackupChannelItem);
      setChannelData(newBackupChannelItem);
    }
    if (backupChannel.length === 0) {
      toggleViewBackupChannel();
      setBackupChannelNotZero(false);
      return;
    }
    setBackupChannelNotZero(true);
  }, [
    backupChannel,
    deleteBackup,
    deleteChannelKey,
    setChannelData,
    channelData,
  ]);

  return (
    <Box marginBottom="24px">
      <Box
        sx={{
          height: "102px",
          width: "100%",
          background: "#fff",
          pt: "40px",
          pb: "40px",
          borderRadius: "8px",
          p: "40px 0 40px 56px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
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
        >
          {channel}
        </Typography>

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
              labelId="select-label"
              id="simple-select"
              value={primaryChannel}
              onChange={handlePrimaryChange}
              sx={{
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

        <Box sx={{ ml: "8%", justifyContent: "center", flex: "2" }}>
          <Button
            onClick={
              backupChannel.length === 0
                ? onAddBackupChannel
                : toggleViewBackupChannel
            }
            disableRipple
            sx={{ textTransform: "capitalize" }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "21px",

                textAlign: "center",
                color: "#2F7EC7",
              }}
            >
              {!showBackupChannels && backupChannelNotZero
                ? `View backup channel${backupChannel.length > 1 ? "s" : ""}(${
                    backupChannel.length
                  })`
                : backupChannelNotZero
                ? `Hide backup channel${backupChannel.length > 1 ? "s" : ""}(${
                    backupChannel.length
                  })`
                : "+ Add Backup Channels"}
            </Typography>
          </Button>
        </Box>
      </Box>
      {showBackupChannels ? backupChannel : ""}
      {showBackupChannels && backupChannel.length !== 0 ? (
        <Box marginLeft="20%">
          <Button onClick={onAddBackupChannel}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "21px",
                color: "#2CA9E3",
                textTransform: "capitalize",
              }}
            >
              + Add Backup Channel
            </Typography>
          </Button>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default ChannelComponent;
