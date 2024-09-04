'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '@/components/common/Button';

const Page = () => {
  return (
    <>
      <div className="h-screen flex flex-col gap-[1.4375rem] items-center pt-[2.5rem] px-4 onboarding-bg">
        <div className="flex justify-end w-full py-[0.625rem] text-[#82829B] text-[0.875rem]">
          <button>SKIP</button>
        </div>
        {/* 슬라이드 */}
        <div className="w-full max-w-md">
          <Swiper
            loop={true} // 슬라이드 루프
            spaceBetween={1.875} // 슬라이드 간 간격
            slidesPerView={1} // 한 번에 보여질 슬라이드 수
            pagination={{
              clickable: true,
              el: '.custom-pagination', // 커스텀 페이지네이션을 지정
            }} // 동그라미 페이지네이션
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="h-full" // Swiper에 전체 높이 설정
            modules={[Pagination, Autoplay]}>
            <SwiperSlide>
              <div className="flex flex-col w-full gap-[1.4375rem]">
                <h2 className="font-semibold text-[#262626] text-[1.5rem]">
                  다양한 IT 직군과의
                  <br /> 견고한 스터디를 경험해보세요.
                </h2>
                <h3 className="text-[#000417] text-[0.875rem]">
                  다른 학습자들과 소통하며 함께 성장하세요!
                </h3>
              </div>
              {/* 이미지 */}
              <div className="flex justify-center items-center w-full animate-softBounce">
                <img
                  src="/images/walkthrough01.png"
                  alt="Slide 1"
                  className="object-cover h-[15rem]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-full gap-[1.4375rem]">
                <h2 className="font-semibold text-[#262626] text-[1.5rem]">
                  다른 학습자들과
                  <br /> 함께 고민을 나눠보세요.
                </h2>
                <h3 className="text-[#000417] text-[0.875rem]">
                  학습에 어려움을 겪고 있나요?
                  <br /> 고민을 나누고 해결책을 찾아보세요!
                </h3>
              </div>
              {/* 이미지 */}
              <div className="flex justify-center items-center w-full animate-softBounce">
                <img
                  src="/images/walkthrough02.png"
                  alt="Slide 2"
                  className="object-cover h-[15rem]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-full gap-[1.4375rem]">
                <h2 className="font-semibold text-[#262626] text-[1.5rem]">
                  뱃지를 통해 성취를 경험하고,
                  <br /> 차별화된 신뢰지표를 만들어보세요.
                </h2>
                <h3 className="text-[#000417] text-[0.875rem]">
                  스터디 활동을 수행하고 다양한 뱃지를 획득하세요!
                </h3>
              </div>
              {/* 이미지 */}
              <div className="flex justify-center items-center w-full animate-softBounce">
                <img
                  src="/images/walkthrough03.png"
                  alt="Slide 3"
                  className="object-cover h-[15rem]"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          {/* 커스텀 페이지네이션 */}
          <div className="custom-pagination mt-[0.5rem] flex justify-center gap-[0.125rem]"></div>
        </div>
        <Button
          label="나와 비슷한 팀원 찾기"
          onClick={() => console.log('버튼 클릭됨')}
          bgColor="bg-primary"
          textColor="text-white"
          className="w-[21.4375rem] mt-[1.5rem]"
        />
      </div>
    </>
  );
};

export default Page;
