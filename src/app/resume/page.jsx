import {FaNodeJs, FaReact, FaJs, FaHtml5, FaCss3} from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

const about = {
  title: 'About me',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint tempora illo magni.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Lucas Anselmo'
    },
    {
      fieldName: 'Experience',
      fieldValue: '1+ Year'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Brazilian'
    },
    {
      fieldName: 'Email',
      fieldValue: 'lucasanselmodev@gmail.com'
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'Portuguese, English'
    }
  ]
};

const experience = {
  icon: '/assets/projects/icons/badge.svg',
  title: 'My Experience',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat unde enim aut!',
  items: [
    {
    company: 'DiagMax',
    position: 'Admin area',
    duration: '2024 - Present'
    }
  ]
}
 
const Resume = () => {
  return (
    <div>resume page</div>
  )
}

export default Resume