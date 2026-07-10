<<<<<<< HEAD
import Button from "./Button";
import TimeCard, { type TimeValue } from "./TimeCard";

interface EditDetoxTimesModalProps {
  sleepTime: TimeValue;
  wakeTime: TimeValue;
  onChangeSleepTime: (value: TimeValue) => void;
  onChangeWakeTime: (value: TimeValue) => void;
  onClose: () => void;
=======
import Button from './Button'
import TimeCard, { type TimeValue } from './TimeCard'

interface EditDetoxTimesModalProps {
  sleepTime: TimeValue
  wakeTime: TimeValue
  onChangeSleepTime: (value: TimeValue) => void
  onChangeWakeTime: (value: TimeValue) => void
  onClose: () => void
>>>>>>> f65e8f19753e759f8bdc1868fd123e61285d70d1
}

function EditDetoxTimesModal({
  sleepTime,
  wakeTime,
  onChangeSleepTime,
  onChangeWakeTime,
  onClose,
}: EditDetoxTimesModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
<<<<<<< HEAD
      style={{ background: "rgba(31, 31, 31, 0.60)" }}
=======
      style={{ background: 'rgba(31, 31, 31, 0.60)' }}
>>>>>>> f65e8f19753e759f8bdc1868fd123e61285d70d1
    >
      <div className="w-full max-w-[390px] rounded-t-3xl bg-white px-4 pb-8 pt-3">
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-[#E5E5E5]" />

        <div className="flex flex-col gap-4">
          <TimeCard
            icon="lower"
<<<<<<< HEAD
            label={"\uB514\uD1A1\uC2A4 \uC2DC\uC791 \uC2DC\uAC04"}
=======
            label="디톡스 시작 시간"
>>>>>>> f65e8f19753e759f8bdc1868fd123e61285d70d1
            value={sleepTime}
            onChange={onChangeSleepTime}
          />
          <TimeCard
            icon="raise"
<<<<<<< HEAD
            label={"\uB514\uD1A1\uC2A4 \uC885\uB8CC \uC2DC\uAC04"}
=======
            label="디톡스 종료 시간"
>>>>>>> f65e8f19753e759f8bdc1868fd123e61285d70d1
            value={wakeTime}
            onChange={onChangeWakeTime}
          />
        </div>

        <div className="mt-5">
          <Button active onClick={onClose}>
<<<<<<< HEAD
            {"\uC218\uC815 \uC644\uB8CC"}
=======
            수정 완료
>>>>>>> f65e8f19753e759f8bdc1868fd123e61285d70d1
          </Button>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
}

export default EditDetoxTimesModal;
=======
  )
}

export default EditDetoxTimesModal
>>>>>>> f65e8f19753e759f8bdc1868fd123e61285d70d1
