'use client'
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Queue } from "./components/Queue";
import {dataQueue} from "./utils/queueData";
import { useEffect, useState } from "react";
import { listQueue } from "./interfaces/queueType";

export default function Home() {

  const [queues, setQueues] = useState<listQueue[]>(dataQueue)
  const dateNow = new Date()
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // check if window is available because the code is running on the server
    if (typeof window !== "undefined") {
      setIsBrowser(true);
    }

    setQueues(dataQueue)
  }, []);

  return (
    <main className="h-screen w-full bg-black overflow-hidden">
      <DragDropContext 
        onDragEnd={(result) => {
          // do nothing
          const { destination, source, draggableId } = result;

          if(!destination) return

          if(destination.droppableId === source.droppableId && destination.index === source.index) return
          console.log(source)

          const queue = queues[source.index]
          const newQueues = Array.from(queues)
          newQueues.splice(source.index, 1)
          newQueues.splice(destination.index, 0, queue)
          setQueues(newQueues)
          
        }}
        onDragStart={(result) => {
          // do nothing
          console.log(' onDragStart')
        }}
        onDragUpdate={() => {
          // do nothing
          console.log(' onDragUpdate')
        }}
      >
        {isBrowser && (
          <Droppable droppableId={`droppable-${dateNow}`} direction="horizontal">
          {(provided) => (
            <div 
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex p-2 gap-2 h-full w-full overflow-x-auto scrollbar"
            >
              {queues?.map((queue, index) => (
                <Queue key={queue?.id} queue={queue} index={index}/>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        )}
      </DragDropContext>
    </main>
  );
}
