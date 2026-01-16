import { Toaster } from "sonner";

const CustomToaster: React.FC = () => {
  return (
    <Toaster
      position="top-center"
      offset={114}
      visibleToasts={3}
      toastOptions={{
        duration: 2000,
        classNames: {
          toast:
            "!backdrop-blur-md !rounded-2xl !border-0 !bg-transparent !text-center !flex !justify-center !px-6 !gap-3 !w-80 md:!w-80 lg:!w-100 lg:!w-132.75",
          success:
            "!bg-white/25 !text-white !text-base !leading-7.5 text-center !flex !justify-center !px-6 !gap-3 lg:!w-132.75",
          error:
            "!bg-white !text-black !text-base !leading-7.5 text-center !flex !justify-center !px-6 !gap-3 lg:!w-132.75",
        },
      }}
    />
  );
};

export default CustomToaster;
