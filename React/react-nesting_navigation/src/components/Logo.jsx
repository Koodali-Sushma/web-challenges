import Image from "./Image";
import logoImg from "../img/logo.jpg"; // Adjust filename if your project has a .png or different path

export default function Logo() {
  return (
    <a href="#">
      <Image src={logoImg} alt="logo" />
    </a>
  );
}
