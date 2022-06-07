import React from 'react';
import './css/tech.css';
import { AiOutlineHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiMysql, DiJavascript1, DiReact, DiMongodb, DiBootstrap, DiNodejsSmall, DiHeroku } from 'react-icons/di';
import { GrGraphQl } from 'react-icons/gr';
import { SiBulma, SiTailwindcss, SiPostman, SiExpress, SiFigma } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';



const Technologies = () => {
    return (
        <div className='holds-everything-technologies'>
            <h1 className='intro-big'>Technologies</h1>
            <p className='para-text-small margin-side'>I've worked with...</p>
            <div className='div-padding'></div>
            <div className='technologies-worked-display margin-side'>
                <div className='holds-everything-icons-div'>
                    <h3 className='sub-intro-med'>Front-End</h3>
                    <div className='icons-width'>
                        <div className='tech-experience'>
                            <AiOutlineHtml5 className='experience-icons' />
                        </div>
                        
                        <div className='tech-experience'>
                            <DiCss3 className='experience-icons' />
                        </div>
                        
                        <div className='tech-experience'>
                            <DiBootstrap className='experience-icons' />
                        </div>
                        
                        <div className='tech-experience'>
                            <SiBulma className='experience-icons' />
                        </div>
                        
                        <div className='tech-experience'>
                            <SiTailwindcss className='experience-icons' />
                        </div> 
                        <div className='tech-experience'>
                            <DiReact className='experience-icons' />
                        </div>
                    </div>

                </div>
                <div className='holds-everything-icons-div'>
                    <h3 className='sub-intro-med'>Back-End</h3>
                    <div className='icons-width'>
                        <div className='tech-experience'>
                            <DiJavascript1 className='experience-icons' />
                        </div>

                        
                        <div className='tech-experience'>
                            <DiNodejsSmall className='experience-icons' />
                        </div>

                        
                        <div className='tech-experience'>
                            <DiMongodb className='experience-icons' />
                        </div>

                        
                        <div className='tech-experience'>
                            <DiMysql className='experience-icons' />
                        </div>
                        
                        <div className='tech-experience'>
                            <SiExpress className='experience-icons' />
                        </div>
                        
                        <div className='tech-experience'>
                            <GrGraphQl className='experience-icons' />
                        </div>
                        
                    </div>

                </div>
                <div className='holds-everything-icons-div'>
                    <h3 className='sub-intro-med'>Dev-Tools</h3>
                    <div className='icons-width'>
                        <div className='tech-experience'>
                            <SiFigma className='experience-icons' />
                        </div>
                        
                        <div className='tech-experience'>
                            <AiFillGithub className='experience-icons' />
                        </div>
                        
                        <div className='tech-experience'>
                            <SiPostman className='experience-icons' />
                        </div>
                        
                        <div className='tech-experience'>
                            <FaGitAlt className='experience-icons' />
                        </div>
                        
                        <div className='tech-experience'>
                            <DiHeroku className='experience-icons' />
                        </div>
                        
                    </div>

                </div>
                {/* <p className='para-text-small'>Experience with...</p>
                    <p className='para-text-small'>HTML5</p>
                    <p className='para-text-small'>CSS3</p>
                    <p className='para-text-small'>Bootstrap</p>
                    <p className='para-text-small'>Bulma</p>
                    <p className='para-text-small'>Tailwind</p>
                    <p className='para-text-small'>React</p> */}

                {/* <div className='tech-experience'>
                    <h3 className='sub-intro-med'>Back-End</h3>
                    <p className='para-text-small'>Experience with...</p>
                    <p className='para-text-small'>JavaScript</p>
                    <p className='para-text-small'>Node JS</p>
                    <p className='para-text-small'>Express JS</p>
                    <p className='para-text-small'>MongoDb</p>
                    <p className='para-text-small'>Mongoose</p>
                    <p className='para-text-small'>GraphQl</p>
                </div>
                <div className='tech-experience'>
                    <h3 className='sub-intro-med'>Dev Tools</h3>
                    <p className='para-text-small'>Such as...</p>
                    <p className='para-text-small'>Figma</p>
                    <p className='para-text-small'>Github</p>
                    <p className='para-text-small'>Postman</p>
                    <p className='para-text-small'>Heroku</p>
                    <p className='para-text-small'>Insomnia</p>
                </div> */}
            </div>

        </div>
    )
}

export default Technologies;