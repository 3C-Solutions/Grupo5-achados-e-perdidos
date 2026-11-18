function ErrorBanner({ mensagem, onTentarNovamente }) {
  return (
    <div className="banner-erro" role="alert">
      <p>{mensagem}</p>
      {onTentarNovamente && (
        <button type="button" onClick={onTentarNovamente}>
          Tentar novamente
        </button>
      )}
    </div>
  )
}

export default ErrorBanner
