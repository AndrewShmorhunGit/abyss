import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const options: number[] = [
  25, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150,
];

export const buttons: ["top", "right", "bottom", "left"] = [
  "top",
  "right",
  "bottom",
  "left",
];

export const links = [
  {
    icon: <AiFillGithub size={32} style={{ color: "#6977e2" }} />,
    link: "https://github.com/AndrewShmorhunGit/abyss",
  },
  {
    icon: <AiFillLinkedin size={32} style={{ color: "#6977e2" }} />,
    link: "https://www.linkedin.com/in/andrew-shmorhun-850a76209/",
  },
];
