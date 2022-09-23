import MaterialDialog from "@mui/material/Dialog";
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { ReactNode } from "react";

interface Props {
  show: boolean;
  title: string;
  children?: ReactNode;
  onClose: (e: any) => void;
}

export function Dialog({ show, title, children, onClose }: Props) {
  if (!show) {
    return null;
  }

  return (
    <MaterialDialog
      tabIndex={-1}
      open={show}
      onClose={onClose}
    >
    <DialogTitle>Subscribe</DialogTitle>
    <DialogContent>
    {children}
    </DialogContent>
      {/* <div className="flex justify-between items-center border-b p-6 text-xl">
        <h6 className="text-xl font-bold">{title}</h6>
        <button type="button" onClick={onClose}>
          ✖
        </button>
      </div>
      <div className="flex justify-between items-center p-6">{children}</div> */}
    </MaterialDialog>
  );
}
