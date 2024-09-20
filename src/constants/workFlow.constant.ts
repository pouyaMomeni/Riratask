import { Edge, Node } from "@xyflow/react";

export const initialNodes : Node[] = [{
    id : '1',
    data : {
      label : 'Company'
    },
    position : {x : 300 , y : 50},
    style: { background: '#022B3A', color: '#9FC490',fontWeight: 'bold' },
  },
  {
    id : '2',
    data : {
      label : 'Human Resources'
    },
    position : {x : 0 , y : 150},
    style: { background: '#022B3A', color: '#E1E5F2',fontWeight: 'bold' },
  },
  {
    id : '3',
    data : {
      label : 'Marketing'
    },
    position : {x : 200 , y : 150},
    style: { background: '#022B3A', color: '#E1E5F2',fontWeight: 'bold' },
  },
  {
    id : '4',
    data : {
      label : 'Sales'
    },
    position : {x : 400 , y : 150},
    style: { background: '#022B3A', color: '#E1E5F2',fontWeight: 'bold' },
  },
  {
    id : '5',
    data : {
      label : 'IT'
    },
    position : {x : 700 , y : 150},
    style: { background: '#022B3A', color: '#E1E5F2',fontWeight: 'bold' },
  },
  {
    id : '6',
    data : {
      label : 'Recruitment'
    },
    position : {x : -150 , y : 250},
    style: { background: '#4a6fa5', color: '#FFFFFF',fontWeight: 'bold' },
  },
  {
    id : '7',
    data : {
      label : 'Payroll'
    },
    position : {x : 50 , y : 250},
    style: { background: '#4a6fa5', color: '#FFFFFF',fontWeight: 'bold' },
  },
  {
    id : '8',
    data : {
      label : 'Digital Marketing'
    },
    position : {x : 120 , y : 350},
    style: { background: '#4a6fa5', color: '#FFFFFF',fontWeight: 'bold' },
  },
  {
    id : '9',
    data : {
      label : 'Social Media'
    },
    position : {x : 300 , y : 350},
    style: { background: '#4a6fa5', color: '#FFFFFF',fontWeight: 'bold' },
  },
  {
    id : '10',
    data : {
      label : 'Sales Team'
    },
    position : {x : 400 , y : 250},
    style: { background: '#4a6fa5', color: '#FFFFFF',fontWeight: 'bold' },
  },
  {
    id : '11',
    data : {
      label : 'Support'
    },
    position : {x : 570 , y : 250},
    style: { background: '#4a6fa5', color: '#FFFFFF',fontWeight: 'bold' },
  },
  {
    id : '12',
    data : {
      label : 'Development'
    },
    position : {x : 770 , y : 250},
    style: { background: '#4a6fa5', color: '#FFFFFF',fontWeight: 'bold' },
  },
  {
    id : '13',
    data : {
      label : 'Cybersecurity'
    },
    position : {x : 650 , y : 350},
    style: { background: '#4a6fa5', color: '#FFFFFF',fontWeight: 'bold' },
  },
];

export const initialEdges: Edge[] = [
  { id: 'e1', source: '1', target: '2', animated: true },
  { id: 'e2', source: '1', target: '3', animated: true },
  { id: 'e3', source: '1', target: '4', animated: true },
  { id: 'e4', source: '1', target: '5', animated: true },
  
  // Human Resources Sub-relations
  { id: 'e5', source: '2', target: '6', animated: true },
  { id: 'e6', source: '2', target: '7', animated: true },
  
  // Marketing Sub-relations
  { id: 'e7', source: '3', target: '8', animated: true },
  { id: 'e8', source: '3', target: '9', animated: true },
  
  // Sales Sub-relations
  { id: 'e9', source: '4', target: '10', animated: true },
  { id: 'e10', source: '4', target: '11', animated: true },
  
  // IT Sub-relations
  { id: 'e11', source: '5', target: '12', animated: true },
  { id: 'e12', source: '5', target: '13', animated: true },
];
