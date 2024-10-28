import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../assets/css/cursor.css';

export default function Cursor() {
    const [position , setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({x: e.clientX, y: e.clientY});
        }
        document.addEventListener('mousemove', mouseMove);
        return () => {
            document.removeEventListener('mousemove', mouseMove);
        }
    }, [])
  return (
    <motion.div className='cursor hidden md:block' animate={{x: position.x, y: position.y}}>
      
    </motion.div>
  )
}
