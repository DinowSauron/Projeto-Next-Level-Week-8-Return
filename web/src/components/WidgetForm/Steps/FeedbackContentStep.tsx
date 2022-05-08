import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { api } from "../../../lib/api";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({feedbackType, onFeedbackSent, onFeedbackRestartRequested}: FeedbackContentProps) {
  
  const [screenshot, setScreenshot] = useState<null | string>(null);
  const [comment, setComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const feedbackTypeInfo = feedbackTypes[feedbackType];



  async function handleSubmitFeedback(e: FormEvent) {
    if(isSendingFeedback) return;

    setIsSendingFeedback(true);
    e.preventDefault();

    await api.post("/feedbacks", {
      type: feedbackType,
      comment,
      screenshot
    });

    onFeedbackSent();
    setIsSendingFeedback(false);
  }

  return (
    <>
    <header>

      <button 
        onClick={onFeedbackRestartRequested}
        className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
      >
        <ArrowLeft weight="bold" className="w-4 h-4"/>
      </button>

      <span className="text-xl leading-6 flex items-center gap-2">
        <img 
          src={feedbackTypeInfo.image.source} 
          alt={feedbackTypeInfo.image.alt} 
          className="w-6 h-6"
        />
        {feedbackTypeInfo.title}
      </span>

      <CloseButton/>
    </header>
    <form className="mt-4 w-full" onSubmit={handleSubmitFeedback}>
      <textarea 
        onChange={event => setComment(event.target.value)}
        className="min-w-[304px] w-full min-h-[112px] text-sm text-zinc-100 placeholder-zinc-400 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin overflow-hidden"
        placeholder="Conte com detalhes o que está acontecendo..."
      />

      <footer className="flex gap-2 mt-2">
        <ScreenshotButton 
          screenshot={screenshot}
          onSheenshotHasTaken={setScreenshot}
        />

        <button
          type="submit"
          disabled={!comment || isSendingFeedback}
          className="p-2 bg-brand-500 rounded-md mb-2 border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
        >
          {isSendingFeedback ? (
            <Loading/>
          ): "Enviar Feedback"}
        </button>
      </footer>
    </form>
    </>
  );
}