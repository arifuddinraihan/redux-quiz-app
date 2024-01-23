import { Stepper, Step } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setActiveStep } from "../redux/features/stepper/stepperSlice";

export function DefaultStepper() {
  const { activeStep } = useAppSelector((state) => state.stepper);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full py-4 px-8">
      <Stepper placeholder={""} activeStep={activeStep}>
        <Step
          placeholder={""}
          className="px-9 w-fit cursor-pointer"
          onClick={() => dispatch(setActiveStep(0))}
        >
          Quiz List
        </Step>
        <Step
          placeholder={""}
          className="px-9 w-fit cursor-pointer"
          onClick={() => dispatch(setActiveStep(1))}
        >
          Add Quiz
        </Step>
      </Stepper>
    </div>
  );
}
