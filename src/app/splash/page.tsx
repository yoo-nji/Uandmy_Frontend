import Link from 'next/link';

import { supabase } from '@/utils/supabaseClient';

const Page = async () => {
  const user = await supabase.auth.getUser();
  console.log(user);
  return (
    <div className="h-screen flex flex-col gap-[4.5rem] items-center onboarding-bg ">
      <div className="flex flex-col items-center gap-[0.125rem] mt-[5rem]">
        <h2 className="text-[1.125rem] font-[600] text-[#20243A]">
          같은 목표로 공부 중인 유저
        </h2>
        <h3 className="text-[1.5rem] text-[#7677FF] font-[800]">124,368명</h3>
      </div>
      {/* 이미지 */}
      <div className="w-[23.25rem] h-[18.625rem] bg-[url('/images/splash-icon-bg.png')] bg-center bg-no-repeat relative">
        <div className="w-[6.25rem] absolute top-[2.8125rem] left-[6.875rem] animate-softBounce">
          <img
            className="w-full"
            src="/images/splash-icon.png"
            alt="splash-icon"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[5rem]">
        {/* 아이콘 */}
        <div className="flex gap-[1.4375rem]">
          <button>
            <img
              className="hover:brightness-110 transition"
              src="/images/naver-login-icon.png"
              alt="naver-login-icon"
            />
          </button>
          <button>
            <img
              className="hover:brightness-110 transitions"
              src="/images/kakao-login-icon.png"
              alt="kakao-login-icon"
            />
          </button>
          <button>
            <img
              className="hover:brightness-110 transitions"
              src="/images/google-login-icon.png"
              alt="google-login-icon"
            />
          </button>
          <button>
            <img
              className="hover:brightness-110 transitions"
              src="/images/email-login-icon.png"
              alt="email-login-icon"
            />
          </button>
        </div>
        <div className="flex text-[0.75rem] text-[#ADB5BD] font-[500]">
          <Link
            className="hover:text-[#82829B] relative after:content-['|'] after:mx-[0.1875rem] after:text-[#ADB5BD]"
            href="/signup">
            회원가입하기
          </Link>
          <Link
            className="hover:text-[#82829B] relative after:content-['|'] after:mx-[0.1875rem] after:text-[#ADB5BD]"
            href="#">
            아이디 찾기
          </Link>
          <Link className="hover:text-[#82829B]" href="#">
            비밀번호 찾기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
