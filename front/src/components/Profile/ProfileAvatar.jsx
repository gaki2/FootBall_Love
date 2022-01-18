import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ProfileImgAddBtn from "./ProfileImgAddBtn";

const ProfileAvatar = ({ user }) => {
  //src 를 userImg 로 바꾸면 됨.
  return (
    <Stack mt={10} spacing={2} alignItems="center">
      <Avatar
        alt="Remy Sharp"
        src={
          user.profileUri
            ? `https://storage.googleapis.com/fbl_profile_img/${user.profileUri}`
            : "#"
        }
        sx={{
          width: "256px",
          height: "256px",
          borderColor: "black",
          border: 1,
        }}
      />
      <ProfileImgAddBtn></ProfileImgAddBtn>
    </Stack>
  );
};

export default ProfileAvatar;
