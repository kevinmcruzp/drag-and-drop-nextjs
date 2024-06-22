import { listCard } from "../interfaces/queueType"

export function Card ({card} : {card: listCard}) {
  return (
    <div 
      className="w-full h-32 bg-slate-600 p-2 rounded-md cursor-default font-medium text-sm" 
      onMouseEnter={e => {e.stopPropagation()}}
    >
        <p>{card?.title}</p>     
        <p>{card?.description}</p>     
    </div>
  )
}