import { Building, LaptopMinimal, BookOpen } from "lucide-react";
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <div className='container max-w-4xl mx-auto min-h-screen space-y-10 p-12'>
                < div className='conteiner max-w-2xl mx-auto space-y-8 text-center' >
                    <h1 className='text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-darknut via-purple-500 to-pink-500'>
                        Transforme o Futuro da Sua Empresa
                    </h1>
                    <p className='justify-center'>
                        Descubra o potencial oculto da sua empresa! Nosso sistema oferece uma análise detalhada
                        e estratégica para identificar áreas de melhoria e oportunidades de crescimento.
                        Com o <strong>Módulo de Questionário</strong>, você terá acesso a insights valiosos que irão revolucionar
                        a forma como você toma decisões.
                    </p>
                    <Link
                        href='/questionnaire'
                        className='inline-block px-6 py-3 bg-blue-darknut rounded-lg shadow-md hover:bg-vivid-cerulean transition md-4'>
                        Acessar o Questionário
                    </Link>
                </div>

                <div className='hidden md:grid md:grid-cols-3 justify-items-center gap-4 lg:gap-8'>
                    <div className='flex flex-col rounded-md md:w-52 md:h-52 md:p-4 lg:w-60 lg:h-60 lg:p-6 lg:space-y-4 justify-center items-center border-2 border-gunmetal hover:border-blue-darknut hover:-translate-y-3 transition transform duration-500'>
                        <div className='flex flex-col items-center text-vivid-cerulean'>
                            <Building className='' />
                            <p>
                                Organizacional
                            </p>
                        </div>
                        <p className='text-sm text-center'>
                            Avalie a situação empresarial de sua empresa.
                        </p>
                    </div>
                    <div className='flex flex-col rounded-md md:w-52 md:h-52 md:p-4 lg:w-60 lg:h-60 lg:p-6 lg:space-y-4 justify-center items-center border-2 border-gunmetal hover:border-blue-darknut hover:-translate-y-3 transition transform duration-500'>
                        <div className='flex flex-col items-center text-vivid-cerulean'>
                            <LaptopMinimal className='' />
                            <p>
                                Marketing
                            </p>
                        </div>
                        <p className='text-sm text-center'>
                            Avalie a situação empresarial de sua empresa.
                        </p>
                    </div>
                    <div className='flex flex-col rounded-md md:w-52 md:h-52 md:p-4 lg:w-60 lg:h-60 lg:p-6 lg:space-y-4 justify-center items-center border-2 border-gunmetal hover:border-blue-darknut hover:-translate-y-3 transition transform duration-500'>
                        <div className='flex flex-col items-center text-vivid-cerulean'>
                            <BookOpen className='' />
                            <p>
                                Financeiro
                            </p>
                        </div>
                        <p className='text-sm text-center'>
                            Avalie a situação empresarial de sua empresa.
                        </p>
                    </div>
                </div>
            </div >
        </>
    );
}