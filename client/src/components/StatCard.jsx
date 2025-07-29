import { useState } from "react";
import { Card, CardContent, Typography, Button, Select, MenuItem } from "@mui/material";
// import DataDialog from "./DataDialog";
import DataDialog from "./DataDialogue"; // Adjust the import path as necessary

const StatCard = ({ title, fullData, displayField }) => {
  const [open, setOpen] = useState(false);
  const [sortType, setSortType] = useState("default");

  // Sorting logic for topData
  const sortedData = [...fullData].sort((a, b) => {
    const valA = a[displayField];
    const valB = b[displayField];

    if (sortType === "asc") return valA > valB ? 1 : -1;
    if (sortType === "desc") return valA < valB ? 1 : -1;
    return 0;
  });

  let topData = sortedData.slice(0, 10);

  return (
    <>
      <Card className="w-full shadow-md rounded-xl border border-gray-300 bg-gradient-to-r from-white to-gray-50 hover:shadow-xl transition-shadow">
        <CardContent className="pb-2 px-4">
          <div className="flex justify-between items-center">
            <Typography variant="h6" className="text-gray-900 font-extrabold pb-2 border-b border-gray-300 tracking-wide uppercase">
              {title}
            </Typography>
            <Select
              size="small"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="ml-4 text-sm"
            >
              <MenuItem value="default">Sort</MenuItem>
              <MenuItem value="asc">Asc</MenuItem>
              <MenuItem value="desc">Desc</MenuItem>
            </Select>
          </div>

          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            {topData.map((item, i) => (
              <li key={i} className="flex justify-between px-1 font-[500] hover:text-indigo-600 transition-colors">
                <span className="truncate">{item[displayField] || "—"}</span>
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
        sortedData={sortedData}
        displayField={displayField}
        sortType={sortType}
      />
    </>
  );
};

export default StatCard;
