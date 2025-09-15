const imgImage4 = "/images/lock.png";
import { useState } from 'react'
import { Input } from '../components/Input'
import { LoginButton } from '../components/LoginButton'
import { Footer } from "../components/Footer";

export default function Findpw() {
  // Footer 내부에서 자체 관리로 전환됨
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  const validateEmail = (value: string) => {
    if (!value.trim()) return "이메일을 입력해주세요."
    if (!/\S+@\S+\.\S+/.test(value)) return "올바른 메일 형식으로 입력해 주세요."
    return ""
  }
  const isEmailValid = validateEmail(email) === ""
  const isFormValid = isEmailValid
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-start p-0 relative size-full"
      data-name="비밀번호 찾기"
    >
      {/* Body */}
      <div
        className="box-border content-stretch flex flex-col gap-[40px] items-center justify-start overflow-clip px-[16px] sm:px-0 py-[100px] relative shrink-0 w-full max-w-[314px]"
        data-name="body"
      >
        {/* Icon */}
        <div className="bg-[#ffffff] overflow-clip relative rounded-[100px] shrink-0 size-[160px]" data-name="Icon">
          <div
            className="absolute bg-center bg-cover bg-no-repeat left-[-14.6px] size-[189.204px] top-[-18.77px]"
            data-name="image 4"
            style={{ backgroundImage: `url('${imgImage4}')` }}
          />
        </div>

        {/* Component - 로그인 */}
        <div
          className="box-border content-stretch flex flex-row items-start justify-start overflow-clip pb-0 pt-[40px] px-0 relative shrink-0 w-full"
          data-name="로그인"
        >
          <div className="basis-0 font-bold grow leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-[#333d4b] text-[32px] text-left">
            <p className="block mb-0">
              소프트먼트 계정의
              <br aria-hidden="true" />
              {`비밀번호를 `}
            </p>
            <p className="block">재설정합니다.</p>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
          data-name="bottom"
        >
          {/* Component2 - 이메일 입력 */}
          <div
            className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
            data-name="이메일 입력"
          >
            {/* Component1 - 이메일 주소 */}
            <div
              className="box-border content-stretch flex flex-row gap-[10px] items-center justify-start px-0 py-[6px] relative shrink-0 w-full"
              data-name="이메일 주소"
            >
              <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#4e5968] text-[15px] text-left text-nowrap">
                <p className="block leading-[1.6] whitespace-pre">임시 비밀번호를 받을 이메일 계정을 입력해주세요.</p>
              </div>
            </div>

            {/* Input */}
            <Input
              type="email"
              value={email}
              onChange={(v) => {
                setEmail(v)
                if (emailError) {
                  setEmailError(validateEmail(v))
                }
              }}
              onBlur={() => setEmailError(validateEmail(email))}
              error={emailError}
            />
          </div>

          {/* Component3 - 버튼 */}
          <div
            className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[32px] px-0 relative shrink-0 w-full"
            data-name="버튼"
          >
            <LoginButton className="w-full" disabled={!isFormValid} onClick={() => console.log('Find PW 다음 버튼 클릭')}>다음</LoginButton>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}