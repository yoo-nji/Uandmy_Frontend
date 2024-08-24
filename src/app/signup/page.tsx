import Input from '@/components/common/Input';
import Image from 'next/image';
import wavingHand from '../../../public/images/wavingHand.svg';

const SignUp = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
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

        <div className="flex justify-center flex-col space-y-[1rem]">
          <Input placeholder="이름" type="text" />
          <Input placeholder="이메일" type="email" />
          <Input
            placeholder="비밀번호(8자 이상)"
            type="password"
            className="mb-10"
          />
        </div>
      </div>
      <div className="flex justify-center ">
        <button className="w-[21.438rem] h-[3.125rem] bg-[#6224FD] text-white rounded-lg">
          회원가입
        </button>
      </div>

      <div className="flex items-center my-4 w-full">
        <hr className="flex-grow border-t-1 border-[#9E9E9E]" />
        <span className="mx-4 text-[#9E9E9E]">OR</span>
        <hr className="flex-grow border-t-1 border-[#9E9E9E]" />
      </div>
      <div className="flex justify-center items-center">
        <p className="text-[1rem]">계정이 있으신가요?</p>
        <span className="text-[1rem]">로그인</span>
      </div>
    </>
  );
};
export default SignUp;
