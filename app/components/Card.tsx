import { listCard } from "../interfaces/queueType"

export function Card ({card} : {card: listCard}) {
  return (
    <div 
      className="w-full min-h-32 bg-slate-600 p-2 rounded-md cursor-default font-medium text-sm" 
      onMouseEnter={e => {e.stopPropagation()}}
    >
        <p className="text-md font-bold">{card?.title}</p>
        <p className="text-xs font-medium">{card?.description}</p>  
    </div>
  )
}