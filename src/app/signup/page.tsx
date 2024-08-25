'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Input from '@/components/common/Input';
import Image from 'next/image';
import Button from '@/components/common/Button';

interface SignUpDatas {
  name: string;
  email: string;
  password: string;
}
const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpDatas>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSignUpSubmit = (data: SignUpDatas) => {
    console.log(data);
  };

  const handleClick = (route: string) => {
    router.push(route);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col space-y-2">
        <div className="flex items-start flex-col w-[21.438rem]">
          <Image
            src="images/wavingHand.svg"
            alt="wavingHand"
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
        <form onSubmit={handleSubmit(onSignUpSubmit)}>
          <div className="flex justify-center flex-col space-y-[1rem]">
            <Input
              placeholder="이름"
              type="text"
              {...register('name', { required: '이름을 입력해주세요' })}
            />
            {errors.name && (
              <span className="text-primary">{errors.name.message}</span>
            )}
            <Input
              placeholder="이메일"
              type="email"
              {...register('email', { required: '이메일을 입력해주세요' })}
            />
            {errors.email && (
              <span className="text-primary">{errors.email.message}</span>
            )}
            <Input
              placeholder="비밀번호(8자 이상)"
              type="password"
              {...register('password', {
                required: '비밀번호를 입력해주세요',
                minLength: {
                  value: 8,
                  message: '비밀번호는 최소 8자 이상이어야 합니다',
                },
              })}
            />
            {errors.password && (
              <span className="text-primary">{errors.password.message}</span>
            )}
          </div>

          <div className="flex justify-center mt-6">
            <Button
              label="회원가입"
              type="submit"
              onClick={() => handleClick('/signup-complete')}
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
      <div className="flex justify-center items-center">
        <p className="text-[1rem]">계정이 있으신가요?</p>
        <button
          onClick={() => handleClick('/login')}
          className="text-[1rem] hover:text-grey">
          로그인
        </button>
      </div>
    </>
  );
};
export default SignUp;
