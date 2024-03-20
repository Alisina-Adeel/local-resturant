'use client'

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
    return (
        <motion.footer 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount:0}}
       
        className='bg-footer bg-cover bg-no-repeat text-white pt-16'>

        <div className='container mx-auto'>
            <div className='flex flex-col justify-between xl:flex-row'>
            {/*logo */}
            <div className='w-[300px] mb-8 xl:mb-0'>
                <Link href='/'>
                
                <Image src='/logo.svg' width={90} height={36} alt='' />
                </Link>
                 {/* grid items */}
            </div>
            <div className='flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16'> 
            {/* blog */}
            <div>
            <h4 className='font-semibold mb-5'>Blog</h4>
                <ul className='flex flex-col gap-y-6 text-sm'>
                    <li>
                        <Link href="">Food is not just sustenance; it's a cultural expression and a source of pleasure.</Link>
                    </li>
                    <li>
                        <Link href="">
                                    Food tantalizes the senses and nourishes the soul.</Link>
                    </li>
                    <li>
                        <Link href="">Savor the flavors of life through exquisite cuisine.</Link>
                    </li>
                    <li>
                        <Link href="">Delight in the symphony of flavors found in every dish.</Link>
                    </li>
                </ul>
            </div>
            {/* item */}
            <div>
            <h4 className='font-semibold mb-5'>New Item</h4>
                <ul className='flex flex-col gap-y-6 text-sm'>
                    <li>
                        <Link href="">
                            Bolani is a delicious Afghan flatbread filled with savory fillings like potatoes, spinach, or lentils, perfect for a flavorful snack or meal.</Link>
                    </li>
                    <li>
                        <Link href="">
                            Manto is a traditional Afghan dumpling filled with seasoned ground meat, onions, and spices, often served with yogurt and topped with a tomato-based sauce.</Link>
                    </li>
                   {/* 
                   <li>
                        <Link href="">Tempor, volutpat nulla sed posuere orci ac diam integer</Link>
                    </li>
                    <li>
                        <Link href="">Ultrices consectetur orci ultrices viverra mauris laoreet tincidunt at</Link>
                    </li> 
                    */}
                </ul>
            </div>
            {/* socials */}
            <div>
            <h4 className='font-semibold mb-5'>Socials</h4>
                <ul className='flex flex-col gap-y-6 text-sm'>
                    <li>
                        <Link href="">Youtube</Link>
                    </li>
                    <li>
                        <Link href="">Facebook</Link>
                    </li>
                    <li>
                        <Link href="">Instagram</Link>
                    </li>
                   
                </ul>
                </div>

            </div>
            </div>
            {/* copyright text */}
            <div className='py-4 border-t border-white/10'>
            <p className='text-white/60 text-center text-sm'>Copyright &copy; WATANI Food 2024</p>
            </div>
            </div>

        </motion.footer>
    );

};

export default Footer;
