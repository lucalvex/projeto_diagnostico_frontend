import Link from 'next/link';

export default function QuestionnairePage() {
    const modules = [
        {
            id: 1,
            title: 'Módulo 1: Introdução',
            description: 'Este módulo aborda os conceitos básicos do diagnóstico empresarial.',
            questions: 10,
            estimatedTime: '15 minutos',
        },
        {
            id: 2,
            title: 'Módulo 2: Estratégias de Mercado',
            description: 'Explore estratégias para melhorar sua posição no mercado.',
            questions: 12,
            estimatedTime: '20 minutos',
        },
        {
            id: 3,
            title: 'Módulo 3: Gestão Financeira',
            description: 'Aprenda a gerenciar melhor os recursos financeiros da sua empresa.',
            questions: 15,
            estimatedTime: '25 minutos',
        },
    ];

    return (
        <>
            <div className='w-screen min-h-screen flex flex-col items-center p-4 md:p-12 space-y-8'>
                <div className='max-w-4xl mx-auto flex flex-col text-center'>
                    <h1 className='text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-darknut via-purple-500 to-pink-500'>
                        Bem-vindo ao Sistema de Diagnóstico Empresarial
                    </h1>
                </div>
                <p className='text-center max-w-2xl'>
                    Escolha um dos módulos abaixo para começar o diagnóstico. Cada módulo foi desenvolvido para abordar
                    aspectos específicos da sua empresa e fornecer insights valiosos.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                    {modules.map((module) => (
                        <div
                            key={module.id}
                            className='flex flex-col p-6 border-2 border-gunmetal hover:border-blue-darknut hover:-translate-y-3 transition transform duration-500 rounded-lg min-h-[300px]'
                        >
                            <h2 className='text-base md:text-xl font-semibold mb-2'>{module.title}</h2>
                            <p className='mb-4 flex-grow text-gray-400'>{module.description}</p>
                            <div className='flex justify-between items-center text-gray-500 mb-4'>
                                <span>{module.questions} questões</span>
                                <span>{module.estimatedTime}</span>
                            </div>
                            <Link
                                href={`/questionnaire/${module.id}`}
                                className='mt-auto px-4 py-2 bg-blue-500 font-semibold text-white rounded-md hover:bg-blue-600'
                            >
                                Acessar Módulo
                            </Link>
                        </div>
                    ))}
                </div>
            </div >
        </>
    );
}