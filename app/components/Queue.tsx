'use client'

import { Draggable } from "react-beautiful-dnd";
import { Card } from "./Card";
import { listQueue } from "../interfaces/queueType";

export function Queue({queue, index} : {queue: listQueue, index: number}) {
    return (
      <Draggable draggableId={queue?.id} index={index}>
        {(provided, snapshot) => (
          <div
            className="flex flex-col gap-2 h-fit max-h-[calc(100vh-40px)] min-w-72 w-72 bg-slate-700 p-2 rounded-md cursor-grab text-pretty"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="flex h-20 text-center items-center justify-center">
              <h2 className="select-none font-medium text-white">{queue?.title}</h2>
            </div>

            <div className="flex flex-col overflow-y-auto gap-2 scrollbar">
              {queue?.cards?.map((card, index) => (
                <Card key={card?.id} card={card} />
              ))}

            </div>

            <button 
              className="text-center text-sm bg-slate-800 text-white w-full py-1"
            >
              CREATE CARD
            </button>
        </div>
        )}
      </Draggable>
    )
}