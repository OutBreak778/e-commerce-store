"use client";

import { Color, Size } from "@/types";
import React, { useState } from "react";
import { Button } from "../../../../../components/ui/Button";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "../../../../../components/ui/IconButton";
import Filter from "@/app/(routes)/category/[categoryId]/components/Filter";

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilter: React.FC<MobileFilterProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-3 lg:hidden">
        Filters <Plus className="w-5 h-5" />
      </Button>
      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="flex inset-0 z-40 fixed">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-[15rem] flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            <div className="p-5">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilter;
