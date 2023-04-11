import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiCss3, SiSass, SiJavascript, SiTypescript, SiReact, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit, SiJest, SiFigma } from 'react-icons/si';

const width = '150px';

const skillsIcons = [
  {name: 'HTML', icon: <AiFillHtml5 />},
  {name: 'CSS', icon: <SiCss3 />},
  {name: 'SASS', icon: <SiSass />},
  {name: 'JavaScript', icon: <SiJavascript />},
  {name: 'TypeScript', icon: <SiTypescript />},
  {name: 'React', icon: <SiReact />},
  {name: 'Redux', icon: <SiRedux />},
  {name: 'NodeJS', icon: <SiNodedotjs />},
  {name: 'Express', icon: <SiExpress />},
  {name: 'MongoDB', icon: <SiMongodb />},
  {name: 'MySql', icon: <SiMysql />},
  {name: 'Git', icon: <SiGit />},
  {name: 'Jest', icon: <SiJest />},
  {name: 'Figma', icon: <SiFigma />},
]

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skillsIcons.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain' style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            {skill.icon}{skill.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
