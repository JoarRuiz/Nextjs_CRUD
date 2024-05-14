import clsx from "clsx"
import { Button, buttonVariants } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "@/components/ui/badge"
import { Task } from "@prisma/client"
import { TaskButtonDelete } from "./task-button-delete";
import Link from "next/link"

function TaskCard({task}: {task:Task}) {
  return (
    <Card key={task.id}>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle>
          {task.nombre}
          </CardTitle>
          <Badge className={
            clsx({
              "bg-red-600": task.prioridad === "Alto",
              "bg-yellow-600": task.prioridad === "Medio",
              "bg-green-600": task.prioridad === "Bajo",
              "bg-blue-600": task.prioridad === "Urgente",
            })

          }
          
          >
            {task.prioridad}
          </Badge>
        </CardHeader>
        <CardContent>
          <p>
            {task.descripcion}
          </p>
          <span className="text-slate-600">{new Date(task.createdAt).toLocaleDateString()}</span>
        </CardContent>
        <CardFooter className="flex gap-x-2 justify-end">
        <TaskButtonDelete taskId={task.id} />
        <Link
            href={`/tasks/${task.id}/edit`}
            className={buttonVariants({ variant: "secondary" })}
          >
            Edit
          </Link>
        </CardFooter>
      </Card>
  )
}

export default TaskCard