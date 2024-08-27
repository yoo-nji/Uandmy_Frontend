'use client';
import { useFunnel } from '@use-funnel/browser';
import SelectedJob from '@/components/onboarding/SelectedJob';

type OnboardingDatas = {
  selectedJob?: string;
};

const Onboarding = () => {
  const funnel = useFunnel<{
    selectedJob: OnboardingDatas;
  }>({
    id: 'onboarding-funnel',
    initial: {
      step: 'selectedJob',
      context: {},
    },
  });

  return (
    <funnel.Render
      selectedJob={({ history }) => (
        <SelectedJob
        // onNext={(job) => {
        //   history.push('studyPurpose', { selectedJob: job });
        // }}
        />
      )}
    />
  );
};

export default Onboarding;
