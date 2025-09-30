import { ReactNode } from 'react';
import type { SpacingVariant, SectionId, LayoutComponentProps } from '../types/layout';
import { getSpacingClasses, cn } from '../utils/layoutHelpers';

interface PageSectionProps extends LayoutComponentProps {
  spacing?: SpacingVariant;
  id?: SectionId | string;
}

/**
 * 표준화된 페이지 섹션 컴포넌트
 * 
 * @description 페이지 내 섹션들의 일관된 간격과 스타일을 제공합니다.
 * 
 * @param spacing - 섹션 간격
 *   - 'none': py-0
 *   - 'sm': py-8 lg:py-12  
 *   - 'md': py-12 lg:py-16
 *   - 'lg': py-16 lg:py-20 (기본값)
 *   - 'xl': py-20 lg:py-24
 * 
 * @example
 * ```tsx
 * <PageSection spacing="lg" id="hero">
 *   <HeroContent />
 * </PageSection>
 * ```
 */
export function PageSection({ 
  children, 
  className = '', 
  spacing = 'lg',
  id,
  'data-testid': testId
}: PageSectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        'w-full',
        getSpacingClasses(spacing),
        className
      )}
      data-testid={testId}
    >
      {children}
    </section>
  );
}
