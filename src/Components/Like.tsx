import { FcLike } from "react-icons/fc";
import { IoHeartDislikeOutline } from "react-icons/io5";
// import styles from './Like.module.css'
import { useState } from "react";
interface LikeProps {
  onClick: () => void;
}
const Like = ({ onClick }: LikeProps) => {
  const [status, setStatus] = useState(true);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) return <FcLike color="red" size={40} onClick={toggle} />;
  return <IoHeartDislikeOutline size={40} onClick={toggle} />;
};

export default Like;
