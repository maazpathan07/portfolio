import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { EducationSection } from './components/sections/EducationSection';
import { LearningSection } from './components/sections/LearningSection';
import { ContactSection } from './components/sections/ContactSection';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { ThemeSwitcher } from './components/ui/ThemeSwitcher';
import { ThemeProvider } from './context/ThemeProvider';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0B0B0F] text-[#F5F5F7] flex flex-col selection:bg-[#8B5CF6]/30 selection:text-white relative">
      {/* Accessible Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#8B5CF6] focus:text-white focus:rounded-xl focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <LearningSection />
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Floating Accent Color Theme Switcher */}
      <ThemeSwitcher />

      {/* Floating Circular Scroll-To-Top Indicator */}
      <ScrollToTop />
    </div>
  </ThemeProvider>
);
};

export default App;
