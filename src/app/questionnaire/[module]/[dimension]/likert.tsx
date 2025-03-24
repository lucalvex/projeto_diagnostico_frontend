import React, { useState } from 'react';

interface LikertScaleProps {
    question: string;
    numOptions: number; // Deve ser ímpar
}

const LikertScale: React.FC<LikertScaleProps> = ({ question, numOptions }) => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    if (numOptions % 2 === 0) {
        throw new Error("O número de opções deve ser ímpar.");
    }

    // Calcula os tamanhos das opções com base na posição
    const calculateOptionSize = (index: number) => {
        const center = Math.floor(numOptions / 2);
        const distanceFromCenter = Math.abs(index - center);
        return 40 + distanceFromCenter * 10; // Tamanho base 40px, aumenta nas extremidades
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <h2 className="text-xl font-bold text-center">{question}</h2>
            <div className="flex w-full justify-center items-center space-x-4">
                <h1> Discordo </h1>
                {Array.from({ length: numOptions }, (_, index) => {
                    const size = calculateOptionSize(index);
                    const isSelected = selectedOption === index;
                    return (
                        <div
                            key={index}
                            className={`flex items-center justify-center rounded-full cursor-pointer 
                                ${isSelected ? 'border border-blue-darknut' : 'border border-bleached-silk'} 
                                text-white`}
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                            }}
                            onClick={() => setSelectedOption(index)}
                        >
                            {index + 1}
                        </div>
                    );
                })}
                <h1> Concordo </h1>
            </div>
        </div>
    );
};

export default LikertScale;