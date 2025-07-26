import { Card, CardContent, Typography, Button } from "@mui/material";
import DataDialog from "./DataDialogue";
import { useState } from "react";

const StatCard = ({ title, topData, fullData }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
     
<Card className="w-full shadow-md rounded-xl border border-gray-300 bg-gradient-to-r from-white to-gray-50 hover:shadow-xl transition-shadow">
  <CardContent className="pb-2 px-4">
    <Typography variant="h6" className="text-gray-900 font-extrabold pb-2 border-b border-gray-300 tracking-wide uppercase">
      {title}
    </Typography>

    <ul className="mt-3 space-y-2 text-sm text-gray-700">
      {topData.map((item, i) => (
        <li key={i} className="flex justify-between px-1 font-[500] hover:text-indigo-600 transition-colors">
          <span className="truncate">{item.name}</span>
          <span className="font-semibold text-right">{item.value}</span>
        </li>
      ))}
    </ul>

    <div className="mt-4 text-right">
      <Button
        variant="outlined"
        size="small"
        onClick={() => setOpen(true)}
        className="!text-indigo-600 !border-indigo-400 hover:!bg-indigo-50 transition-all"
      >
        Show More
      </Button>
    </div>
  </CardContent>
</Card>

      <DataDialog
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        data={fullData}
      />
    </>
  );
};

export default StatCard;
