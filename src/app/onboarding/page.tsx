'use client';
import { useFunnel } from '@use-funnel/browser';
import SelectedJob from '@/components/onboarding/SelectedJob';
import StudyPurpose from '@/components/onboarding/StudyPurpose';
import StudyPeriod from '@/components/onboarding/StudyPeriod';
import StepCompleted from '@/components/onboarding/StepCompleted';
import Characters from '@/components/onboarding/Characters';

type OnboardingDatas = {
  selectedJob?: string;
  studyPurpose?: string[];
  character?: string[];
  studyPeriod?: string;
};

const Onboarding = () => {
  const funnel = useFunnel<{
    selectedJob: OnboardingDatas;
    studyPurpose: OnboardingDatas;
    character: OnboardingDatas;
    studyPeriod: OnboardingDatas;
    stepCompleted: OnboardingDatas;
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
          onNext={(job) => {
            console.log('job');
            history.push('studyPurpose', { selectedJob: job });
          }}
        />
      )}
      studyPurpose={({ context, history }) => (
        <StudyPurpose
          onNext={(purposes) => {
            history.push('character', { ...context, studyPurpose: purposes });
          }}
          onBack={() => history.push('selectedJob', context)}
        />
      )}
      character={({ context, history }) => (
        <Characters
          onNext={(character) => {
            history.push('studyPeriod', { ...context, character });
          }}
          onBack={() => history.push('studyPurpose', context)}
        />
      )}
      studyPeriod={({ context, history }) => (
        <StudyPeriod
          onNext={(period) => {
            history.push('stepCompleted', { ...context, studyPeriod: period });
          }}
          onBack={() => history.push('character', context)}
        />
      )}
      stepCompleted={({ context }) => <StepCompleted />}
    />
  );
};

export default Onboarding;
