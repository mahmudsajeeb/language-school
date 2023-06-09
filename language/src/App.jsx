// import React, { useState, useEffect, useMemo } from 'react';
// import { useTransition, a } from '@react-spring/web';
// import shuffle from 'lodash.shuffle';

// import useMedia from './useMedia';
// import data from './data';

// function Masonry() {
//   const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2);
//   const [items, set] = useState(data);
  
//   useEffect(() => {
//     const t = setInterval(() => set(shuffle), 2000);
//     return () => clearInterval(t);
//   }, []);

//   const [heights, gridItems] = useMemo(() => {
//     let heights = new Array(columns).fill(0);
//     let gridItems = items.map((child, i) => {
//       const column = heights.indexOf(Math.min(...heights));
//       const x = (width / columns) * column;
//       const y = (heights[column] += child.height / 2) - child.height / 2;
//       return { ...child, x, y, width: width / columns, height: child.height / 2 };
//     });
//     return [heights, gridItems];
//   }, [columns, items, width]);

//   const transitions = useTransition(gridItems, {
//     key: (item) => item.css,
//     from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
//     enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
//     update: ({ x, y, width, height }) => ({ x, y, width, height }),
//     leave: { height: 0, opacity: 0 },
//     config: { mass: 5, tension: 500, friction: 100 },
//     trail: 25,
//   });

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//       {transitions((style, item) => (
//         <a.div style={style} key={item.css}>
//           <div
//             className="w-full h-64 bg-cover bg-center"
//             style={{ backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)` }}
//           ></div>
//         </a.div>
//       ))}
//     </div>
//   );
// }

// export default function App() {
//   return <Masonry />;
// }
