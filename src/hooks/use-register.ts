import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useRegisterMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';

export default function useRegister() {
    const router = useRouter();
    const [register, { isLoading }] = useRegisterMutation();

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        cnpj: '',
        cpf: '',
        password: '',
        re_password: '',
    });

    const { email, username, cnpj, cpf, password, re_password } = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const updated = { ...formData, [name]: value };
        console.log('Campo atualizado:', name, '→', value);
        console.log('FormData atual:', updated);
        setFormData(updated);
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log('Dados enviados:', { email, username, cnpj, cpf, password, re_password });

        register({ email, username, cnpj, cpf,  password, re_password })
            .unwrap()
            .then(() => {
                toast.success('Por favor verifique seu email para ativar sua conta');
                router.push('/authentication/login');
            })
            .catch((error) => {
                console.error('Registration error:', error);
                toast.error('Falha ao registrar conta');
            });
    };

    return {
        email,
        username,
        cnpj,
        cpf,
        password,
        re_password,
        isLoading,
        onChange,
        onSubmit,
    };
}