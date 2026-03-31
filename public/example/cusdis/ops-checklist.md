# Cusdis automation ops checklist

## Before turning the workflow on

- Confirm the webhook URL resolves over HTTPS.
- Send one safe test comment and one spam-like comment.
- Check the Gemini credential and model quota.
- Verify the If node blocks anything except `NORMAL`.
- Confirm the HTTP Request node uses the right site and auth values.

## After publishing

- Watch the first five comments manually.
- Log parse failures from the normalization step.
- Keep a fast rollback path: disable the workflow or switch comments back to manual approval.
- Review false positives weekly and adjust the prompt contract carefully.
