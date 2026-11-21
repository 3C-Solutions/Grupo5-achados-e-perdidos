export default function ItemCard({ item }) {
  return (
    <article className="item-card">
      <h2>{item.titulo}</h2>
      <p><strong>Local:</strong> {item.local}</p>
      <p><strong>Situação:</strong> {item.status === 'perdido' ? 'Perdido' : 'Achado'}</p>
    </article>
  )
}
