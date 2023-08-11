import { IconButton as IB } from "@mui/material";

type props = {
  icon: JSX.Element;
  link: string;
};

const IconButton = ({ icon, link }: props) => {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <IB
      area-label="link"
      size="large"
      color="primary"
      onClick={() => openLink(link)}
    >
      {icon}
    </IB>
  );
};

export default IconButton;
