import { apiSlice } from "../services/apiSlice";

interface Question {
    id_na_secao: number; // Correspondente a 'id_na_secao' no backend
    pergunta: string; // Correspondente a 'pergunta' no backend
    explicacao: string; // Correspondente a 'explicacao' no backend
}

interface Secao {
    secao_titulo: string; // Correspondente a 'secao_titulo' no backend
    descricao: string; // Correspondente a 'descricao' no backend
    tipo: string; // Correspondente a 'tipo' no backend
    perguntas: Question[]; // Correspondente a 'perguntas' no backend
}

export const questionnaireApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getQuestionnaires: builder.query<Secao[], void>({
            query: () => '/questionario/',
            transformResponse: (response: { secoes: Secao[] }) => response.secoes, // Mapeia 'secoes' diretamente
        }),
    }),
});

export const { useGetQuestionnairesQuery } = questionnaireApiSlice;