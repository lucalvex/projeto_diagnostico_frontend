import Link from 'next/link';
import { RegisterForm } from '@/components/forms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projeto Diagnóstico | Criar conta',
    description: 'Criar conta Projeto Diagnóstico',
};

export default function Page() {
    return (
        <main className='min-h-screen p-12'>
            <div className='flex flex-col max-w-md mx-auto bg-gunmetal rounded-md border-2 border-blue-darknut'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight'>
                        Crie sua conta
                    </h2>
                </div>

                <div className='m-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <RegisterForm />

                    <p className='mt-10 text-center text-sm font-medium'>
                        Já possui uma conta?{' '}
                        <span className='inline-block'>
                            <Link
                                href='/authentication/login'
                                className='text-blue-darknut font-extrabold'
                            >
                                Entre aqui
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </main>
    );
}