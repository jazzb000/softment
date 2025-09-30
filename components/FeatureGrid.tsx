import type { GridColumns, GapSize, LayoutComponentProps } from '../types/layout';
import { getGridClasses, getGapClasses, cn } from '../utils/layoutHelpers';

interface FeatureGridProps extends LayoutComponentProps {
  columns?: GridColumns;
  gap?: GapSize;
}

/**
 * 재사용 가능한 피처 그리드 컴포넌트
 * 
 * @description 기능/서비스를 그리드 형태로 표시하는 표준 컴포넌트
 * 반응형을 고려하여 모바일에서는 1열, 데스크탑에서는 지정된 열 수로 표시
 * 
 * @param columns - 데스크탑에서의 열 수 (모바일은 항상 1열)
 * @param gap - 그리드 간격
 * 
 * @example
 * ```tsx
 * <FeatureGrid columns={2} gap="lg">
 *   <FeatureCard title="보증보험 면제" />
 *   <FeatureCard title="빠른 정산" />
 * </FeatureGrid>
 * ```
 */
export function FeatureGrid({ 
  children, 
  columns = 2, 
  gap = 'md',
  className = '',
  'data-testid': testId
}: FeatureGridProps) {
  return (
    <div 
      className={cn(
        'grid w-full',
        getGridClasses(columns),
        getGapClasses(gap),
        className
      )}
      data-testid={testId}
    >
      {children}
    </div>
  );
}
