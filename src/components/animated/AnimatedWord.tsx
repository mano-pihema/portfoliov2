
import { motion } from 'framer-motion'

interface AnimatedTextWordProps {
  text: string
  textSize?: string
  wordSpacing?: string
}

const AnimatedWord = ({
  text,
  textSize = 'text-4xl md:text-6xl',
  wordSpacing = 'mr-5 pb-6',
}: AnimatedTextWordProps) => {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 * words.length },
    },
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className='flex'
      variants={container}
      initial='hidden'
      animate='visible'
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className={`${textSize} ${wordSpacing}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedWord
