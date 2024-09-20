import { FC, useCallback, useState } from "react";
import { ReactFlow, Background, Controls, useNodesState, useEdgesState, Connection, addEdge, MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { initialEdges, initialNodes } from "../constants/workFlow.constant";
import { v4 as uuidv4 } from 'uuid';
import { IoWarningOutline } from "react-icons/io5";


interface Props {};


const Main : FC<Props> = () => {

    
  const [nodes,setNodes,onNodesChange] = useNodesState(initialNodes);
  const [edges,setEdges,onEdgesChange] = useEdgesState(initialEdges);
  const [nodeName, setNodeName] = useState('');
  const [error, setError] = useState('');
  
  // for connecting Nodes to each other
  const onConnect = useCallback((connection : Connection)=>{
    const edge = {
      ...connection,
      animated: true,
      id: uuidv4(),
    };
    setEdges((prevEdges) => addEdge({ ...edge, animated: true }, prevEdges));
  },[]);


  const addNode = () => {
    if (!nodeName.trim()) {
      setError('Node name cannot be empty.');
      return;
    }
    const newNode = {
      id: uuidv4(), // unique id
      data: { label: nodeName },
      position: { x: 0, y: 0}, 
      style: { background: '#004e98', color: '#ebebeb',fontWeight: 'bold' },
    };
    setNodes((nds) => [...nds, newNode]);
    setNodeName(''); 
    setError(''); 
  };

  
  return(
    <div className="w-full h-screen flex justify-center items-center bg-custom-radial-gradient-3 p-4 rounded gap-11">
        <div className="flex flex-col gap-5 w-[20%]">
          <div className="flex flex-row items-center gap-1">
          <IoWarningOutline className="text-slate-400" />
          <p className="text-sm text-slate-400 font-semibold">You can add a node here by typing its name</p>
          </div>
          <div className="w-full ">
            <div className="relative">
              <input
                className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                type="text"
                value={nodeName}
                onChange={(e) => setNodeName(e.target.value)}
              />
              <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                Type Here...
              </label>
            </div>
          </div>
          <button onClick={addNode} className="rounded-md  border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-400 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Add Node
          </button>
        </div>
        <div className="w-[800px] h-[600px] flex">
        <ReactFlow 
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange} 
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        >
            <Background />
            <Controls />
            <MiniMap/>
        </ReactFlow>
        </div>
    </div>
  )
}

export default Main;