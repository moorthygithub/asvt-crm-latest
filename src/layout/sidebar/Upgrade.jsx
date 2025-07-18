import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Upgrade = ({ isCollapsed }) => {
  return (
    <>
      {!isCollapsed ? (
        <Box display={"flex"} alignItems="center" gap={2} sx={{ m: 3 }}>
          <>
            <span className="border-b-2 text-[#111C2D] text-sm font-[600] border-dashed border-pink-500">
              {" "}
              Updated On: 16-07-2025
            </span>
          </>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};
