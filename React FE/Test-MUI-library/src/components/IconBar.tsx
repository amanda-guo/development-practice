import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import IconButton from "./IconButton";
import { Stack } from "@mui/material";

// TODO: get that highlight thing showing a url on the bottom left

const IconBar = () => {
  return (
    <>
      <Stack direction="row">
        <IconButton
          icon={<Mail fontSize="inherit" />}
          link="mailto:amanda.guo@uwaterloo.ca"
        ></IconButton>
        <IconButton
          icon={<LinkedIn fontSize="inherit" />}
          link="https://www.linkedin.com/in/amanda-guo/"
        ></IconButton>
        <IconButton
          icon={<GitHub fontSize="inherit" />}
          link="https://github.com/amanda-guo"
        ></IconButton>
      </Stack>
    </>
  );
};

export default IconBar;
