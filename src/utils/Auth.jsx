import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";

export const getUserDatafromToken = () => {
  const [cookies] = useCookies(["xyz"]);

  try {
    const decodedToken = jwtDecode(cookies.xyz);
    console.log(decodedToken);
    return {
      decodedToken,
    };
  } catch (error) {
    window.location.href = "/signin";
  }

  return null;
};
