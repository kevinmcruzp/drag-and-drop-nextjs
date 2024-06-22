'use client'

import { Draggable } from "react-beautiful-dnd";
import { Card } from "./Card";
import { listCard, listQueue } from "../interfaces/queueType";
import { useState } from "react";
import { v4 as uuidV4 } from 'uuid';

export function Queue({queue, index} : {queue: listQueue, index: number}) {
    const [cards, setCards] = useState<listCard[]>(queue?.cards)

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
              {cards?.map((card, index) => (
                <Card key={card?.id} card={card} />
              ))}

            </div>

            <button 
              onClick={() => {
                const newCard = {
                  id: uuidV4(),
                  title: `Card ${cards?.length + 1}`,
                  description: `Description ${cards?.length + 1}`
                }
                setCards([...cards, newCard])
              }}
              className="text-center text-sm bg-slate-800 text-white w-full py-1"
            >
              CREATE CARD
            </button>
        </div>
        )}
      </Draggable>
    )
}