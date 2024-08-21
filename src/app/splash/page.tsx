export default function Home() {
  return (
    <main>
      <div className="h-screen flex flex-col justify-between items-center onboarding-bg ">
        <div className="flex flex-col items-center gap-2 mt-[104px]">
          <h2 className="text-[18px] font-[600] text-[#20243A]">
            같은 목표로 공부 중인 유저
          </h2>
          <h3 className="text-[24px] text-[#7677FF] font-[800]">124,368명</h3>
        </div>
        {/* 이미지 */}
        <div className="w-[372px] h-[298px] bg-[url('/images/splash-icon-bg.png')] bg-center bg-no-repeat relative">
          <div className="w-[100px]  absolute top-[45px] left-[110px] animate-softBounce">
            <img
              className="w-full"
              src="/images/splash-icon.png"
              alt="splash-icon"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-[98px]">
          {/* 아이콘 */}
          <div className="flex gap-[23px]">
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
          <div className="flex mb-[41px] text-[12px] text-[#ADB5BD;] font-[500]">
            <a
              className="hover:text-[#82829B] relative after:content-['|'] after:mx-3 after:text-[#ADB5BD]"
              href="#">
              회원가입하기
            </a>
            <a
              className="hover:text-[#82829B] relative after:content-['|'] after:mx-3 after:text-[#ADB5BD]"
              href="#">
              아이디 찾기
            </a>
            <a className="hover:text-[#82829B]" href="#">
              비밀번호 찾기
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
