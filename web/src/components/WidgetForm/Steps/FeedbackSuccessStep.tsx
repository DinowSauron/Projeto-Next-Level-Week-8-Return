import { CloseButton } from "../../CloseButton";
import SuccessImageUrl from "../../../assets/success.svg"

interface FeedbackSuccessProps {
  onFeedbackRestartRequested: () => void;
}


export function FeedbackSuccessStep({onFeedbackRestartRequested}: FeedbackSuccessProps) {

  return (
    <>
      <header>
        <CloseButton/>
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={SuccessImageUrl} alt="Feedback Enviado com sucesso" />

        <span className="text-xl mt-2">
          Agradecemos o seu Feedback!
        </span>

        <button
          type="button"
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
          Enviar Outro Feedback
        </button>
      </div>

    </>
  );
}
