import { SidepanelButton } from './SidepanelButton';
import { MdBackpack } from "react-icons/md";
import { AiFillHome, AiFillStar} from "react-icons/ai";

export default {
  title: 'atom/Sidepanelbutton',
  component: SidepanelButton,
};

export const Default = { args : { size : 'medium', icon: MdBackpack, iconString : 'AiFillHome', selected : true, children : 'Backpack' } }
export const HomeIcon = { args : { size : 'medium', icon: AiFillHome, iconString : 'AiFillHome', selected : false, children : 'Home' } }
export const StarIcon = { args : { size : 'medium', icon: AiFillStar, iconString : 'AiFillHome', selected : true, children : 'Rated' } }