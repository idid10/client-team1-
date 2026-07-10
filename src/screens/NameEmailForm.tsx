import { useState } from "react";
import sprout from "../assets/sprout.png";
import Button from "../components/Button";
import InputField from "../components/InputField";

interface Props {
  onNext: () => void;
}

function NameEmailForm({ onNext }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const active = name.trim() !== "" && email.trim() !== "";

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[390px] flex-col bg-[#F7F8FA] px-6 pt-14 pb-8">
      <div className="mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#F7FBEF]">
        <img src={sprout} alt="sprout" className="h-[41px] w-[41px]" />
      </div>

      <h1 className="mt-7 text-center text-[24px] font-bold leading-[135%] text-[#2E2E2E]">
        {"\uB514\uC9C0\uD138 \uB514\uD1A1\uC2A4"}
        <br />
        {"\uC5B8\uC81C \uC2DC\uC791\uD560\uAE4C\uC694?"}
      </h1>

      <p className="mt-4 text-center text-[16px] leading-[170%] text-[#B7B7B7]">
        {"\uB9E4\uC77C\uC758 \uC624\uD504\uB77C\uC778 \uC77C\uC815\uC744 \uC124\uC815\uD558\uACE0"}
        <br />
        {"\uAC74\uAC15\uD55C \uB514\uC9C0\uD138 \uC2B5\uAD00\uC744 \uB9CC\uB4E4\uC5B4\uBD10\uC694."}
      </p>

      <div className="mt-auto flex flex-col gap-6">
        <InputField
          label={"\uC774\uB984"}
          name="name"
          value={name}
          onChange={setName}
          placeholder={"\uC774\uB984\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694"}
        />

        <InputField
          label={"\uC774\uBA54\uC77C"}
          name="email"
          value={email}
          onChange={setEmail}
          placeholder="ex) hello@example.com"
          type="email"
        />

        <Button active={active} onClick={onNext}>
          {"\uB2E4\uC74C"}
        </Button>
      </div>
    </div>
  );
}

export default NameEmailForm;
