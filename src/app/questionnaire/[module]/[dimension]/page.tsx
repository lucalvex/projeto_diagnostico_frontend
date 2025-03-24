'use client';

import { HomeIcon } from "lucide-react";
import LikertScale from "./likert";

export default function Questionnaire() {
    return (
        <>
            <div className='flex flex-col w-screen h-screen'>
                <div className='relative flex items-center px-2 py-4 space-x-3 bg-gunmetal'>
                    <div className='sticky left-2 text-blue-darknut'>
                        <HomeIcon size={24} />
                    </div>
                    <div className='flex w-full justify-center space-x-3'>
                        <div className='block rounded-full p-2 bg-blue-darknut'>
                            Dimensão X
                        </div>
                        <div className='block rounded-full p-2 bg-blue-darknut'>
                            Dimensão X
                        </div>
                        <div className='block rounded-full p-2 bg-blue-darknut'>
                            Dimensão X
                        </div>
                        <div className='block rounded-full p-2 bg-blue-darknut'>
                            Dimensão X
                        </div>
                        <div className='block rounded-full p-2 bg-blue-darknut'>
                            Dimensão X
                        </div>
                    </div>
                </div>
                <div className='flex flex-col h-screen max-w-4xl mx-auto p-12'>
                    <LikertScale question='Pergunta 1' numOptions={5} />
                </div>
            </div>
        </>
    );
}
