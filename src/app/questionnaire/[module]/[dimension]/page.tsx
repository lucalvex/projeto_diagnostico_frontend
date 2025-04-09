'use client';

import LikertScale from "./likert";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useGetQuestionnairesQuery } from "@/redux/features/questionnaireApiSlice";

export default function Questionnaire() {
    const { data: questionnaires, isLoading, isError } = useGetQuestionnairesQuery();

    if (isLoading) {
        return <p>Carregando...</p>;
    }

    if (isError) {
        return <p>Erro ao carregar as perguntas.</p>;
    }

    return (
        <>
            <div className='min-h-screen p-4 pt-32 sm:p-8 sm:pt-36 md:p-12 md:pt-40'>
                <div className='flex flex-col relative px-3 pt-20 pb-32 sm:px-8 sm:pt-24 md:px-16 max-w-4xl mx-auto bg-dark-navy-blue rounded-md border border-blue-darknut'>
                    <div className='absolute top-4 left-1/2 transform -translate-x-1/2 text-center'>
                        <p className='text-zinc-400'>
                            Questão X de Y
                        </p>
                    </div>
                    {questionnaires?.questions && questionnaires.questions.map((question: any, index: number) => (
                        <LikertScale
                            key={index}
                            question={question.texto} // Substitua "texto" pelo campo correto da API
                            numOptions={5}
                        />
                    ))}
                    <div className='absolute bottom-4 right-4 flex'>
                        <button className='mr-3 p-2 rounded-full border border-zinc-400 text-zinc-400 hover:border-blue-darknut'>
                            <ChevronLeft />
                        </button>
                        <button className='p-2 rounded-full border border-zinc-400 text-zinc-400 hover:border-blue-darknut'>
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}