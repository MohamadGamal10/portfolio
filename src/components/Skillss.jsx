import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaBootstrap,
    FaReact,
    FaLaravel,
  } from 'react-icons/fa6';

  import { TbApi, TbBrandTailwind } from 'react-icons/tb';
  import {
    SiAxios,
    SiMaterialdesign,
    SiMysql,
    SiPhp,
    SiRedux,
  } from 'react-icons/si';

  import { FaFigma, FaTerminal } from 'react-icons/fa6';
import {
  SiVisualstudiocode,
  SiPostman,
  SiGnubash,
  SiNetlify,
  SiVercel,
  SiVitest,

} from 'react-icons/si';
import { DiGit, DiResponsive } from 'react-icons/di';
import { TbBrandGithubCopilot } from 'react-icons/tb';
  

import FrontendSkills from './FrontendSkills';
import BackendSkills from './BackendSkills';
import Tools from './Tools';
  
  const Skillsf = [
    {
      name: 'HTML',
      icon: <FaHtml5 />,
    },
    {
      name: 'CSS',
      icon: <FaCss3 />,
    },
    {
      name: 'JavaScript',
      icon: <FaJs />,
    },
    {
      name: 'Bootstrap',
      icon: <FaBootstrap />,
    },
    {
      name: 'Tailwind CSS',
      icon: <TbBrandTailwind />,
    },

    {
      name: 'React',
      icon: <FaReact />,
    },
    {
      name: 'Material UI',
      icon: <SiMaterialdesign />,
    },
    {
      name: 'Axios',
      icon: <SiAxios />,
    },
    {
      name: 'Redux',
      icon: <SiRedux />,
    },
  ];

  const Skillsb = [
    {
      name: 'PHP',
      icon: <SiPhp />,
    },
 
    {
      name: 'My SQL',
      icon: <SiMysql />,
    },
    {
      name: 'Laravel',
      icon: <FaLaravel />,
    },
    {
      name: 'API',
      icon: <TbApi />,
    },
 
  ];

  const Toolss = [
    {
      name: 'Visual Studio Code',
      icon: <SiVisualstudiocode />,
    },
    {
      name: 'Terminal',
      icon: <FaTerminal />,
    },
   
    {
      name: 'Bash',
      icon: <SiGnubash />,
    },
    {
      name: 'Github Copilot',
      icon: <TbBrandGithubCopilot />,
    },
    {
      name: 'Git',
      icon: <DiGit />,
    },
    {
      name: 'Postman',
      icon: <SiPostman />,
    },

    {
      name: 'Figma',
      icon: <FaFigma />,
    },
    {
      name: 'Netlify',
      icon: <SiNetlify />,
    },
    {
      name: 'Vercel',
      icon: <SiVercel />,
    },

    {
      name: 'Responsive Design',
      icon: <DiResponsive />,
    },

    {
      name: 'Vite',
      icon: <SiVitest />,
    },
  ];
  
export default function Skillss() {
  return (
    <>
    <FrontendSkills Skillsf={Skillsf} />
    <BackendSkills Skillsb={Skillsb}/>
    <Tools Tools={Toolss}/>
    </>
  )
}
