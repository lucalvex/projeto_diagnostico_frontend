import Link from "next/link";

export default function Questionnaire() {
    return (
        <>
            <div className='min-h-screen p-12'>
                <div className='flex flex-col max-w-4xl mx-auto p-8 space-y-4 bg-gunmetal rounded-md border border-blue-darknut'>
                    <div className='flex flex-col'>
                        <h1 className="text-6xl font-bold mb-4 justify-normal">Questionário de Conhecimentos Gerais</h1>
                        <p className="text-zinc-500 mb-6">
                            Este questionário foi desenvolvido para avaliar seus conhecimentos em diversas áreas, como ciência, história e cultura geral.
                            Reserve um tempo tranquilo para respondê-lo e aproveite para aprender algo novo!
                        </p>
                    </div>
                    <div className='flex w-max h-max space-x-2 mx-auto items-center p-2 bg-bleached-silk text-zinc-700 rounded-md shadow-sm shadow-zinc-500'>
                        <a>
                            Número de Questões
                        </a>
                        <div className='w-[1px] h-12 bg-zinc-500'></div>
                        <a>
                            Tempo Estimado
                        </a>
                        <div className='w-[1px] h-12 bg-zinc-500'></div>
                        <Link
                            href='/questionnaire/x/1'
                            className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600'>
                            Iniciar Questionário
                        </Link>
                    </div>
                </div>
            </div >
        </>
    );
}
