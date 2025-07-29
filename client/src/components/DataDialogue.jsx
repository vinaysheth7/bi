import { Dialog, DialogTitle, DialogContent } from "@mui/material";

const DataDialog = ({ open, onClose, title, sortedData, displayField }) => {


  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title} – Top 50</DialogTitle>
      <DialogContent dividers>
        <ul className="text-sm space-y-2">
          {sortedData.slice(0, 50).map((item, i) => (
            <li key={i} className="flex justify-between border-b pb-1">
              <span>{item[displayField]}</span>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default DataDialog;
