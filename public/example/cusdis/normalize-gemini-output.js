export function normalizeGeminiOutput(rawText) {
  try {
    const parsed = JSON.parse(rawText);
    return {
      classification: parsed.classification || 'REVIEW',
      reason: parsed.reason || 'Missing reason',
      replyDraft: parsed.replyDraft || '',
      error: null,
    };
  } catch (error) {
    return {
      classification: 'REVIEW',
      reason: 'Model returned invalid JSON',
      replyDraft: '',
      error: error instanceof Error ? error.message : 'Unknown parse error',
    };
  }
}
