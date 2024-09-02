'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

interface FormDatas {
  email: string;
  password: string;
  saveId: boolean;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDatas>({
    defaultValues: {
      email: '',
      password: '',
      saveId: false,
    },
  });

  const onSubmit = (data: FormDatas) => {
    console.log(data);
  };

  const handleLoginClick = () => {};

  return (
    <>
      <div className="flex justify-center items-center flex-col space-y-2">
        <div className="flex items-start flex-col w-[21.438rem] ">
          <Image
            src="/images/Waving_hand.svg"
            alt="Waving Hand"
            width={85}
            height={85}
          />
          <div className="flex items-left text-[1.625rem] font-semibold">
            반가워요!
          </div>
          <div className="text-[1.625rem] font-semibold">
            유앤미에 오신 것을 환영해요!
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center flex-col space-y-[1rem]">
            <Input
              placeholder="이메일"
              type="email"
              {...register('email', { required: '이메일을 입력해주세요' })}
            />
            {errors.email && (
              <span className="text-primary">{errors.email.message}</span>
            )}
            <Input
              placeholder="비밀번호"
              type="password"
              {...register('password', {
                required: '비밀번호를 입력해주세요',
                minLength: {
                  value: 8,
                  message: '비밀번호는 8자 이상이어야 합니다',
                },
              })}
            />
            {errors.password && (
              <span className="text-primary">{errors.password.message}</span>
            )}
          </div>
          <div className="flex justify-start my-[1rem]">
            <input
              type="checkbox"
              {...register('saveId')}
              className="accent-[#9A81D9]"
            />
            <span className="ml-1.5 text-[#82829B] text-sm font-semibold ">
              아이디 저장
            </span>
          </div>
          <div className="flex justify-center">
            <Button
              label="로그인"
              type="submit"
              onClick={handleLoginClick}
              className="w-[21.438rem] h-[3.125rem] rounded-lg"
            />
          </div>
        </form>
      </div>

      <div className="flex justify-center items-center my-4 ">
        <hr className="w-[9.563rem]  border-t-1 border-[#9E9E9E] " />
        <span className="mx-4 text-[#9E9E9E] text-[0.75rem]">OR</span>
        <hr className="w-[9.563rem]  border-t-1 border-[#9E9E9E]" />
      </div>

      <div className="flex justify-center items-center flex-row gap-[1.5rem] mb-5">
        <Image
          src="/images/naver-login-icon.png"
          alt="naver"
          width={46}
          height={46}
        />
        <Image
          src="/images/kakao-login-icon.png"
          alt="kakao"
          width={46}
          height={46}
        />
        <Image
          src="/images/google-login-icon.png"
          alt="google"
          width={46}
          height={46}
        />
      </div>

      <div className="flex justify-center items-center space-x-4 mt-[4rem] text-[#E0E0E0] text-[0.75rem] ">
        <Link href="signup" className="hover:text-[#82829B]">
          회원가입하기
        </Link>
        <span>|</span>
        <button className="hover:text-[#82829B]">아이디 찾기</button>
        <span>|</span>
        <button className="hover:text-[#82829B]">비밀번호 찾기</button>
      </div>
    </>
  );
};

export default Login;
