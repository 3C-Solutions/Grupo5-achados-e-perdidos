function ItemCard({ item }) {
  return (
    <li className="item-card">
      <div className="item-card-topo">
        <h2>{item.titulo}</h2>
        <span className={`status status-${item.status}`}>{item.status}</span>
      </div>
      <p className="item-descricao">{item.descricao}</p>
      <p className="item-local">{item.local}</p>
    </li>
  )
}

export default ItemCard
