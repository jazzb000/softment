"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Input } from '../components/Input'
import { LoginButton } from '../components/LoginButton'
import { Checkbox } from '../components/Checkbox'
import { SoftmentLogo } from "../components/SoftmentLogo";
import { Footer } from "../components/Footer";

export default function Signin() {
  
  // Footer 내부에서 자체 관리로 전환됨
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    referralCode: ''
  });
  
  const [agreements, setAgreements] = useState({
    required: false,
    optional: false
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const getFieldError = (field: string, value: string): string => {
    switch (field) {
      case 'email':
        if (!value) return '이메일을 입력해주세요.';
        if (!/\S+@\S+\.\S+/.test(value)) return '올바른 메일 형식으로 입력해주세요.';
        return '';
      case 'password':
        if (!value) return '새 비밀번호를 입력해주세요.';
        {
          const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
          if (!strongPasswordRegex.test(value)) return '최소 8자의 영문, 숫자, 특수문자를 입력해주세요.';
        }
        return '';
      case 'confirmPassword':
        if (!value) return '비밀번호를 입력해주세요.';
        if (value !== formData.password) return '비밀번호와 비밀번호 확인이 일치하지 않습니다.';
        return '';
      case 'name':
        if (!value) return '이름을 입력해주세요.';
        return '';
      case 'phone':
        if (!value) return '휴대폰 번호를 입력해주세요.';
        {
          const digitsOnly = value.replace(/\D/g, '');
          // 한국 휴대폰 번호: 10~11자리, 01로 시작 (예: 010-1234-5678)
          const koreanMobileRegex = /^01[016789]\d{7,8}$/;
          if (!koreanMobileRegex.test(digitsOnly)) {
            return '올바른 휴대폰 번호를 입력해주세요.';
          }
        }
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.email) {
      newErrors.email = '이메일을 입력해주세요';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다';
    }
    
    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요';
    } else {
      const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
      if (!strongPasswordRegex.test(formData.password)) {
        newErrors.password = '최소 8자의 영문, 숫자, 특수문자를 입력해주세요';
      }
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호 확인을 입력해주세요';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다';
    }
    
    if (!formData.name) {
      newErrors.name = '이름을 입력해주세요';
    }
    
    if (!formData.phone) {
      newErrors.phone = '휴대폰 번호를 입력해주세요';
    }
    
    if (!agreements.required) {
      newErrors.required = '필수 약관에 동의해주세요';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = () => {
    if (validateForm()) {
      alert('회원가입이 완료되었습니다!');
      console.log('회원가입 데이터:', { ...formData, agreements });
    }
  };

  const isFormValid = (() => {
    const emailOk = formData.email && /\S+@\S+\.\S+/.test(formData.email);
    const pwdOk = (() => {
      const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
      return formData.password && strongPasswordRegex.test(formData.password);
    })();
    const confirmOk = formData.confirmPassword && formData.password === formData.confirmPassword;
    const nameOk = !!formData.name;
    const phoneOk = (() => {
      const digitsOnly = formData.phone.replace(/\D/g, '');
      const koreanMobileRegex = /^01[016789]\d{7,8}$/;
      return !!digitsOnly && koreanMobileRegex.test(digitsOnly);
    })();
    const requiredOk = agreements.required;
    return emailOk && pwdOk && confirmOk && nameOk && phoneOk && requiredOk;
  })();

  // const isFormValid = formData.email && formData.password && formData.confirmPassword && 
  //                    formData.name && formData.phone && agreements.required;

  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-start p-[0px] relative size-full min-h-screen">
      {/* MainBody */}
      <div
        className="box-border content-stretch flex flex-col items-start justify-start overflow-clip px-[16px] py-[60px] sm:px-[24px] sm:py-[80px] md:px-[16px] md:py-[100px] relative shrink-0 w-full max-w-[360px] sm:max-w-[448px] md:max-w-[448px] xl:max-w-[448px]"
        data-name="body"
      >
        {/* LogoSection */}
        <div
          className="bg-[#ffffff] box-border content-stretch flex flex-col h-[24.5px] items-start justify-center overflow-clip p-[0px] relative shrink-0 w-full"
          data-name="로고 자리"
        >
          {/* LogoComponent */}
          <SoftmentLogo />
        </div>
        
        {/* TitleSection */}
        <div
          className="box-border content-stretch flex flex-row h-[138px] items-start justify-start overflow-clip pb-[24px] pt-[40px] px-[0px] relative shrink-0 w-full"
          data-name="로그인"
        >
          <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[24px] text-left text-nowrap">
            <p className="block leading-[1.6] whitespace-pre">회원가입</p>
          </div>
        </div>
        
        {/* SignUpForm */}
        <div className="box-border content-stretch flex flex-col gap-[40px] items-start justify-start p-[0px] relative shrink-0 w-full">
          {/* Email Field */}
          <div className="box-border content-stretch flex flex-col items-start justify-start p-[0px] relative shrink-0 w-full">
            {/* FieldLabel */}
            <div className="box-border content-stretch flex flex-row gap-[10px] items-center justify-start px-[0px] py-[6px] relative shrink-0 w-full">
              <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[15px] text-left text-nowrap">
                <p className="block leading-[1.6] whitespace-pre">이메일 주소</p>
              </div>
            </div>
            {/* InputField */}
            <Input
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              onBlur={() => {
                const err = getFieldError('email', formData.email);
                setErrors(prev => ({ ...prev, email: err }));
              }}
              error={errors.email}
            />
          </div>
          
          {/* Password Field */}
          <div className="box-border content-stretch flex flex-col items-start justify-start p-[0px] relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-row gap-[10px] items-center justify-start px-[0px] py-[6px] relative shrink-0 w-full">
              <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[15px] text-left text-nowrap">
                <p className="block leading-[1.6] whitespace-pre">비밀번호</p>
              </div>
            </div>
            <Input
              type="password"
              value={formData.password}
              onChange={handleInputChange('password')}
              onBlur={() => {
                const err = getFieldError('password', formData.password);
                setErrors(prev => ({ ...prev, password: err }));
              }}
              error={errors.password}
            />
          </div>
          
          {/* Confirm Password Field */}
          <div className="box-border content-stretch flex flex-col items-start justify-start p-[0px] relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-row gap-[10px] items-center justify-start px-[0px] py-[6px] relative shrink-0 w-full">
              <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[15px] text-left text-nowrap">
                <p className="block leading-[1.6] whitespace-pre">비밀번호 확인</p>
              </div>
            </div>
            <Input
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange('confirmPassword')}
              onBlur={() => {
                const err = getFieldError('confirmPassword', formData.confirmPassword);
                setErrors(prev => ({ ...prev, confirmPassword: err }));
              }}
              error={errors.confirmPassword}
            />
          </div>
          
          {/* Name Field */}
          <div className="box-border content-stretch flex flex-col items-start justify-start p-[0px] relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-row gap-[10px] items-center justify-start px-[0px] py-[6px] relative shrink-0 w-full">
              <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[15px] text-left text-nowrap">
                <p className="block leading-[1.6] whitespace-pre">이름</p>
              </div>
            </div>
            <Input
              type="text"
              value={formData.name}
              onChange={handleInputChange('name')}
              onBlur={() => {
                const err = getFieldError('name', formData.name);
                setErrors(prev => ({ ...prev, name: err }));
              }}
              error={errors.name}
            />
          </div>
          
          {/* Phone Field */}
          <div className="box-border content-stretch flex flex-col items-start justify-start p-[0px] relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-row gap-[10px] items-center justify-start px-[0px] py-[6px] relative shrink-0 w-full">
              <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[15px] text-left text-nowrap">
                <p className="block leading-[1.6] whitespace-pre">휴대폰 번호</p>
              </div>
            </div>
            <Input
              type="text"
              value={formData.phone}
              onChange={(v) => handleInputChange('phone')(v.replace(/\D/g, ''))}
              onBlur={() => {
                const err = getFieldError('phone', formData.phone);
                setErrors(prev => ({ ...prev, phone: err }));
              }}
              error={errors.phone}
            />
          </div>
          
          {/* ReferralCodeField */}
          <div className="box-border content-stretch flex flex-col items-start justify-start p-[0px] relative shrink-0 w-full">
            <div
              className="box-border content-stretch flex flex-row items-center justify-start leading-[0] not-italic px-[0px] py-[6px] relative shrink-0 text-left text-nowrap w-full"
              data-name="비밀번호"
            >
              <div className="font-medium relative shrink-0 text-[#4e5968] text-[15px]">
                <p className="block leading-[1.6] text-nowrap whitespace-pre">추천인 코드</p>
              </div>
              <div className="font-normal relative shrink-0 text-[#b0b8c1] text-[14px]">
                <p className="block leading-[1.6] text-nowrap whitespace-pre">(선택)</p>
              </div>
            </div>
            <Input
              type="text"
              value={formData.referralCode}
              onChange={handleInputChange('referralCode')}
            />
          </div>
          
          {/* AgreementSection */}
          <div
            className="box-border content-stretch flex flex-col gap-[16px] items-start justify-start p-[0px] relative shrink-0 w-full"
            data-name="동의 항목"
          >
            {/* Required Agreement CheckboxField */}
            <div className="box-border content-stretch flex flex-row gap-[16px] items-center justify-start p-[0px] relative shrink-0">
              <Checkbox
                checked={agreements.required}
                onToggle={() => setAgreements(prev => ({ ...prev, required: !prev.required }))}
              />
              <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[14px] text-left text-nowrap">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  className="hover:font-medium active:font-medium"
                >
                  <span className="align-middle">[필수] 개인정보 수집 및 이용동의</span>
                </a>
              </div>
            </div>
            
            {/* Optional Agreement */}
            <div
              className="box-border content-stretch flex flex-row gap-[16px] items-start justify-start p-[0px] relative shrink-0 w-full"
              data-name="선택 동의"
            >
              <div className="box-border content-stretch flex flex-row h-[24px] items-center justify-start p-[0px] relative shrink-0">
                <Checkbox
                  checked={agreements.optional}
                  onToggle={() => setAgreements(prev => ({ ...prev, optional: !prev.optional }))}
                />
              </div>
              <div
                className="box-border content-stretch flex flex-col font-normal items-start justify-start leading-[0] not-italic p-[0px] relative text-[#4e5968] text-[14px] text-left w-full"
                data-name="텍스트"
              >
                <div className="relative shrink-0 w-full">
                  <p className="block leading-[1.6] whitespace-pre-wrap">[선택] 새로운 기능 출시 안내를 받아보세요. 언제든 취소할 수 있어요.</p>
                </div>
                <div className="relative shrink-0 w-full">
                  <p className="block leading-[1.6]">(광고·마케팅 수신 동의)</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* ButtonArea */}
          <div
            className="bg-[#ffffff] box-border content-stretch flex flex-col md:flex-row items-stretch md:items-center justify-start md:justify-between gap-[12px] overflow-clip pb-[24px] pt-[50px] px-[0px] relative shrink-0 w-full"
            data-name="button area"
          >
            {/* SignUpButton (모바일 전체폭) */}
            <LoginButton
              onClick={handleSignUp}
              disabled={!isFormValid}
              className="order-1 md:order-2 w-full h-[54px] md:w-auto"
            >
              계정 만들기
            </LoginButton>

            {/* LoginLink (모바일: 버튼 아래 오른쪽 정렬) */}
            <div
              className="order-2 md:order-1 box-border content-stretch flex flex-row font-normal gap-[8px] items-center w-full md:w-auto justify-end md:justify-start leading-[0] not-italic p-[0px] relative shrink-0 text-left"
              data-name="회원가입, 비밀번호찾기 버튼"
            >
              <div className="relative shrink-0 text-[#4e5968] text-[14px]">
                <p className="block leading-[1.6]">이미 계정이 있으신가요?</p>
              </div>
              <Link href="/" className="relative shrink-0 text-[#3182f6] text-[16px] cursor-pointer">
                <p className="block leading-[1.6]">로그인</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* 푸터 */}
      <Footer />
    </div>
  );
}