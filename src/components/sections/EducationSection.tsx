import React from 'react';
import { EDUCATION_ITEMS } from '../../data/education';
import { SectionWrapper } from '../layout/SectionWrapper';
import { SectionHeading } from '../ui/SectionHeading';
import { TimelineItem } from '../ui/TimelineItem';
import { ScrollReveal } from '../ui/ScrollReveal';

export const EducationSection: React.FC = () => {
  return (
    <SectionWrapper id="education" bgVariant="secondary">
      <ScrollReveal delay={0}>
        <SectionHeading
          eyebrow="ACADEMIC PROGRESSION"
          title="Education Timeline &amp; Qualifications"
          description="Formal engineering education in Computer Engineering and Information Technology at P P Savani University."
        />
      </ScrollReveal>

      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col">
          {EDUCATION_ITEMS.map((edu, idx) => (
            <ScrollReveal key={edu.id} delay={idx * 150}>
              <TimelineItem
                title={edu.degree}
                subtitle={edu.field}
                institution={edu.institution}
                location={edu.location}
                period={edu.duration}
                status={edu.status}
                statusLabel={edu.statusLabel}
                description={edu.description}
                highlights={edu.highlights}
                isLast={idx === EDUCATION_ITEMS.length - 1}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
