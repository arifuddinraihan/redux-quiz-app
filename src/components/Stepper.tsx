import { Stepper, Step } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setActiveStep } from "../redux/features/stepper/stepperSlice";
import { ReactNode } from "react";

type TStepperProps = {
  steps: {
    value: number;
    name: string;
    component: ReactNode;
  }[];
};

export function DefaultStepper({ steps }: TStepperProps) {
  const { activeStep } = useAppSelector((state) => state.stepper);
  const dispatch = useAppDispatch();

  //   const mySteps = [
  //     {
  //       value: 0,
  //       name: "string 1",
  //       component: <div>Hello world 1</div>,
  //     },
  //     {
  //       value: 1,
  //       name: "string 2",
  //       component: <div>Hello world 2</div>,
  //     },
  //   ];

  return (
    <div className="w-full py-4 px-8">
      <Stepper placeholder={""} activeStep={activeStep}>
        {/* <Step
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
        </Step> */}
        {steps.map((step) => (
          <Step
            placeholder={""}
            className="px-9 w-fit cursor-pointer"
            onClick={() => dispatch(setActiveStep(step.value))}
          >
            {step.name}
          </Step>
        ))}
      </Stepper>

      <div>{steps[activeStep].component}</div>
    </div>
  );
}
