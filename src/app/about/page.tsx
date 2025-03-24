import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Projeto Diagnóstico | Sobre',
};

export default function About() {
    return (
        <div className='flex flex-col w-full space-y-8 md:space-y-12 pb-12'>
            <div className='relative flex flex-col w-full h-64 sm:h-72 md:h-96 lg:h-[560px] z-0'>
                <Image
                    src='/about-us/hub-foto.jpg'
                    alt='Hub de Inovação'
                    fill={true}
                    style={{
                        objectFit: 'cover',
                        objectPosition: '50% 40%',
                    }}
                />
            </div>
            <div className='flex flex-col items-center w-full space-y-8 p-8'>
                <h1 className='text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-darknut via-purple-500 to-pink-500'>
                    Quem Somos
                </h1>
                <p className='text-center max-w-4xl'>
                    O Hub de Inovação Fronteira promove o desenvolvimento tecnológico conectando academia e empresas. Atuamos com startups, deep techs e soluções inovadoras em parceria com a Universidade Estadual de Maringá (UEM) e outros ambientes de inovação.
                </p>
            </div>
            <div className='flex flex-col md:flex-row w-full items-center p-8 mdspace-x-8'>
                <div className='relative flex flex-col w-full aspect-[16/9] p-8 z-0'>
                    <Image
                        src='/about-us/prof-farid-falando.jpg'
                        alt='Professor Farid falando em evento'
                        fill={true}
                        style={{
                            objectFit: 'cover',
                            objectPosition: '50% 40%',
                        }}
                    />
                </div>
                <div className='flex flex-col p-8 w-full'>
                    <span className='text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-darknut via-purple-500 to-pink-500'>
                        Nossa Missão
                    </span>
                    <p>
                        Impulsionar o desenvolvimento tecnológico e transferir conhecimento da academia para o mercado, apoiando startups e deep techs por meio de parcerias estratégicas e inovação.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-full items-center p-8 md:space-x-8'>
                <div className='md:hidden relative flex flex-col w-full aspect-[16/9] p-8 z-0'>
                    <Image
                        src='/about-us/palestra-hub.jpeg'
                        alt='Professor Farid falando em evento'
                        fill={true}
                        style={{
                            objectFit: 'cover',
                            objectPosition: '50% 40%',
                        }}
                    />
                </div>
                <div className='flex flex-col p-8 w-full'>
                    <h1 className='text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-darknut via-purple-500 to-pink-500'>
                        Nossa História
                    </h1>
                    <p>
                        Nascemos para conectar a Universidade Estadual de Maringá (UEM) ao mercado, criando um ecossistema de inovação. Com grupos como o NEST e o Rinaldi Research Group, promovemos colaboração e soluções tecnológicas avançadas.
                    </p>
                </div>
                <div className='hidden md:relative md:flex md:flex-col md:w-full md:aspect-[16/9] md:p-8 md:z-0'>
                    <Image
                        src='/about-us/palestra-hub.jpeg'
                        alt='Professor Farid falando em evento'
                        fill={true}
                        style={{
                            objectFit: 'cover',
                            objectPosition: '50% 40%',
                        }}
                    />
                </div>
            </div>
        </div >
    );
}