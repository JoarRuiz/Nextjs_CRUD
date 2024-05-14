import TaskCard from "@/components/task-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import prisma from "@/lib/prisma"
import clsx from "clsx"

async function Homepage() {
  const tasks = await prisma.task.findMany()
  console.log(tasks)
  return (
    <div className="grid grid-cols-3 gap-4">
      {tasks.map(task => (
      <TaskCard task= {task} key={task.id} />
    ))}

    </div>
    
  )
}

export default Homepage