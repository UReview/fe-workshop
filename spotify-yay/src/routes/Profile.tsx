import ProfileCard from "@/components/Card";
import { UserContext } from "@/context/useUserContext";
import ProfileLayout from "@/layouts/ProfileLayout";
import { useContext, useEffect } from "react";

const Profile = () => {
  const [user, _] = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  });

  return (
    <ProfileLayout>
      <ProfileCard user={user!}></ProfileCard>
    </ProfileLayout>
  );
};

export default Profile;
