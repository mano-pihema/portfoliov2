import Project from './Project';
import Flip from '../svg/Flip';
import { Cv } from '../svg/Cv';
import Eye from '../svg/Eye';

const Projects = () => {
  const projects = [
    {
      icon: <Cv className='h-20 w-20 ' />,
      title: 'CV Extractor',
      body: 'Cv Extract uses RAG to query CV documents, providing a simple interface to retrive specific data from a CV.',
      techStack: ['React', 'LlammaIndex', 'OpenAI', 'Express', 'Supabase'],
      link: 'https://github.com/mano-pihema/cv-extract/#readme',
    },
    {
      icon: <Flip className='h-20 w-20 ' />,
      title: 'Flip Card',
      body: 'Flip Card helps learners memorize word pairs, these word pairs can be from seperate languages.',
      techStack: ['React', 'React Query', 'OpenAI', 'Express', 'SQLite'],
      link: 'https://github.com/mano-pihema/flip-card/#readme',
    },
    {
      icon: <Eye className='h-20 w-20 ' />,
      title: 'Finger Counter',
      body: 'Count your fingers using a webcam and AI, a first step for recognising sign language handsigns.',
      techStack: ['React', 'Teachable Machine', 'Express'],
      link: 'https://github.com/mano-pihema/Finger-counter/#readme',
    },
  ];
  return (
    <div id='Projects'>
      {/* <h1 className='container max-w-2xl mx-auto text-8xl text-left' id='Projects'>Projects</h1> */}
      <div>
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
