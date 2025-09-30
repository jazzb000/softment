"use client"
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "../components/Input";
import { LoginButton } from "../components/LoginButton";
import { SoftmentLogo } from "../components/SoftmentLogo";
import { Footer } from "../components/Footer";


export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    console.log("Login attempt:", { email, password });
  };

  // 에러 메시지 정의 (재사용 가능)
  const errorMessages = {
    required: {
      email: "이메일 주소를 입력해주세요.",
      password: "비밀번호를 입력해주세요.",
    },
    invalid: {
      email: "올바른 메일 형식으로 입력해주세요.",
    },
  };

  // 이메일 검증 함수
  const validateEmail = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) {
      return errorMessages.required.email;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      return errorMessages.invalid.email;
    }
    return "";
  };

  // 비밀번호 검증 함수
  const validatePassword = (value: string) => {
    if (!value.trim()) {
      return errorMessages.required.password;
    }
    return "";
  };

  // 이메일 블러 처리
  const handleEmailBlur = () => {
    const error = validateEmail(email);
    setEmailError(error);
  };

  // 비밀번호 블러 처리
  const handlePasswordBlur = () => {
    const error = validatePassword(password);
    setPasswordError(error);
  };

  // 이메일 값 변경 시 에러 클리어
  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (emailError && value.trim()) {
      setEmailError("");
    }
  };

  // 비밀번호 값 변경 시 에러 클리어
  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (passwordError && value.trim()) {
      setPasswordError("");
    }
  };

  // 약관 목록 데이터
  // Footer 내부에서 자체 관리로 전환됨

  // 폼 유효성 (버튼 활성화 조건)
  const isEmailValid = validateEmail(email) === "";
  const isPasswordValid = password.trim().length > 0;
  const isFormValid = isEmailValid && isPasswordValid;

  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-start p-[0px] relative size-full"
      data-name="로그인"
    >
      <div className="box-border content-stretch flex flex-row gap-[10px] items-center justify-start p-[0px] relative shrink-0 w-full">
        <div className="basis-[0px] box-border content-stretch flex flex-col gap-[16px] grow items-center justify-center min-h-0 min-w-0 p-[0px] relative shrink-0">
          {/* Body */}
          <div
            className="box-border content-stretch flex flex-col items-start justify-start overflow-clip px-[16px] py-[60px] sm:px-[24px] sm:py-[80px] md:px-[16px] md:py-[100px] relative shrink-0 w-full max-w-[360px] sm:max-w-[448px] md:max-w-[448px] xl:max-w-[448px]"
            data-name="body"
          >
            {/* 로고 자리 */}
            <div
              className="bg-[#ffffff] box-border content-stretch flex flex-col h-[24.5px] items-start justify-center overflow-clip px-[0px] py-[0px] relative shrink-0 w-full"
              data-name="로고 자리"
            >
              {/* Softment 로고 */}
              <SoftmentLogo />
            </div>

            {/* 로그인 제목 */}
            <div
              className="box-border content-stretch flex flex-row h-[138px] items-start justify-start overflow-clip pb-[24px] pt-[40px] px-[0px] relative shrink-0 w-full"
              data-name="로그인"
            >
              <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[24px] text-left text-nowrap">
                <p className="block leading-[1.6] whitespace-pre">
                  로그인
                </p>
              </div>
            </div>

            {/* 폼 영역 */}
            <div className="box-border content-stretch flex flex-col gap-[40px] items-start justify-start p-[0px] relative shrink-0 w-full">
              {/* 이메일 입력 */}
              <div className="box-border content-stretch flex flex-col items-start justify-start p-[0px] relative shrink-0 w-full">
                {/* 이메일 주소 라벨 */}
                <div
                  className="box-border content-stretch flex flex-row gap-[10px] items-center justify-start px-[0px] py-[6px] relative shrink-0 w-full"
                  data-name="이메일 주소"
                >
                  <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[15px] text-left text-nowrap">
                    <p className="block leading-[1.6] whitespace-pre">
                      이메일 주소
                    </p>
                  </div>
                </div>
                {/* 이메일 입력 박스 */}
                <Input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  error={emailError}
                />
              </div>

              {/* 비밀번호 입력 */}
              <div className="box-border content-stretch flex flex-col items-start justify-start p-[0px] relative shrink-0 w-full">
                {/* 비밀번호 라벨 */}
                <div
                  className="box-border content-stretch flex flex-row items-center justify-start px-[0px] py-[6px] relative shrink-0 w-full"
                  data-name="비밀번호"
                >
                  <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[15px] text-left text-nowrap">
                    <p className="block leading-[1.6] whitespace-pre">
                      비밀번호
                    </p>
                  </div>
                </div>
                {/* 비밀번호 입력 박스 */}
                <Input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={handlePasswordBlur}
                  error={passwordError}
                />
              </div>

              {/* 버튼 영역 */}
              <div
                className="bg-[#ffffff] box-border content-stretch flex flex-col md:flex-row items-stretch md:items-center justify-start md:justify-between gap-[12px] overflow-clip pb-[24px] pt-[50px] px-[0px] relative shrink-0 w-full"
                data-name="button area"
              >
                {/* 로그인 버튼 (모바일: 전체 너비, 입력 높이와 동일) */}
                <LoginButton
                  onClick={handleLogin}
                  disabled={!isFormValid}
                  className="order-1 md:order-2 w-full h-[54px] md:w-auto"
                >
                  로그인
                </LoginButton>
                {/* 모바일 전용 회원가입 버튼 (로그인 버튼 스타일 적용) */}
                <LoginButton
                  onClick={() => router.push('/signin')}
                  className="order-2 md:hidden w-full h-[54px]"
                  backgroundColor="#F2F4F6"
                  hoverBackgroundColor="#001D3A2E"
                  textColor="#4e5968"
                  hoverTextColor="#4e5968"
                >
                  회원가입
                </LoginButton>
                {/* 모바일 전용 비밀번호 찾기 텍스트 버튼 (아래 중앙 배치) */}
                <div className="order-3 md:hidden box-border content-stretch flex items-center justify-center w-full mt-[20px] md:mt-0">
                  <Link href="/findpw" className="font-normal leading-[0] not-italic text-[#6b7684] text-[14px] hover:text-[#4e5968] transition-colors duration-[200ms] cursor-pointer">
                    <p className="block leading-[1.6] text-nowrap whitespace-pre">비밀번호 찾기</p>
                  </Link>
                </div>
                {/* 회원가입, 비밀번호찾기 버튼 (모바일: 버튼 아래 중앙 정렬) */}
                <div
                  className="hidden md:order-1 md:flex box-border content-stretch flex-row font-normal gap-[4px] items-center w-full md:w-auto justify-end md:justify-start leading-[0] not-italic p-[0px] relative shrink-0 text-[#6b7684] text-[14px] text-left text-nowrap"
                  data-name="회원가입, 비밀번호찾기 버튼"
                >
                  <Link href="/signin" className="relative shrink-0 hover:text-[#4e5968] transition-colors duration-[200ms] cursor-pointer">
                    <p className="block leading-[1.6] text-nowrap whitespace-pre">회원가입</p>
                  </Link>
                  <div className="relative shrink-0">
                    <p className="block leading-[1.6] text-nowrap whitespace-pre">{`| `}</p>
                  </div>
                  <Link href="/findpw" className="relative shrink-0 hover:text-[#4e5968] transition-colors duration-[200ms] cursor-pointer">
                    <p className="block leading-[1.6] text-nowrap whitespace-pre">비밀번호 찾기</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 푸터 */}
          <Footer />
        </div>
      </div>
    </div>
  );
}