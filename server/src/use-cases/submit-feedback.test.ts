import { SubmitFeedback } from './submit-feedback';


// spies 
const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

describe("Submit feedback", () => {
  const submitFeedback = new SubmitFeedback(
    { create: createFeedbackSpy },
    { sendMail: sendEmailSpy}
  );

  it("shold be able to submit a feedback", async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "example comment...",
      screenshot: "data:image/png/base64Screenshot64BitExample"
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendEmailSpy).toHaveBeenCalled();
  })

  it("shold not be able to submit feedback without type", async () => {
    await expect(submitFeedback.execute({
      type: "",
      comment: "example comment..."
    })).rejects.toThrow();
  })

  it("shold not be able to submit feedback without cokmment", async () => {
    await expect(submitFeedback.execute({
      type: "OTHER",
      comment: ""
    })).rejects.toThrow();
  })

  it("shold not be able to submit feedback with an invalid screenshot", async () => {
    await expect(submitFeedback.execute({
      type: "OTHER",
      comment: "example comment...",
      screenshot: "invalidFormat"
    })).rejects.toThrow();
  })

})
