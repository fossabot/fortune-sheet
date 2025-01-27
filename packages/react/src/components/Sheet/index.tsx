import React, { useRef, useEffect, useContext, useCallback } from "react";
import {
  Canvas,
  updateContextWithCanvas,
  updateContextWithSheetData,
  groupValuesRefresh,
  hasGroupValuesRefreshData,
  handleGlobalWheel,
} from "@fortune-sheet/core";
import "./index.css";
import type { CellMatrix } from "@fortune-sheet/core";
import produce from "immer";
import WorkbookContext from "../../context";
import SheetOverlay from "../SheetOverlay";

type Props = {
  data: CellMatrix;
};

const Sheet: React.FC<Props> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const { context, setContext, refs } = useContext(WorkbookContext);

  useEffect(() => {
    function resize() {
      setContext(
        produce((draftCtx) => {
          updateContextWithSheetData(draftCtx, data);
          updateContextWithCanvas(
            draftCtx,
            canvasRef.current!,
            placeholderRef.current!
          );
        })
      );
    }
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [data, setContext]);

  useEffect(() => {
    setContext(
      produce((draftCtx) => updateContextWithSheetData(draftCtx, data))
    );
  }, [context.config?.rowlen, context.config?.columnlen, data, setContext]);

  useEffect(() => {
    setContext(
      produce((draftCtx) =>
        updateContextWithCanvas(
          draftCtx,
          canvasRef.current!,
          placeholderRef.current!
        )
      )
    );
  }, [setContext]);

  useEffect(() => {
    if (hasGroupValuesRefreshData()) {
      setContext(
        produce((draftCtx) => {
          groupValuesRefresh(draftCtx);
        })
      );
    }
  }, [context.luckysheetfile, context.currentSheetIndex, setContext]);

  useEffect(() => {
    const tableCanvas = new Canvas(canvasRef.current!, context);
    tableCanvas.drawMain({
      scrollHeight: context.scrollTop,
      scrollWidth: context.scrollLeft,
    });
    tableCanvas.drawColumnHeader(context.scrollLeft);
    tableCanvas.drawRowHeader(context.scrollTop);
  }, [context]);

  const onWheel = useCallback(
    (e: WheelEvent) => {
      setContext(
        produce((draftCtx) => {
          handleGlobalWheel(
            draftCtx,
            e,
            refs.globalCache,
            refs.scrollbarX.current!,
            refs.scrollbarY.current!
          );
        })
      );
    },
    [refs.globalCache, refs.scrollbarX, refs.scrollbarY, setContext]
  );

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener("wheel", onWheel);
    return () => {
      container?.removeEventListener("wheel", onWheel);
    };
  }, [onWheel]);

  return (
    <div ref={containerRef} className="fortune-sheet-container">
      {/* this is a placeholder div to help measure the empty space between toolbar and footer, directly measuring the canvas element is inaccurate, don't know why */}
      <div ref={placeholderRef} className="fortune-sheet-canvas-placeholder" />
      <canvas className="fortune-sheet-canvas" ref={canvasRef} />
      <SheetOverlay />
    </div>
  );
};

export default Sheet;
