'use client';
import { useFunnel } from '@use-funnel/browser';
import React, { useEffect, useState } from 'react';

import Characters from '@/components/onboarding/Characters';
import SelectedJob from '@/components/onboarding/SelectedJob';
import StepCompleted from '@/components/onboarding/StepCompleted';
import StudyPeriod from '@/components/onboarding/StudyPeriod';
import StudyPurpose from '@/components/onboarding/StudyPurpose';

type OnboardingDatas = {
  selectedJob?: string;
  studyPurpose?: string[];
  character?: string[];
  studyPeriod?: string;
};

const Onboarding = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const FunnelComponent = () => {
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
              history.push('stepCompleted', {
                ...context,
                studyPeriod: period,
              });
            }}
            onBack={() => history.push('character', context)}
          />
        )}
        stepCompleted={({ context }) => (
          <StepCompleted
            role={context.selectedJob}
            description={context.character}
          />
        )}
      />
    );
  };

  return isMounted ? <FunnelComponent /> : null;
};

export default Onboarding;
