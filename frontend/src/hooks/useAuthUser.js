import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";

const useAuthUser = () => {
  const authUserQuery = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    retry: false,
  });

  // Nếu có user thật → return luôn
  if (authUserQuery.data?.user) {
    return { isLoading: false, authUser: authUserQuery.data.user };
  }

  // Nếu API lỗi hoặc chưa login → return fake user
  return {
    isLoading: false,
    authUser: {
      fullName: "Demo User",
      bio: "This is demo bio.",
      nativeLanguage: "Vietnamese",
      learningLanguage: "English",
      location: "Hanoi",
      profilePic: "",
      isOnboarded: false,
    },
  };
};

export default useAuthUser;
