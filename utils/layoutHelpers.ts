/**
 * 레이아웃 관련 유틸리티 함수들
 * 
 * @description 레이아웃 컴포넌트에서 사용되는 공통 로직들을 정의합니다.
 * 중복 코드를 줄이고 일관성을 보장하기 위해 유틸리티로 분리했습니다.
 */

import type { SpacingVariant, ContainerVariant, GridColumns, GapSize } from '../types/layout';

/**
 * 간격 변형에 따른 CSS 클래스를 반환합니다
 */
export function getSpacingClasses(spacing: SpacingVariant): string {
  const spacingMap: Record<SpacingVariant, string> = {
    none: 'py-0',
    sm: 'py-8 lg:py-12',
    md: 'py-12 lg:py-16', 
    lg: 'py-16 lg:py-20',
    xl: 'py-20 lg:py-24'
  };
  
  return spacingMap[spacing];
}

/**
 * 컨테이너 변형에 따른 최대 폭 CSS 클래스를 반환합니다
 */
export function getContainerMaxWidth(variant: ContainerVariant): string {
  const maxWidthMap: Record<ContainerVariant, string> = {
    default: 'max-w-7xl',
    narrow: 'max-w-4xl', 
    wide: 'max-w-none'
  };
  
  return maxWidthMap[variant];
}

/**
 * 그리드 열 수에 따른 CSS 클래스를 반환합니다
 */
export function getGridClasses(columns: GridColumns): string {
  const gridMap: Record<GridColumns, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 lg:grid-cols-2', 
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };
  
  return gridMap[columns];
}

/**
 * 간격 크기에 따른 CSS 클래스를 반환합니다
 */
export function getGapClasses(gap: GapSize): string {
  const gapMap: Record<GapSize, string> = {
    sm: 'gap-4 lg:gap-6',
    md: 'gap-6 lg:gap-8', 
    lg: 'gap-8 lg:gap-12'
  };
  
  return gapMap[gap];
}

/**
 * CSS 클래스들을 안전하게 결합합니다
 * 
 * @example
 * ```ts
 * cn('bg-blue-500', 'text-white', someCondition && 'hover:bg-blue-600')
 * // => 'bg-blue-500 text-white hover:bg-blue-600'
 * ```
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}
