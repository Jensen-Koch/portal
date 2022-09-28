import { useCallback, useState } from 'react'
import '../../styles/flow.css'
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Controls, Background } from 'react-flow-renderer'

import initialNodes from './nodes.js'
import initialEdges from './edges.js'

function Flow() {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  )
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  )
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  )

  return (
    <div className="flow-container">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls/>
        <Background/>
      </ReactFlow>
    </div>
  )
}

export default Flow
