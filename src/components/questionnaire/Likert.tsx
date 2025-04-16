import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

interface LikertScaleProps {
    question: string;
    numOptions: number;
}

const LikertScale: React.FC<LikertScaleProps> = ({ question, numOptions }) => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const ref = React.createRef<HTMLSpanElement>();
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

    if (numOptions % 2 === 0) {
        throw new Error('O número de opções deve ser ímpar.');
    }

    const calculateOptionSize = (index: number) => {
        const center = Math.floor(numOptions / 2);
        const distanceFromCenter = Math.abs(index - center);
        return 20 + distanceFromCenter * 8;
    };

    const showCursorAnimation = (show: boolean) => {
        if (!ref.current) {
            return;
        }

        const el = ref.current;
        if (show) {
            el.classList.add(CURSOR_CLASS_NAME);
        } else {
            el.classList.remove(CURSOR_CLASS_NAME);
        }
    };

    return (
        <>
            <div className='flex flex-col w-full items-center space-y-6 md:space-y-8 lg:space-y-12'>
                <TypeAnimation
                    ref={ref}
                    cursor={false}
                    className={`text-xl sm:text-2xl font-bold text-center ${CURSOR_CLASS_NAME}`}
                    sequence={[
                        question,
                        () => showCursorAnimation(false),
                    ]}
                    style={{
                        whiteSpace: 'normal',
                        wordBreak: 'break-word',
                    }}
                />
                <div className='flex w-full justify-center items-center md:space-x-8'>
                    <h1 className='hidden font-semibold md:block'> Discordo </h1>
                    <div className='flex flex-col md:flex-row items-center space-y-4'>
                        <div className='flex items-center space-x-4 sm:space-x-8'>
                            {Array.from({ length: numOptions }, (_, index) => {
                                const size = calculateOptionSize(index);
                                const isSelected = selectedOption === index;
                                return (
                                    <div
                                        key={index}
                                        className={`flex items-center justify-center font-semibold rounded-full cursor-pointer hover:text-blue-darknut hover:border-blue-darknut 
                                        ${isSelected ? 'bg-blue-darknut' : 'border-2 border-zinc-400'}
                                    `}
                                        style={{
                                            width: `calc(3vw + ${size}px)`,
                                            height: `calc(3vw + ${size}px)`,
                                        }}
                                        onClick={() => setSelectedOption(index)}
                                    >
                                        {index + 1}
                                    </div>
                                );
                            })}
                        </div>
                        <div className='flex w-full justify-between md:hidden'>
                            <h1> Disccordo </h1>
                            <h1> Concordo </h1>
                        </div>
                    </div>
                    <h2 className='hidden font-semibold md:block'> Concordo </h2>
                </div>
            </div>

            <style global jsx>{`
            .custom-type-animation-cursor::after {
              content: '|';
              animation: cursor infinite step-start;
            }
            @keyframes cursor {
              50% {
                opacity: 0;
              }
            }`}
            </style>
        </>
    );
};

export default LikertScale;