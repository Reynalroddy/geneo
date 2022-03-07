import { MdDashboard, MdCreditCard, MdLoyalty } from "react-icons/md";
import { BiWalletAlt, BiDollar } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
const links = [
  { id: 1, text: "Dashboard", path: "/", icon: <MdDashboard /> },
  { id: 2, text: "Wallet", path: "wallet", icon: <BiWalletAlt /> },
  { id: 3, text: "Card", path: "cards", icon: <MdCreditCard /> },
  { id: 4, text: "Fx Center", path: "fx-center", icon: <BiDollar /> },
  { id: 5, text: "Beneficiaries", path: "beneficiaries", icon: <FiUsers /> },
  { id: 6, text: "perks", path: "perks", icon: <MdLoyalty /> },
];

export default links;
