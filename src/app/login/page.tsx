import Input from '@/components/common/Input';
import Image from 'next/image';

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="flex items-start flex-col">
          <div className="flex items-left text-[1.625rem] font-semibold">
            반가워요!
          </div>
          <div className="text-[1.625rem] font-semibold">
            유앤미에 오신 것을 환영해요!
          </div>
        </div>
        <div className="flex justify-center flex-col space-y-[1rem]">
          <Input placeholder="" type="email" />
          <Input
            placeholder="비밀번호(8자 이상)"
            type="password"
            className="mb-10"
          />
        </div>

        <div className="flex justify-start ">
          <input type="checkbox" className="checked:bg-[#9A81D9]" />
          <span className="ml-1.5 text-[#82829B]">아이디 저장</span>
        </div>
        <div className="flex justify-center ">
          <button className="w-[21.438rem] h-[3.125rem] bg-[#6224FD] text-white rounded-lg">
            로그인
          </button>
        </div>
      </div>

      <div className="flex items-center my-4 w-full">
        <hr className="flex-grow border-t-1 border-[#9E9E9E]" />
        <span className="mx-4 text-[#9E9E9E] text-[0.75rem]">OR</span>
        <hr className="flex-grow border-t-1 border-[#9E9E9E]" />
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

      <div className="flex justify-center items-center space-x-4 text-[#E0E0E0] text-[0.75rem]">
        <span>회원가입하기</span>
        <span>|</span>
        <span>아이디 찾기</span>
        <span>|</span>
        <span>비밀번호 찾기</span>
      </div>
    </>
  );
};
export default Login;
