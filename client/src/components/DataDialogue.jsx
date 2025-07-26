import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";

const DataDialog = ({ open, onClose, title, data }) => (
  <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
    <DialogTitle>{title} – Top 50</DialogTitle>
    <DialogContent dividers>
      <ul className="text-sm space-y-2">
        {data.slice(0, 50).map((item, i) => (
          <li key={i} className="flex justify-between border-b pb-1">
            <span>{item.name}</span>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </DialogContent>
  </Dialog>
);

export default DataDialog;
