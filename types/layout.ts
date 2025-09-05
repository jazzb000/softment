/**
 * 레이아웃 관련 공통 타입 정의
 * 
 * @description 프로젝트 전체에서 사용되는 레이아웃 관련 타입들을 정의합니다.
 * 일관성과 타입 안전성을 보장하기 위해 중앙화된 타입 관리를 제공합니다.
 */

/** 반응형 간격 변형 타입 */
export type SpacingVariant = 'none' | 'sm' | 'md' | 'lg' | 'xl';

/** 컨테이너 폭 변형 타입 */
export type ContainerVariant = 'default' | 'narrow' | 'wide';

/** 그리드 열 수 타입 */
export type GridColumns = 1 | 2 | 3 | 4;

/** 간격 크기 타입 */
export type GapSize = 'sm' | 'md' | 'lg';

/** 섹션 ID 타입 - 페이지 내 앵커 링크용 */
export type SectionId = 
  | 'hero'
  | 'key-features' 
  | 'pricing'
  | 'payment-fees'
  | 'international-fees'
  | 'contact'
  | 'faq';

/** 기본 컴포넌트 props 인터페이스 */
export interface BaseComponentProps {
  /** 추가 CSS 클래스 */
  className?: string;
  /** 테스트 ID */
  'data-testid'?: string;
}

/** 레이아웃 컴포넌트 공통 props */
export interface LayoutComponentProps extends BaseComponentProps {
  /** 자식 컴포넌트 */
  children: React.ReactNode;
}
