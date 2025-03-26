import { useEffect, useState } from "react";
import debounce from "lodash/debounce";

const phoneBreakpoint = 500;
const phoneCols = 20;
const defaultGridCols = 30;

export const useGridSize = () => {
  const [cellSize, setCellSize] = useState(0);
  const [cols, setGridCols] = useState(defaultGridCols);
  const [rows, setGridRows] = useState(10);

  useEffect(() => {
    const calculateCellSize = debounce(() => {
      const newCols = window.innerWidth > phoneBreakpoint ? defaultGridCols : phoneCols;
      setGridCols(newCols);

      const newCellSize = window.innerWidth / newCols;
      setGridRows(Math.floor(window.innerHeight / newCellSize));
      setCellSize(newCellSize);
    }, 100);

    calculateCellSize();

    window.addEventListener("resize", calculateCellSize);
    return () => window.removeEventListener("resize", calculateCellSize);
  }, []);

  return { cellSize, cols, rows };
};