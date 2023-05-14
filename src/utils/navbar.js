import ExamPage from "../components/exam";
import HomePage from "../components/home";
import UserPage from "../components/user";
import Home from "../assets/icons/home.svg";
import Exam from "../assets/icons/exam.svg";
import User from "../assets/icons/user.svg";

let data = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <HomePage />,
    img: Home,
    hidden: false,
  },
  {
    id: 2,
    title: "Exam",
    path: "/exam",
    element: <ExamPage />,
    img: Exam,
    hidden: false,
  },
  {
    id: 3,
    title: "User",
    path: "/user",
    element: <UserPage />,
    img: User,
    hidden: false,
  },
];
export default data;
