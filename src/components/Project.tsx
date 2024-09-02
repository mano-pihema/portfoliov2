import React from 'react';

type project = {
  icon: React.ReactNode;
  title: string;
  body: string;
  techStack: string[];
  link: string;
};

const Project = ({ icon, title, body, techStack, link }: project) => {
  return (
    <div className='flex flex-col items-center gap-4 p-20'>
      <div>{icon}</div>
      <h1 className='text-6xl font-bold text-white'>{title}</h1>
      <p className='md:w-1/2'>{body}</p>
      <div className='flex flex-row gap-1'>
        <p>Check out the demo</p>
        <a href={link} target='_blank' className='text-yellow-400 cursor-pointer'>
          here
        </a> 👈
      </div>

      <div className='flex flex-col md:flex-row gap-2'>
        Tech Stack:
        {techStack.map((tech) => (
          <p key={tech}>{tech}</p>
        ))}
      </div>
    </div>
  );
};

export default Project;
