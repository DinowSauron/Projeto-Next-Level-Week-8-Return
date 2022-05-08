import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";
import { Widget } from "../Widget";

interface ScreenshotButtonProps {
  onSheenshotHasTaken: (screenshot: string | null) => void;
  screenshot: string | null;
}

export function ScreenshotButton({onSheenshotHasTaken, screenshot}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);



  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!,{
      scale: 0.65,
      backgroundColor: "#ffffff",
      // windowWidth: 500
    });
    const base64image = canvas.toDataURL("image/png");

    onSheenshotHasTaken(base64image);
    setIsTakingScreenshot(false);
  }

  if(screenshot) {
    return (
      <button
        type="button"
        onClick={() => onSheenshotHasTaken(null)}
        className="p-1 w-10 h-10 mb-2 bg-zinc-800 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundSize: '2.5rem',
          backgroundPositionY: 'center',
          backgroundPositionX: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Trash weight="fill"/>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md mb-2 border-transparent hover:bg-zinc-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 focus:outline-none"
    >
      {isTakingScreenshot ? <Loading/> : <Camera className="w-6 h-6 text-zinc-100"/>}
    </button>
  )
}