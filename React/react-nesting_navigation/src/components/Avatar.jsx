import Image from "./Image";
import avatarImg from "../img/avatar.jpg"; // Adjust filename if your project uses different naming

export default function Avatar() {
  return (
    <button
      type="button"
      aria-label="avatar"
      onClick={() => console.log("Avatar clicked!")}
    >
      <Image src={avatarImg} alt="avatar" />
    </button>
  );
}
