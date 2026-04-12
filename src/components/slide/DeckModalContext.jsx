import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import MarkdownContent from './MarkdownContent';
import CodeSurface from './CodeSurface';

const DeckModalContext = createContext(null);

function DeckModal({ modal, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const handleCopy = async () => {
    if (!modal.content) return;
    try {
      await navigator.clipboard.writeText(modal.content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="deck-modal-backdrop" data-ui-modal="open" onClick={onClose} role="presentation">
      <div
        aria-modal="true"
        className="deck-modal-dialog"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="deck-modal-header">
          <div className="deck-modal-copy">
            {modal.kicker ? <div className="deck-modal-kicker">{modal.kicker}</div> : null}
            <h3 className="deck-modal-title">{modal.title}</h3>
            {modal.description ? <p className="deck-modal-description">{modal.description}</p> : null}
          </div>
          <div className="deck-modal-actions">
            {modal.renderMode === 'code' && modal.content ? (
              <button className="deck-modal-button deck-modal-button-accent" onClick={handleCopy} type="button">
                {copied ? 'Copied' : 'Copy'}
              </button>
            ) : null}
            <button className="deck-modal-button" onClick={onClose} type="button">
              Close
            </button>
          </div>
        </div>

        <div className="deck-modal-body">
          {modal.language ? <div className="deck-modal-chip">{modal.language}</div> : null}

          {modal.renderMode === 'image' ? (
            <div className="deck-modal-image-frame">
              <img alt={modal.alt || modal.title} src={modal.src} />
            </div>
          ) : null}

          {modal.renderMode === 'markdown' && modal.content ? (
            <MarkdownContent className="deck-modal-markdown" content={modal.content} />
          ) : null}

          {modal.renderMode === 'custom' ? modal.children : null}

          {(modal.renderMode === 'code' || (!modal.renderMode && modal.content)) && modal.content ? (
            <CodeSurface className="deck-modal-code" content={modal.content} language={modal.language} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function DeckModalProvider({ children }) {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = useCallback((modal) => {
    setActiveModal(modal);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  const value = useMemo(() => ({
    activeModal,
    closeModal,
    openModal,
  }), [activeModal, closeModal, openModal]);

  return (
    <DeckModalContext.Provider value={value}>
      {children}
      {activeModal && typeof document !== 'undefined'
        ? createPortal(<DeckModal modal={activeModal} onClose={closeModal} />, document.body)
        : null}
    </DeckModalContext.Provider>
  );
}

export function useDeckModal() {
  return useContext(DeckModalContext);
}
