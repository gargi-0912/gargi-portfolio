import Link from "next/link";
import {FaGithub,FaLinkedinIn,FaTwitter} from "react-icons/fa";
const socials=[
    {icon: <FaGithub/>,path:"https://github.com/gargi-0912"},
    {icon: <FaLinkedinIn/>,path:"https://www.linkedin.com/in/gargi-gupta-91314522a/"},
    {icon:<FaTwitter/>,path:"https://x.com/GargiGupta1509"},
]

const Social = ({containerStyles,iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item,index)=>{
        return <Link key={index} href={item.path} className={iconStyles} >{item.icon}</Link>
})}
  </div>;
  
};

export default Social