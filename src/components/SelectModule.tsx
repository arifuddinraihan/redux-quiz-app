import { Select, Option, Spinner } from "@material-tailwind/react";
import { useAppDispatch } from "../redux/hooks";
import { setActiveStep } from "../redux/features/stepper/stepperSlice";
import { useGetAllModulesQuery } from "../redux/features/module/moduleApi";
import { setSelectModule } from "../redux/features/module/moduleSlice";

export function SelectModule() {
  const dispatch = useAppDispatch();
  const { data: modules, isLoading } = useGetAllModulesQuery("");
  if (isLoading) {
    return (
      <div className="flex justify-center h-full">
        <Spinner />
      </div>
    );
  }
  console.log(modules);

  return (
    <div className="w-72">
      <Select
        onChange={(value) => {
          const moduleTitle = modules.data.find(
            (module) => module._id === value
          ).title;
          dispatch(
            setSelectModule({
              moduleTitle,
              moduleId: value,
            })
          );
          dispatch(setActiveStep(1));
        }}
        placeholder={""}
        label="Select Module"
      >
        {/* <Option value="module">Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option> */}
        {modules?.data.map((module) => (
          <Option value={module._id}>{module.title}</Option>
        ))}
      </Select>
    </div>
  );
}
