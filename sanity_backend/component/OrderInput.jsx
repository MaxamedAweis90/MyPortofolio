// OrderInput.js
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const OrderInput = ({ items, onChange }) => {
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

    onChange(reorderedItems); // Call the onChange function with the new order
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="items">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ listStyle: 'none', padding: 0 }}
          >
            {items.map((item, index) => (
              <Draggable key={item._id} draggableId={item._id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      ...provided.draggableProps.style,
                      padding: '16px',
                      marginBottom: '8px',
                      backgroundColor: '#f9f9f9',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                    }}
                  >
                    {item.title}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default OrderInput;
