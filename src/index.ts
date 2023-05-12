// Union types ... one type or other type
// Intersection types ...one type and other type

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
