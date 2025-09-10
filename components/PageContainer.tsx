import { ReactNode } from 'react';
import type { ContainerVariant, LayoutComponentProps } from '../types/layout';
import { getContainerMaxWidth, cn } from '../utils/layoutHelpers';

interface PageContainerProps extends LayoutComponentProps {
  variant?: ContainerVariant;
}

/**
 * 표준화된 페이지 컨테이너 컴포넌트
 * 
 * @description 모든 페이지에서 일관된 레이아웃과 반응형 패딩을 제공합니다.
 * Tailwind의 표준 컨테이너 패턴을 기반으로 구현되었습니다.
 * 
 * @param variant - 컨테이너 폭 변형
 *   - 'default': Tailwind 표준 container (640px → 768px → 1024px → 1280px → 1536px)
 *   - 'narrow': max-w-4xl (896px) - 텍스트 위주 페이지용
 *   - 'wide': max-w-none - 전체 폭 사용
 * 
 * @example
 * ```tsx
 * <PageContainer>
 *   <YourPageContent />
 * </PageContainer>
 * ```
 */
export function PageContainer({ 
  children, 
  className = '', 
  variant = 'default',
  'data-testid': testId
}: PageContainerProps) {
  return (
    <div 
      className={cn(
        variant === 'default' 
          ? 'container mx-auto px-4 sm:px-6 lg:px-8'  // Tailwind 표준 container 사용
          : `mx-auto px-4 sm:px-6 lg:px-8 ${getContainerMaxWidth(variant)}`, // 커스텀 max-width
        className
      )}
      data-testid={testId}
    >
      {children}
    </div>
  );
}
