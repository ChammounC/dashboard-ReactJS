import { Typography, Box } from "@mui/material";
import edfLogo from "../../assets/images/edf.svg";

const MontagesPage = (props) => {
  return (
      <Box
        sx={{
          mt: "40px",
          p: "32px",
          backgroundColor: "#fff",
          height: "570px",
          borderRadius: "6px",
          mb:'112px'
        }}
      >
        <Box
          sx={{
            height: "506px",
            border: "1.5px dashed #8A8A8A",
            backgroundColor: "#F8F8F8",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={edfLogo}
            alt="edf"
            style={{ marginBottom: "27px", height: "100px", width: "100px" }}
          />
          <Box
            sx={{
              width: "174px",
              height: "45px",
              alignItems: "center",
              p: "10px",
              justifyContent: "center",
              background: "#EAEAEA",
              border: "1px solid #6D6D6D",
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "21px",
                textAlign: "center",
                color: " #6D6D6D",
              }}
            >
              Browse Files
            </Typography>
          </Box>
          <Typography
            sx={{
              mt: "10px",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "21px",
              color: "#0F0F0F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            or drop files here
          </Typography>
        </Box>
      </Box>
  );
};

export default MontagesPage;
